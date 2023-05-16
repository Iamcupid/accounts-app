<script setup>
defineProps({
  icon: String,
  page: String,
  active: String,
})
</script>

<template>
  <nav class="flex xs:flex-col lg:items-center xl:items-center 2xl:items-center justify-between gap-2 lg:gap-4 xl:gap-4 2xl:gap-4 bg-gray-200 rounded-md shadow-md shadow-gray-300 px-4 py-2 w-full">
    <div>
      <h4 class="text-xl text-gray-900">
        <fa-icon :icon="icon" />
        <span class="font-bold pl-3">{{ page }}</span>
      </h4>
    </div>
    <ol class="list-reset flex">
      <li>
        <router-link :to="{ name : 'dashboard' }" class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <span class="mx-2 text-neutral-500 dark:text-neutral-400">></span>
      </li>
      <li class="text-neutral-500 dark:text-neutral-400">{{ active }}</li>
    </ol>
  </nav>
</template>