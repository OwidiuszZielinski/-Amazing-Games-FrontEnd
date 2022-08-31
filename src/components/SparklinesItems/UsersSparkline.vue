<template>


        
    <v-card
    class="d-flex flex-wrap mt-3 ms-1 mr-2 "
    
      color="grey"
      dark
      width="700"
      height ='400'
      
    >

    <v-card-text>
        <div class="text-h4 font-weight-thin">
          Sales Games Last Week
        </div>
      </v-card-text>
      <v-card-text>
        <v-sheet color="rgba(0, 0, 0, .12)">
          <v-sparkline
            :lables="gameLabels"
            :value="gameValues"
            color="rgba(255, 255, 255, .7)"
            height="100"
            padding="24"
            stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item">
              ${{ item.value }}
            </template>
            
          </v-sparkline>
        </v-sheet>
      </v-card-text>

    </v-card >
  
   </template>
<script>
  
 
 export default {
   data: () => ({
     gameLabels: [
         22,
         23,
         24,
         25,
         26,
         27
     ],
     gameValues: [
       423,
       446,
       675,
       510,
       590,
       610,
       760,
     ],
   }),
  
 }
</script>