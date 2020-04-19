<template>
  <v-container>
    <v-alert v-if="error" type="error">Error: {{ error }}</v-alert>
    <v-alert v-if="!doctors" type="info">Loading...</v-alert>
    <v-row v-else>
      <v-col  
        v-for="doctor in doctors.data"
        :key="doctor.id"
        cols="12" sm="6" md="4" lg="3">
        <DoctorsCard :doctor="doctor" nuxt :to="'/doctors/' + doctor.id" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import config from '@/lib/config'
import DoctorsCard from '@/components/Doctors/DoctorsCard'

export default {
  components: {
    DoctorsCard,
  },

  data: () => ({
    doctors: null,
    error: null,
  }),

  async mounted() {
    const opts = { 
      headers: {
        authorization: `Bearer ${config.token}`
      }
    }
    try {
      this.doctors = await this.$axios.$get('/doctors', opts)
    } catch (e) {
      if (e.response && e.response.data && e.response.data.error) this.error = e.response.data.error
      else this.error = 'An unknown error occurred.'
    }
  },
}
</script>
