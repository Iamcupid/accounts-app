<script>
import AdminLayout from '../../layout/AdminLayout.vue';
import Breadcrum from "../../includes/navigation/Breadcrum.vue";
export default {
  name : "payroll-create",
  components : { AdminLayout, Breadcrum },
  data : () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2020; // Change the range as needed
    const endYear = currentYear; // Change the range as needed
    return {
      selectedMonth: new Date().getMonth(),
      selectedYear: currentYear,
      months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
      years: Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index)
    };
  }
}
</script>

<template>
  <AdminLayout>
    <Breadcrum icon="users" page="Payroll Statement" active="Payroll" />
    <section>
      <form action="">
        <div class="my-4">
          <label for="date">Prepared Date :</label>
          <div class="flex items-center gap-2 mt-1">
            <input type="datetime-local" name="date" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5" id="date" required />
          </div>
        </div>
        <div class="my-4">
          <label for="month">Select Month :</label>
          <div class="flex items-center gap-2 mt-1">
            <select v-model="selectedMonth" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5" id="month" >
              <option v-for="(month, index) in months" :key="index" :value="index">
                {{ month }}
              </option>
            </select>
          </div>
        </div>
        <div class="my-4">
          <label for="year">Select Year :</label>
          <div class="flex items-center gap-2 mt-1">
            <select v-model="selectedYear" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5" id="year">
              <option v-for="year in years" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
        </div>
        <div class="my-4">
          <label for="staff">Name of Emplyoee :</label>
          <div class="flex items-center gap-2 mt-1">
            <select name="" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5" id="staff">
              <option value="">-- Choose One --</option>
            </select>
          </div>
        </div>
        <div class="my-4">
          <label for="designation">Designation :</label>
          <div class="flex items-center gap-2 mt-1">
            <input type="text" name="designation" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5" id="designation" disabled />
          </div>
        </div>
        <div class="my-4">
          <label for="salary">Basic Salary :</label>
          <div class="flex items-center gap-2 mt-1">
            <input type="text" name="salary" class="inline-block text-sm border-2 border-gray-300 focus:outline-none px-4 py-1.5" id="salary" disabled />
          </div>
        </div>
      </form>
    </section>
  </AdminLayout>
</template>