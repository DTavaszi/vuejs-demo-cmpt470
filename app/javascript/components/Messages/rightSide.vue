<template>
  <v-layout row wrap>
    <v-flex xs1 v-for="i in 1" :key="i">
    </v-flex>
    <v-flex xs10 v-for="i in 1" :key="i">
      <v-card dark color="secondary" class="rightSide">
        <v-card-text class="px-0"> {{ message.message }} </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs1 v-for="i in 1" :key="i">
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
