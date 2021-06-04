<template>
<div>
  <div class="mb-4" v-if="showAddRoomForm">
    <div class="columns is-variable">
    <div class="column is-2">
      <Dropdown
          :options="options"
          v-on:selected="validateSelection"
          v-on:filter="autoComplete"
          :disabled="false"
          name="zipcode"
          :maxItem="10"
          placeholder="Who are you looking for?">
      </Dropdown>
    </div>
    <div class="column is-1 pl-4 is-flex">
      <button class="has-background-primary is-uppercase has-text-weight-medium has-text-white" @click="startChat">start</button>
      <button class="has-background-danger has-text-weight-medium has-text-white ml-4" @click="cancelAddRoom()">Cancel</button>
    </div>
    </div>
  </div>
    <chat-window
      :current-user-id="currentUserId"
      :rooms="rooms"
      :messages="messages"
      @fetch-messages="fetchMessages"
      :loading-rooms="loadingRooms"
      :messages-loaded="messagesLoaded"
      :rooms-loaded="roomsLoaded"
      :room-id="chatId"
      :show-add-room="showAddRoom"
      @send-message="sendMessage"
      @typing-message="typingMessage"
      :show-audio="showAudio"
      @add-room="addRoom"
    />
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ChatWindow from 'vue-advanced-chat'
  import 'vue-advanced-chat/dist/vue-advanced-chat.css'
  import Echo from 'laravel-echo'
  import Vue from 'vue';
  import Cookies from 'js-cookie'
  import Dropdown from 'vue-simple-search-dropdown';
  Vue.component('Dropdown', Dropdown);
  // window.Echo = new Echo({
  //   broadcaster: 'socket.io',
  //   host: 'http://localhost:6001',
  //   auth: {
  //         headers: {
  //           Authorization: `Bearer ${Cookies.get('XSRF-TOKEN')}`
  //         }
  //     }
  // })
  

  export default {
    layout: 'auth',
    computed: {
    ...mapGetters([
      'loggedInUser'
      ]),
  },
    components: {
      ChatWindow
    },
    data() {
      return {
        rooms: [],
        messages: [],
        currentUserId: 0,
        loadingRooms: true,
        messagesLoaded: false,
        roomsLoaded: false,
        room: {},
        message:'',
        chatId: null,
        showAddRoom: true,
        showAudio: false,
        showAddRoomForm: false,
        options: [
            ],
            query: '',          
            selected: { name: null, id: null }
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
                  avatar: '',
                  unreadCount: response[i].unreadCount,
                  index: response[i].id,
                  lastMessage: response[i].lastMessage,
                  users: response[i].formattedUsers,
                  typingUsers: []
                }
            rooms.push(room);
            
            this.$echo.private('chats.' + room.roomId)
            .listen('.NewMessage', (e) => {
                console.log("New message ");
                console.log(e);
                const index = this.messages.length;
                if(index == 0 || this.messages[index-1]._id !== e.message._id){                  
                  if(this.chatId !== room.roomId){
                    room.unreadCount = room.unreadCount +1;
                  }else{
                    this.$set(this.messages, index , e.message);
                    const count = this.loggedInUser.unreadMsgCount - 1;
                    this.$store.commit('SET_UNREAD_COUNT', count);
                    //this.updateUnreadMsg(this.loggedInUser.unreadMsgCount - 1)
                  }                
                }
                
                room.lastMessage = e.message;
            });
          }
          this.rooms = rooms;

          this.roomsLoaded = true;
          
        })
        .catch(error => {
          this.error = true;
          this.message = error.response.data.message;
          this.errors = error.response.data.errors;
        });
    },
    fetchMessages({ room, options }) {

      this.messagesLoaded = true;
      this.chatId = room.roomId;

      if(room){
        this.$axios.$get('/api/chats/' + room.roomId + '/messages')
          .then(response => {
            console.log(response);
            this.messages = response.data;
            this.messagesLoaded = true;
            room.unreadCount = 0;
            const count = response.unreadMsgCount;
            this.$store.commit('SET_UNREAD_COUNT', count);
            //this.updateUnreadMsg(response.unreadMsgCount)
          })
          .catch(error => {
            console.log(error);
            this.error = true;
            this.message = error.response.data.message;
            this.errors = error.response.data.errors;
          });
      }
    },
    sendMessage({ roomId, content, file, replyMessage, usersTag }) {
      let chatMessage = {
        "message": content,
        "chat_id": roomId
      }
      if(replyMessage){
        chatMessage.reply_to = replyMessage._id;
      }
      this.$axios.$post('/api/chatmessages', chatMessage)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error)
          this.error = true;
          this.message = error.response.data.message;
          this.errors = error.response.data.errors;
        });
    },
    addRoom(){
      this.showAddRoomForm = true;
    },
    cancelAddRoom(){
      this.showAddRoomForm = false;
      this.model = ''
    },    
    startChat(e) {
      e.preventDefault();
      console.log(e);
      let chatObject = {
        chat_type:'private',
        chat_with: this.query
      }
      this.$axios.$post('/api/chats', chatObject)
        .then(response => {
          console.log(response);
          const index = this.rooms.length;
          const duplicate = this.rooms.find(room => room.roomId === response.id);
          if(!duplicate){                
              this.$set(this.rooms, index , response);
            }
            this.chatId = response.id;
        })
        .catch(error => {
          console.log(error)
          this.error = true;
          this.message = error.response.data.message;
          this.errors = error.response.data.errors;
        });
    },
    autoComplete(value){
    this.options = [];
    console.log(value)
    if(value.length > 2){
     this.$axios.$get('/api/chat/user/search',{params: {query: value}})
     .then(response => {
      this.options = response.data;
     });
    }
   },
    typingMessage({ message, roomId }){
      // console.log(message);
      // console.log(roomId)
    },
    validateSelection(elt){
      console.log(elt)
      this.query = elt.id;
    },
    chatUserSelected(){
     
   }
  },
  }
</script>