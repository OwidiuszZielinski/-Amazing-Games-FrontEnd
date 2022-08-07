<template>
<div>
    <main>
    <img src="@/assets/285267211_5547780368620708_1663460914402098455_n.jpg"/>
    
    <v-layout down justify-space-around >
        <v-flex md4>
        <v-btn link v-on:click = "route('/login')"
        block
        color="green"
        depressed
        elevation="20"
        rounded
            
            >Login</v-btn>
    </v-flex>
    </v-layout >
     <v-layout column>
        
    <h1>Please login to get access</h1>
    </v-layout>
        

  </main>
  
    </div>
  
</template>
<script>
import router from '@/router';
export default{
    methods: {
        route(link) {
            router.push(link);
        }
    },
    
    
}


</script>