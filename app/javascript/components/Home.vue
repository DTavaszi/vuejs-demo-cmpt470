<template>
  <div>
    <header style="background-color: blue; width: 100%; height: 100px;">
      This is my header
    </header>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "App!"
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
