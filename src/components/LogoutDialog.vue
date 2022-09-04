<template>
     <v-dialog v-model="dialog" max-width="300">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            elevation = 0 
              text
              block color="dark-grey"
              v-bind="attrs"
              v-on="on"
              
            >
            
            <v-icon>mdi-logout</v-icon>
            <v-col>
              LOGOUT
            </v-col>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="blue darken-1"> <v-col>Confirm logout</v-col></v-card-title>
        
            <v-card-actions>
                <v-col>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close()">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="logout()">OK</v-btn>
              <v-spacer></v-spacer>
            </v-col>
            </v-card-actions>
          </v-card>
            
            </v-dialog>
</template>
<script>

    export default {
       data() {
        return {
          dialog: false
        }
       },
          
      props:['show'],
      methods: {
        logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        console.log(localStorage.getItem('user'))
        console.log(localStorage.getItem('token'))
        this.close()
        },
            close () {
            this.dialog = false
          },
        }
    }
    </script>
    