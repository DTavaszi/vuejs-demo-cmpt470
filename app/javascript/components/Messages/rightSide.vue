<template>
  <v-layout row class="height-auto">
    <v-flex xs1>
    </v-flex>
    <v-flex xs10>
      <v-card dark color="blue" class="rightSide">
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
