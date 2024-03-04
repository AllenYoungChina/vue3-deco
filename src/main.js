import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/common.css'
import './assets/css/index.css'
import './assets/font/iconfont.css'
// 导入路由
// import router from './router/index.js'
import router from './router'

createApp(App).use(router).mount('#app')
