<template>
  <v-container>
    <v-alert v-if="!patients" type="info">Loading...</v-alert>
    <v-row v-else>
      <v-col  
        v-for="patient in patients.data"
        :key="patient.id"
        cols="12" sm="6" md="4" lg="3">
        <PatientsCard :patient="patient" nuxt :to="'/patients/' + patient.id" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import config from '@/lib/config'
import PatientsCard from '@/components/Patients/PatientsCard'

export default {
  components: {
    PatientsCard,
  },

  data: () => ({
    patients: null
  }),

  async mounted() {
    const opts = { 
      headers: {
        authorization: `Bearer ${config.token}`
      }
    }

    this.patients = await this.$axios.$get('/patients', opts)
  },
}
</script>
