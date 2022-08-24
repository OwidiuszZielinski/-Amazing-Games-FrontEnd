<template fill-height>
    <v-container>
        <v-autocomplete v-model="status" :items="statusList" @change="getStatus()" clearable
            label="Status">
             </v-autocomplete>
             <h4>{{status}}</h4>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            status: this.propstatusedit,
            statusList: ['STARTED','IN-PROGRESS','POSTED','CANCELED','ENDED'],
        }
    },
    props: ['propstatusedit'],

    methods: {

        getStatus() {
            this.$emit('sendStatus', this.status)

        }
    }
    
}
</script>
