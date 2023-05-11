<script setup>
import FooterBar from '../includes/footer/FooterBar.vue';
import Sidebar from '../includes/navigation/Sidebar.vue';

</script>

<template>
  <Sidebar />
  <main class="ml-60 p-4">
    <slot />
  </main>
  <FooterBar margin="ml-64 mr-4" />
</template>