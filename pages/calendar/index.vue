<template>
    <div>
        <div class="columns is-gapless is-multiline is-mobile">
          <div class="column is-12">
              <h1 class="is-size-4 has-text-black">
                  <span class="has-text-weight-medium">Calendar</span>
              </h1>
          </div>
          <div class="column is-12">
              <nav class="breadcrumb mt-1 mb-0" aria-label="breadcrumbs">
                  <ul>
                      <li><a class="is-size-7 has-text-weight-medium has-text-link"
                              href="/dashboard">Home</a></li>
                      <li class="is-size-7 has-text-weight-medium is-active"><a href="/dashboard"
                              aria-current="page">Calendar</a></li>
                  </ul>
              </nav>
          </div>
        </div>
        <div class="columns is-variable is-3 is-desktop is-flex-desktop-only ai--s" style="height: 750px;">
            <div class="column is-3 is-flex-desktop-only ai--s">
                <div class="columns is-gapless is-multiline is-flex-desktop-only ai--s" style="height: 100%;">
                    <div class="column is-12 is-flex-desktop-only ai--s">
                        <div class="card has-background-white has-text-black">
                            <div class="card-header">
                                <div class="card-header-title has-text-black">
                                    Calendar
                                </div>
                            </div>
                            <div class="card-content is-flex jc--sb">
                              <vue-cal
                                class="vuecal--rounded-theme vuecal--green-theme"
                                xsmall
                                hide-view-selector
                                :time="false"
                                active-view="month"
                                :disable-views="['week']"
                                style="width: 270px;height: 300px">
                              </vue-cal>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-9">
                <div class="card has-background-white has-text-black">
                    <div class="card-header">
                        <div class="card-header-title has-text-black">
                            Calendar
                        </div>
                    </div>
                    <div class="card-content is-flex jc--sb">
                    <vue-cal style="height: 600px" selected-date="2018-11-19"
                      :time-from="9 * 60"
                      :time-to="23 * 60"
                      events-on-month-view="short"
                      :editable-events="{ title: true, drag: false, resize: true, delete: true, create: false }"
                      :events="events"
                      editable-events
                      :on-event-create="onEventCreate"
                      />
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" v-bind:class="{ 'is-active': showEventCreationDialog }">
            <div class="modal-background" v-on:click="showEventCreationDialog = false"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close" v-on:click="showEventCreationDialog = false"></button>
              </header>
              <section class="modal-card-body">
                <div class="field is-horizontal">
                  <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                      <input class="input" type="text" v-model="calendar_event.title" placeholder="Text input">
                    </div>
                  </div>
                  <div class="field-body">
                    <div class="field">
                        <v-date-picker v-model="calendar_event.start" mode="dateTime" is24hr :model-config="modelConfig">
                          <template v-slot="{ inputValue, inputEvents }">
                            <input
                              class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                              :value="inputValue"
                              v-on="inputEvents"
                            />
                          </template>
                        </v-date-picker>
                    </div>
                    <div class="field">
                      <v-date-picker v-model="calendar_event.start" mode="dateTime" is24hr :model-config="modelConfig">
                        <template v-slot="{ inputValue, inputEvents }">
                          <input
                            class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                            :value="inputValue"
                            v-on="inputEvents"
                          />
                        </template>
                      </v-date-picker>
                  </div>
                  </div>
                </div>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-success" @click.prevent="save()">Save changes</button>
                <button class="button" v-on:click="showEventCreationDialog = false">Cancel</button>
              </footer>
            </div>
          </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { mapGetters } from 'vuex'
export default {
    layout: 'auth',
    middleware: 'permission',
    meta: {
        permission: { name: 'calendar menu' }
    },

    components: { VueCal },
    data() {
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      return {
          isShowModal: false,
          selectedEvent: {
            title : null,
          },
          calendar_event : {
            title : null,
          },
           modelConfig: {
                    type: 'string',
                    mask: 'YYYY-MM-DD HH:mm', // Uses 'iso' if missing
                },
          showEventCreationDialog: false,
          eventsCssClasses: ['leisure', 'sport', 'health'],
          events: [
            {
              start: '2018-11-20 14:00',
              end: '2018-11-20 18:00',
              title: 'Need to go shopping',
              icon: 'shopping_cart', // Custom attribute.
              content: 'Click to see my shopping list',
              contentFull: 'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
              class: 'leisure'
            },
            {
              start: '2018-11-22 10:00',
              end: '2018-11-22 15:00',
              title: 'Golf with John',
              icon: 'golf_course', // Custom attribute.
              content: 'Do I need to tell how many holes?',
              contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
              class: 'sport'
            }
          ]
      }
    },
    computed: {
         ...mapGetters([
              'isAuthenticated',
              'loggedInUser','loggedInUser'])
    },
    methods: {
      onEventCreate (event, deleteEventFunction) {
        console.log('fgfg')
        this.selectedEvent = event
        this.showEventCreationDialog = true
        this.deleteEventFunction = deleteEventFunction

        return event
      },
      cancelEventCreation () {
        this.closeCreationDialog()
        this.deleteEventFunction()
      },
      closeCreationDialog () {
        this.showEventCreationDialog = false
        this.selectedEvent = {}
      },
      save() {
        this.$axios.$post('/api/calendar_event', this.calendar_event)
                .then(response => this.showEventCreationDialog = false )
                .catch(error => {
                });
      },
      async getevents() {
        const response = await this.$axios.$get("/api/calendar_event")

            this.events = response;
      },
    },
    created() {
      //this.getevents
    }
}
</script>
<style>
  /* Green-theme. */
.vuecal__menu, .vuecal__cell-events-count {background-color: #42b983;}
.vuecal__title-bar {background-color: #e4f5ef;}
.vuecal__cell--today, .vuecal__cell--current {background-color: rgba(240, 240, 255, 0.4);}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgba(235, 255, 245, 0.4);}
.vuecal__cell--selected:before {border-color: rgba(66, 185, 131, 0.5);}
/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {background-color: rgba(195, 255, 225, 0.5);}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);}

.vuecal__event.leisure {background-color: rgba(253, 156, 66, 0.9);border: 1px solid rgb(233, 136, 46);color: #fff;}
.vuecal__event.sport {background-color: rgba(255, 102, 102, 0.9);border: 1px solid rgb(235, 82, 82);color: #fff;}
.vuecal--month-view .vuecal__cell {height: 80px;}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}
</style>
