import _Vue from 'vue'
import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import { homeRoutes } from './router'

export class HomeModule implements VueModule {
  readonly name = 'home'
  constructor(private router: Router) {}

  install(Vue: typeof _Vue) {
    this.router.addRoute(homeRoutes)
  }
}