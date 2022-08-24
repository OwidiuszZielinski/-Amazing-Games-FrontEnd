<template fill-height>
    <v-container>
        <v-autocomplete v-model="user" :items="Users" @change="getId()" item-text="username" clearable 
            label="User" required return-object>
        </v-autocomplete>
        
    </v-container>
</template>


<script>
import axios from 'axios'


export default {
    data() {
        return {
            user: this.propuseredit,
            Users: [],

        }
    },
    props: ['propuseredit'],

    model: { props: 'propuser', event: 'sendId' },



    created() {

        axios
            .get(this.$apiurl +'/users')
            .then(response => (this.Users = response.data));
    },


    methods: {

        getId() {
             
            this.$emit('sendId', this.user)

        }
    }
    
}
</script>
