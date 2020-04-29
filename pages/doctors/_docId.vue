<template>
  <div>
    <v-alert v-if="error" type="error">Error: {{ error }}</v-alert>
    <v-alert v-if="!doctor" type="info">Loading...</v-alert>
    <div v-else>
      <DoctorsCard :doctor="doctor" max-width="400" class="mx-auto" />
      <!-- <DoctorsUpdate v-if="docId" :id="docId" />
      <DoctorsDelete /> -->
    </div>
  </div>
</template>

<script>
import config from '@/lib/config'

import DoctorsCard from '@/components/Doctors/DoctorsCard'
// import DoctorsUpdate from '@/components/Doctors/DoctorsUpdate'
// import DoctorsDelete from '@/components/Doctors/DoctorsDelete'

export default {
  components: {
    DoctorsCard,
    // DoctorsUpdate,
    // DoctorsDelete,
  },

  data: () => ({
    docId: null,
    doctor: null,
    error: null,
  }),

  async mounted() {
    this.docId = this.$route.params.docId

    const opts = { 
      headers: {
        authorization: `Bearer ${config.token}`
      }
    }
    try {
      const doctor = await this.$axios.$get('/doctors/' + this.docId, opts)
      this.doctor = doctor.data
    } catch (e) {
      if (e.response && e.response.data && e.response.data.error) this.error = e.response.data.error
      else this.error = 'An unknown error occurred.'
    }
  },
}
</script>
