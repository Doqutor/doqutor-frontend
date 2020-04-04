<template>
  <div>
    <v-snackbar v-model="alert.status">
      {{ alert.message }}
      <v-btn
        color="pink"
        text
        @click="alert = { status: false }">
        Close
      </v-btn>
    </v-snackbar>
    <v-btn
      @click="deleteDoctor"
      color="red"
      fixed
      dark
      fab
      bottom
      large
      right>
      <v-icon>mdi-cancel</v-icon>
    </v-btn>
  </div>
</template>

<script>
import config from '@/lib/config'

export default {
  props: {
    id: String
  },

  data: () => ({
    alert: { status: false },

    dialog: false,
    name: null,
    age: null,
    email: null,
    phone: null,
  }),

  methods: {
    async deleteDoctor() {
      try {
        await this.$axios.$delete(`${config.apiBase}/doctors/` + this.id)
        this.alert = { status: true, message: 'Success', color: 'green' }
      } catch (err) {
        this.alert = { status: true, message: 'There was an error deleting this doctor', color: 'red' }
      }
    }
  },
}
</script>

<!--
<template>
  <v-btn
    @click="updateDoctor"
    color="orange"
    fixed
    dark
    fab
    bottom
    large
    left>
    <v-icon>mdi-pencil</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    async updateDoctor() {
      await this.$axios.$put('https://00gwwcfkjk.execute-api.ap-southeast-2.amazonaws.com/prod/doctors/', {
        id: '55b06d28',
        name: 'Haha McLolface',
        spec: 'Super gyno',
        age: 3
      })
    }
  },
}
</script>
-->
