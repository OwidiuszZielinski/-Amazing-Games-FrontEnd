<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="show"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the bottom</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">{{value.description}}</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>

    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
     value: Object
    
   
  },
 
  computed: {
    show: {
      get () {
        return this.value.show
      },
      set (value) {
         this.$emit('input', value.show)
      }
    }
  }
}
</script>