<template fill-height>
    <v-container>
        <v-autocomplete  v-model="statusList[0]" :items="statusList" @change="getStatus()" clearable 
            label="Status">
        </v-autocomplete>
    </v-container>
</template>


<script>



export default {
    data() {
        return {
            status: '',
            statusList: ['STARTED','IN-PROGRESS','POSTED','CANCELED','ENDED'],


        }
    },
    props: ['propstatus'],

    methods: {

        getStatus() {
            this.$emit('sendStatus', this.status)

        }
    }
    
}
</script>
