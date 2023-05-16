<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AdminLayout from '../../layout/AdminLayout.vue';
import Breadcrum from "../../includes/navigation/Breadcrum.vue";
import Pagination from "../../includes/navigation/Pagination.vue";

export default {
  components: {
    AdminLayout,
    Breadcrum,
    Pagination
  },
  data: () => ({
    index: 0
  }),
  setup() {
    const store = useStore();
    const createdItems = computed(() => store.getters.getCreatedItems);
    // const getParentCategoryTitle = (parentId) => {
    //   const parentCategory = createdCategories.value.find(category => category.id === parentId);
    //   return parentCategory ? parentCategory.title : 'No Parent';
    // };
    const getTimeDifference = (createdTime) => {
      const currentTime = new Date();
      const differenceInSeconds = Math.floor((currentTime - createdTime) / 1000);

      if (differenceInSeconds < 60) {
        return `${differenceInSeconds} seconds ago`;
      } else if (differenceInSeconds < 3600) {
        const minutes = Math.floor(differenceInSeconds / 60);
        return `${minutes} minutes ago`;
      } else if (differenceInSeconds < 86400) {
        const hours = Math.floor(differenceInSeconds / 3600);
        return `${hours} hours ago`;
      } else {
        const days = Math.floor(differenceInSeconds / 86400);
        return `${days} days ago`;
      }
    };

    return {
      createdItems,
      // getParentCategoryTitle,
      getTimeDifference
    };
  }
}
</script>

<template>
  <AdminLayout>
    <Breadcrum icon="users" page="Products / Serivces" active="Items" />
    <section class="flex flex-col gap-4 bg-gray-100 rounded-md shadow-md shadow-gray-300 p-4 my-12">
      <div class="flex items-center justify-between gap-4">
        <h4>Products / Services DataTable</h4>
        <ul class="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <router-link :to="{ name : 'items.create' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
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
                    <th scope="col" class="px-6 py-3">Title of Item</th>
                    <th scope="col" class="px-6 py-3">SKU</th>
                    <th scope="col" class="px-6 py-3">Category</th>
                    <th scope="col" class="px-6 py-3">Price</th>
                    <th scope="col" class="px-6 py-3">Date Created</th>
                    <th scope="col" class="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in createdItems" :key="item.id" class="border-b border-gray-400 hover:bg-gray-100">
                    <td class="px-6 py-2">{{ index + 1 }}</td>
                    <td class="px-6 py-2">
                      <router-link :to="{ name : 'items.index' }" >
                        <span class="font-bold">{{ item.title }}</span>
                      </router-link>
                    </td>
                    <td class="px-6 py-2">{{ item.sku }}</td>
                    <td class="px-6 py-2">{{ item.child }}</td>
                    <td class="px-6 py-2">{{ item.price }}</td>
                    <td class="px-6 py-2">{{ getTimeDifference(item.createdTime) }}</td>
                    <td class="px-6 py-2">
                      <ul class="flex items-center gap-2 text-sm text-gray-500">
                        <router-link :to="{ name : 'items.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
                          <fa-icon :icon="['fas','edit']" />
                        </router-link>
                        <router-link :to="{ name : 'items.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
                          <fa-icon :icon="['fas','eye']" />
                        </router-link>
                        <router-link :to="{ name : 'items.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
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