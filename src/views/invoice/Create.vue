<script>
import AdminLayout from '../../layout/AdminLayout.vue';
import Breadcrum from "../../includes/navigation/Breadcrum.vue";
export default {
  name : "invoice-create",
  components : { AdminLayout, Breadcrum },
  data() {
    return {
      title : "Invoice"
    };
  },
  methods: {
  },
  computed: {
  },
}
</script>

<template>
  <AdminLayout>
    <Breadcrum icon="users" page="Bill & Invoice" active="Invoice" />
    <section class="my-12">
      <header class="block bg-blue-200 p-4 w-full" >
        <img src="../../assets/images/ab.svg" class="w-32" alt="" />
      </header>
      <form action="">
        <div class="flex items-center justify-center my-8">
          <h3 class="block text-xl font-bold uppercase bg-blue-500 px-8 py-1">{{ title }}</h3>
        </div>
        <table class="min-w-full text-left text-sm font-medium my-8">
          <thead class="font-bold bg-gray-200 border-b ">
            <tr>
              <th scope="col" class="px-6 py-3">SL</th>
              <th scope="col" class="px-6 py-3">Description</th>
              <th scope="col" class="px-6 py-3">Quantity</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-6 py-3">Discount</th>
              <th scope="col" class="px-6 py-3">Amount</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
        </table>
      </form>
      <footer class="block bg-blue-200 p-4 w-full" ></footer>
    </section>
  </AdminLayout>
</template>