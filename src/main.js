import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
// import router from './router/index.js'
import router from './router'

createApp(App).use(router).mount('#app')
