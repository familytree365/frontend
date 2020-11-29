<template>
  <div>
    <div>
      <input type="text" style="display:none" :value.prop="slug">
      <input
        type="file"
        style="display:none"
        @change="selectedFile"
        ref="fileInput"
        accept="GED">
      <button @click="$refs.fileInput.click()">
        Select DNA File
      </button>
      <button v-if="file" @click="uploadFile">
        Upload
      </button>
    </div>
    <div v-if="uploadPercentage">
      <span class="ml-1">Upload</span>
      <progress max="100" :value.prop="uploadPercentage"/>
      <span :value.prop="total">{{ uploadPercentage }}%</span>
    </div>
    <div v-if="total">
      <span class="ml-1">Import</span>
      <progress :max.prop="total" :value.prop="complete"/>
      <span :value.prop="total">{{ complete }}/{{ total }}</span>
    </div>
    We value your privacy and do not share your DNA data with any third parties.
    Your DNA file is used by the website only for processing
    your matches to other DNA data uploaded.
    We do not use your DNA file for any other purpose.<br><br>
    We currently support exports from:
    Ancestry, Family Tree DNA, 23andMe, MyHeritage, DNA.Land, Codigo 46,
    Genes for Good, LivingDNA, Mapmygenome, Sano Genetics and tellmeGen.
    <br><br>DNA uploading and matching is free for everyone.
  </div>
</template>

<script>
import Pusher from 'pusher-js';

export default {
  name: 'Create',
  data() {
    return {
      file: null,
      uploadPercentage: 0,
      total: 0,
      complete: 0,
      slug: null,
    };
  },
  computed: {
    uploadLink() {
      return '/api/dna/store';
    },
    getProgressLink() {
      return '/api/dna/progress';
    },
  },
  created() {
    this.subscribe();
    // this.getProgressData();
  },
  methods: {
    subscribe() {
      const pusher = new Pusher(this.PUSHER_KEY, {
        cluster: this.PUSHER_CLUSTER,
      });
      pusher.subscribe('gedcom-progress');
      pusher.bind('newMessage', data => {
        const { slug, total, complete } = data;
        if (slug === this.slug) {
          this.slug = slug;
          this.total = total;
          this.complete = complete;
        }
      });
    },
    selectedFile(event) {
      [this.file] = event.target.files;
      this.uploadPercentage = 0;
      this.total = 0;
      this.slug = Math.random()
          .toString(36)
          .substring(2, 15)
        + Math.random()
          .toString(36)
          .substring(2, 15);
    },
    uploadFile() {
      const fd = new FormData();
      fd.append('slug', this.slug);
      fd.append('file', this.file, 'file.ged');
      axios
        .post(this.uploadLink, fd, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: function (progressEvent) {
            const pe = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100,
            );
            this.uploadPercentage = parseInt(pe, 10);
          }.bind(this),
        })
        .then()
        .catch();
    },
    getProgressData() {
      const params = {};
      axios
        .get(this.getProgressLink, { params })
        .then(res => {
          this.slug = res.data.slug;
        })
        .catch();
    },
  },
};
</script>

<style lang="scss"></style>
