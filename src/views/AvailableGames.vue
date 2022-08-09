<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{info.data.name}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{info.data.surname}}
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://192.168.1.107:8082/user/1')
      .then(response => (this.info = response))
  }
}
</script>