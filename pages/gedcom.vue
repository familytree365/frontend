<template>
  <div>
    <div>
      <input
        type="text"
        style="display:none"
        :value.prop="slug">
      <input
        type="file"
        style="display:none"
        @change="selectedFile"
        ref="fileInput"
        accept="GED">
      <button @click="$refs.fileInput.click()">
        Select Gedcom File
      </button>
      <button v-if="file" @click="uploadFile">
        Upload
      </button>
    </div>
    <div v-if="uploadPercentage">
      <span class="ml-1">Upload</span>
      <progress
        max="100"
        :value.prop="uploadPercentage"/>
      <span :value.prop="total">{{ uploadPercentage }}%</span>
    </div>
    <div v-if="total">
      <span class="ml-1">Import</span>
      <progress
        :max.prop="total"
        :value.prop="complete"/>
      <span :value.prop="total">{{ complete }}/{{ total }}</span>
    </div>
    We value your privacy and do not share your GEDCOM data with any third parties.
    Your GEDCOM file is used by the website only for processing
    your data and importing into your tree that you have selected.<br><br>
    One tree is free for life for everyone and if you require more
    you will need to <a href="/subscription" target="_blank">subscribe</a>
    which helps us continue to provide services and develop new features.<br><br>
    Please select a GEDCOM file exported from your desktop software or online website
    and click upload. It should begin to process and show imported data
    processing. If it stops before fully importing contact
    support@familytree365.com<br><br>
    We do not use your GEDCOM file for any other purpose.
  </div>
</template>
<script>
import Pusher from 'pusher-js'; // import Pusher

export default {

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
      return '/api/gedcom/store';
    },
    getProgressLink() {
      return '/api/gedcom/progress';
    },
  },
  created() {
    this.subscribe();
    this.getProgressData();
  },
  methods: {
    subscribe() {
      const pusher = new Pusher(this.PUSHER_KEY, { cluster: this.PUSHER_CLUSTER });
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
      this.slug = Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15);
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
            const pe = Math.round((progressEvent.loaded / progressEvent.total) * 100);
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

<style lang="scss" scoped></style>
