import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    // meta: {
    //   title: 'Dashboard | AccountsBlaze'
    // }
  },
  {
    path: '/staffs',
    name: 'staffs.index',
    component: () => import('../views/staffs/Index.vue'),
  },
  {
    path: '/staffs/create',
    name: 'staffs.create',
    component: () => import('../views/staffs/Create.vue'),
  },
  {
    path: '/payroll',
    name: 'payroll.index',
    component: () => import('../views/payroll/Index.vue'),
  },
  {
    path: '/payroll/create',
    name: 'payroll.create',
    component: () => import('../views/payroll/Create.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
  
export default router