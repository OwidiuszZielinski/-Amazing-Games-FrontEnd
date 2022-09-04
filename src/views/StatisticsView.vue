<template>
   <main style="height: 100%;background: url('Background2.jpg') no-repeat center center" justify="center" >
   <v-container fill-height>
   <v-col md="6">
    <SellingSparkline></SellingSparkline>
    <UsersSparkline></UsersSparkline>
    </v-col>
    <v-col md="6">
    <ViewsSparline></ViewsSparline>
    <TestChart></TestChart>
    </v-col>   

   </v-container>
  </main>
  </template>
  
  <script>
   
    import SellingSparkline from '../components/SparklinesItems/SellingSparkline.vue'
import UsersSparkline from '../components/SparklinesItems/UsersSparkline.vue'
import ViewsSparline from '../components/SparklinesItems/ViewsSparline.vue'
import TestChart from '../components/SparklinesItems/TestChart.vue'
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
      components: { SellingSparkline, UsersSparkline, ViewsSparline, TestChart },
    }
  </script>