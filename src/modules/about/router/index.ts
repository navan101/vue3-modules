import { RouteRecordRaw } from 'vue-router'
import About from '../components/About.vue'

export const routes: RouteRecordRaw = {
  path: 'about',
  name: 'about',
  component: About
}

// import routes from './routes.yaml';

// export default routes;