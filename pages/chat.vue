<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-parent">

      </div>
      <div class="tile is-parent is-9">

      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import { mapGetters } from 'vuex'
import Echo from 'laravel-echo'
window.io = require('socket.io-client')
window.Echo = new Echo({
  broadcaster: 'socket.io',
  host: 'http://localhost:6001'
})

var socket = io('http://localhost:6001');

export default {
  layout: 'auth',
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  data() {
    return {
      user: '',
      message: '',
      chats: [],
      messages: []
    }
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();

      this.$axios
        .$post("/api/chats", {sender: 1, receiver: 2})

          console.log(response);
        })
        .catch(error => {
          this.error = true;
          this.message = error.response.data.message;
          this.errors = error.response.data.errors;
        });

//                this.socket.emit('SEND_MESSAGE', {
//                    user: this.user,
//                    message: this.message
//                });
//                this.message = ''
    }
  },
  mounted() {
    window.Echo.channel('chat-channel')
      .listen('.laravel_database_chat-channel', function(e){
        console.log(e);
      })
    //socket.emit('ChatMessageSentEvent');
    socket.on('ChatMessageSentEvent', (data) => {
      console.log("New message sent...");
      console.log(data);
      //this.messages = [...this.messages, data];
      // you can also do this.messages.push(data)
    });
  },
  // asyncData( { $axios, params }) {
  //     const source = await $axios.$get('/api/chats')
  //     console.log(source)
  //     return {source}
  // }
}
</script>

<style lang="scss">

.automation-apis--endpoints {
  &--grid {
    grid-column-gap: 1rem;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 1.5rem;
  }
}

.automation-apis--endpoints--details {
  .form--endpoints-details {
    .name--grid {
      grid-template-columns: 2fr 10fr 1fr !important;
    }

    .grid {
      grid-column-gap: 1rem;
      grid-template-columns: 5fr 5fr 1fr;
      margin-bottom: 1.5rem;
    }
  }
}
</style>
