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
                {id: '0', stat: 'STARTED'},
                {id: '1', stat: 'IN-PROGRESS'},
                {id: '2', stat: 'POSTED'},
                {id: '3', stat: 'CANCELED'},
                {id: '4', stat: 'ENDED'},
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
