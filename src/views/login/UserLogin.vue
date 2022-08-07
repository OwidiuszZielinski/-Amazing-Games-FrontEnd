<template>
        <container>
          <v-row >
                <v-img src="@/assets/285267211_5547780368620708_1663460914402098455_n.jpg" alt=""
                contain   
                 height="550px"
                width="1150px">
                </v-img>
           
            </v-row>
            
           <v-row>
           
            <v-col></v-col>
              <v-col>
              <v-card class="elevation-12">
                     <v-toolbar dark color="grey">
                        <v-toolbar-title>
                            <p style="color: " >Login form</p>
                           </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     <form ref="form" @submit.prevent="login()">
                            <v-text-field
                              
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
                           <v-btn type="submit" class="mt-4" color="grey" value="log in">Login</v-btn>
                      </form>
                     </v-card-text>
                  </v-card>

              </v-col>   
              <v-col></v-col>
         </v-row>
         </container>

</template>

<script>

export default {
    name: "UserLogin",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        login() {
            const { username } = this;
            console.log(username + "logged in");
        },
    },
    
};

</script> -->