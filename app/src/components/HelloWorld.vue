<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, Getter, State } from 'vuex-class';

@Component
export default class HelloWorld extends Vue {

  @State('count') readonly count!: number;

  @Getter('currentCount') currentCount!: number;

  @Action('incrementAsync') incrementAsync!: () => void;

  increment() {
    this.$store.commit('increment');
  }

  // Data properties are class properties
  message: string = 'Hello World!';

  // Methods can be added as class methods
  greet(): void {
    console.log(this.message);
  }

  // Lifecycle hooks are class methods
  mounted(): void {
    this.greet();
  }
}
</script>

<template>
  <div class="hello-world">
    {{ message }}
    <p>Count (From State): {{ count }}</p>
    <p>Current Count (From Getter): {{ currentCount }}</p>
    <button @click="increment">Increment</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<style scoped>
.hello-world {
  font-size: 2em;
  text-align: center;
}
</style>
