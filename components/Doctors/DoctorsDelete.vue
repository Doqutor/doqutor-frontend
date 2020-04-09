<template>
  <div>
    <v-snackbar v-model="alert.status">
      {{ alert.message }}
      <v-btn
        @click="alert = { status: false }"
        color="pink"
        text>
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
      const opts = { 
        headers: {
          authorization: `Bearer ${config.token}`
        }
      }

      try {
        await this.$axios.$delete('/doctors/' + this.id, opts)
        this.alert = { status: true, message: 'Success', color: 'green' }
      } catch (err) {
        this.alert = { status: true, message: 'There was an error deleting this doctor', color: 'red' }
      }
    }
  },
}
</script>
