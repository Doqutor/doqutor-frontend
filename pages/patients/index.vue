<template>
  <div>
    <PatientsList />
    <!-- <PatientsCreate /> -->
  </div>
</template>

<script>
import PatientsList from '@/components/Patients/PatientsList'
// import PatientsCreate from '@/components/Patients/PatientsCreate'

export default {
  components: {
    PatientsList,
    // PatientsCreate,
  }
}
</script>
