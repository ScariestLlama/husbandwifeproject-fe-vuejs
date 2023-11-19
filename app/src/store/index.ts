import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

// Define the state interface
interface State {
  count: number;
}

// Create the store options with typed state
const storeOptions: StoreOptions<State> = {
  state: {
    count: 0, // Initial state for the count
  },
  getters: {
    // Define a getter to get the current count
    currentCount: (state) => state.count,
  },
  mutations: {
    // Define a mutation to increment the count
    increment(state) {
      state.count++;
    },
  },
  actions: {
    // Define an action to increment the count after a delay
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
  modules: {
    // If you have other modules, they would be added here
  },
};

// Create and export the Vuex store
export default new Vuex.Store<State>(storeOptions);