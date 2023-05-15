<script>
import { ref, computed } from 'vue';
import AdminLayout from '../../layout/AdminLayout.vue';
import Breadcrum from "../../includes/navigation/Breadcrum.vue";
export default {
  name : "staff-create",
  components : { AdminLayout, Breadcrum },
  data : () => {
    return {
      imageFile: null,
      imageSrc: ''
    };
  },
  methods: {
    handleFileChange(event) {
      this.imageFile = event.target.files[0];
      this.imageSrc = URL.createObjectURL(this.imageFile);
    }
  },
  setup : () => {
    const departments = ref(['Engineering', 'Marketing', 'Finance', 'Human Resources']);
    
    const designations = ref({
      Engineering: ['Software Engineer', 'System Architect', 'Quality Assurance'],
      Marketing: ['Marketing Manager', 'Digital Marketer', 'Brand Strategist'],
      Finance: ['Financial Analyst', 'Accountant', 'Auditor'],
      'Human Resources': ['HR Manager', 'Recruitment Specialist', 'Training Coordinator'],
    });
    
    const selectedDepartment = ref('');
    const selectedDesignation = ref('');
    
    const filteredDesignations = computed(() => {
      return selectedDepartment.value ? designations.value[selectedDepartment.value] : [];
    });
    
    const selectDepartment = () => {
      selectedDesignation.value = '';
    };

    const divisions = ref([ 'Barisal', 'Chittagong', 'Dhaka', 'Khulna', 'Mymensingh', 'Rajshahi', 'Rangpur', 'Sylhet' ]);

    const districts = ref({
      Barisal: ['Barguna', 'Barisal', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur'],
      Chittagong: ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chittagong', 'Comilla'],
      Dhaka: ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Jamalpur', 'Kishoreganj'],
      Khulna: ['Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna', 'Kushtia'],
      Mymensingh: ['Jamalpur', 'Mymensingh', 'Netrakona', 'Sherpur'],
      Rajshahi: ['Bogra', 'Joypurhat', 'Naogaon', 'Natore', 'Rajshahi', 'Sirajganj'],
      Rangpur: ['Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Rangpur'],
      Sylhet: ['Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet'],
    });

    const selectedDivision = ref('');
    const selectedDistrict = ref('');

    const filteredDistricts = computed(() => {
      return selectedDivision.value ? districts.value[selectedDivision.value] : [];
    });

    const selectDivision = () => {
      selectedDistrict.value = '';
    };

    const genders = ref(['Male', 'Female', 'Other']);
    const selectedGender = ref('');

    const religions = ref(['Islam', 'Christianity', 'Hinduism', 'Buddhism', 'Judaism', 'Sikhism', 'Other']);
    const selectedReligion = ref('');

    const maritalStatuses = ref(['Single', 'Married', 'Divorced', 'Widowed']);
    const selectedMaritalStatus = ref('');

    return {
      departments,
      designations,
      selectedDepartment,
      selectedDesignation,
      filteredDesignations,
      selectDepartment,
      divisions,
      districts,
      selectedDivision,
      selectedDistrict,
      filteredDistricts,
      selectDivision,
      genders,
      selectedGender,
      religions,
      selectedReligion,
      maritalStatuses,
      selectedMaritalStatus,
    };
  },
}
</script>

<template>
  <AdminLayout>
    <Breadcrum icon="users" page="Products / Services" active="Items" />
    <section class="my-12">
      <form action="">
        <div class="flex justify-between gap-4 text-sm">
          <div class="block bg-gray-100 rounded-md shadow-md shadow-gray-300 p-4 w-3/5">
            <div class="mb-2">
              <label for="title">Title of Item</label>
              <div class="flex items-center gap-1 mt-1">
                <input type="text" name="title" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="title" placeholder="Item Name" required />
              </div>
            </div>
            <div class="border-y-2 border-gray-400 py-4 my-4">
              <label for="desc">Item Description</label>
              <div class="flex items-center gap-1 mt-1">
                <textarea name="desc" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full resize-none" id="desc" cols="30" rows="20"></textarea>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2 mb-2">
              <div class="block">
                <label for="parent">Main Category</label>
                <div class="flex items-center gap-1 mt-1">
                  <select class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="parent" >
                    <option value="">-- Choose One --</option>
                  </select>
                </div>
              </div>
              <div class="block">
                <label for="child">Sub Category</label>
                <div class="flex items-center gap-1 mt-1">
                  <select class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="child" >
                    <option value="">-- Choose One --</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="block bg-gray-100 rounded-md shadow-md shadow-gray-300 p-4 w-2/5">
            <!-- <h4 class="text-2xl font-bold bg-blue-300 rounded-t-md px-4 pt-1.5 pb-2 -mx-4 -mt-4 mb-4">Create New Item</h4> -->
            <div class="grid grid-cols-1 gap-2 mb-2">
              <div class="block">
                <label for="brand">Brand Name</label>
                <div class="flex items-center gap-1 mt-1">
                  <input type="text" name="brand" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="brand" placeholder="Brand Name" required />
                </div>
              </div>
              <div class="block">
                <label for="sku">Item SKU</label>
                <div class="flex items-center gap-1 mt-1">
                  <input type="text" name="sku" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="sku" placeholder="Item SKU" />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1 my-2">
              <div class="block">
                <label for="price">Regular Price</label>
                <div class="flex items-center gap-1 mt-1">
                  <input type="text" name="price" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="price" placeholder="Regular Price" required />
                </div>
              </div>
              <div class="block">
                <label for="discount">Discount</label>
                <div class="flex items-center gap-1 mt-1">
                  <input type="text" name="discount" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="discount" placeholder="Discount" />
                </div>
              </div>
            </div>
            <div class="my-2">
              <label for="slug">Item Slug</label>
              <div class="flex items-center gap-1 mt-1">
                <input type="text" name="slug" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="slug" placeholder="Item Slug" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1 border-b-2 border-gray-400 pb-3.5 my-2">
              <div class="block">
                <label for="availability">Stock Status</label>
                <div class="flex items-center gap-1 mt-1">
                  <select class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="availability" >
                    <option value="">-- Choose One --</option>
                  </select>
                </div>
              </div>
              <div class="block">
                <label for="stock">Stock Quantity</label>
                <div class="flex items-center gap-1 mt-1">
                  <input type="text" name="stock" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5 w-full" id="stock" />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1 my-2 pt-2 pb-4 h-[12.5rem]">
              <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 text-center"><span class="font-semibold">Click to upload</span> <br />or drag and drop</p>
                    <p class="text-xs text-gray-500 text-center">SVG, PNG, JPG or GIF <br />(MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" @change="handleFileChange" class="hidden" />
                </label>
              </div> 
              <div class="flex items-center justify-center border-2 border-gray-300 border-dashed rounded-lg p-0.5 h-48">
                <img :src="imageSrc" class="my-4 rounded-lg w-full" alt="Selected Image" v-if="imageSrc" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1 border-t-2 border-gray-400 pt-4 mt-4">
              <router-link :to="{ name : 'items.index' }" class="block text-center bg-gray-200 hover:bg-gray-300 border-2 border-gray-200 hover:border-gray-300 px-4 py-1.5" >
                <fa-icon :icon="['fas','arrow-left']" />
                <span class="pl-2">Previous</span>
              </router-link>
              <button type="submit" class="block text-center bg-gray-200 hover:bg-gray-300 border-2 border-gray-200 hover:border-gray-300 px-4 py-1.5" >
                <fa-icon :icon="['fas','check']" />
                <span class="pl-2">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  </AdminLayout>
</template>