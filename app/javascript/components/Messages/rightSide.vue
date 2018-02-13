<template>
  <v-layout row class="height-auto message-card">
    <v-flex xs1>
    </v-flex>
    <v-flex xs10>
      <v-card dark :color="!!message.id ? 'blue' : 'lightgray'" class="rightSide">
        <v-card-text class="pa-2"> {{ message.message }} </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs1>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      user: Object,
      message: Object
    }
  }
</script>
