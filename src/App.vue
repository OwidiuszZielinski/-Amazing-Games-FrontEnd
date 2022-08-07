<template>
   <div id="app">
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped
      >
        <v-list dense>
          <v-list-item link v-on:click = "route('/about')">
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
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Amazing Games

        </v-toolbar-title>
        <v-col></v-col>
        Login
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
        route (ln){
          
          router.push(ln)
        }
      },
  }
</script>