<template>
  <div>
    <Add></Add>
    <Index></Index>
  </div>
</template>

<script>
import Add from './Users/Add'
import Index from './Users/Index'

export default {
  components: {
    Index,
    Add
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
