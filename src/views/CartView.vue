<template>
  
  <main style="height: 100%;background: url('Basket.jpg') no-repeat center center" justify="center" >
  <v-container fluid>
    
  <v-data-table v-model="selectedItems" :single-select="singleSelect" show-select :headers="headers" :items="items" class="elevation-1"
  >
    <template v-slot:top>
      
      <v-toolbar flat>
        <v-spacer></v-spacer>

        <v-toolbar-title> YOUR SHOPPING CART</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-dialog v-model="dialogPayment" max-width="500px" >
          <v-card  >
            
            <v-card-title class="d-flex align-center justify-center pa-8 mx-auto">Go to the payment page?</v-card-title>
          
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn  color="deep-orange darken-4" text @click="closeDelete">I will think yet</v-btn>
              <v-btn color="green darken-1" text @click="deleteItemConfirm">Yes, it's all</v-btn>
              <v-spacer></v-spacer>
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
        <template v-slot:top>
                <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
              </template>
      </v-toolbar>
    </template>
    
    <template v-slot:[`item.actions`]>
      
      <v-btn @click="deleteItem()"
      color="deep-orange darken-4">
        <v-icon small>
          mdi-window-close
        </v-icon>
      </v-btn>
   
      </template >
     
  </v-data-table>
  <tamplate>
    
    <v-col></v-col>
    <v-row justify="end" no-gutters >
    <v-btn min-height="100"
    min-width="300"
    color="green darken-1"
    @click="dialogPayment=true">
    <v-col md=2>
    <v-icon>mdi-cart</v-icon>
  </v-col> 
    <h1>PAY {{cartValue.toFixed(2)}} {{elementsInCart}} $</h1>
    </v-btn>
  </v-row>

  </tamplate>
    
      
    
  </v-container>
  
</main>
</template>
  
  <script>
    import axios from 'axios'





    export default {
    data: () => ({
        cartValue: 0,
        elementsInCart: 0,
        items: [],
        singleSelect: false,
        selectedItemsIds: [],
        selectedItems: [],
        dialogDelete: false,
        dialogPayment: false,
        headers: [
            { text: "Title", align: "end", value: "title" },
            { text: "Value [ $ ]", align: "end", value: "price" },
            { text: "Pieces", align: "end", value: "1" },
            { text: "Actions", align: "end", value: "actions", sortable: false },
        ],
    }),
    created() {
        axios
            .get(`${this.$apiurl}/cart/54`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => (this.items = response.data["games"], this.calculateCart())).catch((err) => console.log(err));
    },
    methods: {
        calculateCart() {
            var calc = 0;
            for (const item of this.items) {
                calc += item.price;
            }
            this.cartValue = calc;
        },
       
        deleteItem() {
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1);
            this.closeDelete();
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
    },
   
}
  </script>