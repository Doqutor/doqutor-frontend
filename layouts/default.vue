<template>
  <v-app dark>
    <v-app-bar
      app
      color="primary"
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },

  computed: {
    login() {
      const subdom = process.env.LOGIN_URL
      return `https://login-doqutore-infrastructure-${subdom}.auth.ap-southeast-2.amazoncognito.com/login?client_id=1l26brptvhg0hhricpnno0h45d&response_type=token&scope=doqutore/application&redirect_uri=https://${subdom}.aws9447.me/login`
    }
  }
}
</script>
