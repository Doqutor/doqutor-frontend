<template>
  <v-card v-if="patient" v-bind="$attrs" max-width="400" class="mx-auto">
    <v-img
      height="250"
      src="https://images.theconversation.com/files/303192/original/file-20191122-74572-kfjs22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=668&h=324&fit=crop"
    />

    <v-card-title>{{ patient.name }} ({{ patient.insurance_id }})</v-card-title>

    <v-card-text>
      {{ patient.email }}
      <br>
      {{ patient.phone }}
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
