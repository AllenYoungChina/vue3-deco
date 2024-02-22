import { createRouter, createWebHashHistory } from 'vue-router'

// 路由配置
const routes = [
    {
        path: '/',  // 路径
        name: 'Home',  // 名字
        component: ()=>import('')
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    // routes: routes,
    routes
})

// 导入路由对象
export default router
