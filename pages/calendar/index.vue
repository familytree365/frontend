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
                    <vue-cal style="height: 600px" :selected-date="selectedDate"
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
                  <p class="modal-card-title">Event Editor</p>
                  <button class="delete" aria-label="close" v-on:click="showEventCreationDialog = false"></button>
                </header>
                <section class="modal-card-body">
                  <div class="field">
                    <div class="field">
                      <label class="label">Title</label>
                      <div class="control">
                        <input class="input" type="text" v-model="calendar_event.title" placeholder="Event title...">
                      </div>
                    </div>                  
                    <div class="field-body">
                      <div class="flex-1">
                        <label class="label">Start</label>
                        <v-date-picker v-model="calendar_event.start" mode="dateTime" is24hr :model-config="modelConfig">
                          <template v-slot="{ inputValue, inputEvents }">
                            <input
                              class="input"
                              :value="inputValue"
                              v-on="inputEvents"
                            />
                          </template>
                        </v-date-picker>                                        
                      </div>
                      <div class="flex-1">
                        <label class="label">End</label>
                        <v-date-picker v-model="calendar_event.end" mode="dateTime" is24hr :model-config="modelConfig">
                          <template v-slot="{ inputValue, inputEvents }">
                            <input
                              class="input"
                              :value="inputValue"
                              v-on="inputEvents"
                            />
                          </template>
                        </v-date-picker>                    
                      </div>                                                        
                    </div>
                    <div class="field">
                      <label class="label">Content</label>
                      <div class="control">
                        <textarea class="textarea input" type="text" v-model="calendar_event.content" rows="3" placeholder="Content here..."></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="field">                    
                    <label class="label">Event Type</label>
                    <div class="event_group">
                      <div class="field">
                        <label class="event_item">
                          <input type="radio" id="sports" v-model="calendar_event.class" name="event_class" value="sport">
                          Sports
                        </label>
                      </div>
                      <div class="field">
                        <label class="event_item">
                          <input type="radio" id="leisure" v-model="calendar_event.class" name="event_class" value="leisure">
                          Leisure
                        </label>
                      </div>
                      <div class="field">
                        <label class="event_item">
                          <input type="radio" id="health" v-model="calendar_event.class" name="event_class" value="health">
                          Health
                        </label>
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
      var today = new Date();
      
      return {
          isShowModal: false,
          selectedEvent: {
            title : null,
          },
          calendar_event : {
            title : null,
            content: null,
            start: null,
            end: null,
            class: null
          },
          selectedDate : new Date(today.getFullYear(), today.getMonth(), today.getDate()),
          modelConfig: {
                  type: 'string',
                  mask: 'YYYY-MM-DD HH:mm', // Uses 'iso' if missing
              },
          showEventCreationDialog: false,
          eventsCssClasses: ['leisure', 'sport', 'health'],
          events: [            
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
      async save() {
        if(this.calendar_event.title == null){
          alert('Please input title');
          return;
        }
        if(this.calendar_event.start == null){
          alert('Please select the start date & time');
          return;
        }
        if(this.calendar_event.end == null){
          alert('Please select the end date & time');
          return;
        }
        if(this.calendar_event.class == null)
        {
          alert('Please select the type of event!');
          return;
        }        

        const response = await this.$axios.$post('/api/calendar_event', this.calendar_event);                
        const data = await response;        

        this.events = [...this.events, data];                
        this.calendar_event.title = null;
        this.calendar_event.content = null;
        this.calendar_event.start = null;
        this.calendar_event.end = null;
        this.calendar_event.class = null;

        this.showEventCreationDialog = false
      },
      async getevents() {
        var updated_events = []
        const response = await this.$axios.$get("/api/calendar_event")
        let tmp = response;
        for(let i=0; i<tmp.length; i++)
        {          
          let event = {
            "start" : tmp[i].start_date + ' ' + tmp[i].start_time,
            "end" : tmp[i].end_date + ' ' + tmp[i].end_time,
            "title" : tmp[i].title,
            "icon" : 'shopping_cart',
            "content" : tmp[i].body,
            "contentFull" : tmp[i].body,
            "class" : tmp[i].class
          };
          updated_events.push(event);          
        }
        this.events = updated_events;        
      },
    },
    async created() {
      await this.getevents()
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
.vuecal__event.health {background-color: rgba(102, 255, 140, 0.9);border: 1px solid rgb(69, 236, 53);color: #fff;}
.vuecal--month-view .vuecal__cell {height: 80px;}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}
</style>
