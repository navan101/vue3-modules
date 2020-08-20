import { RouteRecordRaw } from 'vue-router'
const About = () =>
  import(/* webpackChunkName: "about" */ '../components/About.vue')

export const aboutRoutes: RouteRecordRaw =
  {
    path: '/about',
    name: 'about',
    component: About
  }