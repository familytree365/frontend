<template>
  <div>
    <loading
      :active="false"
      :color="color"
      :background-color="backgroundColor"
    />

    <v-select
      label="name"
      v-model="selected_option"
      :reduce="person => person.id"
      :options="persons"
      @input="setSelected"
    />

    <div id="tree"></div>

    <button id='saveButton'>Export my PNG</button>
  </div>
</template>
<script>
import * as d3Base from 'd3'
import {coordQuad, dagConnect, decrossOpt, layeringSimplex, sugiyama} from 'd3-dag'
import d3Tip from 'd3-tip'
import vSelect from 'vue-select'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import gedcom from '@/static/gedcom.json'

const d3 = Object.assign({}, d3Base, {tip: d3Tip()})

export default {
  layout: 'auth',

  components: {
    vSelect,
    Loading
  },

  data: () => ({
    persons: [],
    selected_option: null,
    data: {},
    isLoading: true,
    fullPage: true,
    color: '#4fcf8d',
    backgroundColor: '#ffffff',
  }),

  mounted() {
    Array.prototype.remove = function () {
      let what, a = arguments, L = a.length, ax

      while (L && this.length) {
        what = a[--L];

        while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1)
        }
      }

      return this
    };

    // this.fetchdata()
  },
  async created() {
    const response = await this.$axios.$get("/api/person")

    this.persons = response
  },
  methods: {
    async setSelected(value) {
      this.isLoading = true

      const params = {
        start_id: value,
      }

      try {
        const response = await this.$axios
          .$get("/api/pedigree/show", {params})

        this.data = gedcom

        this.data.links = this.data.links
          .map((item) => item.map(childItem => childItem.toString()))

        d3.selectAll("#tree")
          .selectAll('svg').remove()

        this.isLoading = false

        setTimeout(this.generate, 1000)
      } catch {

      }

      this.isLoading = false
    },

    async fetchdata() {
      this.isLoading = true

      try {
        const response = await this.$axios.$get("/api/pedigree/show")
        this.data = response

        this.isLoading = false

        this.generate()
      } catch {

      }

      this.isLoading = false
    },

    generate() {
      // mark unions
      Object.keys(this.data.unions)
        .forEach(key => this.data.unions[key].isUnion = true)

      // mark persons
      Object.keys(this.data.persons)
        .forEach(key => this.data.persons[key].isUnion = true)

      let margin = {top: 20, right: 0, bottom: 30, left: 0},
        width = 1500 - margin.left - margin.right,
        height = 800 - margin.top - margin.bottom

      // Set the dimensions and margins of the diagram
      let screen_width = width,
        screen_height = height

      // initialize panning, zooming
      let zoom = d3.zoom()
        .on("zoom", (event, d) => g.attr("transform", event.transform))
      // initialize tooltips
      let tip = d3.tip
        .attr('class', 'd3-tip')
        .direction('e')
        .offset([0, 5])
        .html((d) => {
          if (d.data.isUnion) {
            return
          }

          let content = `
              <span style='margin-left: 2.5px;'><b>` + d.data.name + `</b></span><br>
                <table style="margin-top: 2.5px;">
                  <tr><td>born</td><td>` + (d.data.birthyear || "?") + ` in ` + (d.data.birthplace || "?") + `</td></tr>
                  <tr><td>died</td><td>` + (d.data.deathyear || "?") + ` in ` + (d.data.deathplace || "?") + `</td></tr>
                </table>`

          return content.replace(new RegExp("null", "g"), "?")
        })


      // append the svg object to the body of the page
      // assigns width and height
      // activates zoom/pan and tooltips
      const svg = d3.select("#tree").append("svg")
        .attr("width", screen_width)
        .attr("height", screen_height)
        .call(zoom)
        .call(tip)

      // append group element
      const g = svg.append("g");

      // helper letiables
      let i = 0,
        duration = 750,
        x_sep = 120,
        y_sep = 50;
      // declare a dag layout
      let tree = sugiyama()
        .nodeSize([y_sep, x_sep])
        .layering(layeringSimplex())
        .decross(decrossOpt())
        .coord(coordQuad())
      // .separation((a, b) => { return 1 });


      // make dag from edge list
      let dag = dagConnect()(this.data.links)

      // in order to make the family tree work, the dag
      // must be a node with id undefined. create that node if
      // not done automaticaly
      if (!!dag.id) {
        let root = dag.copy()
        root.id = undefined
        root.children = [dag]
        dag = root
      }

      // prepare node data
      let all_nodes = dag.descendants()
      console.log(JSON.stringify(all_nodes))
      all_nodes.forEach(n => {
        console.log(n)
        // TODO: Refactored as of 20.05.2021. Keep going from here[1]*
        n.data = this.data.persons[n.id] ? this.data.persons[n.id] : this.data.unions[n.id]
        n._children = n.children // all nodes collapsed by default
        n.children = []
        n.inserted_nodes = []
        n.inserted_roots = []
        n.neighbors = []
        n.visible = false
        n.inserted_connections = []
      })


      // find root node and assign data
      // TODO: [1] - fix find by n.id
      let root = all_nodes.find(n => n.id === this.data.start)
      console.log(root)
      root.visible = true
      root.neighbors = this.getNeighbors(root)
      root.x0 = screen_height / 2
      root.y0 = screen_width / 2

      // overwrite dag root nodes
      dag.children = [root]

      // draw dag
      this.update(root)
    },

    // collapse a node
    collapse(d) {

      // remove root nodes and circle-connections
      let remove_inserted_root_nodes = n => {
        // remove all inserted root nodes
        dag.children = dag.children.filter(c => !n.inserted_roots.includes(c))
        // remove inserted connections
        n.inserted_connections.forEach(
          arr => {
            // check existence to prevent double entries
            // which will cause crashes
            if (arr[0].children.includes(arr[1])) {
              arr[0]._children.push(arr[1])
              arr[0].children.remove(arr[1])
            }
          }
        )
        // repeat for all inserted nodes
        n.inserted_nodes.forEach(remove_inserted_root_nodes);
      };

      remove_inserted_root_nodes(d);

      // collapse neighbors which are visible and have been inserted by this node
      let vis_inserted_neighbors = d.neighbors.filter(n => n.visible & d.inserted_nodes.includes(n));
      vis_inserted_neighbors.forEach(
        n => {
          // tag invisible
          n.visible = false;
          // if child, delete connection
          if (d.children.includes(n)) {
            d._children.push(n);
            d.children.remove(n);
          }
          // if parent, delete connection
          if (n.children.includes(d)) {
            n._children.push(d);
            n.children.remove(d);
          }
          // if union, collapse the union
          if (n.data.isUnion) {
            collapse(n);
          }
          // remove neighbor handle from clicked node
          d.inserted_nodes.remove(n);
        }
      );
    },

    // uncollapse a node
    uncollapse(d, make_roots) {

      if (d == undefined) return;

      // neighbor nodes that are already visible (happens when
      // circles occur): make connections, save them to
      // destroy / rebuild on collapse
      let extended_neighbors = d.neighbors.filter(n => n.visible)
      extended_neighbors.forEach(
        n => {
          // if child, make connection
          if (d._children.includes(n)) {
            d.inserted_connections.push([d, n]);
          }
          // if parent, make connection
          if (n._children.includes(d)) {
            d.inserted_connections.push([n, d]);
          }
        }
      )

      // neighbor nodes that are invisible: make visible, make connections,
      // add root nodes, add to inserted_nodes
      let collapsed_neighbors = d.neighbors.filter(n => !n.visible);
      collapsed_neighbors.forEach(
        n => {
          // collect neighbor data
          n.neighbors = this.getNeighbors(n);
          // tag visible
          n.visible = true;
          // if child, make connection
          if (d._children.includes(n)) {
            d.children.push(n);
            d._children.remove(n);
          }
          // if parent, make connection
          if (n._children.includes(d)) {
            n.children.push(d);
            n._children.remove(d);
            // insert root nodes if flag is set
            if (make_roots & !d.inserted_roots.includes(n)) {
              d.inserted_roots.push(n);
            }
          }
          // if union, uncollapse the union
          if (n.data.isUnion) {
            this.uncollapse(n, true);
          }
          // save neighbor handle in clicked node
          d.inserted_nodes.push(n);
        }
      )

      // make sure this step is done only once
      if (!make_roots) {
        let add_root_nodes = n => {
          // add previously inserted root nodes (partners, parents)
          n.inserted_roots.forEach(p => dag.children.push(p));
          // add previously inserted connections (circles)
          n.inserted_connections.forEach(
            arr => {
              // check existence to prevent double entries
              // which will cause crashes
              if (arr[0]._children.includes(arr[1])) {
                arr[0].children.push(arr[1]);
                arr[0]._children.remove(arr[1]);
              }
            }
          )
          // repeat with all inserted nodes
          n.inserted_nodes.forEach(add_root_nodes)
        };
        add_root_nodes(d);
      }
    },

    is_extendable(node) {
      return node.neighbors.filter(n => !n.visible).length > 0
    },

    getNeighbors(node) {
      if (node.data.isUnion) {
        return this.getChildren(node)
          .concat(this.getPartners(node))
      } else {
        return this.getOwnUnions(node)
          .concat(this.getParentUnions(node))
      }
    },

    getParentUnions(node) {
      if (node == undefined) return [];
      if (node.data.isUnion) return [];
      let u_id = node.data.parent_union;
      if (u_id) {
        let union = all_nodes.find(n => n.id == u_id);
        return [union].filter(u => u != undefined);
      } else return [];
    },

    getParents(node) {
      let parents = [];
      if (node.data.isUnion) {
        node.data.partner.forEach(
          p_id => parents.push(all_nodes.find(n => n.id == p_id))
        );
      } else {
        let parent_unions = getParentUnions(node);
        parent_unions.forEach(
          u => parents = parents.concat(this.getParents(u))
        );
      }
      return parents.filter(p => p != undefined)
    },

    getOtherPartner(node, union_data) {
      let partner_id = union_data.partner.find(
        p_id => p_id != node.id & p_id != undefined
      );
      return all_nodes.find(n => n.id == partner_id)
    },

    getPartners(node) {
      let partners = [];
      // return both partners if node argument is a union
      if (node.data.isUnion) {
        node.data.partner.forEach(
          p_id => partners.push(all_nodes.find(n => n.id == p_id))
        )
      }
      // return other partner of all unions if node argument is a person
      else {
        let own_unions = this.getOwnUnions(node);
        own_unions.forEach(
          u => {
            partners.push(this.getOtherPartner(node, u.data))
          }
        )
      }
      return partners.filter(p => p != undefined)
    },

    getOwnUnions(node) {
      if (node.data.isUnion) return [];
      let unions = [];
      node.data.own_unions.forEach(
        u_id => unions.push(all_nodes.find(n => n.id == u_id))
      );
      return unions.filter(u => u != undefined)
    },

    getChildren(node) {
      let children = [];
      if (node.data.isUnion) {
        children = node.children.concat(node._children);
      } else {
        let own_unions = this.getOwnUnions(node);
        own_unions.forEach(
          u => children = children.concat(this.getChildren(u))
        )
      }
      // sort children by birth year, filter undefined
      children = children
        .filter(c => c != undefined)
        .sort((a, b) => Math.sign((this.getBirthYear(a) || 0) - (this.getBirthYear(b) || 0)));
      return children
    },

    getBirthYear(node) {
      return new Date(node.data.birthyear || NaN).getFullYear()
    },

    getDeathYear(node) {
      return new Date(node.data.deathyear || NaN).getFullYear()
    },

    find_path(n) {
      let parents = this.getParents(n);
      let found = false;
      let result = null;
      parents.forEach(
        p => {
          if (p && !found) {
            if (p.id == "profile-89285291") {
              found = true;
              result = [p, n];
            } else {
              result = this.find_path(p);
              if (result) {
                found = true;
                result.push(n)
              }
            }
          }
        }
      )
      return result
    },

    update(source) {

      // Assigns the x and y position for the nodes
      let dag_tree = tree(dag),
        nodes = dag.descendants(),
        links = dag.links();


      // ****************** Nodes section ***************************

      // Update the nodes...
      let node = g.selectAll('g.node')
        .data(nodes, function (d) {
          return d.id || (d.id = ++i);
        })

      // Enter any new nodes at the parent's previous position.
      let nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function (d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on('click', this.onClick)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .attr('visible', true);

      // Add Circle for the nodes
      nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style("fill", function (d) {
          return this.is_extendable(d) ? "lightsteelblue" : "#fff";
        });

      // Add names as node labels
      nodeEnter.append('text')
        .attr("dy", "-2")
        .attr("x", 13)
        .attr("text-anchor", "start")
        .text(d => d.data.name);
      // add birth date and death date as labels
      nodeEnter.append('text')
        .attr("dy", "10")
        .attr("x", 13)
        .attr("text-anchor", "start")
        .text(
          function (d) {
            if (d.data.isUnion) return;
            return (d.data.birthyear || "?") +
              " - " +
              (d.data.deathyear || "?")
          }
        );

      // UPDATE
      let nodeUpdate = nodeEnter.merge(node);

      // Transition to the proper position for the node
      nodeUpdate.transition()
        .duration(duration)
        .attr("transform", function (d) {
          return "translate(" + d.y + "," + d.x + ")";
        });

      // Update the node attributes and style
      nodeUpdate.select('circle.node')
        .attr('r', d => 10 * !d.data.isUnion + 0 * d.data.isUnion)
        .style("fill", function (d) {
          return this.is_extendable(d) ? "lightsteelblue" : "#fff";
        })
        .attr('cursor', 'pointer');


      // Remove any exiting nodes
      let nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .attr('visible', false)
        .remove();

      // On exit reduce the node circles size to 0
      nodeExit.select('circle')
        .attr('r', 1e-6);

      // On exit reduce the opacity of text labels
      nodeExit.select('text')
        .style('fill-opacity', 1e-6);

      // ****************** links section ***************************

      // Update the links...
      let link = g.selectAll('path.link')
        .data(links, function (d) {
          return d.source.id + d.target.id
        });

      // Enter any new links at the parent's previous position.
      let linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', function (d) {
          let o = {x: source.x0, y: source.y0}
          return this.diagonal(o, o)
        });

      // UPDATE
      let linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate.transition()
        .duration(duration)
        .attr('d', d => this.diagonal(d.source, d.target));

      // Remove any exiting links
      let linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function (d) {
          let o = {x: source.x, y: source.y}
          return this.diagonal(o, o)
        })
        .remove();

      // expanding a big subgraph moves the entire dag out of the window
      // to prevent this, cancel any transformations in y-direction
      svg.transition()
        .duration(duration)
        .call(
          zoom.transform,
          d3.zoomTransform(g.node()).translate(-(source.y - source.y0), -(source.x - source.x0)),
        );

      // Store the old positions for transition.
      nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      d3.select('#saveButton').on('click', function () {
        let svgString = this.getSVGString(svg.node());
        this.svgString2Image(svgString, 2 * width, 2 * height, 'png', this.onSave); // passes Blob and filesize String to the callback
      });
    },
    // Creates a curved (diagonal) path from parent to the child nodes
    diagonal(s, d) {

      let path = `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`

      return path
    },
    // Below are the functions that handle actual exporting:
    // getSVGString ( svgNode ) and svgString2Image( svgString, width, height, format, callback )
    getSVGString(svgNode) {
      svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
      let cssStyleText = getCSSStyles(svgNode);
      appendCSS(cssStyleText, svgNode);

      let serializer = new XMLSerializer();
      let svgString = serializer.serializeToString(svgNode);
      svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
      svgString = svgString.replace(/NS\d+:href/g, 'xlink:href'); // Safari NS namespace fix

      return svgString;

      function getCSSStyles(parentElement) {
        let selectorTextArr = [];

        // Add Parent element Id and Classes to the list
        selectorTextArr.push('#' + parentElement.id);
        for (let c = 0; c < parentElement.classList.length; c++)
          if (!contains('.' + parentElement.classList[c], selectorTextArr))
            selectorTextArr.push('.' + parentElement.classList[c]);

        // Add Children element Ids and Classes to the list
        let nodes = parentElement.getElementsByTagName("*");
        for (let i = 0; i < nodes.length; i++) {
          let id = nodes[i].id;
          if (!contains('#' + id, selectorTextArr))
            selectorTextArr.push('#' + id);

          let classes = nodes[i].classList;
          for (let c = 0; c < classes.length; c++)
            if (!contains('.' + classes[c], selectorTextArr))
              selectorTextArr.push('.' + classes[c]);
        }

        // Extract CSS Rules
        let extractedCSSText = "";
        for (let i = 0; i < document.styleSheets.length; i++) {
          let s = document.styleSheets[i];

          try {
            if (!s.cssRules) continue;
          } catch (e) {
            if (e.name !== 'SecurityError') throw e; // for Firefox
            continue;
          }

          let cssRules = s.cssRules;
          for (let r = 0; r < cssRules.length; r++) {
            if (contains(cssRules[r].selectorText, selectorTextArr))
              extractedCSSText += cssRules[r].cssText;
          }
        }


        return extractedCSSText;

        function contains(str, arr) {
          return arr.indexOf(str) === -1 ? false : true;
        }

      }

      function appendCSS(cssText, element) {
        let styleElement = document.createElement("style");
        styleElement.setAttribute("type", "text/css");
        styleElement.innerHTML = cssText;
        let refNode = element.hasChildNodes() ? element.children[0] : null;
        element.insertBefore(styleElement, refNode);
      }
    },
    svgString2Image(svgString, width, height, format, callback) {
      format = format ? format : 'png';

      let imgsrc = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString))); // Convert SVG string to data URL

      let canvas = document.createElement("canvas");
      let context = canvas.getContext("2d");

      canvas.width = width;
      canvas.height = height;

      let image = new Image();
      image.onload = function () {
        context.clearRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);

        canvas.toBlob(function (blob) {
          let filesize = Math.round(blob.length / 1024) + ' KB';
          if (callback) callback(blob, filesize);
        });


      };

      image.src = imgsrc;
    },
    // Toggle unions, children, partners on click.
    onClick(d) {

      // do nothing if node is union
      if (d.data.isUnion) return;

      // uncollapse if there are uncollapsed unions / children / partners
      if (this.is_extendable(d)) this.uncollapse(d)
      // collapse if fully uncollapsed
      else this.collapse(d)

      this.update(d);
    },
    onSave(dataBlob, filesize) {
      saveAs(dataBlob, 'D3 vis exported to PNG.png'); // FileSaver.js function
    }
  },
}
</script>
<style>
.node circle {
  fill: #fff;
  stroke: steelblue;
  stroke-width: 3px;
}

.node text {
  font: 12px sans-serif;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}

.d3-tip {
  font: 12px sans-serif;
  padding: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 2px;
}
</style>
