<template>

    <div>
        <div class="columns is-variable is-5 is-desktop is-flex-desktop-only ai--s">

            <!-- Post Content Column -->
            <div class="column is-flex-desktop-only ai--s">

                <!-- Title -->
                <h1 class="mt-4">{{forumtopic.title}}</h1>
                <p>
                    Posted
                    by
                    <a href="#">{{forumtopic.author.first_name}}</a>
                    on {{forumtopic.created_at | formatDate}}
                </p>

                <hr>

                <!-- Post Content -->
                <p class="lead" v-html="forumtopic.content"></p>

                <hr>

                <!-- Single Comment -->
                <div class="media mb-4 ml-5" v-for="post in forumtopic.posts">
                    <div class="media-body">
                        <h5 class="mt-0 has-text-weight-bold">{{post.author.first_name}}</h5>
                        <p v-html="post.content"></p>
                    </div>
                </div>

                <!-- Comments Form -->
                <div class="card my-4">
                    <div class="card-body">
                        <form>
                            <div class="columns is-flex-desktop-only ai--s">
                                <div class="column is-9 ai--s">
                                    <div class="field my-2">
                                        <label class="label">Leave a Comment:</label>
                                        <div class="control">
                                            <ckeditor :editor="editor" v-model="forumpost.content" :config="editorConfig"></ckeditor>
                                        </div>
                                        <p class="help" :class="{ 'is-danger': $v.forumpost.content.$error }" v-if="!$v.forumpost.content.required">Field is required</p>
                                    </div>
                                </div>
                                <div class="column is-3 ai--s">
                                    <div class="field is-grouped my-6">
                                        <div class="control">
                                            <button @click.prevent="addComment()"  class="button is-link has-background-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

                <!-- Comment with nested comments -->
                <!--                <div class="media mb-4 ml-5">
                                    <div class="media-body">
                                        <h4 class="mt-0 has-text-weight-bold">Commenter Name</h4>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                                        <div class="media mt-4">
                                            <div class="media-body">
                                                <h5 class="mt-0">Commenter Name</h5>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>

                                        <div class="media mt-4">
                                            <div class="media-body">
                                                <h5 class="mt-0">Commenter Name</h5>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>

                                    </div>
                                </div>-->

            </div>

        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import io from 'socket.io-client';
    import CKEditor from '@ckeditor/ckeditor5-vue2';
    import InlineEditor from '@ckeditor/ckeditor5-build-inline';
    import { mapGetters } from 'vuex'
    import Echo from 'laravel-echo'
            window.io = require('socket.io-client')
//    window.Echo = new Echo({
//        broadcaster: 'socket.io',
//        host: 'http://localhost:6001'
//    })
//
//    var socket = io('http://localhost:6001');

    export default {
        layout: 'auth',
        computed: {
             ...mapGetters([
              'isAuthenticated',
              'loggedInUser','loggedInUser'])
        },
        components: {
            // Use the <ckeditor> component in this view.
            ckeditor: CKEditor.component,
        },
        data() {
            return {
                forumtopic: '',
                forumcategory: [],
                forumpost: {
                    topic_id: '',
                    content: ''
                },
                editor: InlineEditor,
                editorConfig: {
                    language: 'en',
                }
            }
        },
        validations: {
            forumpost: {
                content: {
                    required
                }
            },
        },
        methods: {
            addComment() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log("fail")
                } else {
                    this.forumpost.topic_id = this.forumtopic.id
                    this.$axios.$post('/api/forumpost', this.forumpost)
                            .then(response => {
                                console.log(response)
                                this.$router.push('/forum')
                            })
                            .catch(error => {
                            });
                }
            },

        },
        mounted() {
            //socket.emit('ChatMessageSentEvent');
//            socket.on('PostAdded', (data) => {
//                console.log("New message sent...");
//                console.log(data);
//                //this.messages = [...this.messages, data];
//                // you can also do this.messages.push(data)
//            });
        },
        async asyncData( { $axios, params }) {
            const forumtopic = await $axios.$get('/api/forumtopic/' + params.id)
            const forumcategory = await $axios.$get('/api/forumcategory')
            return {forumtopic: forumtopic, forumcategory: forumcategory}
        }
    }
</script>

<style>

</style>
