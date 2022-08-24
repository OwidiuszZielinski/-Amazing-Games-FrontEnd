<template fill-height>
    <v-container>
        <v-autocomplete v-model="OrderGames" :items="games" @change="getId()" item-text="title" clearable multiple
            label="Games" return-object>
        </v-autocomplete>
    </v-container>
</template>


<script>
import axios from 'axios'


export default {
    data() {
        return {
            OrderGames: [],

            games: [],



        }
    },
    props: ['propgames'],

    model: { props: 'propgames', event: 'sendIds' },



    created() {

        axios
            .get(`${this.$apiurl}/games/`)
            .then(response => (this.games = response.data));
    },


    methods: {



        getId() {
            var tempIds = []
            for (const game of this.OrderGames) {
                tempIds.push(game.id)

            }
            this.$emit('sendIds', tempIds)

        }
    },
}
</script>
