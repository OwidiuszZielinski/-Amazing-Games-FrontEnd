<template>

<v-container fill-height >

<GameCard v-for="game in games" :key="game.id"
  :title ="game.title"
  :group ="game.group"
  :rating ="game.rating"
  :price ="game.price"/>
  
</v-container>
</template>
<script>
import axios from 'axios'

import GameCard from '@/components/GameCard.vue'







export default {
  data () {
    return{
    games:[
   {title: 'Factorio', group:'Symulation',rating: "10/10", price: "25.99$",id:'0'},
   {title: "Factorio", group:"Symulation",rating: "10/10", price: "25.99$",id:'1'},
  {title: "Factorio", group:"Symulation" ,rating: "10/10", price: "25.99$" ,id:'2'},
  {title: "Factorio" ,group:"Symulation",rating: "10/10", price: "25.99$" ,id:'3'},
  {title: "Factorio", group:"Symulation",rating: "10/10", price: "25.99$",id:'4'},
  {title: 'Factorio', group:'Symulation',rating: "10/10", price: "25.99$",id:'0'},
   {title: "Factorio", group:"Symulation",rating: "10/10", price: "25.99$",id:'1'},
  {title: "Factorio", group:"Symulation" ,rating: "10/10", price: "25.99$" ,id:'2'},
  {title: "Factorio" ,group:"Symulation",rating: "10/10", price: "25.99$" ,id:'3'},
  {title: "Factorio", group:"Symulation",rating: "10/10", price: "25.99$",id:'4'},
  {title: 'Factorio', group:'Symulation',rating: "10/10", price: "25.99$",id:'0'},
   {title: "Factorio", group:"Symulation",rating: "10/10", price: "25.99$",id:'1'},
  {title: "Factorio", group:"Symulation" ,rating: "10/10", price: "25.99$" ,id:'2'},
  {title: "Factorio" ,group:"Symulation",rating: "10/10", price: "25.99$" ,id:'3'},
  {title: "Factorio", group:"Symulation",rating: "10/10", price: "25.99$",id:'4'}
 
    ]
    }
  },
  mounted () {
    axios
      .get('http://192.168.1.107:8082/user/1')
      .then(response => (this.info = response))
  },
  components: {
    GameCard
}
}
</script>