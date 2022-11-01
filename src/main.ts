import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import { createRouter, createWebHashHistory } from 'vue-router'
import VueLazyLoad from 'vue3-lazyload'
import App from './App.vue'
import routes from './router'
import VueDOMPurifyHTML from 'vue-dompurify-html'

const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// https://seb-l.github.io/pinia-plugin-persist/#vue3
app
  .use(router)
  .use(createPinia().use(piniaPersist))
  .use(VueLazyLoad, {
    loading: '',
    error: '',
  })
  .use(VueDOMPurifyHTML)
  .mount('#app')
console.info(
  `%c当前运行环境 ${import.meta.env.MODE}`,
  'color: #43bb88;font-size: 24px;font-weight: bold'
)
