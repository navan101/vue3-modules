// import { createApp } from 'vue';
// import App from './App.vue'
// import './registerServiceWorker'
// import router from './router'
// import store from './store'

// createApp(App).use(router).use(store).mount('#app')

import Vue from 'vue'
import { RouterModule } from '@/modules/router'
import { CoreModule } from '@/modules/core'
import { HomeModule } from '@/modules/home'
import { AboutModule } from '@/modules/about'

function bootstrap() {
//   Vue.config.productionTip = false
  const routerModule = new RouterModule()
  routerModule.install(Vue)


  const coreModule = new CoreModule(routerModule.router!)
  coreModule.install()

  const homeModule = new HomeModule(routerModule.router!)
  homeModule.install(Vue)

  const aboutModule = new AboutModule(routerModule.router!)
  aboutModule.install(Vue)
}

bootstrap()
