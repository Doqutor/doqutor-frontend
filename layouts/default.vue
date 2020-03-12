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

      <v-btn icon nuxt to="/login">
        <v-icon>mdi-lock</v-icon>
      </v-btn>

      <v-btn icon nuxt to="/doctors">
        <v-icon>mdi-dots-vertical</v-icon>
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
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
