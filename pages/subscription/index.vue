<template>
    <div>
        <loading :active.sync="isLoading" :color="color" :background-color="backgroundColor"> </loading>
                    <div class="column is-12">
                        <h1 class="is-size-4 has-text-black">
                            <span class="has-text-weight-medium">Subscription</span>
                        </h1>
                    </div>
                    <div class="column is-12">
                        <nav class="breadcrumb mt-1 mb-0" aria-label="breadcrumbs">
                            <ul>
                                <li><NuxtLink class="is-size-7 has-text-weight-medium has-text-link"
                                        to="dashboard">Home</NuxtLink></li>
                                <li class="is-size-7 has-text-weight-medium is-active"><a href=""
                                        aria-current="page">Subscription</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="columns is-variable is-3 is-desktop">
                    <div class="column is-9">
                        <div class="columns is-multiline is-variable is-3">
                          <div class="columns is-gapless is-multiline is-mobile">
                            <div class="currency-div">
                              <span>Currency: </span>
                              <div class="currency-inside-div">
                                <v-select :options="currency_options" :placeholder="selected_currency"
                                          @input="selectCurrency" :clearable="false"/>
                              </div>
                            </div>
                            <div class="column is-6" v-for="plan in plans" :key="plan.id">
                              <div class="card-content">
                                {{ plan.title.replace('$Amount',
                                (plan.amount * selected_currency_rate).toFixed(2))
                                .replace('$Currency', selected_currency_symbol) }}
                              </div>
                            </div>
                            <div class="column is-6" v-for="plan in plans" :key="plan.id">
                                <div class="card has-background-white has-text-black">
                                    <div class="card-content">
                                        <div class="is-size-6 has-text-black is-uppercase has-text-weight-bold">{{ plan.title }}</div>
                                        <div class="is-size-7 has-text-black has-text-weight-regular">For <span class="has-text-weight-medium"> Unlimited Trees </span> Yearly</div>
                                        <NuxtLink :to="'/subscription/payment/' + plan.id" class="button is-size-7 is-uppercase has-text-white has-background-primary has-text-weight-medium is-light mt-4">Subscribe</NuxtLink>
                                        <div
                                            class="card-footer-item"
                                            v-if="has_payment_method && plan.subscribed === false">
                                            <button @click="open(plan.id)"
                                                class="button">
                                                Subscribe1
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="column is-3">
                        <div class="columns is-gapless is-multiline">
                            <div class="card plan_info_block has-background-primary has-text-black">
                                <img src="~assets/images/plan_info_img.svg" alt="">
                                <div class="card-content">
                                    <div class="has-text-black has-text-weight-medium is-flex plans_info mb-5">
                                        <i class="fas fa-check mr-2 mt-1"></i>
                                        <p class="is-size-7">Family Tree 365 is a secure online website
                                          which you can use to create your own family tree(s) with.</p>
                                    </div>
                                    <div class="has-text-black has-text-weight-medium is-flex plans_info mb-5">
                                        <i class="fas fa-check mr-2 mt-1"></i>
                                        <p class="is-size-7">It has a tree viewer and DNA support
                                          more features are planned such as the inclusion of archive databases and
                                          collections.</p>
                                    </div>
                                    <div class="has-text-black has-text-weight-medium is-flex plans_info">
                                        <i class="fas fa-check mr-2 mt-1"></i>
                                        <p class="is-size-7">Set up your first family tree free of charge.
                                          We offer different pricing levels with optional subscriptions if you need to create extra trees.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

export default {
    layout: 'auth',
    components: {
        Loading
    },
    data() {
        return {
            error: false,
            message: "",
            isLoading: true,
            fullPage: true,
            color: '#4fcf8d',
            backgroundColor: '#ffffff',
            response : null,
            has_payment_method: false,
            plans: [],
            selectedPlanId: null,
           currency_options: ['USD', 'GBP', 'EUR'],
           selected_currency: 'GBP',
           selected_currency_symbol: '£',
           selected_currency_rate: 1,
        };
    },
    methods: {
        handleSelectedFiles(event) {
            console.log(this.$refs.fileInput.files[0])
            this.file = this.$refs.fileInput.files[0]
            this.fileName = this.file.name

        },
        submit() {

        },
        loadPlans() {
            this.$axios.$get("/api/get-plans")
            .then(response => {
                this.getCurrentSubscription();
                this.plans = response.data;
                this.isLoading = false

            })
        },
         getCurrentSubscription() {
            this.$axios.$get('/api/get-current-subscription')
                .then(response => {
                    console.log(response.has_payment_method)
                    this.has_payment_method = response.has_payment_method;
                    if (response.subscribed) {
                        this.plans
                            .find(plan => plan.id === response.data.plan_id)
                            .subscribed = true;
                        this.plans
                            .find(plan => plan.id !== response.data.plan_id)
                            .subscribed = false;
                    }
                });
        },
        subscribe() {
          this.$axios.post('/api/subscribe', {
                plan_id: this.selectedPlanId,
            })
                .then(response => {
                    if (response.data.success) {
                        this.isActive = false;
                 //       this.$toastr.success('Subscribe Successfully!');
                        this.getCurrentSubscription();
                    }
                });
        },
    },
  selectCurrency(currency) {
    const url = 'https://api.currencyfreaks.com/latest?apikey=b864b83a27f5411c804e70762945b59a';
    this.$axios.get(url)
      .then(res => {
        switch (currency) {
          case 'GBP':
            this.selected_currency_symbol = '£';
            this.selected_currency_rate = 1;
            break;
          case 'USD':
            this.selected_currency_symbol = '$';
            this.selected_currency_rate = 1 / res.data.rates.GBP;
            break;
          case 'EUR':
            this.selected_currency_symbol = '€';
            this.selected_currency_rate = res.data.rates.EUR / res.data.rates.GBP;
            break;
          default:
            this.selected_currency_symbol = '£';
            this.selected_currency_rate = 1;
            break;
        }
      })
  .catch(() => { });
  },
};
</script>
<style scoped>
    @import '~/assets/css/admin.css';
    @import "~node_modules/vue-select/dist/vue-select.css";
</style>

