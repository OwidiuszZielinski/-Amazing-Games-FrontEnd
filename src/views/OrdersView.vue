<template>
  <v-data-table
    :headers="headers"
    :items="orders"
   
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Orders</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
              
            >
              NEW ORDER <h1>{{editedOrder.games[0]}}</h1>
            </v-btn>
          </template>
          
          <v-card>
            <v-card-title>
              <span class="text-h5">{{formTitle}}</span>
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
                      
                      v-model="editedOrder.status"
                      label="status"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedOrder.user"
                      label="user"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedOrder.gamesedit"
                      label="games"
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
                
                @click="save"
                
              >
              
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        

        <v-dialog
          v-model="dialogEdit"
          max-width="500px"
        > 
          <v-card>
            <v-card-title>
              <span class="text-h5">EDIT ORDER</span>
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
                      v-model="editedOrder.status"
                      label="status"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedOrder.user_id"
                      label="user"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedOrder.gameIds"
                      label="games"
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
                @click="saveEdit(editedOrder)"
                
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      <h1></h1>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this order?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteOrderConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
   <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editOrder(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteOrder(item)"
      >
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
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
          description: 'description',
          availability: 'availability',
         
        },
        { text: 'Date', value: 'date'},
        {text: 'Value',value : 'value'},
        { text: 'User ID', value: 'user.id' },
        { text: 'Status', value: 'status' },
        { text: 'Games ID', value: 'gameIds' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      
      orders: [],
      editedIndex: -1,
      
      editedOrder: {
        games: [],
        user: '',
        status: '',
        date: ' ',
        
        

        
      },
      defaultorder: {
        
        user: '',
        status: '',
        date: ' ',
     
        
      },
    }),
     
  
    
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'ADD ORDER' : 'Edit Order'
      },
      
     
      
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
      dialogEdit (val) {
        val || this.closeDelete()
      },
    },

    created () {
        

    axios
    
      .get('http://192.168.1.107:8082/orders')
      .then(response => (this.orders= response.data,
      this.orderGames(this.orders)))
    
    },  
   
    
  
    methods: {

      getGames(){
      
      },

      orderGames(orderlist){
        for (const order of orderlist){
          var gameIds = []
          for (const game of order.gamesEntities){
          gameIds.push(" [ " + game.id + " ] ")
          } 
          order.gameIds = gameIds.join(",")
        }
        
      },
      
      saveEdit(order){
        axios.patch(`http://192.168.1.107:8082/orders/`+order.id ,this.editedOrder)
        .then(response => {
         console.log(response);
     });
      this.close()
      },
      
      editOrder (order) {
        this.editedIndex = this.orders.indexOf(order)
        this.editedOrder = Object.assign({}, order)
        this.dialogEdit = true
      },

      deleteOrder (order) {
        
        axios.delete(`http://192.168.1.107:8082/orders/` + order.id )
        .then(response => {
         console.log(response);
     });
        
        this.dialogDelete = true
      },

      deleteOrderConfirm () {
        this.orders.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.dialogEdit = false
        this.$nextTick(() => {
          this.editedOrder = Object.assign({}, this.defaultorder)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedOrder = Object.assign({}, this.defaultorder)
          this.editedIndex = -1
        })
      },

      save () {
        
          axios.post('http://192.168.1.107:8082/orders/',this.editedOrder).then((response)=>{
          console.log(response);
          });
         
        this.close()
      },
    },
    }
  
  
    
  
  
</script>
