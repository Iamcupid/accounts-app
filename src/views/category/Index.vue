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
    const createdCategories = computed(() => store.getters.getCreatedCategories);
    const getParentCategoryTitle = (parentId) => {
      const parentCategory = createdCategories.value.find(category => category.id === parentId);
      return parentCategory ? parentCategory.title : 'No Parent';
    };
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
      createdCategories,
      getParentCategoryTitle,
      getTimeDifference
    };
  }
};
</script>

<template>
  <AdminLayout>
    <Breadcrum icon="users" page="Product Category" active="Category" />
    <section class="flex flex-col gap-4 bg-gray-100 rounded-md shadow-md shadow-gray-300 p-4 my-12">
      <div class="flex items-center justify-between gap-4">
        <h4>Users DataTable</h4>
        <ul class="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <router-link :to="{ name : 'category.create' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1" >
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
      <table class="min-w-full text-left text-sm font-light">
        <thead class="font-bold bg-gray-300 border-b ">
          <tr>
            <th scope="col" class="px-6 py-3">#</th>
            <th scope="col" class="px-6 py-3">Title of Category</th>
            <th scope="col" class="px-6 py-3">Slug</th>
            <th scope="col" class="px-6 py-3">Parent Category</th>
            <th scope="col" class="px-6 py-3">Date Created</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
      </table>
      <tbody>
        <tr v-for="(category, index) in createdCategories" :key="category.id" class="border-b border-gray-400 hover:bg-gray-100">
          <td class="px-6 py-2">{{ index + 1 }}</td>
          <td class="px-6 py-2">{{ category.title }}</td>
          <td class="px-6 py-2">{{ category.slug }}</td>
          <td class="px-6 py-2">{{ getParentCategoryTitle(category.parent) }}</td>
          <td class="px-6 py-2">{{ getTimeDifference(category.createdTime) }}</td>
          <td class="px-6 py-2">
            <ul class="flex items-center gap-2 text-sm text-gray-500">
              <!-- <router-link :to="{ name : 'category.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1"> -->
              <router-link to="/category/:id/edit" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1">
                <fa-icon :icon="['fas','edit']" />
              </router-link>
              <router-link :to="{ name : 'staffs.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1">
                <fa-icon :icon="['fas','eye']" />
              </router-link>
              <router-link :to="{ name : 'staffs.index' }" class="block hover:text-gray-700 hover:bg-gray-300 border-2 border-gray-300 rounded-sm px-2 py-1">
                <fa-icon :icon="['fas','trash-alt']" />
              </router-link>
            </ul>
          </td>
        </tr>
      </tbody>
    </section>
  </AdminLayout>
</template>
