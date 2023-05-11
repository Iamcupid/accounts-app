<script>
import AuthLayout from "../../layout/AuthLayout.vue";

export default {
  name : "Login",
  components : { AuthLayout },
  data : () => {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      // Check if the credentials are correct
      if (this.username === 'admin' && this.password === 'admin') {
        // Save the user's login state in local storage
        localStorage.setItem('loggedIn', true)
        // Redirect the user to the home page
        this.$router.push('/')
      } else {
        alert('Incorrect username or password')
      }
    },
  },
}
</script>

<template>
  <AuthLayout>
    <section class="flex items-center justify-center h-screen">
      <div class="block bg-blue-200 rounded-md shadow-md shadow-gray-400 p-4 w-2/6">
        <form action="" class="mx-12">
          <div class="my-4">
            <label for="uname">Username</label>
            <div class="flex mt-1.5">
              <input type="text" v-model="username" class="block border-2 border-blue-300 focus:border-blue-400 focus:outline-none px-6 py-1.5 w-full" id="uname" placeholder="Username" />
            </div>
          </div>
          <div class="my-4">
            <label for="password">Password</label>
            <div class="flex mt-1.5">
              <input type="password" v-model="password" class="block border-2 border-blue-300 focus:border-blue-400 focus:outline-none px-6 py-1.5 w-full" id="password" placeholder="Password" />
            </div>
          </div>
          <div class="my-4">
            <button @click.prevent="login" class="block border-2 border-blue-300 px-6 py-2 w-full" >
              <fa-icon :icon="['fas','right-to-bracket']" />
              <span class="pl-2 font-bold tracking-wider">Login</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  </AuthLayout>
</template>