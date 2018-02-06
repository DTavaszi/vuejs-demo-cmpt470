<template>
  <div>
    <header style="background-color: blue; width: 100%; height: 100px;">
      This is my header
    </header>
    <Hello></Hello>
    <Users></Users>
  </div>
</template>

<script>
import Hello from './Hello'
import Users from './Users'

export default {
  components: {
    Users,
    Hello
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
