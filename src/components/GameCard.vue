<template>
<v-card 
    class="d-flex flex-wrap  mt-3 ms-1 mr-2 "
    max-width="350"
    
  >
 <v-card-text  style="background: url('CardBackground_2.jpg') no-repeat center center" justify="center" >
   
      <p class="text-h5 deep-purple--text"   >
        {{title}}
      </p>
      <div > Type : {{type}}</div>
      <p></p>
      <p class="title"> Rating : {{rating}} / 10</p>
        </v-card-text>
    <v-card-actions >
         <v-row justify = 'center' >
        <v-col  md = "5" >
      <v-row>
    <v-card-actions >
      <MoreInfoDialog v-model="showScheduleForm"></MoreInfoDialog>
       <v-btn
       
         text
        color="green"
      >
      <v-icon>mdi-cart</v-icon>
        {{price}} $

      </v-btn>
        
    </v-card-actions>
</v-row>
        </v-col>
    </v-row>
    </v-card-actions>

  </v-card>
  
</template>

<script>
import MoreInfoDialog from './MoreInfoDialog.vue';

  export default {
    
    data() {
        return {
            showScheduleForm: {show: false, description: this.description, title: this.title}
            
        }
    },
   
    props: ["type", "title", "price", "rating","description"],
    components: { MoreInfoDialog },
}
</script>
