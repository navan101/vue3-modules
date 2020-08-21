import registerVueModule from './modules/core/vue-module';
import { HomeModule } from '@/modules/home'
import { AboutModule } from '@/modules/about'

registerVueModule({}, [
  HomeModule,
  AboutModule
]);

