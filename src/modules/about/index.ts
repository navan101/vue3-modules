import _Vue from 'vue'
import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import { aboutRoutes } from './router'

export class AboutModule implements VueModule {
  readonly name = 'about'
  constructor(private router: Router) {}

  install(Vue: typeof _Vue) {
    this.router.addRoute(aboutRoutes)
  }
}