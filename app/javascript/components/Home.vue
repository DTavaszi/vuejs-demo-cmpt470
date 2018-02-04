<template>
  <div>
    <header style="background-color: blue; width: 100%; height: 100px;">
      This is my header
    </header>
    <p style="background-green;">{{ count }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <router-link to="/hello">Go back</router-link>
  </div>
</template>

<script>
import * as type from '../store/mutationTypes/types'

export default {
  computed: {
    count: function() {
      return this.$store.state.count
    }
  },
  methods: {
    increment: function() {
      this.$store.commit(type.Increment)
    },
    decrement: function() {
      this.$store.commit(type.Decrement)
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
