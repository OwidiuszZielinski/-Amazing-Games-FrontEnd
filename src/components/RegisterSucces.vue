<template> 
    <v-dialog v-model ="dialog"
           max-width="500px"
          >
          <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
        </template>
            <v-card>
              <v-toolbar
                color="deep-purple accent-4"
                dark
                >
                <v-row justify="center"
                >
                <h3>Register Info</h3>
                </v-row></v-toolbar>
              <v-card-text>
                <div class="text-h6 pa-12">REGISTER SUCCESFUL{{this.opendialog}}</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                   @click="close"
                  text
                  
                >Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </template>
  <script>

    export default {
       data() {
        return {
         
          dialog: false,
          props: ['opendialog']
        }
       },
          
      methods: {


            close () {
            this.dialog = false
          },
        }
    }
    </script>
    