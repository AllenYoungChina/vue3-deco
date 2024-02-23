import { createRouter, createWebHashHistory } from 'vue-router'

// 路由配置
const routes = [
    {
        path: '/',  // 首页
        redirect: '/index'
    },
    {
        path: '/index',  // 首页
        name: 'index',
        component: ()=>import('../views/index/index.vue')
    },
    {
        path: '/house',  // 全屋设计
        name: 'house',
        component: ()=>import('../views/house/house.vue')
    },
    {
        path: '/kitchen',  // 厨房设计
        name: 'kitchen',
        component: ()=>import('../views/kitchen/kitchen.vue')
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
