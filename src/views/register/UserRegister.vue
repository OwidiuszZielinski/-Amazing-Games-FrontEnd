<template>
    <main style="height: 100%; background: url('background.jpg') no-repeat center center" justify="center" >
         <v-container fluid fill-height >
            <v-row  align="center" style="height: 100%;">
            <v-col md="4"></v-col>
            <v-col md = "4">
              <v-card class="elevation-12">
                     <v-toolbar dark color="#272727">
                        <v-toolbar-title >
                            <p style="color: " >REGISTER</p>
                           </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     <form >
                            <v-text-field
                              
                              v-model="registerUser.username"
                              name="name"
                              label="Name"
                              type="text"
                              placeholder="name"
                              required
                              
                           ></v-text-field>
                           

                           <v-text-field
                              
                              v-model="registerUser.email"
                              name="email"
                              label="E-mail"
                              type="text"
                              placeholder="email"
                              required
                              
                           ></v-text-field>
                           <v-text-field
                              v-model="registerUser.password"
                              name="password"
                              label="Password"
                              type="password"
                              placeholder="password"
                              required
                           ></v-text-field>
                          
                           <v-btn  class="mt-4" color="#272727" @click="register()">JOIN US</v-btn>
                      </form>
                     </v-card-text>
                  </v-card> </v-col>  
                </v-row>
         </v-container>
        
</main>
</template>

<script>

import axios from 'axios';


export default {
    
    data() {
        return {
           
           
    registerUser: {

      username: '',
      password: '',
      email: '',
      roles: 'ROLE_USER'

    },
        };
    },
     methods: {
        async register() {
            const response = await axios.post(`${this.$apiurl}/users/`, 
               this.registerUser
            );
            console.log(response);
        },
        
    },
    
};

</script> 