<template>
  <v-data-table :headers="headers" :items="orders" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Orders</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              NEW ORDER

            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>

              <v-col>
                <OrderStatusList :propstatus="newOrder.status" v-model="newOrder.status"></OrderStatusList>
              </v-col>
              <v-col>
                <UserList v-model="newOrder.user" :propuser="newOrder.user" />
              </v-col>
              <v-col>
                <GameList v-model="newOrderGames" :propgames="newOrderGames" />
              </v-col>

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn class="btn btn-primary" color="blue darken-1" text v-on:click="newOrder.games = newOrderGames"
                @click="save">

                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>


        <v-dialog v-model="dialogEdit" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">EDIT ORDER </span>
            </v-card-title>

            <v-card-text>
              <v-col>
                <EditOrderStatusList :propstatusedit="editedOrder.status" @sendStatus="e => editedOrder.status = e">
                </EditOrderStatusList>
              </v-col>
              <v-col>
                <EditUserList v-model="editedOrder.user" :propuseredit="editedOrder.user"> </EditUserList>
              </v-col>
              <v-col>
                <EditOrderGameList v-model="editGames" :propgamesedit="editedOrder.games"></EditOrderGameList>

              </v-col>
             

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn class="btn btn-primary" color="blue darken-1" text v-on:click="(editedOrder.games = editGames); (editedOrder.user = editedOrder.user.id)" 
                @click="saveEdit(editedOrder)">
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
      <v-icon small class="mr-2" @click="editOrder(item)" >
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteOrder(item)">
        mdi-delete
      </v-icon>
    </template>

  </v-data-table>
</template>

<script>
import axios from 'axios'
import GameList from '../components/newOrderComponents/GameList.vue'
import UserList from '@/components/newOrderComponents/UserList.vue';
import OrderStatusList from '@/components/newOrderComponents/OrderStatusList.vue';
import EditOrderStatusList from '@/components/editOrderComponents/EditOrderStatusList.vue'
import EditOrderGameList from '../components/editOrderComponents/EditOrderGameList.vue'
import EditUserList from '../components/editOrderComponents/EditUserList.vue'


export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    dialogEdit: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
        description: "description",
        availability: "availability",
      },
      { text: "Date", value: "date" },
      { text: "Value", value: "value" },
      { text: "User ID", value: "user.username"},
      { text: "Status", value: "status"},
      { text: "Games ID", value: "gameTitles" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    editUser: "",
    editGames: [],
    orders: [],
    editedIndex: -1,
    newOrderGames: [],
    newOrder: {
      games: [],
      user: "",
      status: '',
      date: "",
    },
    editedOrder: {
      id: "",
      games: [],
      user: "",
      status: "",
      date: "",
    },
    
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "ADD ORDER" : "Edit Order";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogEdit(val) {
      val || this.closeDelete();
    },
  },
  created() {
    axios
      .get(`${this.$apiurl}/orders/`)
      .then(response => (this.orders = response.data,
        this.orderGames(this.orders))).catch((err) => console.log(err));
  },
  methods: {
    editOrderGames(ordergamelist) {
      var editGameID = [];
        for (const game of ordergamelist) {
          editGameID.push(game.id);
        }
        return editGameID
    },
    orderGames(orderlist) {
      for (const order of orderlist) {
        var gameTitles = [];
        for (const game of order.gamesEntities) {
          gameTitles.push(" [ " + game.title + " ] ");
        }
        order.gameTitles = gameTitles.join(",");
      }
    },
    saveEdit(order) {
      axios.patch(`${this.$apiurl}/orders/${order.id}`, this.editedOrder)
        .then(response => {
          console.log(response);
        });
      this.close();
    },
    editOrder(order) {
      this.editedIndex = this.orders.indexOf(order);
      this.editedOrder.id = Object.assign(order.id);
      this.editedOrder.games = order.gamesEntities
      this.editedOrder.user = order.user;
      this.editedOrder.date = Object.assign(order.date);
      this.editedOrder.status = order.status;
      this.dialogEdit = true;
    },
    deleteOrder(order) {
      axios.delete(`${this.$apiurl}/orders/${order.id}`)
        .then(response => {
          console.log(response);
        });
      this.dialogDelete = true;
    },
    deleteOrderConfirm() {
      this.orders.splice(this.editedIndex, 1);
      this.closeDelete();
      this.$router.go(0);
    },
    close() {
      this.dialog = false;
      this.dialogEdit = false;
      this.$nextTick(() => {
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedIndex = -1;
      });
    },
    save() {

      axios.post(`${this.$apiurl}/orders/`, this.newOrder).then((response) => {
        console.log(response);
      });
      
      this.close();
    },
  },
  components: { GameList, UserList, OrderStatusList, EditOrderStatusList, EditOrderGameList, EditUserList }
}
</script>
