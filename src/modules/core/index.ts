import { createApp } from 'vue'
import { VueModule } from 'vue-modules'
import { Router }  from 'vue-router'
import App from './components/App.vue'

export class CoreModule implements VueModule {
  readonly name = 'core'
  constructor(private router: Router) {}
  install() {
    const app = createApp(App)
    app.use(this.router).mount('#app')
  }
}