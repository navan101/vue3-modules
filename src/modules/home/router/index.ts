import { RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'

export const routes: RouteRecordRaw =
  {
    path: 'home',
    name: 'home',
    component: Home
  }