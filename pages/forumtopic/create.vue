<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create Topic
                </h1>
                <NuxtLink to="/forum" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                        <label class="label">Category</label>
                        <div class="control">
                            <select class="input" placeholder="Category" v-model="forumtopic.category_id"  :class="{ 'is-danger': $v.forumtopic.category_id.$error }">
                                <option v-for="cat in forumcategory" :value="cat.id">{{ cat.name }}</option>
                            </select>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.forumtopic.category_id.$error }" v-if="!$v.forumtopic.category_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Title</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Title" v-model="forumtopic.title"  :class="{ 'is-danger': $v.forumtopic.title.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.forumtopic.title.$error }" v-if="!$v.forumtopic.title.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Content</label>
                        <div class="control">
                            <!--<textarea id="editor" :editor='editor' class="input" placeholder="Content" v-model="forumtopic.content"  :class="{ 'is-danger': $v.forumtopic.content.$error }"></textarea>-->
                            <ckeditor :editor="editor" v-model="forumtopic.content" :config="editorConfig"></ckeditor>
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.forumtopic.content.$error }" v-if="!$v.forumtopic.content.required">Field is required</p>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button @click.prevent="save()"  class="button is-link has-background-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import CKEditor from '@ckeditor/ckeditor5-vue2';
    import InlineEditor from '@ckeditor/ckeditor5-build-inline';

    export default {

        layout: 'auth',
        components: {
            // Use the <ckeditor> component in this view.
            ckeditor: CKEditor.component,
        },

        data() {
            return {
                error: false,
                message: "",
                title: '',
                age: 0,
                forumtopic: {
                    title: "",
                    category_id: "",
                    content: "",
                },
                editor: InlineEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    language: 'en',
                }
            };
        },
        validations: {
            forumtopic: {
                title: {
                    required
                },
                category_id: {
                    required
                },
                content: {
                    required
                }
            },
        },
        methods: {

            save() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log("fail")
                } else {
                    this.$axios.$post('/api/forumtopic', this.forumtopic)
                            .then(response => (this.$router.push('/forum')))
                            .catch(error => {
                            });
                }
            },
        },
        async asyncData( { $axios, params }) {
            const forumcategory = await $axios.$get('/api/forumcategory')
            return {forumcategory}
        },
    }
</script>
<style>
    .ck-editor__editable {
        min-height: 500px;
    }
</style>

