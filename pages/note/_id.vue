<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                    Create Note
                </h1>
                <NuxtLink to="/note" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                    <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form @click.prevent="save()">
                    <div class="field">
                        <label class="label">Gid</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Gid" v-model="note.gid"  :class="{ 'is-danger': $v.note.gid.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.note.gid.$error }" v-if="!$v.note.gid.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Note</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Note" v-model="note.note" :class="{ 'is-danger': $v.note.note.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.note.note.$error }" v-if="!$v.note.note.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Rin</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Rin" v-model="note.rin" :class="{ 'is-danger': $v.note.rin.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.note.rin.$error }" v-if="!$v.note.rin.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Name" v-model="note.name" :class="{ 'is-danger': $v.note.name.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.note.name.$error }" v-if="!$v.note.name.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Description" v-model="note.description" :class="{ 'is-danger': $v.note.description.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.note.description.$error }" v-if="!$v.note.description.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Is Active</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Is Active" v-model="note.is_active" :class="{ 'is-danger': $v.note.is_active.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.note.is_active.$error }" v-if="!$v.note.is_active.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Type Id</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Type Id" v-model="note.type_id" :class="{ 'is-danger': $v.note.type_id.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.note.type_id.$error }" v-if="!$v.note.type_id.required">Field is required</p>
                    </div>
                    <div class="field">
                        <label class="label">Group</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Group" v-model="note.group" :class="{ 'is-danger': $v.note.group.$error }">
                        </div>
                        <p class="help" :class="{ 'is-danger': $v.note.group.$error }" v-if="!$v.note.group.required">Field is required</p>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button  class="button is-link has-background-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    export default {
        layout: 'auth',
        data() {
            return {
                error: false,
                message: "",
                note: {
                    gid: "",
                    note: "",
                    rin: "",
                    name: "",
                    description: "",
                    is_active: "",
                    type_id: "",
                    group: "",
                }
            };
        },
        validations: {
            note: {
                gid: {
                    required,
                },
                note: {
                    required,
                },
                rin: {
                    required,
                },
                name: {
                    required,
                },
                description: {
                    required,
                },
                is_active: {
                    required,
                },
                group: {
                    required,
                },
            },
        },
        methods: {
            save() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log("fail")
                } else {
                    this.$axios.$put('/api/note/' + this.$route.params.id, this.note)
                            .then(response => (this.$router.push('/note')))
                            .catch(error => {
                            });
                }
            },
        },
        async asyncData( { $axios, params }) {
            const note = await $axios.$get('/api/note/' + params.id)
            return {note}
        }
    }
</script>
