<template>
  <v-btn
    @click="deleteDoctor"
    color="red"
    fixed
    dark
    fab
    bottom
    large
    right>
    <v-icon>mdi-cancel</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    deleteDoctor() {
      alert('NYI')
    }
  },
}
</script>
