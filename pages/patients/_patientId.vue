<template>
  <div>
    <v-alert v-if="!patient" type="info">Loading...</v-alert>
    <div v-else>
      <PatientsCard :patient="patient" max-width="400" class="mx-auto" />
      <PatientsUpdate v-if="docId" :id="docId" />
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
    docId: null,
    patient: null
  }),

  async mounted() {
    this.docId = this.$route.params.patientId

    const opts = { 
      headers: {
        authorization: `Bearer ${config.token}`
      }
    }

    this.patient = await this.$axios.$get('https://00gwwcfkjk.execute-api.ap-southeast-2.amazonaws.com/prod/patients/' + this.patientId, opts)
  },
}
</script>
