<template fill-height>
    <v-container>
        <v-autocomplete v-model="status" item-text="stat"  :items="statusList" @change="getStatus()" clearable return-object
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
             statusList: [
                {id: '0', stat: 'STARTED'},
                {id: '1', stat: 'IN-PROGRESS'},
                {id: '2', stat: 'POSTED'},
                {id: '3', stat: 'CANCELED'},
                {id: '4', stat: 'ENDED'},
                ],
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
