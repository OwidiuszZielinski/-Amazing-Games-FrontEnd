<template fill-height>
    <v-container>
        <v-autocomplete  v-model="status" :items="statuses" item-text="stat"  @change="getStatus()" clearable 
            label="Status" return-object>
        </v-autocomplete>
       
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            status: '',
            statuses: [
            { id: '0', stat: 'IN-BASKET' },
      { id: '1', stat: 'STARTED' },
      { id: '2', stat: 'IN-PROGRESS' },
      { id: '3', stat: 'POSTED' },
      { id: '4', stat: 'CANCELED' },
      { id: '5', stat: 'ENDED' },
                ],

        }
    },
    props: ['propstatus'],
    model: { props: 'propstatus', event: 'sendStatusID' },

    methods: {

        getStatus() {
               
            this.$emit('sendStatusID', this.status)

        }
    }
    
}
</script>
