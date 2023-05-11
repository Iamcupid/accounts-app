<script>
export default {
  name : "Logout",
  methods: {
    logout() {
      // Clear the user's login state from local storage
      localStorage.removeItem('loggedIn')
      // Redirect the user to the login page
      this.$router.push('/login')
    },
  },
}
</script>

<template>
  <button @click="logout">Logout</button>
</template>