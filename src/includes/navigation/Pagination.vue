<script setup></script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="list-style-none flex gap-1 text-sm font-medium">
      <router-link :to="{ name : 'staffs.index' }" class="block text-neutral-500 hover:text-neutral-200 text-center bg-transparent hover:bg-gray-500 border border-neutral-500 relative rounded-full p-1 w-8 h-8 transition-all duration-300 pointer-events-none" >
        <fa-icon :icon="['fas','angles-left']" />
      </router-link>
      <router-link :to="{ name : 'staffs.index' }" class="block text-neutral-500 hover:text-neutral-200 text-center bg-transparent hover:bg-gray-500 border border-neutral-500 relative rounded-full p-1 w-8 h-8 transition-all duration-300 pointer-events-none" >
        <fa-icon :icon="['fas','angle-left']" />
      </router-link>
      <router-link :to="{ name : 'staffs.index' }" class="block text-neutral-500 hover:text-neutral-200 text-center bg-transparent hover:bg-gray-500 border border-neutral-500 relative rounded-full p-1 w-8 h-8 transition-all duration-300" >
        <span>1</span>
      </router-link>
      <router-link :to="{ name : 'staffs.index' }" class="block text-neutral-200 text-center bg-gray-500 border border-neutral-500 relative rounded-full p-1 w-8 h-8 transition-all duration-300" >
        <span>2</span>
      </router-link>
      <router-link :to="{ name : 'staffs.index' }" class="block text-neutral-500 hover:text-neutral-200 text-center bg-transparent hover:bg-gray-500 border border-neutral-500 relative rounded-full p-1 w-8 h-8 transition-all duration-300" >
        <span>3</span>
      </router-link>
      <router-link :to="{ name : 'staffs.index' }" class="block text-neutral-500 hover:text-neutral-200 text-center bg-transparent hover:bg-gray-500 border border-neutral-500 relative rounded-full p-1 w-8 h-8 transition-all duration-300 pointer-events-none" >
        <fa-icon :icon="['fas','angle-right']" />
      </router-link>
      <router-link :to="{ name : 'staffs.index' }" class="block text-neutral-500 hover:text-neutral-200 text-center bg-transparent hover:bg-gray-500 border border-neutral-500 relative rounded-full p-1 w-8 h-8 transition-all duration-300 pointer-events-none" >
        <fa-icon :icon="['fas','angles-right']" />
      </router-link>
    </ul>
  </nav>
</template>