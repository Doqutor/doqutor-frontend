<template>
  <div>
    {{ ip }}
    <v-card v-if="doctor" max-width="400" class="mx-auto">
      <v-img
        height="250"
        src="https://ktar.com/wp-content/uploads/2020/03/coronavirus-doctor-sampe-getty.jpg"
      />

      <v-card-title>{{ doctor.name }} ({{ doctor.age }})</v-card-title>

      <v-card-text>
        {{ doctor.field }}
      </v-card-text>
    </v-card>
    <p v-else>Go away bitch</p>
  </div>
</template>

<script>
export default {

  // ! Testing
  data: () => ({
    doctor: {
      name: 'Phil',
      age: 3,
      field: 'gyno'
    },
  }),

  // ? Prod
  // async asyncData({ $axios }) {
  //   const doctor = await $axios.$get('http://icanhazip.com') // GET /doctors
  //   return { doctor }
  // },

  // data: () => ({
  //   doctor: {}
  // }),

}
</script>
