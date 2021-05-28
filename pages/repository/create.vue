<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Repository
                </h1>
              <NuxtLink to="/repository" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Repo</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Repo" v-model="repository.repo"  :class="{ 'is-danger': $v.repository.repo.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.repository.repo.$error }" v-if="!$v.repository.repo.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="repository.name"  :class="{ 'is-danger': $v.repository.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.repository.name.$error }" v-if="!$v.repository.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Addr Id</label>
                      <div class="control">
                        <v-select label="adr1"  v-model="repository.addr_id" :reduce="repository => repository.id" :options="address" :class="{ 'is-danger': $v.repository.addr_id.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.repository.addr_id.$error }" v-if="!$v.repository.addr_id.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Rin</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Rin" v-model="repository.rin" >
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="repository.email" :class="{ 'is-danger': $v.repository.email.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.repository.email.$error }" v-if="!$v.repository.email.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="repository.phon" :class="{ 'is-danger': $v.repository.phon.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.repository.phon.$error }" v-if="!$v.repository.phon.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Fax</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Fax" v-model="repository.fax">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">www</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="www" v-model="repository.www">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Description</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Description" v-model="repository.description">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Type ID</label>
                      <div class="control">
                        <v-select label="name"  v-model="repository.type_id" :reduce="repository => repository.id" :options="types" :class="{ 'is-danger': $v.repository.type_id.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.repository.type_id.$error }" v-if="!$v.repository.type_id.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">Is Active</label>
                      <div class="control">
                         <v-select label="name"  v-model="repository.is_active" :reduce="repository => repository.id" :options="status" :class="{ 'is-danger': $v.repository.is_active.$error }"></v-select>
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.repository.is_active.$error }" v-if="!$v.repository.is_active.required">Field is required</p>
                    </div>
                    <div class="field is-grouped">
                      <div class="control">
                        <button @click.prevent="save()" class="button is-link has-background-primary">Submit</button>
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
            name: '',
            age: 0,
            address: [],
            types: [],
            repository: {
                repo: "",
                name: "",
                addr_id: "",
                rin: "",
                email: "",
                phon: "",
                fax: "",
                www: "",
                description: "",
                type_id: "",
                is_active: "",
            },
            status : [
              {
                id: 1,
                name: "Active",
              },
              {
                id: 0,
                name: "Inactive",
              },
            ],
        };
    },
    validations: {
            repository: {
                repo: {
                    required,
                },
                addr_id: {
                    required,
                },
                name: {
                    required,
                },
                email: {
                    required,
                },
                phon: {
                    required,
                },
                type_id: {
                    required,
                },
                is_active: {
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
              this.$axios.$post('/api/repository', this.repository)
                  .then(response => ( this.$router.push('/repository') ))
                  .catch(error => {
                  });
            }
        },
        async getAddress() {
            const response = await this.$axios.$get("/api/addrname")

                this.address = response;
        },
        async getType() {
            const response = await this.$axios.$get("/api/alltype")

                this.types = response;
        },
    },
    created() {
        this.getAddress()
        this.getType()
    }
}
</script>
