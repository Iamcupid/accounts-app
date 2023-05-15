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
    path: '/category',
    name: 'category.index',
    component: () => import('../views/category/Index.vue'),
  },
  {
    path: '/category/create',
    name: 'category.create',
    component: () => import('../views/category/Create.vue'),
  },
  {
    path: '/items',
    name: 'items.index',
    component: () => import('../views/items/Index.vue'),
  },
  {
    path: '/items/create',
    name: 'items.create',
    component: () => import('../views/items/Create.vue'),
  },
  {
    path: '/invoice',
    name: 'invoice.index',
    component: () => import('../views/invoice/Index.vue'),
  },
  {
    path: '/invoice/create',
    name: 'invoice.create',
    component: () => import('../views/invoice/Create.vue'),
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