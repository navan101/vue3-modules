import { RouteRecordRaw } from 'vue-router';

declare module './routes.yaml' {
  const routes: RouteRecordRaw;
  export default routes;
}
