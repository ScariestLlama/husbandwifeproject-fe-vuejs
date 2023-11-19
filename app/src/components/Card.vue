

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import api from '../services/card.api.service';

@Component
export default class Card extends Vue {
  newCard = {
    welsh: '',
    english: ''
  };

  async addCard() {
    try {
      await api.postCard(this.newCard);
      this.newCard.welsh = '';
      this.newCard.english = '';
      this.$emit('cardAdded');
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
<template>
  <div>
    <h2>Add a New Card</h2>
    <form @submit.prevent="addCard">
      <input type="text" v-model="newCard.welsh" placeholder="Welsh">
      <input type="text" v-model="newCard.english" placeholder="English">
      <button type="submit">Add Card</button>
    </form>
  </div>
</template>