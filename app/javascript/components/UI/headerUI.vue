<template>
  <v-toolbar color="blue darken-3" dark app clipped-left fixed>
    <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img src="https://vuetifyjs.com/static/doc-images/logo.svg" alt="Vuetify">
        </v-avatar>
      </v-btn>
      <span class="hidden-xs-only"><slot name="title">Vue Messenger</slot></span>
    </v-toolbar-title>
    <v-text-field light solo prepend-icon="search" placeholder="Search" style="max-width: 500px; min-width: 128px"></v-text-field>
    <div class="d-flex align-center" style="margin-left: auto">
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
    </div>
  </v-toolbar>
</template>
