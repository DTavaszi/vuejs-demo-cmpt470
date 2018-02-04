<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ count }}</p>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello!"
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
