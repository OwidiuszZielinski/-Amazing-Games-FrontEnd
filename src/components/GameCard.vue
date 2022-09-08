<template>
  
  <v-card class="d-flex flex-wrap mt-3 ms-1 mr-2 " max-width="350">
    <v-card-text style="background: url('CardBackground_2.jpg') no-repeat center center" justify="center">

      <p class="text-h4 deep-purple--text">
        {{ title }}
      </p>
      <div> Type : {{ type }}</div>
      <p></p>
      <p class="title"> Rating : {{ rating }} / 10</p>
    </v-card-text>
    <v-row>
   <v-card-actions> 
   <v-col></v-col>
    <v-col>
        <MoreInfoDialog v-model="showScheduleForm"></MoreInfoDialog>
      </v-col>
    <v-col md="6">
        <v-btn text color="green" @click="(itemToCart=id); (addtoCart())">
         <v-col>
          <v-icon>mdi-cart</v-icon>
        </v-col>
          {{ price }} $ 

        </v-btn>
    </v-col>
      </v-card-actions>
    </v-row>
  </v-card>

</template>

<script>
import MoreInfoDialog from './MoreInfoDialog.vue';
import axios from 'axios';

export default {

  data() {
    return {
     
      showScheduleForm: { show: false, description: this.description, title: this.title },
     
    }
  },

  props: ["id","type", "title", "price", "rating", "description"],

    
methods: {
  
   addtoCart(){
            axios.post(`${this.$apiurl}/cart/54`, {id: this.itemToCart}).then((response) => {
                       console.log(response.status)   
                         
               })
               
           },
            
  },
  
  components: { MoreInfoDialog },
}
</script>
