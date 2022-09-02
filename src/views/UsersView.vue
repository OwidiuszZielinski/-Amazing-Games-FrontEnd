<template>
  <v-data-table v-model="selectedUsers" :headers="headers" :items=" users" sort-by="title" class="elevation-1"
  :single-select="singleSelect" show-select>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title> Users</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
       
                
                <h1>{{selectedUserIds}}</h1>
              

        <v-dialog v-model="dialogEdit" max-width="500px">
         
          <v-card>
            <v-card-title>
              <span class="text-h5">EDIT USER {{editedUser}}</span>
            </v-card-title>

            <v-card-text>
              
                  <v-col  >
                    <v-text-field v-model="editedUser.username" label="Username" required></v-text-field>
                  </v-col>
                  <v-col  >
                    <v-text-field v-model="editedUser.password" label="Password"></v-text-field>
                  </v-col>
                  <v-col  >
                    <v-text-field v-model="editedUser.email" label="E-MAIL"></v-text-field>
                  </v-col>
                  <v-col  >
                  
                    <v-autocomplete v-model="editedUser.roles" :items="accesslevelArray" label="Role" clearable></v-autocomplete>
                  
                  </v-col>
                  
             
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn class="btn btn-primary" color="blue darken-1" text @click="saveEdit(editedUser)">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>
    </template>


        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteUser()">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="(selectedUserIds.push(item.id)); (selectedUsersObjectsToIds()); (deleteUserConfirm())">
        mdi-delete
      </v-icon>
    </template>

  </v-data-table>
</template>

<script>
import axios from 'axios'


export default {
  data: () => ({
    singleSelect: false,
    selectedUsers: [],
    selectedUserIds: [],
    dialog: false,
    dialogDelete: false,
    dialogEdit: false,
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'id',
        description: 'description',
        availability: 'availability',

      },
      { text: 'Username', value: 'username' },
      
      { text: 'E-mail', value: 'email' },
      { text: 'Accesslevel', value: 'roles' },
    
      { text: 'Actions', value: 'actions', sortable: false },
    ],
     users: [],
     accesslevelArray: ['ROLE_USER','ROLE_ADMIN'],
    editedIndex: -1,
    editedUser: {

     username: '',
     password: '',
     email: '',
     roles: ''



    },
   
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'ADD USER' : 'Edit Item'
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
      .get(`${this.$apiurl}/users/`)
      .then(response => (this. users = response.data))
  },
 
  methods: {
    
    selectedUsersObjectsToIds() {
      
      for (const select of this.selectedUsers) {
      this.selectedUserIds.push(select.id)
        }
    },

    saveEdit(item) {
      axios.patch(`${this.$apiurl}/users/${item.id}`, this.editedUser , {
        
        headers:{
          
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(response => {
          console.log(response);
        });
      this.close()
    },

    editItem(item) {
      this.editedIndex = this. users.indexOf(item)
      this.editedUser = Object.assign({}, item)
      this.editedUser.password = ''
      this.dialogEdit = true
    },

    deleteUserConfirm() {
      this.dialogDelete = true
      
    },

    deleteUser() {
      axios({
        method: 'delete',
        url: `${this.$apiurl}/users/`,
        data: {
          ids: this.selectedUserIds,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      }).then(response => {
        console.log(response);
      });
      this.closeDelete()
      this.$router.go(0);
      

    },
    close() {
      this.dialog = false
      this.dialogEdit = false
      this.$nextTick(() => {
        this.editedUser = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedUser = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {

      axios.post(`${this.$apiurl}/users/`, this.editedUser , {
        
        headers:{
          
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response);
      });

      this.close()
    },
  },
}
</script>
