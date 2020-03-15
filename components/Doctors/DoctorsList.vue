<template>
  <v-container>
    <v-row>
      <v-col  
        v-for="doctor in doctors"
        :key="doctor.name"
        cols="12" sm="6" md="4" lg="3">
        <v-card nuxt :to="'/doctors/' + doctor.name">
          <v-img
            height="250"
            src="https://ktar.com/wp-content/uploads/2020/03/coronavirus-doctor-sampe-getty.jpg"
          />

          <v-card-title>{{ doctor.name }} ({{ doctor.age }})</v-card-title>

          <v-card-text>
            {{ doctor.field }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // ! Testing
  data: () => ({
    doctors: [
      {
        name: 'Phil',
        age: 3,
        field: 'gyno'
      },
      {
        name: 'Bob',
        age: 31,
        field: 'haha'
      },
      {
        name: 'Judy',
        age: 12,
        field: 'rip'
      },
      {
        name: 'awdhakwd',
        age: 982739,
        field: 'wad.;jkawop;d'
      },
      {
        name: 'Phil',
        age: 3,
        field: 'gyno'
      },
      {
        name: 'Bob',
        age: 31,
        field: 'haha'
      },
      {
        name: 'Judy',
        age: 12,
        field: 'rip'
      },
      {
        name: 'awdhakwd',
        age: 982739,
        field: 'wad.;jkawop;d'
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
