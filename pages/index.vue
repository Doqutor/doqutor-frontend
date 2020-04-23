<template>
  <div>
    <p>LOGIN_URL: {{ LOGIN_URL }}</p>
  </div>
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
