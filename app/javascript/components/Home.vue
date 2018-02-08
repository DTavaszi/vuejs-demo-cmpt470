<template>
  <div>
    <header style="background-color: #f3f3f3; width: 100%; height: 100px;">
      Logo. Navigation.
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
