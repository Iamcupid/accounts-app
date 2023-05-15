<script setup>
import AdminLayout from '../../layout/AdminLayout.vue';
import Breadcrum from "../../includes/navigation/Breadcrum.vue";
import Pagination from "../../includes/navigation/Pagination.vue";
</script>

<template>
  <AdminLayout>
    <Breadcrum icon="users" page="Bill & Invoice" active="Invoice" />
    <section class="flex flex-col gap-4 bg-gray-100 rounded-md shadow-md shadow-gray-300 p-4 my-12">
      <div class="flex items-center justify-between gap-4">
        <h4>Prodct / Services DataTable</h4>
        <ul class="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <router-link :to="{ name : 'invoice.create' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
            <fa-icon :icon="['fas','plus']" />
            <span class="pl-2">Add New</span>
          </router-link>
          <router-link :to="{ name : 'staffs.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
            <fa-icon :icon="['fas','upload']" />
            <span class="pl-2">Import</span>
          </router-link>
          <router-link :to="{ name : 'staffs.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
            <fa-icon :icon="['fas','download']" />
            <span class="pl-2">Export</span>
          </router-link>
        </ul>
      </div>
      <div class="flex flex-col overflow-x-auto">
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="font-bold bg-gray-300 border-b ">
                  <tr>
                    <th scope="col" class="px-6 py-3">#</th>
                    <th scope="col" class="px-6 py-3">Invoice No.</th>
                    <th scope="col" class="px-6 py-3">Name of Recipient</th>
                    <th scope="col" class="px-6 py-3">Total Amount</th>
                    <th scope="col" class="px-6 py-3">Status</th>
                    <th scope="col" class="px-6 py-3">Date Created</th>
                    <th scope="col" class="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-400 hover:bg-gray-100">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">1</td>
                    <td class="whitespace-nowrap px-6 py-2 font-medium">1</td>
                    <td class="whitespace-nowrap px-6 py-2">
                      <router-link :to="{ name : 'staffs.index' }" >
                        <span class="font-bold">Shawon Khan</span>
                      </router-link>
                    </td>
                    <td class="whitespace-nowrap px-6 py-2">Managing Director</td>
                    <td class="whitespace-nowrap px-6 py-2">shawonk007@gmail.com</td>
                    <td class="whitespace-nowrap px-6 py-2">Administrator</td>
                    <td class="whitespace-nowrap px-6 py-2">
                      <ul class="flex items-center gap-2 text-sm text-gray-500">
                        <router-link :to="{ name : 'staffs.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
                          <fa-icon :icon="['fas','edit']" />
                        </router-link>
                        <router-link :to="{ name : 'staffs.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
                          <fa-icon :icon="['fas','eye']" />
                        </router-link>
                        <router-link :to="{ name : 'staffs.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
                          <fa-icon :icon="['fas','trash-alt']" />
                        </router-link>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div>Showing result 1 of 1</div>
        <Pagination />
      </div>
    </section>
  </AdminLayout>
</template>