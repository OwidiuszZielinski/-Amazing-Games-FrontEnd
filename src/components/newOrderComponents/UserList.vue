<template fill-height>
    <v-container>
        <v-autocomplete v-model="userId" :items="users" @change="getId()" item-text="username" clearable 
            label="User" required return-object>
        </v-autocomplete>
        <h1>{{userId}}</h1>
    </v-container>
</template>


<script>
import axios from 'axios'


export default {
    data() {
        return {
            userId: '',
            users: [],



        }
    },
    props: ['propuser'],

    model: { props: 'propuser', event: 'sendId' },



    created() {

        axios
            .get(this.$apiurl +'/users')
            .then(response => (this.users = response.data));
    },


    methods: {

        getId() {
            
            this.$emit('sendId', this.userId.id)

        }
    }
    
}
</script>
