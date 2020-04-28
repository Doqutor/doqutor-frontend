<template>
  <v-card>
    <v-toolbar color="pink">
      <v-toolbar-title>Login :)))))))</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        v-model="email"
        placeholder="Email"
      />

      <v-text-field
        v-model="password"
        placeholder="Password"
      />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        @click="submit"
        color="green"
        class="white--text">
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import config from '@/lib/config'
export default {
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    submit() {
      alert('Submitted :))))')
    }
  },
  middleware ({ store, redirect }) {
    const urlParams = new URLSearchParams(window.location.hash.substring(1))
    if (!urlParams.get('access_token') || !(urlParams.get('expires_in'))) {
      alert('props don\'t exist')
      return
    }
    config.setToken(urlParams.get('access_token'), parseInt(urlParams.get('expires_in')))
    redirect('/')
  }
}
</script>
