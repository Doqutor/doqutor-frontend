<template>
  <div>
    <v-alert v-if="!patient" type="info">Loading...</v-alert>
    <div v-else>
      <PatientsCard :patient="patient" max-width="400" class="mx-auto" />
      <PatientsUpdate v-if="patientId" :id="patientId" />
      <PatientsDelete />
    </div>
  </div>
</template>

<script>
import config from '@/lib/config'

import PatientsCard from '@/components/Patients/PatientsCard'
import PatientsUpdate from '@/components/Patients/PatientsUpdate'
import PatientsDelete from '@/components/Patients/PatientsDelete'

export default {
  components: {
    PatientsCard,
    PatientsUpdate,
    PatientsDelete,
  },

  data: () => ({
    patientId: null,
    patient: null
  }),

  async mounted() {
    this.patientId = this.$route.params.patientId

    const opts = { 
      headers: {
        authorization: `Bearer ${config.token}`
      }
    }

    this.patient = await this.$axios.$get('/patients/' + this.patientId, opts)
  },
}
</script>
