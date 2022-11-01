// 路由懒加载
const Demo = () => import('./page/demo/index.vue')
const routes = [
  {
    path: '/',
    component: Demo,
  },
]
export default routes
