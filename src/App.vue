<template>
  
  <div id="app">
  
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer hidden v-model="drawer" app clipped>
          
          <v-list dense>

            <v-list-item  link v-on:click="route('/available')">
              <v-list-item-action >
                <v-icon>mdi-play</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Games Library</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item  link v-on:click="route('/addgame')">
              <v-list-item-action>
                <v-icon>mdi-plus</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Games Panel</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link v-on:click="route('/orders')">
              <v-list-item-action>
                <v-icon>mdi-currency-usd</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Orders</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item  link v-on:click="route('/users')">
              <v-list-item-action>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Users</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item  link v-on:click="route('/statistics')">
              <v-list-item-action>
                <v-icon>mdi-finance</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Statistics</v-list-item-title>
              </v-list-item-content>
            </v-list-item>


          </v-list>
          
        </v-navigation-drawer>

        
        <v-app-bar app clipped-left  >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-btn elevation=0>
            <v-toolbar-title link v-on:click="route('/')">Amazing Games

            </v-toolbar-title>
          </v-btn>
        <v-col md="4"></v-col>
          
          <v-col >
              <v-btn elevation=0 link v-on:click="route('/login')" block color="dark-grey">
                <v-icon>mdi-account</v-icon>
                <v-col >
                  LOGIN
                </v-col>
              </v-btn>
            </v-col>
            <v-col  >

              <v-btn elevation=0 link v-on:click="route('/register')" block color="dark-grey">
                <v-icon>mdi-account-plus</v-icon>
                <v-col >
                  REGISTER
                </v-col>
              </v-btn>
            </v-col>
            <v-col>
              <v-badge
              v-model="elementsInCart"
        :content="elementsInCart"
        :value="getCartElements()"
        
       
        color="orange"
        overlap
        >
          <v-btn elevation=0 link v-on:click="route('/cart')" block color="dark-grey"
              
          >

                <v-icon>mdi-cart</v-icon>
                <v-col>
                  Basket
                </v-col>
           
              </v-btn>
            </v-badge>
            </v-col>
            <v-col >
              <LogoutDialog></LogoutDialog>
            </v-col>
         
        </v-app-bar>
   

        <v-main fluid>

          <router-view />

        </v-main>

        <v-footer app>


          <v-col md="2">
            <v-hover>
              <template  v-slot:default="{ hover }">
            <v-btn :elevation="hover ? 12 : 0" link v-on:click="route('/github')" block color="dark-grey">
              <v-icon>mdi-github</v-icon>
              <v-col>
              MY GITHUB 
            </v-col>
            <v-icon>mdi-github</v-icon>
            
            </v-btn>
          </template>
          </v-hover>
          </v-col>
          <v-col></v-col>
          
          <span>&copy; 2022 Owidiusz Zieliński </span>

        </v-footer>

      </v-app>
      
    </v-app>
    <template>
      
    </template>
    
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import router from '@/router'
import LogoutDialog from './components/LogoutDialog.vue';
import axios from 'axios';


export default {
  data: () => ({
    elementsInCart: 0,
    items:[],
    itemsOnCart: localStorage.getItem('cart'),
    showScheduleForm: false,
    drawer: null,
    
  }),

  methods: {  
    

    getCartElements() {

       axios
        .get(`${this.$apiurl}/cart/54`, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
        .then(response => (this.items = response.data["games"], this.elements())).catch((err) => console.log(err));
     
      },
    
    elements(){
      var elements =0
      for (const iterate of this.items) {
                iterate;
                elements++;
                
            }
           this.elementsInCart = elements
          },
    

    route(ln) {
      this.getCartElements()
      router.push(ln).catch(()=>{});
    }
  },
  components: { LogoutDialog}
}
</script>
