<template>
  <div>
    <p>LOGIN_URL_A: {{ LOGIN_URL_A }}</p>
    <p>LOGIN_URL_B: {{ LOGIN_URL_B }}</p>
    <p>LOGIN_URL_C: {{ LOGIN_URL_C }}</p>
    <p>LOGIN_URL_D: {{ LOGIN_URL_D }}</p>
  </div>
</template>



<script>
export default {
  data() {
    return {
      LOGIN_URL_A: process.env.LOGIN_URL_A,
      LOGIN_URL_B: process.env.LOGIN_URL_B,
      LOGIN_URL_C: process.env.LOGIN_URL_C,
      LOGIN_URL_D: process.env.LOGIN_URL_D,
    }
  },
}
</script>
