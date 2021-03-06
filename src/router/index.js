import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'


const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    redirect: '/welcome',
    meta: {
      title: '首页'
    },
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '欢迎页'
        },
        component: () => import('@/views/Welcome.vue'),
      },
      {
        name: "user",
        path: "system/user",
        meta: {
          title: '用户管理'
        },
        component: () => import('@/views/User.vue')
      },
      {
        name: "menu",
        path: "system/menu",
        meta: {
          title: '菜单管理'
        },
        component: () => import('@/views/Menu.vue')
      },
      {
        name: "role",
        path: "system/role",
        meta: {
          title: '角色管理'
        },
        component: () => import('@/views/Role.vue')
      },
      {
        name: "dept",
        path: "system/dept",
        meta: {
          title: '角色管理'
        },
        component: () => import('@/views/Dept.vue')
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/Login.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router