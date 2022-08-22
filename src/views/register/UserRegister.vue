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
                              
                              v-model="name"
                              name="name"
                              label="Name"
                              type="text"
                              placeholder="name"
                              required
                              
                           ></v-text-field>
                           
                            <v-text-field
                              v-model="surname"
                              name="surname"
                              label="Surname"
                              type="surname"
                              placeholder="surname"
                              required
                           ></v-text-field>
                           <v-text-field
                              
                              v-model="email"
                              name="email"
                              label="E-mail"
                              type="text"
                              placeholder="email"
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
                          <v-text-field
                              v-model="password"
                              name="confirmpassword"
                              label="Confirm Password"
                              type="password"
                              placeholder="confirmpassword"
                              required
                           ></v-text-field>
                           <v-btn type="submit" class="mt-4" color="#272727" value="log in">JOIN US</v-btn>
                      </form>
                     </v-card-text>
                  </v-card> </v-col>  
                </v-row>
         </v-container>
        
</main>
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