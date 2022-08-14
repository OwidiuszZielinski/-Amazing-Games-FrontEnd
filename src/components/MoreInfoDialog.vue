<template>
  <v-row justify="space-around">
    <v-col cols="auto">
     <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              color="deep-purple accent-4"
              v-bind="attrs"
              v-on="on"
            >
              More Info
            </v-btn>
          </template>
     
          <v-card>
            <v-toolbar
              color="deep-purple accent-4"
              dark
              >
              <v-row justify="center"
              >
              <h3>Game description</h3>
              </v-row></v-toolbar>
            <v-card-text>
              <div class="text-h6 pa-12">{{value.description }}</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                 @click="close"
                text
                
                
              >Close</v-btn>
            </v-card-actions>
          </v-card>

      </v-dialog>
    </v-col>
</v-row>
</template>
<script>

export default {
   data() {
    return {
      dialog: false
    }
   },
      
  props: {
     value: Object
  },
  methods: {
        close () {
        this.dialog = false
      },
    }
}
</script>
