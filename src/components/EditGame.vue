<template>
        <v-dialog
          max-width="500px"
        > 
        <template v-slot:activator="{ on, attrs }">
          <v-icon
           v-bind="attrs"
              v-on="on"
            small
            class="mr-2"
            @click="editItem(item)"
        
      >
       mdi-pencil
      
      </v-icon>
             
           
          </template>
     
          <v-card>
            <v-card-title>
              <span class="text-h5">NEW DIALOG</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.title"
                      label="title"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="type"
                      label="type"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="price"
                      label="price"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="rating"
                      label="rating"
                    ></v-text-field>
                  </v-col>
                 <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="description"
                      label="description"
                    ></v-text-field>
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="availability"
                      label="availability"
                    ></v-text-field>
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="quantity"
                      label="quantity"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                
                class="btn btn-primary"
                color="blue darken-1"
                text
                @click="saveEdit(editedItem)"
                
              >
                Save
              </v-btn>
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
   props: [
     "editedItem"
  ],
 
  methods: {
        close () {
        this.dialog = false
      },
    }
}
</script>
