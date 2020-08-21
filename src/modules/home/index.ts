import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import { routes } from './router'

export class HomeModule implements VueModule {
  readonly name = 'home'
  constructor(private router: Router) {}

  install() {
    this.router.addRoute('app', routes)
  }
}