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
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          color="blue"
          fixed
          dark
          fab
          bottom
          large
          left>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create Doctor</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field v-model="name" label="Name" required />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model.number="age" label="Age" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="email" label="Email" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="phone_number" label="Phone number" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="dialog = false" color="red" text>Close</v-btn>
          <v-btn @click="updateDoctor" color="blue" text>Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    phone_number: null,
  }),

  methods: {
    async updateDoctor() {
      const doctor = {
        name: this.name,
        age: this.age,
        email: null,
        phone_number: null,
      }

      const opts = { 
        headers: {
          authorization: `Bearer ${config.token}`
        }
      }

      try {
        await this.$axios.$put('/doctors/' + this.id, doctor, opts)
        this.alert = { status: true, message: 'Success', color: 'green' }
      } catch (err) {
        this.alert = { status: true, message: 'There was an error editing this doctor', color: 'red' }
      }
    }
  },
}
</script>
