<template>
  <v-card v-if="doctor" v-bind="$attrs" max-width="400" class="mx-auto">
    <v-img
      height="250"
      src="https://ktar.com/wp-content/uploads/2020/03/coronavirus-doctor-sampe-getty.jpg"
    />

    <v-card-title>{{ doctor.name }}</v-card-title>

    <v-card-text>
      {{ doctor.email }}
      <br>
      {{ doctor.phone }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    doctor: Object,
  },
}
</script>
