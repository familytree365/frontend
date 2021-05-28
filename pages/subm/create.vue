<template>
    <div>
        <div class="card">
            <header class="card-header">
                <h1 class="card-header-title">
                Create Subm
                </h1>
              <NuxtLink to="/subm" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
                <form>
                    <div class="field">
                      <label class="label">Group</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Group" v-model="subm.group"  >
                      </div>

                    </div>
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="subm.name"  :class="{ 'is-danger': $v.subm.name.$error }">
                      </div>
                      <p class="help" :class="{ 'is-danger': $v.subm.name.$error }" v-if="!$v.subm.name.required">Field is required</p>
                    </div>
                    <div class="field">
                      <label class="label">addr</label>
                      <div class="control">
                        <v-select label="adr1"  v-model="subm.addr_id" :reduce="subm => subm.id" :options="address"></v-select>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Rin</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Rin" v-model="subm.rin">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">rfn</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="rfn" v-model="subm.rfn" >
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Lang</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Lang" v-model="subm.lang">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Email" v-model="subm.email">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Phone" v-model="subm.phon">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Fax</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Fax" v-model="subm.fax">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">www</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="www" v-model="subm.www">
                      </div>
                    </div>
                    <div class="field is-grouped">
                      <div class="control">
                        <button  @click.prevent="save()" class="button is-link has-background-primary">Submit</button>
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
            subm: {
                group: "",
                name: "",
                addr_id: "",
                rin: "",
                rfn: "",
                lang: "",
                email: "",
                phon: "",
                fax: "",
                www: "",
            },
            options : [
              {
                id: 1,
                name: "HTML5",
              },
              {
                id: 2,
                name: "HTML5",
              },
              {
                id: 3,
                name: "HTML5",
              },
            ],
        };
    },
    validations: {
            subm: {
                name: {
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
              this.$axios.$post('/api/subm', this.subm)
                  .then(response => ( this.$router.push('/subm') ))
                  .catch(error => {
                  });
            }
        },
         async getAddress() {
            const response = await this.$axios.$get("/api/addrname")

                this.address = response;
        },
    },
    created() {
        this.getAddress()
    }
}
</script>
