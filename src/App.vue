<template>
   <div id="app">
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        hidden
        v-model="drawer"
        app
        clipped
      >
      
        <v-list dense>
       
          <v-list-item  link v-on:click = "route('/about')" >
            <v-list-item-action>
              <v-icon>mdi-play</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Games</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-currency-usd</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Orders</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Users</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
         
          <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      
        
        </v-list>
    
    </v-navigation-drawer>
    
      
      <v-app-bar
        app
        clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn elevation = 0>
        <v-toolbar-title link v-on:click = "route('/')">Amazing Games
        
        </v-toolbar-title>
        </v-btn>
        <v-row justify = 'end'>
        <v-col  md = "1" align = 'end'>
        
          <v-btn
          elevation = 0 
          link v-on:click="route('/login')" block color="dark-grey">LOGIN
          </v-btn>
          </v-col>
          <v-col  md = "1" align = 'end'>
          <v-btn
          elevation = 0 
          link v-on:click="route('/register')" block color="dark-grey">REGISTER
          </v-btn>
          </v-col>
        </v-row>
      </v-app-bar>
     
   
      <v-main fluid>
          
              <router-view/>
           
      </v-main>
      
      <v-footer app>
        <span>&copy; 2022 Owidiusz Zieliński</span>
      </v-footer>
      
    </v-app>
  </v-app>
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



  export default {
    data: () => ({
        drawer: null,
    }),
    methods: {
        route(ln) {
            router.push(ln);
        }
    }
}
</script>