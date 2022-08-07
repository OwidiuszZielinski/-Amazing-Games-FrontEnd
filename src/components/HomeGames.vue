<template>
  <v-container fluid fill-height >
  
    <v-row style="height: 50%; background: url('background.jpg') no-repeat center center" justify="center" >
        
    </v-row>


    <v-row  align="center" style="height: 50%;">
      <v-col></v-col>
      <v-col>
        <v-btn link v-on:click="route('/login')" block color="light-green" depressed elevation="20" rounded>Login
        </v-btn>
      <p style="color: greenyellow">Please login to get access</p>
    

      </v-col>
      <v-col></v-col>
    </v-row>

</v-container>

 


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