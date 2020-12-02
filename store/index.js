import Vuex from "vuex";

export const state = () => ({
  person: {},
  people: {},
});

export const getters = {
  getPerson: (state) => state.person,
  getPeople: (state) => state.people,
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
};

export const mutations = {
  SET_PERSON(state, person) {
    state.person = person;
  },
  SET_PEOPLE(state, people) {
    state.people = people;
  },
};

export const actions = {
  loadPerson({ commit, state }, id) {
    const person = state.people.find(person => person.id == id)
    commit("SET_PERSON", person);
  },

  loadAccount({ commit, state }, id) {
    const account = state.accounts.find(account => account.id == id)
    commit("SET_ACCOUNT", account);
  },
  async loadPeople({ commit }) {
    const people = await this.$axios.$get("/api/person?start=0&length=10");
    commit("SET_PEOPLE", people);
  },
  async deletePeople({ commit, dispatch }, id) {
    this.$axios
      .$delete("/api/person/" + id)
      .then(response => ( this.$router.push('/people') )) 
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
