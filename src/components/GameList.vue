<template >
    <v-main>
        <v-autocomplete v-model="OrderGames" :items="games" @change="getId()" item-text="title" clearable multiple
            label="Games" required return-object>
        </v-autocomplete>
        <h1>{{ propgames }}</h1>
    </v-main>
</template>

<script>
import axios from 'axios'


export default {
    data() {
        return {
            OrderGames: [],
            gameId: [],
            games: [],



        }
    },
    props: ['selectedgames'],

    model: { props: 'selectedgames', event: 'sendIds' },



    created() {

        axios
            .get('http://192.168.1.107:8082/games')
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