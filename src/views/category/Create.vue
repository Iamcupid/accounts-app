<script>
import AdminLayout from '../../layout/AdminLayout.vue';
import Breadcrum from "../../includes/navigation/Breadcrum.vue";

export default {
  name: "category-create",
  components: { AdminLayout, Breadcrum },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    category: {
      title: '',
      description: '',
      slug: '',
      parent: ''
    }
  }),
  computed: {
    createdCategories() {
      return this.$store.getters.getCreatedCategories;
    }
  },
  methods: {
    submitForm() {
      const categoryId = Date.now().toString();
      const newCategory = {
        id: categoryId,
        title: this.category.title,
        description: this.category.description,
        slug: this.category.slug,
        parent: this.category.parent,
        createdTime: new Date()
      };
      this.$store.dispatch('addCategory', newCategory);
      this.resetForm();
    },
    resetForm() {
      this.category = {
        title: '',
        description: '',
        slug: '',
        parent: ''
      };
    },
    getParentCategoryTitle(parentId) {
      const parentCategory = this.createdCategories.find(category => category.id === parentId);
      return parentCategory ? parentCategory.title : 'No Parent';
    }
  }
};
</script>

<template>
  <AdminLayout>
    <Breadcrum icon="users" page="Product Category" active="Category" />
    <section class="flex items-center justify-center my-8">
      <div class="block bg-gray-100 rounded-md shadow-md shadow-gray-300 p-4 w-1/2">
        <form @submit.prevent="submitForm">
          <div class="my-4">
            <label for="title">Title of Category</label>
            <div class="flex items-center gap-1 mt-1">
              <input type="text" v-model="category.title" name="title" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="title" placeholder="Category Title" required />
            </div>
          </div>
          <div class="my-4">
            <label for="desc">Description</label>
            <div class="flex items-center gap-1 mt-1">
              <textarea v-model="category.description" name="desc" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full resize-none" id="desc" cols="30" rows="8"></textarea>
            </div>
          </div>
          <div class="my-4">
            <label for="parent">Parent Category</label>
            <div class="flex items-center gap-1 mt-1">
              <select v-model="category.parent" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="parent">
                <option value="">-- Choose Parent Category --</option>
                <option v-for="category in createdCategories" :value="category.id" :key="category.id">{{ category.title }}</option>
              </select>
            </div>
          </div>
          <div class="my-4">
            <label for="slug">Category Slug</label>
            <div class="flex items-center gap-1 mt-1">
              <input type="text" v-model="category.slug" name="slug" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="slug" placeholder="Category Slug" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-1 border-t-2 border-gray-400 pt-4 mt-4">
            <router-link :to="{ name: 'category.index' }" class="block text-center bg-gray-200 hover:bg-gray-300 border-2 border-gray-200 hover:border-gray-300 px-4 py-1.5">
              <fa-icon :icon="['fas', 'arrow-left']" />
              <span class="pl-2">Previous</span>
            </router-link>
            <button type="submit" class="block text-center bg-gray-200 hover:bg-gray-300 border-2 border-gray-200 hover:border-gray-300 px-4 py-1.5">
              <fa-icon :icon="['fas', 'check']" />
              <span class="pl-2">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  </AdminLayout>
</template>