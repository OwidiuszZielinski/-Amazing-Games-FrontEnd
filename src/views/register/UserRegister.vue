<template>

    <main style="height: 100%; background: url('background.jpg') no-repeat center center" justify="center">

        <v-container fluid fill-height >
             <v-dialog v-model="registerdialog" max-width="300">
                
                <v-card fluid fill-height>
                    <v-toolbar color="deep-purple accent-4" dark>
                        <v-row justify="center">
                            <h3>Register status</h3>
                        </v-row>
                    </v-toolbar>
                    <v-card-text>
                        <div class="text-h6 pa-12">REGISTER SUCCESFUL</div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn @click="close" text>Close</v-btn>
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
                            <v-text-field v-model="registerUser.username" name="login" label="Login" type="text"
                                placeholder="name" required></v-text-field>
                            <v-text-field v-model="registerUser.email" name="email" label="E-mail" type="text"
                                placeholder="email" required></v-text-field>
                            <v-text-field v-model="registerUser.password" name="password" label="Password"
                                type="password" placeholder="password" required></v-text-field>

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


            registerdialog: false,
            registerUser: {
                username: "",
                password: "",
                email: "",
                roles: "ROLE_USER"
            },
        };
    },
    methods: {

        async register() {

            const response = await axios.post(`${this.$apiurl}/auth/register/`, this.registerUser).then((response) => {
                if (response.status == 200) {
                    this.registerdialog = true

                }
            });
            console.log(response);
        },
        close() {
            this.registerdialog = false
        },
    },

};

</script> 
