// import { createApp } from 'vue'
// import { VueModule } from 'vue-modules'
// import { Router }  from 'vue-router'
// import App from './components/App.vue'

// export class CoreModule implements VueModule {
//   readonly name = 'core'
//   constructor(private router: Router) {}
//   install() {
//     const app = createApp(App)
//     app.use(this.router).mount('#app')
//   }
// }
// import { Vue as _Vue } from 'vue/types/vue';
// import TheApp from './TheApp.vue';
import router from './router';
// import store from './store';

import App from './components/App.vue'
import { createApp } from 'vue';
import store from './store';

export default function registerVueModule(plugins: any, modules: any = []) {
  // eslint-disable-next-line no-param-reassign
  // Vue.prototype.$store = store;
  // new Vue({
  //   router,
  //   store,
  //   ...plugins,
  //   render: (h) => h(TheApp),
  // }).$mount('#app');
  const app = createApp(App)
  modules.map((Module: any) => new Module(router, store).install())
  app.use(router).use(store).mount('#app')
}
