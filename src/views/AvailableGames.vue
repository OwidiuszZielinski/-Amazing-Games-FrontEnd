<template>

  <v-container fill-height>
    <v-row>
      <GameCard v-for="game in games" :key="game.id" :title="game.title" :type="game.type" :rating="game.rating"
        :price="game.price" :description="game.description" />
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios'

import GameCard from '@/components/GameCard.vue'



export default {
  data() {
    return {
      games: []
    }
  },
  
  async created() {
    axios
      .get(`${this.$apiurl}/games/`, {
        
        headers:{
          
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(response => (this.games = response.data))
      console.log(localStorage.getItem('token'))
  },
  components: {
    GameCard
  }
}


</script>
