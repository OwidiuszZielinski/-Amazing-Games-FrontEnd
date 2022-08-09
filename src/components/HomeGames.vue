<template>
<main style="height: 100%; background: url('background.jpg') no-repeat center center" justify="center" >



<v-container fluid fill-height >
  <v-row  align="center" style="height: 50%;">
      <v-col></v-col>
      <v-col md = "2">
          <v-btn
          link v-on:click="route('/login')" block color="dark-grey"
        
          elevation="24"
          fab
          large
          rounded
          x-large
    >GET ACCESS</v-btn>
       
         
        </v-col>
      <v-col></v-col>
    </v-row>
    
</v-container>
</main> 
 


</template>
<script>
import router from '@/router';


export default{
    methods: {
        route(link) {
            router.push(link);
        }
    }
}


</script>