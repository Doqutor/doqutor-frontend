<template>
  <v-container>
    <v-row>
      <v-col  
        v-for="doctor in doctors"
        :key="doctor.id"
        cols="12" sm="6" md="4" lg="3">
        <DoctorsCard :doctor="doctor" nuxt :to="'/doctors/' + doctor.name" />
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

  // ! Testing
  data: () => ({
    doctors: [
      {
        id: 0,
        name: 'Bleh',
        age: 8,
        field: ':((((('
      },
      {
        id: 1,
        name: 'Phil',
        age: 3,
        field: 'gyno'
      },
      {
        id: 2,
        name: 'Bob',
        age: 31,
        field: 'haha'
      },
      {
        id: 3,
        name: 'Judy',
        age: 12,
        field: 'rip'
      },
      {
        id: 4,
        name: 'awdhakwd',
        age: 982739,
        field: 'wad.;jkawop;d'
      },
      {
        id: 5,
        name: 'Phil',
        age: 3,
        field: 'gyno'
      },
      {
        id: 6,
        name: 'Bob',
        age: 31,
        field: 'haha'
      },
      {
        id: 7,
        name: 'Judy',
        age: 12,
        field: 'rip'
      },
    ]
  }),

  // ? Prod
  // async asyncData({ $axios }) {
  //   const doctors = await $axios.$get('http://icanhazip.com') // GET /doctors
  //   return { doctors }
  // },

  // data: () => ({
  //   doctors: []
  // }),
}
</script>
