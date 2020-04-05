<template>
  <v-app dark>
    <v-app-bar
      app
      color="indigo darken-2"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
      <v-toolbar-title>Doqutor</v-toolbar-title>

      <v-spacer />

      <v-btn icon nuxt to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon nuxt :href="login">
        <v-icon>mdi-lock</v-icon>
      </v-btn>

      <v-btn icon nuxt to="/doctors">
        <v-icon>mdi-doctor</v-icon>
      </v-btn>

      <v-btn icon nuxt to="/patients">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import config from '@/lib/config'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      login: config.loginEndpoint,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
