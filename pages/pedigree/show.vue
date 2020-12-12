<style lang="css">
@import "~/node_modules/vue-select/dist/vue-select.css";
</style>
<template>
    <div>
        <div class="search-people">
            <v-select :options="results" label="name" @input="searchPeople"/>
        </div>
        <div id="pedigree_panel" style="height:300px;"/>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/d3-dag@0.3.5/dist/d3-dag.min.js"></script>
<script>
    import * as d3 from 'd3';
    import * as _dag from 'd3-dag';
    import {tip} from 'd3-tip';
    import Vue from "vue";
    import vSelect from "vue-select";

    Vue.component('v-select', vSelect);
    export default {
        name: 'Show',
        data() {
            return {
                data :{
                    start: 4,
                    links: [['3', "u1"], ['2', "u2"], ['2', "u1"], ["u2", '4']],
                    unions: {'u1': {id: "u1", partner: [2, 3], children: []},
                        'u2': {id: "u2", partner: [2, null], children: [4]} },
                    persons: {
                        2: {
                            appellative: null,
                            bank: null,
                            bank_account: null,
                            birthday: null,
                            parent_union: null,
                            created_at: "2020-06-09T15:17:59.000000Z",
                            created_by: 1,
                            deleted_at: null,
                            description: null,
                            email: null,
                            givn: "Robert Eugene",
                            id: 2,
                            name: "Robert Eugene /Williams/",
                            obs: null,
                            own_unions: ["u1", "u2"],
                            phone: null,
                            sex: "M",
                            surn: "Williams",
                            title: null,
                            uid: null,
                            updated_at: "2020-06-09T15:17:59.000000Z",
                            updated_by: 1,
                        },
                        3: {
                            appellative: null,
                            bank: null,
                            bank_account: null,
                            birthday: null,
                            parent_union: null,
                            created_at: "2020-06-09T15:17:59.000000Z",
                            created_by: 1,
                            deleted_at: null,
                            description: null,
                            email: null,
                            givn: "Mary Ann",
                            id: 3,
                            name: "Mary Ann /Williams/",
                            obs: null,
                            own_unions: ["u1", "u2"],
                            phone: null,
                            sex: "M",
                            surn: "Wilson",
                            title: null,
                            uid: null,
                            updated_at: "2020-06-09T15:17:59.000000Z",
                            updated_by: 1,
                        },
                        4: {
                            appellative: null,
                            bank: null,
                            bank_account: null,
                            birthday: null,
                            parent_union: 2,
                            created_at: "2020-06-09T15:17:59.000000Z",
                            created_by: 1,
                            deleted_at: null,
                            description: null,
                            email: null,
                            givn: "4Mary Ann",
                            id: 3,
                            name: "4Mary Ann /Williams/",
                            obs: null,
                            own_unions: ["u1", "u2"],
                            phone: null,
                            sex: "M",
                            surn: "4Wilson",
                            title: null,
                            uid: null,
                            updated_at: "2020-06-09T15:17:59.000000Z",
                            updated_by: 1,
                        },
                    },
                },
                all_nodes: null,
                tree: null,
                dag: null,
                g: null,
                duration: null,
                svg: null,
                zoom: null,
                nest: 3,
                query: '',
                results: []
            }
        },
        mounted() {
            Array.prototype.remove = function () {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };
            // this.generateTree();
            this.fecthData();
        },
        created() {
            // mark unions
        },
        computed: {
            fetchLink() {
                return '/api/pedigree/show';
            },
        },
        methods: {
            newlink(id) {
                this.$router.push(id);
            },
            is_extendable(node) {
                return node.neighbors.filter(n => !n.visible).length > 0
            },
            collapse(d) {
                // remove root nodes and circle-connections
                var remove_inserted_root_nodes = n => {
                    // remove all inserted root nodes
                    this.dag.children = this.dag.children.filter
                    (c => !n.inserted_roots.includes(c));
                    // remove inserted connections
                    n.inserted_connections.forEach(
                        arr => {
                            // check existence to prevent double entries
                            // which will cause crashes
                            if (arr[0].children.includes(arr[1])) {
                                arr[0]._children.push(arr[1]);
                                arr[0].children.remove(arr[1]);
                            }
                        }
                    )
                    // repeat for all inserted nodes
                    n.inserted_nodes.forEach(remove_inserted_root_nodes);
                };
                remove_inserted_root_nodes(d);

                // collapse neighbors which are visible and have been inserted by this node
                var vis_inserted_nei = d.neighbors.filter
                (n => n.visible&d.inserted_nodes.includes(n));

                vis_inserted_nei.forEach(
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
                            this.collapse(n);
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
                var extended_neighbors = d.neighbors.filter(n => n.visible);
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
                var collapsed_neighbors = d.neighbors.filter(n => !n.visible);
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
                        if (n && n.data && n.data.isUnion) {
                            this.uncollapse(n, true);
                        }
                        // save neighbor handle in clicked node
                        d.inserted_nodes.push(n);
                    }
                )

                // make sure this step is done only once
                if (!make_roots) {
                    var add_root_nodes = n => {
                        // add previously inserted root nodes (partners, parents)
                        n.inserted_roots.forEach(p => this.dag.children.push(p));
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
            getNeighbors(node) {
                if (node && node.data && node.data.isUnion) {
                    return this.getChildren(node)
                        .concat(this.getPartners(node))
                }
                else {
                    return this.getOwnUnions(node)
                        .concat(this.getParentUnions(node))
                }
            },
            getParentUnions(node) {
                if (node == undefined || !node.data) return [];
                if (node.data.isUnion) return [];
                var u_id = node.data.parent_union;
                if (u_id) {
                    var union = this.all_nodes.find(n => n.id == u_id);
                    return [union].filter(u => u != undefined);
                }
                else return [];
            },
            getParents(node) {
                var parents = [];
                if (node.data.isUnion) {
                    node.data.partner.forEach(
                        p_id => parents.push(this.all_nodes.find(n => n.id == p_id))
                    );
                }
                else {
                    var parent_unions = getParentUnions(node);
                    parent_unions.forEach(
                        u => parents = parents.concat(getParents(u))
                    );
                }
                return parents.filter(p => p != undefined)
            },
            getOtherPartner(node, union_data) {
                var partner_id = union_data.partner.find(
                    p_id => p_id != node.id & p_id != undefined
                );
                return this.all_nodes.find(n => n.id == partner_id)
            },
            getPartners(node) {
                var partners = [];
                // return both partners if node argument is a union
                if (node.data.isUnion) {
                    node.data.partner.forEach(
                        p_id => partners.push(this.all_nodes.find(n => n.id == p_id))
                    )
                }
                // return other partner of all unions if node argument is a person
                else {
                    var own_unions = getOwnUnions(node);
                    own_unions.forEach(
                        u => {
                            partners.push(getOtherPartner(node, u.data))
                        }
                    )
                }
                return partners.filter(p => p != undefined)
            },
            getOwnUnions(node) {
                if (!node || !node.data) return [];
                if (node.data.isUnion) return [];
                let unions = [];
                node.data.own_unions.forEach(
                    u_id => unions.push(this.all_nodes.find(n => n.id == u_id))
                );
                return unions.filter(u => u != undefined)
            },
            getChildren(node) {
                var children = [];
                if (node.data.isUnion) {
                    children = node.children.concat(node._children);
                }
                else {
                    own_unions = getOwnUnions(node);
                    own_unions.forEach(
                        u => children = children.concat(getChildren(u))
                    )
                }
                // sort children by birth year, filter undefined
                children = children
                    .filter(c => c != undefined)
                    .sort((a, b) =>
                        Math.sign((this.getBirthYear(a) || 0) - (this.getBirthYear(b) || 0)));
                return children
            },
            getBirthYear(node) {
                return new Date(node.data.birthday || NaN).getFullYear()
            },
            getDeathYear(node) {
                return new Date(node.data.deathyear || NaN).getFullYear()
            },
            find_path(n) {
                var parents = getParents(n);
                var found = false;
                var result = null;
                parents.forEach(
                    p => {
                        if (p && !found) {
                            if (p.id == "profile-89285291") {
                                found = true;
                                result = [p, n];
                            }
                            else {
                                result = find_path(p);
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
                console.log('*********');
                console.log(source);
                // var dag_tree = this.tree(this.dag);
                var nodes = this.dag.descendants();
                var links = this.dag.links();

                // ****************** Nodes section ***************************
                // Update the nodes...
                // console.log(dag_tree);
                var node = this.g.selectAll('g.node')
                    .data(nodes, function (d) { return d.id || (d.id = ++i); })
                // Enter any new nodes at the parent's previous position.
                var nodeEnter = node.enter().append('g')
                    .attr('class', 'node each-member')
                    .attr("style", function (d) {
                        return "transform: translate(" +
                        source.y0 + "px, " + source.x0 + "px) rotate(180deg)";
                    })
                    .on('click', this.click)
                    // .on('mouseover', tip.show)
                    // .on('mouseout', tip.hide)
                    .attr('visible', true);
                // Add Rect for background color
                nodeEnter.append('rect')
                    .attr('x', -15)
                    .attr('y', -13)
                    .attr('height', 26)
                    .attr('width', 200)
                    .attr('rx', 3)
                    .attr('ry', 3)
                    .attr('fill', 'white')
                    // .attr('stroke-width', '2')
                    // .attr('stroke', '#9ee063')
                    .attr('class', function(d) {
                        if (d.data && d.data.name)
                            return 'node-rect';
                        else return 'none-rect';
                    }).attr('visible', true);
                // Add image for avatar
                nodeEnter.append('image')
                    .attr('width', 26)
                    .attr('height', 26)
                    .attr('rx', 3)
                    .attr('ry', 3)
                    .attr('x', -15)
                    .attr('y', -13)
                    .attr('xlink:href', d => d.data.avatar).attr('visible', true);
                // Add Circle for the nodes
                // nodeEnter.append('circle')
                //     .attr('class', 'node')
                //     .attr('r', 1e-6)
                //     .style("fill", function (d) {
                //         return d.neighbors.filter
                //         (n => !n.visible).length > 0 ? "lightsteelblue":"#fff";
                //     });

                // Add names as node labels
                nodeEnter.append('text')
                    .attr("class", "name")
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
                            var period = '';
                            if (d.data.birthday)
                                period += (new Date(d.data.birthday).getFullYear());

                            period += ' - ';
                            if (d.data.deathday)
                                period += (new Date(d.data.deathday).getFullYear());

                            period = period == ' - ' ? '' : period;
                            // return (new Date(d.data.created_at).getFullYear()||"?")
                            return period;
                        }
                    );

                // UPDATE
                var nodeUpdate = nodeEnter.merge(node);

                // Transition to the proper position for the node
                nodeUpdate.transition()
                    .duration(this.duration)
                    .attr("style", function (d) {
                        console.log('style trasform d.x and d.y',d.y, d.x);
                        return "transform: translate(" + d.y + "px, " + d.x + "px) rotate(180deg)";
                    });

                // Update the node attributes and style
                nodeUpdate.select('circle.node')
                    .attr('r', d => 10 * !d.data.isUnion + 0 * d.data.isUnion)
                    .style("fill", function (d) {
                        return d.neighbors.filter
                        (n => !n.visible).length > 0 ? "lightsteelblue":"#fff";
                    })
                    .attr('cursor', 'pointer');

                // Remove any exiting nodes
                var nodeExit = node.exit().transition()
                    .duration(this.duration)
                    .attr("transform", function (d) {
                        return "transform: translate(" +
                        source.y + "px," + source.x + "px) rotate(180deg)";
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
                var link = this.g.selectAll('path.link')
                    .data(links, function (d) { return d.source.id + d.target.id });
                // Enter any new links at the parent's previous position.
                var linkEnter = link.enter().insert('path', "g")
                    .attr("class", "link")
                    .attr('d', d => {
                        let _this = this;
                        var o = { x: source.x0, y: source.y0 }
                        return _this.diagonal(o, o, 3)
                    });

                // UPDATE
                var linkUpdate = linkEnter.merge(link);

                // Transition back to the parent element position
                linkUpdate.transition()
                    .duration(this.duration)
                    .attr('d', d => {
                        let _this = this; return _this.diagonal(d.source, d.target, 2);
                    });

                // Remove any exiting links
                var linkExit = link.exit().transition()
                    .duration(this.duration)
                    .attr('d', d => {
                        let _this = this;
                        var o = { x: source.x, y: source.y }
                        return _this.diagonal(o, o, 1)
                    })
                    .remove();

                // expanding a big subgraph moves the entire dag out of the window
                // to prevent this, cancel any transformations in y-direction
                this.svg.transition()
                    .duration(this.duration)
                    .call(
                        this.zoom.transform,
                        d3.zoomTransform(this.g.node()).translate(-(source.y - source.y0),
                            -(source.x - source.x0/2)),
                    );

                // Store the old positions for transition.
                // nodes.forEach(function (d) {
                //     d.x0 = d.x;
                //     d.y0 = d.y;
                // });
            },
            diagonal(s, d, id) {
                const path = `M ${s.y} ${s.x}C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},${d.y} ${d.x}`;
                return path
            },
            // Toggle unions, children, partners on click.
            click(d) {
                // // do nothing if node is union
                // if (d.data.isUnion) return;
                // // uncollapse if there are uncollapsed unions / children / partners
                // if (this.is_extendable(d)) this.uncollapse(d)
                // // collapse if fully uncollapsed
                // else this.collapse(d)
                // this.update(d);
                return this.$router.push({ path: '/pedigree/' + d.data.id + '/show'});
            },
            generateTree() {
                for (let k in this.data.unions) {
                    this.data.unions[k].isUnion = true
                }

                // mark persons
                for (let k in this.data.persons) {
                    this.data.persons[k].isUnion = false
                }

                // Set the dimensions and margins of the diagram
                let screen_width = document.body.offsetWidth,
                    // screen_height = document.documentElement.clientHeight;
                    screen_height = document.getElementById('pedigree_panel').clientHeight;

                // initialize panning, zooming
                this.zoom = d3.zoom()
                    .on("zoom", (event,d) => this.g.attr("transform", event.transform));
                // initialize tooltips
                // let tip = d3.tip()
                //     .attr('class', 'd3-tip')
                //     .direction('e')
                //     .offset([0, 5])
                //     .html(
                //         function (d) {
                //             if (d.data.isUnion) return;
                //             var content = `
                //             <span style='margin-left: 2.5px;'>
                //             <b>` + d.data.name + `</b></span><br>
                //             <table style="margin-top: 2.5px;">
                //                     <tr><td>born</td><td>` + (d.data.birthyear||"?")
                //                      + ` in ` + (d.data.birthplace||"?") + `</td></tr>
                //                     <tr><td>died</td><td>` + (d.data.deathyear||"?")
                //                      + ` in ` + (d.data.deathplace||"?") + `</td></tr>
                //             </table>
                //             `
                //             return content.replace(new RegExp("null", "g"), "?")
                //         }
                //     );

                // append the svg object to the body of the page
                // assigns width and height
                // activates zoom/pan and tooltips
                this.svg = d3.select("#pedigree_panel").append("svg")
                    .attr("width", screen_width)
                    .attr("height", screen_height)
                    .call(this.zoom);
                // .call(tip)
                // append group element
                this.g = this.svg.append("g");
                // helper variables
                var i = 0,
                    x_sep = 120,
                    y_sep = 50;
                this.duration = 750;
                // declare a dag layout
                this.tree = _dag.sugiyama()
                    .nodeSize([y_sep, x_sep])
                    .layering(_dag.layeringSimplex())
                    .decross(_dag.decrossOpt)
                    .coord(_dag.coordVert())
                    // .separation(
                    //     function(a,b) {return 1}
                    // );
                // make dag from edge list
                const _links = this.data.links;
                let links = [];
                _links.forEach(
                    item => links.push([item[0], item[1]])
                );
                console.log(this.data.links);
                console.log(links);
                this.dag = _dag.dagConnect()(links);
                // in order to make the family tree work, the dag
                // must be a node with id undefined. create that node if
                // not done automaticaly
                let root = null;
                if(this.dag.id !=undefined){
                    root = this.dag.copy();
                    root.id = undefined;
                    root.children = [this.dag];
                    this.dag = root;
                }
                // prepare node data
                this.all_nodes = this.dag.descendants()
                this.all_nodes.forEach(n => {
                    n.data = this.data.persons[n.id] ? this.data.persons[n.id]
                        : this.data.unions[n.id];
                    n._children = n.children; // all nodes collapsed by default
                    n.children = [];
                    n.inserted_nodes = [];
                    n.inserted_roots = [];
                    n.neighbors = [];
                    n.visible = false;
                    n.inserted_connections = [];
                });
                // find root node and assign data
                root = this.all_nodes.find(n => n.id == this.data.start);
                if(root !== undefined) {
                console.log('root before:', root);
                    root.visible = true;
                    root.neighbors = this.getNeighbors(root);
                    root.x = screen_height/2;
                    root.y = screen_width/2;
                console.log('root after:', root);
                    this.dag.children = [root];
                    // draw dag
                    this.update(root);
                    setTimeout(this.expand, 1000);
                    setTimeout(this.expand, 2000);
                    setTimeout(this.expand, 3000);
                }
                // overwrite dag root nodes
            },
            expand(){
                this.all_nodes.forEach(n => {
                    if(this.is_extendable(n)){
                        this.uncollapse(n);
                        this.update(n);
                    };
                });
            },
            fecthData() {
                const start_id = this.$route.params.tree;
                // const fd = new FormData();
                // fd.append('start_id', start_id);
                // fd.append('nest', this.nest);
                const params = {
                    'start_id': start_id,
                    'nest':this.nest,
                };
                this.$axios
                    .$get(this.fetchLink, { params })
                    .then(res => {
                        console.log(res);
                        // this.data = (res['data']);
                        // this.data = res['persons'];
                        console.log(this.data);
                        const results = [];
                        const keys = Object.keys(res['persons']);
                        for(let i = 0 ; i < keys.length ; i++) {
                            console.log('_____________');
                            console.log(res['persons'][keys[i]].name);
                            results.push({
                                id: res['persons'][keys[i]].id,
                                name: res['persons'][keys[i]].name
                            });
                        }
                        this.results = results;
                        setTimeout(this.generateTree, 1000);
                        // this.generateTree();
                    })
                    .catch(err => {  });
            },
            searchPeople(people) {
                const params = {
                    'start_id': people.id,
                    'nest':this.nest,
                };
                this.$axios
                    .$get(this.fetchLink, { params })
                    .then(res => {
                        this.data = (res['data']);
                        d3.selectAll("svg").remove();
                        setTimeout(this.generateTree, 1000);
                    })
                    .catch(err => {  });
            }
        }
    };
</script>

<style lang="scss">
</style>
