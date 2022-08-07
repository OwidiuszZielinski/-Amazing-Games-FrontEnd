<template>
  
  <div class="home">
     
      <HomeGames></HomeGames>
     
  </div>
</template>

<script>
// @ is an alias to /src

import HomeGames from '@/components/HomeGames.vue'




export default {
  name: 'HomeView',
  components: {
    
    HomeGames
}
}
</script>
