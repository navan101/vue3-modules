import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: '/app',
    name: 'app',
    component: import(/* webpackChunkName: "EmptyRouterView" */ '../components/EmptyRouterView.vue'),
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
  if (to.path.endsWith('/')) next()
  else next({ path: to.path + '/', query: to.query, hash: to.hash })
})

export default router