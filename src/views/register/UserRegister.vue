<template>

    <main style="height: 100%; background: url('background.jpg') no-repeat center center" justify="center">

        <v-container fluid fill-height>
            <v-dialog v-model="registerdialog" max-width="300">

                <v-card fluid fill-height>
                    <v-toolbar color="deep-purple accent-4" dark>
                        <v-row justify="center">
                            <h3>Register status</h3>
                        </v-row>
                    </v-toolbar>
                    <v-card-text>
                       
                            <div class="text-h6 pa-12">{{responseText}}</div>
                            
                        
                        
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn @click="close()" text>Close</v-btn>
                    </v-card-actions>
                </v-card>

            </v-dialog>


            <v-col md="4"></v-col>
            <v-col md="4">

                <v-card class="mx-auto">
                    <v-toolbar dark color="#272727">
                        <v-toolbar-title>
                            <p>REGISTER</p>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <form>
                            <v-text-field v-model="registerUser.username" name="login" label="Login *" type="text"
                                 :rules="loginRules" >

                            </v-text-field>

                            <v-text-field v-model="registerUser.email" name="email" label="E-mail *" type="text"
                                :rules="emailRules "  >
                            </v-text-field>
                       
                            <v-text-field v-model="registerUser.password" name="password" label="Password *" loading
                                type="password"  :rules="passwordRules" color="cyan darken">
                                <template v-slot:progress>
                                    <v-progress-linear v-if="custom" :value="progress" :color="color" absolute
                                        height="7"></v-progress-linear>
                                </template>
                            </v-text-field>

                            <v-btn class="mt-4" color="#272727" @click="register()">JOIN US
                            </v-btn>

                        </form>
                    </v-card-text>
                    <v-card-actions>
                    </v-card-actions>
                </v-card>
            </v-col>

        </v-container>

    </main>
</template>

<script>

import axios from 'axios';



export default {
    data() {
        return {
            responseText: 'LOGIN OR EMAIL ADRESS IS BUSY',
            custom: true,
            registerdialog: false,
            registerUser: {
                username: "",
                password: "",
                email: "",
                roles: "ROLE_USER",
            },
            loginRules: [

                v => !!v || 'Login is required',
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            emailRules: [ 
            v => !!v || 'Email is required',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail incorrect'
            ],
            passwordRules: [
                v => v.length >= 6 || 'Minimum length is 6 characters'
            ]

        }

    },
            methods: {
            
            async register(){ 
                
                 await axios.post(`${this.$apiurl}/auth/register/`, this.registerUser).then((response) => {
                         if (response.status == 200)
                        console.log(response.status);
                        this.responseText ='REGISTER SUCCESFULL' 
                        this.registerdialog = true
                }).then(this.registerdialog = true).then(this.responseText ='LOGIN OR EMAIL ADRESS IS BUSY')
                
            },
                    

            close() {
                this.registerdialog = false
                
            },
        },
        computed: {
       

        progress() {
            return Math.min(100, this.registerUser.password.length * 6)
        },
        color() {
            return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
        },
        
        

    },
}

</script> 
