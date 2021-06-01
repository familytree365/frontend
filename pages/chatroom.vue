<template>
  <chat-window
    :current-user-id="currentUserId"
    :rooms="rooms"
    :messages="messages"
  />
</template>

<script>
  import { mapGetters } from 'vuex'
  import ChatWindow from 'vue-advanced-chat'
  import 'vue-advanced-chat/dist/vue-advanced-chat.css'

  export default {
    layout: 'auth',
    computed: {
    ...mapGetters(['loggedInUser'])
  },
    components: {
      ChatWindow
    },
    data() {
      return {
        rooms: [],
        messages: [],
        currentUserId: 0,
        loadingRooms: false,
        messagesLoaded: true,
      }
    },
    mounted() {
    console.log(this.loggedInUser)
    this.currentUserId = this.loggedInUser.id;
    this.loadChats();
  },
  methods: {
    loadChats() {    
      this.loadingRooms = true;  
      this.$axios.$get('/api/chats')
        .then(response => {
          console.log(response);
          this.loadingRooms = false;  
          const rooms = []
          for (let i = 0; i < response.length; i++) {
            const room = {
                  roomId: response[i].id,
                  roomName: response[i].chatLabel,
                  avatar: 'assets/imgs/people.png',
                  unreadCount: 0,
                  index: 3,
                  lastMessage: response[i].lastMessage,
                  users: response[i].formattedUsers,
                  typingUsers: []
                }
            rooms.push(room);
          }
          this.rooms = rooms;
          
        })
        .catch(error => {
          this.error = true;
          this.message = error.response.data.message;
          this.errors = error.response.data.errors;
        });
    },
  },
  }
</script>