<template>
  <v-container>
    <v-alert v-if="!doctors" type="info">Loading...</v-alert>
    <v-row v-else>
      <v-col  
        v-for="doctor in doctors"
        :key="doctor.id"
        cols="12" sm="6" md="4" lg="3">
        <DoctorsCard :doctor="doctor" nuxt :to="'/doctors/' + doctor.id" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DoctorsCard from '@/components/Doctors/DoctorsCard'

export default {
  components: {
    DoctorsCard,
  },

  data: () => ({
    doctors: null
  }),

  async mounted() {
    this.doctors = await this.$axios.$get('https://00gwwcfkjk.execute-api.ap-southeast-2.amazonaws.com/prod/doctors')
  },
}
</script>
