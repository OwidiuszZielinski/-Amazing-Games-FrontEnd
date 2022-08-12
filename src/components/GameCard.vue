<template>

  <v-card 
    
    class="d-flex align-content-start flex-wrap mx-1 mt-1 "
    max-width="344"
  >
  <MoreInfoDialog v-model="showScheduleForm"></MoreInfoDialog>
    <v-card-text style="height: 100%; background: url('CardBackground.jpg') no-repeat center center" justify="center" >
      
      <p class="text-h4 text--primary" >
        {{title}}
      </p>
      <div> Type : {{groupe}}</div>
      
      <p class="title"> Rating : {{rating}}</p>
      <div class="text--primary"
      >
       Price :{{price}}
      </div>
    </v-card-text>
    <v-card-actions >
         <v-row justify = 'center' >
        <v-col  md = "5" align-center >
      
    <v-card-actions >
       <v-btn 
        text
        color="deep-purple accent-4"
        @click.stop="showScheduleForm = true"
      >
      
        MORE INFO
      </v-btn>
       <v-btn
       
         text
        color="green"
      >
      <v-icon>mdi-cart</v-icon>
        BUY
      </v-btn>
        
    </v-card-actions>
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
            games :[],
            showScheduleForm: false,
            
        };
    },
   
    props: ["groupe", "title", "price", "rating","description"],
    components: { MoreInfoDialog }
}
</script>