<template>
  <div class="about">
    <h1>{{ info.data.value}}</h1>
  </div>
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
      .get('https://www.tronalddump.io/random/quote')
      .then(response => (this.info = response))
  }
}
</script>