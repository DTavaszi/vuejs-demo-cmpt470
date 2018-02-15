<template>
  <v-list subheader>
    <v-subheader>{{ title }}</v-subheader>
    <v-list-tile avatar v-for="item in items" :value="item.active" :key="item.title" @click="selectItem(item)">
      <v-list-tile-avatar>
        <img v-bind:src="item.avatar"/>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title v-html="item.title"></v-list-tile-title>
        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon v-bind:color="item.notify ? 'teal' : 'grey'">chat_bubble</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array
  },
  methods: {
    selectItem: function(item) {
      this.$store.dispatch('setSelection', item.id)
      this.$store.dispatch('setSelectedType', item.type)
    }
  }
}
</script>
