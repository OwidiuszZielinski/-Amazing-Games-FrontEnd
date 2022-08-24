<template>
  <v-data-table :headers="headers" :items="games" sort-by="title" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Games</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              ADD GAME
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.title" label="title"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.type" label="type"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.price" label="price"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.rating" label="rating"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.description" label="description"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.availability" label="availability"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">

                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn class="btn btn-primary" color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>







        <v-dialog v-model="dialogEdit" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">EDIT GAME</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.title" label="title" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.type" label="type"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.price" label="price"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.rating" label="rating"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.description" label="description"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.availability" label="availability"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">

                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn class="btn btn-primary" color="blue darken-1" text @click="saveEdit(editedItem)">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>




        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>

  </v-data-table>
</template>

<script>
import axios from 'axios'


export default {
  data: () => ({

    dialog: false,
    dialogDelete: false,
    dialogEdit: false,
    headers: [
      {
        text: 'Title',
        align: 'start',
        sortable: false,
        value: 'title',
        description: 'description',
        availability: 'availability',

      },
      { text: 'Type', value: 'type' },
      { text: 'Price ($)', value: 'price' },
      { text: 'Rating (/10)', value: 'rating' },
      { text: 'Description', value: 'description' },
      { text: 'Availability', value: 'availability' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    games: [],
    editedIndex: -1,
    editedItem: {

      title: '',
      type: '',
      price: '',
      rating: '',
      description: '',
      availability: true,



    },
    defaultItem: {
      title: '',
      type: '',
      price: '',
      rating: '',
      description: '',
      availability: true,


    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'ADD GAME' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
    dialogEdit(val) {
      val || this.closeDelete()
    },
  },

  created() {
    axios
      .get(`${this.$apiurl}/games/`)
      .then(response => (this.games = response.data))
  },
 
  methods: {

    saveEdit(item) {
      axios.patch(`${this.$apiurl}/games/${item.id}`, this.editedItem)
        .then(response => {
          console.log(response);
        });
      this.close()
    },

    editItem(item) {
      this.editedIndex = this.games.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogEdit = true
    },

    deleteItem(item) {

      axios.delete(`${this.$apiurl}/games/${item.id}`)
        .then(response => {
          console.log(response);
        });

      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.games.splice(this.editedIndex, 1)
      this.closeDelete()
      this.$router.go(0);
    },
    close() {
      this.dialog = false
      this.dialogEdit = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {

      axios.post(`${this.$apiurl}/games/`, this.editedItem).then((response) => {
        console.log(response);
      });

      this.close()
    },
  },
}
</script>
