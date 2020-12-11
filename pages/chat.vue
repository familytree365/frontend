<template>

    <div>
        <div class="columns is-variable is-5 is-desktop is-flex-desktop-only ai--s">
            <div class="column is-4 is-flex-desktop-only ai--s">               
                        <div class="card has-background-white has-text-black">
                            <div class="card-header">
                                <div class="card-header-title has-text-black">
                                    Chats List
                                </div>
                            </div>
                            <div class="card-content">
                                <ul class="friend-list">
                                    <li class="active bounceInDown">
                                        <a href="#" class="clearfix">
                                            <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">
                                            <div class="friend-name">	
                                                <strong>John Doe</strong>
                                            </div>
                                            <div class="last-message text-muted">Hello, Are you there?</div>
                                            <small class="time text-muted">Just now</small>
                                            <small class="chat-alert label label-danger">1</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="clearfix">
                                            <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                                            <div class="friend-name">	
                                                <strong>Jane Doe</strong>
                                            </div>
                                            <div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                                            <small class="time text-muted">5 mins ago</small>
                                            <small class="chat-alert text-muted"><i class="fa fa-check"></i></small>
                                        </a>
                                    </li> 
                                    <li>
                                        <a href="#" class="clearfix">
                                            <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle">
                                            <div class="friend-name">	
                                                <strong>Kate</strong>
                                            </div>
                                            <div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                                            <small class="time text-muted">Yesterday</small>
                                            <small class="chat-alert text-muted"><i class="fa fa-reply"></i></small>
                                        </a>
                                    </li>  
                                    <li>
                                        <a href="#" class="clearfix">
                                            <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">
                                            <div class="friend-name">	
                                                <strong>Kate</strong>
                                            </div>
                                            <div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                                            <small class="time text-muted">Yesterday</small>
                                            <small class="chat-alert text-muted"><i class="fa fa-reply"></i></small>
                                        </a>
                                    </li>     
                                    <li>
                                        <a href="#" class="clearfix">
                                            <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                                            <div class="friend-name">	
                                                <strong>Kate</strong>
                                            </div>
                                            <div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                                            <small class="time text-muted">Yesterday</small>
                                            <small class="chat-alert text-muted"><i class="fa fa-reply"></i></small>
                                        </a>
                                    </li>        
                                    <li>
                                        <a href="#" class="clearfix">
                                            <img src="https://bootdey.com/img/Content/user_6.jpg" alt="" class="img-circle">
                                            <div class="friend-name">	
                                                <strong>Kate</strong>
                                            </div>
                                            <div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                                            <small class="time text-muted">Yesterday</small>
                                            <small class="chat-alert text-muted"><i class="fa fa-reply"></i></small>
                                        </a>
                                    </li>          
                                    <li>
                                        <a href="#" class="clearfix">
                                            <img src="https://bootdey.com/img/Content/user_5.jpg" alt="" class="img-circle">
                                            <div class="friend-name">	
                                                <strong>Kate</strong>
                                            </div>
                                            <div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                                            <small class="time text-muted">Yesterday</small>
                                            <small class="chat-alert text-muted"><i class="fa fa-reply"></i></small>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="clearfix">
                                            <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                                            <div class="friend-name">	
                                                <strong>Jane Doe</strong>
                                            </div>
                                            <div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                                            <small class="time text-muted">5 mins ago</small>
                                            <small class="chat-alert text-muted"><i class="fa fa-check"></i></small>
                                        </a>
                                    </li>                 
                                </ul>
                            </div>
                        </div>
                    
            </div>
            <div class="column is-7">
                <div class="card has-background-white has-text-black">
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
                            <li class="is-flex jc--sb left clearfix">
                                <span class="chat-img pull-left">
                                    <img src="https://bootdey.com/img/Content/user_3.jpg" alt="User Avatar">
                                </span>
                                <div class="chat-body clearfix">
                                    <div class="header">
                                        <strong class="primary-font">John Doe</strong>
                                        <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 12 mins ago</small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </li>
                            <li class="is-flex jc--sb right clearfix">                                
                                <div class="chat-body clearfix">
                                    <div class="header">
                                        <strong class="primary-font">Sarah</strong>
                                        <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 13 mins ago</small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. 
                                    </p>
                                </div>
                                <span class="chat-img pull-right">
                                    <img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar">
                                </span>
                            </li>
                            <li class="is-flex jc--sb left clearfix">
                                <span class="chat-img pull-left">
                                    <img src="https://bootdey.com/img/Content/user_3.jpg" alt="User Avatar">
                                </span>
                                <div class="chat-body clearfix">
                                    <div class="header">
                                        <strong class="primary-font">John Doe</strong>
                                        <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 12 mins ago</small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </li>
                            <li class="is-flex jc--sb right clearfix">                                
                                <div class="chat-body clearfix">
                                    <div class="header">
                                        <strong class="primary-font">Sarah</strong>
                                        <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 13 mins ago</small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. 
                                    </p>
                                </div>
                                <span class="chat-img pull-right">
                                    <img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar">
                                </span>
                            </li>                    
                            <li class="is-flex jc--sb left clearfix">
                                <span class="chat-img pull-left">
                                    <img src="https://bootdey.com/img/Content/user_3.jpg" alt="User Avatar">
                                </span>
                                <div class="chat-body clearfix">
                                    <div class="header">
                                        <strong class="primary-font">John Doe</strong>
                                        <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 12 mins ago</small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </li>
                            <li class="is-flex jc--sb right clearfix">                                
                                <div class="chat-body clearfix">
                                    <div class="header">
                                        <strong class="primary-font">Sarah</strong>
                                        <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 13 mins ago</small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. 
                                    </p>
                                </div>
                                <span class="chat-img pull-right">
                                    <img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar">
                                </span>
                            </li>
                            <li class="is-flex jc--sb right clearfix">                                
                                <div class="chat-body clearfix">
                                    <div class="header">
                                        <strong class="primary-font">Sarah</strong>
                                        <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 13 mins ago</small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. 
                                    </p>
                                </div>
                                <span class="chat-img pull-right">
                                    <img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar">
                                </span>
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

    export default {
        layout: 'auth',
        data() {
            return {
                user: '',
                message: '',
                chats: [],
                messages: [],
                socket: io('http://localhost:3002', {path: '/'})
            }
        },
        methods: {
            sendMessage(e) {
                e.preventDefault();

                this.socket.emit('SEND_MESSAGE', {
                    user: this.user,
                    message: this.message
                });
                this.message = ''
            }
        },
        mounted() {
            this.socket.on('MESSAGE', (data) => {
                this.messages = [...this.messages, data];
                // you can also do this.messages.push(data)
            });
        }
    }
</script>

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