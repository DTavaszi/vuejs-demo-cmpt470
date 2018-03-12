<template>
  <v-app id="inspire">
    <headerUI></headerUI>
    <router-view></router-view>
    </mainUI>
  </v-app>
</template>

<script>
import headerUI from 'components/UI/headerUI'
export default {
  components: {
    headerUI
  }
}
</script>

<style scoped>
</style>
