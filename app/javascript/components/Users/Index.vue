<template>
  <div id="current-users" v-if="users.length > 0">
    <h3> Current ({{ users.length }}) </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    users: function() {
      return this.$store.getters.users
    }
  },
  methods: {
    getUser: function(e) {
      this.$store.dispatch('getUser', e.target.value)
    }
  }
}
</script>

<style scoped>
</style>
