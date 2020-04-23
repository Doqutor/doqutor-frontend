<template>
  <p>LOGIN_URL: {{ LOGIN_URL }}</p>
</template>



<script>
export default {
  data() {
    return {
      LOGIN_URL: process.env.LOGIN_URL,
    }
  },
}
</script>
