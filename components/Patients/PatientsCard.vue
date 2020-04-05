<template>
  <v-card v-if="patient" v-bind="$attrs" max-width="400" class="mx-auto">
    <v-img
      height="250"
      src="https://ktar.com/wp-content/uploads/2020/03/coronavirus-patient-sampe-getty.jpg"
    />

    <v-card-title>{{ patient.name }} ({{ patient.age }})</v-card-title>

    <v-card-text>
      {{ patient.email }} {{ patient.phone }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    patient: Object,
  }
}
</script>
