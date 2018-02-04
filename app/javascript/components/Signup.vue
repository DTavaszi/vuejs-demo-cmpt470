<template>
  <div>
    <p>{{ count }}</p>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    count: function() {
      return this.$store.state.count
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
