import * as Vue from 'vue'
import { RouterModule } from '@/modules/router'
import { CoreModule } from '@/modules/core'
import { HomeModule } from '@/modules/home'
import { AboutModule } from '@/modules/about'

function bootstrap() {
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
