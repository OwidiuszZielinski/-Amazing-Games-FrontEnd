<template>

     <container> 
            <v-row style="height: 50%" justify="center">
                <v-img src="@/assets/285267211_5547780368620708_1663460914402098455_n.jpg" alt=""
                contain   
                 height="550px"
                width="1150px">
                </v-img>
           
            </v-row>
            <v-row>""</v-row>
             <v-row>""</v-row>
           <v-row
           >
           
            <v-col></v-col>
              <v-col>
              <v-btn link v-on:click = "route('/login')"
            block
            color="#97341F"
            depressed
            elevation="20"
            rounded
            
            >Login</v-btn>

              </v-col>   
              <v-col></v-col>
            </v-row>
            
              <v-row>""</v-row>
             <v-row>""</v-row>
        <h1>
            
        <p style="color: #97341F">Please login to get access</p>
        
    </h1> 
           
    </container>
      
  
</template>
<script>
import router from '@/router';

export default{
    methods: {
        route(link) {
            router.push(link);
        }
    },
    justify: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between",
    ],
    
}


</script>