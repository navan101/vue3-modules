import { createApp } from 'vue'
import { VueModule } from 'vue-modules'
import { Router }  from 'vue-router'
import { Store } from 'vuex'
import App from './components/App.vue'

export class CoreModule implements VueModule {
  readonly name = 'core'
  constructor(private router: Router) {}
  install() {
    createApp(App).use(this.router).mount('#app')
    // new Vue({
    //   router: this.router,
    //   store: this.store,
    //   render: h => h(App)
    // }).$mount('#app')
  }
}