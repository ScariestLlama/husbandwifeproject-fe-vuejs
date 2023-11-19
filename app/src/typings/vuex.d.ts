// In a typings/vuex.d.ts file
import { Store } from 'vuex';
import { State } from './store'; // import the type you've defined for your state

declare module 'vue/types/vue' {
  interface Vue {
    $store: Store<State>;
  }
}