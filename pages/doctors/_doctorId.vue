<template>
  <div>
    <DoctorsCard v-if="doctor" :doctor="doctor" max-width="400" class="mx-auto" />

    <v-alert v-else type="error">
      Data for the given doctor could not be fetched.
    </v-alert>
    <DoctorsDelete />
  </div>
</template>

<script>
import DoctorsCard from '@/components/Doctors/DoctorsCard'
import DoctorsDelete from '@/components/Doctors/DoctorsDelete'

export default {
  components: {
    DoctorsCard,
    DoctorsDelete,
  },

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
  //   const doctorId = this.$route.params.doctorId
  //   const doctor = await $axios.$get('http://icanhazip.com') // GET /doctors
  //   return { doctor }
  // },

  // data: () => ({
  //   doctor: {}
  // }),

}
</script>
