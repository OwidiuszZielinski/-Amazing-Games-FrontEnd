<template>
    <main style="height: 100%; background: url('background.jpg') no-repeat center center" justify="center" >
         <v-container fluid fill-height >
            <v-row  align="center" style="height: 50%;">
            <v-col md="4"></v-col>
            <v-col md = "4">
              <v-card class="elevation-12">
                     <v-toolbar dark color="#272727">
                        <v-toolbar-title>
                            <p style="color: " >LOGIN </p>
                           </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     <form @submit.prevent="handleSubmit" >
                            <v-text-field
                              color = "#272727"
                              v-model="username"
                              name="username"
                              label="Username"
                              type="text"
                              placeholder="username"
                              required
                              
                           ></v-text-field>
                           
                            <v-text-field
                              v-model="password"
                              name="password"
                              label="Password"
                              type="password"
                              placeholder="password"
                              required
                           ></v-text-field>
                           <v-btn type="submit" class="mt-4" color="#272727" value="log in">Login</v-btn>
                      </form>
                     </v-card-text>
                  </v-card> </v-col>  
                </v-row>
         </v-container>
        
</main>
</template>

<script>
import axios from 'axios';
import router from '@/router'
export default {
    name: "UserLogin",
    data() {
    
        return {
                    username: '',
                    password: '',
                   
        };
            
    },


    methods: {
      route(ln) {
            router.push(ln);
            
        },
        async handleSubmit() {
            console.log(this.username)
            console.log(this.password)
           
            await axios.post(`${this.$apiurl}/auth/login`, {
               username: this.username,password: this.password
            }).then((response) => {
              
              localStorage.setItem('token',response.data['jwt-token'])
              console.log(response.data)
              
              if(response.status==200){
                this.route('/available')
              }
              
            });
            
            
        }
       
}
}

</script> -->