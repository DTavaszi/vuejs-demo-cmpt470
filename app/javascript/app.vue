<template>
  <div id="app">
    <header style="background-color: blue; width: 100%; height: 100px;">
      This is my header
    </header>
    <transition name="fade" mode="out-in">
     <router-view class="view"></router-view>
    </transition>
    <app></app>
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
