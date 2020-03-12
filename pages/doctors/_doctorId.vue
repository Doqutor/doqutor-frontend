<template>
  <div>
    <v-card v-if="you" max-width="400" class="mx-auto">
      <v-img
        height="250"
        src="https://ktar.com/wp-content/uploads/2020/03/coronavirus-doctor-sampe-getty.jpg"
      />

      <v-card-title>{{ you.name }} ({{ you.age }})</v-card-title>

      <v-card-text>
        {{ you.field }}
      </v-card-text>
    </v-card>
    <p v-else>Go away bitch</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    you: null,
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
        name: 'Hehehehe',
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
  mounted () {
    const doctorId = this.$route.params.doctorId
    console.log(doctorId)
    this.you = this.doctors.filter(d => d.name === doctorId)[0]
  },
}
</script>
