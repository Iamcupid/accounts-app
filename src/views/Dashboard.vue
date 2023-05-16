<script>
import AdminLayout from "../layout/AdminLayout.vue";
import Breadcrum from "../includes/navigation/Breadcrum.vue";

export default {
  components : { AdminLayout, Breadcrum },
}
</script>

<template>
  <AdminLayout>
    <Breadcrum icon="tachometer-alt" page="Dashboard" active="Dashboard" />
    <section class="my-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
        <div class="block bg-gray-100 rounded-md shadow-md shadow-gray-300 h-80">
          <div class="flex items-center justify-between gap-4 bg-blue-300 rounded-t-md px-4 py-2">
            <h4 class="text-xl font-bold uppercase">Cash Turnover</h4>
          </div>
        </div>
        <div class="block bg-gray-100 rounded-md shadow-md shadow-gray-300 h-80">
          <div class="flex items-center justify-between gap-4 bg-blue-300 rounded-t-md px-4 py-2">
            <h4 class="text-xl font-bold uppercase">Cash Turnover</h4>
          </div>
        </div>
        <div class="block bg-gray-100 rounded-md shadow-md shadow-gray-300 h-80">
          <div class="flex items-center justify-between gap-4 bg-blue-300 rounded-t-md px-4 py-2">
            <h4 class="text-xl font-bold uppercase">Cash Turnover</h4>
          </div>
        </div>
        <div class="block bg-gray-100 rounded-md shadow-md shadow-gray-300 h-80">
          <div class="flex items-center justify-between gap-4 bg-blue-300 rounded-t-md px-4 py-2">
            <h4 class="text-xl font-bold uppercase">Cash Turnover</h4>
          </div>
        </div>
        <div class="block bg-gray-100 rounded-md shadow-md shadow-gray-300 h-80">
          <div class="flex items-center justify-between gap-4 bg-blue-300 rounded-t-md px-4 py-2">
            <h4 class="text-xl font-bold uppercase">Cash Turnover</h4>
          </div>
        </div>
        <div class="block bg-gray-100 rounded-md shadow-md shadow-gray-300 h-80">
          <div class="flex items-center justify-between gap-4 bg-blue-300 rounded-t-md px-4 py-2">
            <h4 class="text-xl font-bold uppercase">Cash Turnover</h4>
          </div>
        </div>
      </div>
    </section>
  </AdminLayout>
</template>