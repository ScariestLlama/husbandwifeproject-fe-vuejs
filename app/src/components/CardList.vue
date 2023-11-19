<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import api from '../services/card.api.service';

@Component
export default class CardList extends Vue {
  cards: any[] = [];

  mounted() {
    this.fetchCards();
  }

  async fetchCards() {
    try {
      const response = await api.getCards();
      this.cards = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
<template>
  <div>
    <h2>Card List</h2>
    <ul>
      <li v-for="card in cards" :key="card.id">
        {{ card.welsh }} - {{ card.english }}
      </li>
    </ul>
  </div>
</template>
