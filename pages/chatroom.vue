<template>

<div>
        <div class="columns is-variable is-5 is-desktop is-flex-desktop-only ai--s">
            <div class="column is-4 is-flex-desktop-only ai--s">               
                <div class="card has-background-white has-text-black">
                    <div class="card-header">
                        <div class="card-header-title has-text-black">
                            Chats List {{ loggedInUser.first_name }}
                              <button  @click="showNewChatForm()" class="pull-right">
                                +
                              </button>
                        </div>
                    </div>
                    <div class="card-content">
                        <ul class="">
                            <li v-for="chat in chats">
                                <a href="#" class="clearfix" @click="loadChatDetails(chat.id)">
                                    <!-- <img src="~assets/images/avatar.jpg" alt="" class="img-circle">-->
                                    <div class="friend-name">	
                                        <strong>{{chat.chatLabel}}</strong>
                                    </div>
                                    <div class="last-message text-muted">{{chat.lastMessage ? chat.lastMessage.message : ''}}</div>
                                    <small class="time text-muted">{{chat.lastMessage ? (chat.lastMessage.created_at) : ''}}</small>
                                    <!-- <small class="chat-alert label label-danger">1</small> -->
                                </a>
                            </li>                                          
                        </ul>
                    </div>
                </div>

            </div>
            <div class="column is-7">
                <div class="card has-background-white has-text-black" v-if="showNewChatPage">
                    <div class="card-header">
                        <div class="card-header-title has-text-black">
                            New Chat
                        </div>
                    </div>
                    <div class="card-content">
                      
                        <form @submit.prevent="startChat">
                            <input type="text" placeholder="who are you looking for?" v-model="query" v-on:keyup="autoComplete" class="form-control"><button>start</button>
                            <div class="panel-footer" v-if="results.length">
                            <ul class="list-group">
                              <li class="list-group-item" v-for="result in results">
                              <a href = "javascript:;" @click="chatUserSelected(result)">{{ result.first_name + ' ' + result.last_name}}</a>
                              </li>
                            </ul>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card has-background-white has-text-black" v-if="!showNewChatPage && selectedChat">
                    <div class="card-header">
                        <div class="card-header-title has-text-black">
                            Chat content
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="messages" v-for="(msg, index) in messages" :key="index">
                            <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
                        </div>
                        <ul class="chat">
                            <li class="is-flex jc--sb left clearfix" v-for="message in selectedChatMessages">
                                <span class="chat-img pull-left">
                                    <!--<img src="https://bootdey.com/img/Content/user_3.jpg" alt="User Avatar">-->
                                </span>
                                <div class="chat-body clearfix">
                                    <div class="header">
                                        <strong class="primary-font">{{message.sender.first_name}}</strong>
                                        <!--<small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 12 mins ago</small>-->
                                    </div>
                                    <p>
                                        {{message.message}}
                                    </p>
                                </div>
                            </li>                
                        </ul>
                        <form @submit.prevent="sendMessage">
                            <input id="message" v-model="message" autocomplete="off" /><button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import io from 'socket.io-client';
import { mapGetters } from 'vuex'
import Echo from 'laravel-echo'
import Cookies from 'js-cookie'
window.io = require('socket.io-client')
window.Echo = new Echo({
  broadcaster: 'socket.io',
  host: 'http://localhost:6001',
  auth: {
        headers: {
          Authorization: `Bearer ${Cookies.get('XSRF-TOKEN')}`
        }
    }
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
      messages: [],
      selectedChat: null,
      selectedChatMessages: [],
      showNewChatPage: true,
      query: '',
      results: [],
      chatUser: null
    }
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      let chatMessage = {
        "message": this.message,
        "chat_id": this.selectedChat
      }
      this.$axios.$post('/api/chatmessages', chatMessage)
        .then(response => {
          console.log(response);
          this.message = '';
          this.loadChatDetails(this.selectedChat);
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
    },
    startChat(e) {
      e.preventDefault();
      let chatObject = {
        chat_type:'private',
        chat_with: this.chatUser.id
      }
      this.$axios.$post('/api/chats', chatObject)
        .then(response => {
          console.log(response);
          this.loadChatDetails(response.id);
          this.loadChats();
        })
        .catch(error => {
          this.error = true;
          this.message = error.response.data.message;
          this.errors = error.response.data.errors;
        });
    },
    loadChats() {      
      this.$axios.$get('/api/chats')
        .then(response => {
          console.log(response);
          this.chats = response;
        })
        .catch(error => {
          this.error = true;
          this.message = error.response.data.message;
          this.errors = error.response.data.errors;
        });
    },
    loadChatDetails(chatId) {   
      this.selectedChat = chatId;
      this.showNewChatPage = false;
      this.$axios.$get('/api/chats/' + chatId)
        .then(response => {
          console.log(response);
          this.selectedChatMessages = response.chat_messages;
          window.Echo.private('chats.' + response.id)
          .listen('.NewMessage', (e) => {
              console.log("New message ");
              console.log(e);
              this.selectedChatMessages.push(e.message);
              console.log(this.messages);
          });
        })
        .catch(error => {
          this.error = true;
          this.message = error.response.data.message;
          this.errors = error.response.data.errors;
        });
    },
    showNewChatForm(){
      this.showNewChatPage = true;
      this.query = '';
      this.chatUser = null;
      this.results = [];
    },
    autoComplete(){
    this.results = [];
    if(this.query.length > 2){
     this.$axios.$get('/api/chat/user/search',{params: {query: this.query}})
     .then(response => {
      this.results = response;
     });
    }
   },
   chatUserSelected(chatUser){
     this.query = chatUser.first_name + ' ' + chatUser.last_name;
      this.chatUser = chatUser;
      this.results = [];
   }
   ,
   triggerNotif(){
     this.$axios.$get('/api/t')
     .then(response => {
      console.log(response);
     });
   },
  },
  mounted() {
    console.log(this.loggedInUser)
    this.loadChats();
    //this.triggerNotif();

    // window.Echo.join('chats.1')
    // .here((users) => {
    //     //
    // })
    // .joining((user) => {
    //     console.log(user.name);
    // })
    // .leaving((user) => {
    //     console.log(user.name);
    // })
    // .listen('.message.created', function(e){
    //     console.log("New message ");
    //     console.log(e);
    //   })
    // .error((error) => {
    //     console.error(error);
    // });

      // .listen('.message.created', function(e){
      //   console.log("New message ");
      //   console.log(e);
      // })
    //socket.emit('ChatMessageSentEvent');
    // socket.on('.message.created', (data) => {
    //   console.log("New message sent...");
    //   console.log(data);
    //   //this.messages = [...this.messages, data];
    //   // you can also do this.messages.push(data)
    // });
  },
  // async asyncData( { $axios, params }) {
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
<style>    
    body { font: 13px Helvetica, Arial; }
    form { padding: 3px; position: relative; bottom: 0; width: 100%; }
    form input { padding: 10px; width: 90%; margin-right: 0.5%; }
    form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }


    .friend-list {
        list-style: none;
        margin-left: -40px;
    }

    .friend-list li {
        border-bottom: 1px solid #eee;
    }

    .friend-list li a img {
        float: left;
        width: 45px;
        height: 45px;
        margin-right: 10px;
    }

    .friend-list li a {
        position: relative;
        display: block;
        padding: 10px;
        transition: all .2s ease;
        -webkit-transition: all .2s ease;
        -moz-transition: all .2s ease;
        -ms-transition: all .2s ease;
        -o-transition: all .2s ease;
    }

    .friend-list li.active a {
        background-color: #f1f5fc;
    }

    .friend-list li a .friend-name, 
    .friend-list li a .friend-name:hover {
        color: #777;
    }

    .friend-list li a .last-message {
        width: 65%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .friend-list li a .time {
        position: absolute;
        top: 10px;
        right: 8px;
    }

    small, .small {
        font-size: 85%;
    }

    .friend-list li a .chat-alert {
        position: absolute;
        right: 8px;
        top: 27px;
        font-size: 10px;
        padding: 3px 5px;
    }

    .chat-message {
        padding: 60px 20px 115px;
    }

    .chat {
        list-style: none;
        margin: 0;
    }

    .chat-message{
        background: #f9f9f9;  
    }

    .chat li img {
        width: 45px;
        height: 45px;
        border-radius: 50em;
        -moz-border-radius: 50em;
        -webkit-border-radius: 50em;
    }

    img {
        max-width: 100%;
    }

    .chat-body {
        padding-bottom: 20px;
    }

    .chat li.left .chat-body {
        margin-left: 70px;
        background-color: #fff;
    }

    .chat li .chat-body {
        position: relative;
        font-size: 11px;
        padding: 10px;
        border: 1px solid #f1f5fc;
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
        -moz-box-shadow: 0 1px 1px rgba(0,0,0,.05);
        -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }

    .chat li .chat-body .header {
        padding-bottom: 5px;
        border-bottom: 1px solid #f1f5fc;
    }

    .chat li .chat-body p {
        margin: 0;
    }

    .chat li.left .chat-body:before {
        position: absolute;
        top: 10px;
        left: -8px;
        display: inline-block;
        background: #fff;
        width: 16px;
        height: 16px;
        border-top: 1px solid #f1f5fc;
        border-left: 1px solid #f1f5fc;
        content: '';
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
    }

    .chat li.right .chat-body:before {
        position: absolute;
        top: 10px;
        right: -8px;
        display: inline-block;
        background: #fff;
        width: 16px;
        height: 16px;
        border-top: 1px solid #f1f5fc;
        border-right: 1px solid #f1f5fc;
        content: '';
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
    }

    .chat li {
        margin: 15px 0;
    }

    .chat li.right .chat-body {
        margin-right: 70px;
        background-color: #fff;
    }

    .chat-box {
        /*
          position: fixed;
          bottom: 0;
          left: 444px;
          right: 0;
        */
        padding: 15px;
        border-top: 1px solid #eee;
        transition: all .5s ease;
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        -ms-transition: all .5s ease;
        -o-transition: all .5s ease;
    }


    a:hover, a:active, a:focus {
        text-decoration: none;
        outline: 0;
    }
</style>
