<script>
export default {
  created() {
    const loggedIn = localStorage.getItem('loggedIn')
    if (!loggedIn) {
      // Redirect the user to the login page
      this.$router.push('/login')
    }
  },
}
</script>

<template>
  <router-view />
  <!-- <h1 class="text-4xl font-bold">Hello World</h1> -->
  <!-- <button @click="logout">Logout</button> -->
</template>

<style scoped>
</style>
