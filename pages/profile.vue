<template>
  <v-card max-width="400" class="mx-auto">
    <v-img
      height="250"
      src="https://ktar.com/wp-content/uploads/2020/03/coronavirus-doctor-sampe-getty.jpg"
    />

    <v-card-title>{{ doctor.name }} ({{ doctor.age }})</v-card-title>

    <v-card-text>
      {{ doctor.email }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    doctor: {
      name: 'Phil',
      age: 3,
      email: 'gyno@test.com',
      phone_number: '+61400000000'
    }
  }),
}
</script>
