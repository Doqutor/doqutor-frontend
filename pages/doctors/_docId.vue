<template>
  <div>
    <v-alert v-if="!doctor" type="info">Loading...</v-alert>
    <div v-else>
      <DoctorsCard :doctor="doctor" max-width="400" class="mx-auto" />
      <DoctorsUpdate v-if="docId" :id="docId" />
      <DoctorsDelete />
    </div>
  </div>
</template>

<script>
import DoctorsCard from '@/components/Doctors/DoctorsCard'
import DoctorsUpdate from '@/components/Doctors/DoctorsUpdate'
import DoctorsDelete from '@/components/Doctors/DoctorsDelete'

export default {
  components: {
    DoctorsCard,
    DoctorsUpdate,
    DoctorsDelete,
  },

  data: () => ({
    docId: null,
    doctor: null
  }),

  async mounted() {
    this.docId = this.$route.params.docId
    this.doctor = await this.$axios.$get('https://00gwwcfkjk.execute-api.ap-southeast-2.amazonaws.com/prod/doctors/' + this.docId)
  },
}
</script>
