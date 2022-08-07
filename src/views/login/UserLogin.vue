<template>
   <v-app >
      <v-main>
        <v-container fluid fill-height>
            <v-row
              no-gutters
               
                >
             <v-col
        md="2"
        offset-md="12"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
                  <v-card class="elevation-12">
                     <v-toolbar dark color="grey">
                        <v-toolbar-title>Login form</v-toolbar-title>
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
                  </v-card>
                </v-col>
                
              </v-row>
               
          
            
         </v-container>
      </v-main>
   </v-app>
   
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
      console.log(username + "logged in")
    },
  },
};

</script> -->