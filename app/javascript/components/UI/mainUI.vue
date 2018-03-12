<template>
  <div>
    <v-navigation-drawer fixed clipped app>
      <slot name="drawer">
      </slot>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height class="no-padding">
        <v-layout justify-center align-center>
          <slot></slot>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    source: String,
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
