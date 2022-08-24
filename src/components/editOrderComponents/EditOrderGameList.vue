<template fill-height>
    <v-container>
        <v-autocomplete v-model="OrderGames" :items="games" @change="getId()" item-text="title" item-value="id" clearable multiple
            label="Games" return-object>
           
    </v-autocomplete>

    </v-container>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            OrderGames: this.propgamesedit,
            games: [],
            tempIds: []

        }
    },
    props: ['propgamesedit'],

    model: { props: 'propgamesedit', event: 'sendEditID' },

    created() {
        
        axios
            .get(`${this.$apiurl}/games/`)
            .then(response => (this.games = response.data , this.getId()));
    },


    methods: {
        
            getId() {
            var tempIds = []
            for (const game of this.OrderGames) {
                tempIds.push(game.id)

            }

            this.$emit('sendEditID', tempIds)


        }
    },
}
</script>
