import axios from 'axios';

const BASE_URL = 'https://husbandwifeproject-be-dotnet-pbirm3ap5q-ew.a.run.app'; // Your API base URL

export default {
  getCards() {
    return axios.get(`${BASE_URL}/cards`);
  },
  postCard(cardData: any) {
    return axios.post(`${BASE_URL}/card`, cardData);
  },
};
