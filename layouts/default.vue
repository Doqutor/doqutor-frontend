<template>
  <v-app dark>
    <v-app-bar
      app
      color="primary"
      dark>
      <v-toolbar-title class="display-1">Doqutor</v-toolbar-title>

      <v-spacer />

      <v-btn icon nuxt to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn v-if="token" icon nuxt to="/doctors">
        <v-icon>mdi-doctor</v-icon>
      </v-btn>

      <v-btn v-if="token" icon nuxt to="/patients">
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn v-if="token" color="green" icon nuxt @click="logout()">
        <v-icon>mdi-logout</v-icon>
      </v-btn>

      <v-btn v-else color="red" icon nuxt :href="login">
        <v-icon>mdi-lock</v-icon>
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
      token: null,
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },

  computed: {
    login() {
      const subdom = process.env.LOGIN_URL
      const fullUri = `https://login-doqutore-infrastructure-${subdom}.auth.ap-southeast-2.amazoncognito.com/login?client_id=1l26brptvhg0hhricpnno0h45d&response_type=token&scope=doqutore/application&redirect_uri=https://${subdom}.aws9447.me/login`
      console.log('fullUri', fullUri)
      return fullUri
    }
  },

  mounted() {
    if (process.browser) {
      this.token = window.localStorage.getItem('config:token')
    }
  },

  methods: {
    logout() {
      window.localStorage.setItem('config:token', null)
    }
  },
}
</script>
