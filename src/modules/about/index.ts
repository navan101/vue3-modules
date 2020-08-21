import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import { routes } from './router'

export class AboutModule implements VueModule {
  readonly name = 'about'
  constructor(private router: Router) {}

  install() {
    this.router.addRoute('app', routes)
  }
}