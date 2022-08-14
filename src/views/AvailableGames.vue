<template>

<v-container  fill-height >

<GameCard v-for="game in games" :key="game.id"
  :title ="game.title"
  :type ="game.type"
  :rating ="game.rating"
  :price ="game.price"

  :description="game.description"/>

  
</v-container>
</template>
<script>
import axios from 'axios'

import GameCard from '@/components/GameCard.vue'



export default {
  data () {
    return {
    games :[]
    }             
  },
  created () {
    axios
      .get('http://192.168.1.107:8082/games')
      .then(response => (this.games = response.data))
  },
  components: {
    GameCard
}
}

</script>