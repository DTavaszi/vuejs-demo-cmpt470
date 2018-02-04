<template>
  <div>
    <header style="background-color: blue; width: 100%; height: 100px;">
      This is my header
    </header>
    <p style="background-green;">{{ count }}</p>
    </p>
  </div>
</template>

<script>
import * as type from '../store/mutationTypes/types'

export default {
  computed: {
    count: function() {
      return this.$store.state.count;
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
