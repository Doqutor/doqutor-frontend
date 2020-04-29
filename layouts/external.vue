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

      <v-btn v-if="token" @click="logout()" color="red" icon nuxt>
        <v-icon>mdi-logout</v-icon>
      </v-btn>

      <v-btn v-else color="green" icon nuxt :href="login">
        <v-icon>mdi-lock</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
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
      title: 'Vuetify.js'
    }
  },

  computed: {
    login() {
      const subdom = process.env.LOGIN_URL
      const fullUri = `https://login-doqutore-infrastructure-${subdom}.auth.ap-southeast-2.amazoncognito.com/login?client_id=1l26brptvhg0hhricpnno0h45d&response_type=token&scope=doqutore/application&redirect_uri=https://${subdom}.aws9447.me/login`
      return fullUri
    }
  },

  mounted() {
    if (process.browser) {
      this.token = window.localStorage.getItem('config:token')
      setInterval(() => {
        this.token = window.localStorage.getItem('config:token')
      }, 500)
    }
  },

  methods: {
    logout() {
      window.localStorage.removeItem('config:token')
      this.$router.push('/')
      this.token = null
    }
  },
}
</script>
