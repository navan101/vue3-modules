import _Vue from 'vue'
import { VueModule } from 'vue-modules'
import { Router, createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import VueRouter from 'vue-router'
// import { Store } from 'vuex'
// import App from './components/App.vue'
export class RouterModule implements VueModule {
  readonly name = 'router'
  router?: Router;
  install(Vue: typeof _Vue) {
    // Vue.use(Router)
    this.router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: []
    })

    // this.router = new Router({
    //   mode: 'history',
    //   base: process.env.BASE_URL
    // })
  }
}