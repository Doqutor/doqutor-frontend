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
                <v-text-field v-model="spec" label="Spec" />
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
export default {
  props: {
    id: String
  },

  data: () => ({
    alert: { status: false },

    dialog: false,
    name: null,
    age: null,
    spec: null,
  }),

  methods: {
    async updateDoctor() {
      const doctor = {
        name: this.name,
        age: this.age,
        spec: this.spec,
      }

      try {
        await this.$axios.$put('https://00gwwcfkjk.execute-api.ap-southeast-2.amazonaws.com/prod/doctors' + this.id, doctor)
        this.alert = { status: true, message: 'Success', color: 'green' }
      } catch (err) {
        this.alert = { status: true, message: 'There was an error editing this doctor', color: 'red' }
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
