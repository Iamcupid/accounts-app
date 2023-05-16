<script>
import clickSound from '../../assets/sound/computer-processing-sound-effects-short-click-select-01-122134.mp3';
export default {
  name : "Logout",
  methods: {
    logout() {
      localStorage.removeItem('loggedIn')
      this.$router.push('/login')
    },
    clickSound() {
      const audio = new Audio(clickSound);
      audio.play();
    },
  },
}
</script>

<template>
  <aside class="fixed bg-gray-950 w-60 h-screen overflow-y-auto" >
    <nav class="p-0.5 pb-4">
      <ul class="flex flex-col gap-1 text-gray-400">
        <router-link @click="clickSound" :to="{ name : 'dashboard' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','tachometer-alt']" class="w-4 h-4" />
          <span class="">Dashboard</span>
        </router-link>
        <li class="text-sm font-bold uppercase border-b-2 border-gray-500 pb-1 mx-4 my-1">Miscelenous</li>
        <router-link @click="clickSound" :to="{ name : 'dashboard' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','tachometer-alt']" class="w-4 h-4" />
          <span class="">Reports</span>
        </router-link>
        <li class="text-sm font-bold uppercase border-b-2 border-gray-500 pb-1 mx-4 my-1">Retail Management</li>
        <router-link @click="clickSound" :to="{ name : 'items.index' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','tachometer-alt']" class="w-4 h-4" />
          <span class="">Products / Services</span>
        </router-link>
        <router-link @click="clickSound" :to="{ name : 'category.index' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','tachometer-alt']" class="w-4 h-4" />
          <span class="">Category</span>
        </router-link>
        <router-link @click="clickSound" :to="{ name : 'invoice.index' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','tachometer-alt']" class="w-4 h-4" />
          <span class="">Invoices</span>
        </router-link>
        <li class="text-sm font-bold uppercase border-b-2 border-gray-500 pb-1 mx-4 my-1">Employee Management</li>
        <router-link @click="clickSound" :to="{ name : 'staffs.index' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','users']" class="w-4 h-4" />
          <span class="">Staff & Employee</span>
        </router-link>
        <router-link @click="clickSound" :to="{ name : 'staffs.index' }" class="flex flex-col items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" ></router-link>
        <router-link @click="clickSound" :to="{ name : 'staffs.index' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','users']" class="w-4 h-4" />
          <span class="">Attendence Log</span>
        </router-link>
        <router-link @click="clickSound" :to="{ name : 'payroll.index' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','users']" class="w-4 h-4" />
          <span class="">Payroll Statement</span>
        </router-link>
        <li class="text-sm font-bold uppercase border-b-2 border-gray-500 pb-1 mx-4 my-1">Settings & Privacy</li>
        <router-link @click="clickSound" :to="{ name : 'dashboard' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','cog']" class="w-4 h-4" />
          <span class="">Settings</span>
        </router-link>
        <router-link @click="clickSound" :to="{ name : 'dashboard' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','cog']" class="w-4 h-4" />
          <span class="">Settings</span>
        </router-link>
        <router-link @click="clickSound" :to="{ name : 'dashboard' }" class="flex items-center gap-4 hover:bg-gray-900 px-4 py-1.5 w-full" >
          <fa-icon :icon="['fas','cog']" class="w-4 h-4" />
          <span class="">Settings</span>
        </router-link>
      </ul>
    </nav>
    <footer class="sticky bg-gray-950 bottom-3">
      <div class="flex items-center justify-between gap-4 border-t-2 border-gray-600 pt-2 mx-4">
        <div class="w-1/4">
          <img src="../../assets/images/shawon.jpg" class="border-2 border-gray-500 rounded-full p-0.5" alt="" />
        </div>
        <div class="w-3/4">
          <h6 class="text-lg text-gray-400 font-bold">Shawon Khan</h6>
          <p class="text-base text-gray-600 font-medium">
            <fa-icon :icon="['fas','lock']" />
            <span class="pl-2">Administrator</span>
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 border-t border-gray-600 pt-1.5 mt-1.5 mx-4">
        <div class="block text-gray-500">
          <router-link @click="clickSound" :to="{ name : 'dashboard' }" class="flex items-center justify-center gap-4 hover:text-gray-300 hover:bg-gray-600 border-2 border-gray-600 rounded-full w-8 h-8" >
            <fa-icon :icon="['fas','edit']" />
          </router-link>
        </div>
        <div class="block text-gray-500">
          <router-link @click="clickSound" :to="{ name : 'dashboard' }" class="flex items-center justify-center gap-4 hover:text-gray-300 hover:bg-gray-600 border-2 border-gray-600 rounded-full w-8 h-8" >
            <fa-icon :icon="['fas','cog']" />
          </router-link>
        </div>
        <div class="block text-gray-500">
          <router-link @click="clickSound" :to="{ name : 'dashboard' }" class="flex items-center justify-center gap-4 hover:text-gray-300 hover:bg-gray-600 border-2 border-gray-600 rounded-full w-8 h-8" >
            <fa-icon :icon="['fas','bell']" />
          </router-link>
        </div>
        <div class="block text-gray-500">
          <button @click="logout" class="flex items-center justify-center gap-4 hover:text-gray-300 hover:bg-gray-600 border-2 border-gray-600 rounded-full w-8 h-8" >
            <fa-icon :icon="['fas','power-off']" />
          </button>
        </div>
        <div class="block text-gray-500">
          <router-link @click="clickSound" :to="{ name : 'dashboard' }" class="flex items-center justify-center gap-4 hover:text-gray-300 hover:bg-gray-600 border-2 border-gray-600 rounded-full w-8 h-8" >
            <fa-icon :icon="['fas','angles-left']" />
          </router-link>
        </div>
      </div>
    </footer>
  </aside>
</template>