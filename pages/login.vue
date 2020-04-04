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
  created() {
    console.log(location.hash);
  }
}
</script>
