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
    },
    {
        path: '/collocation',  // 家居搭配
        name: 'collocation',
        component: ()=>import('../views/collocation/collocation.vue')
    },
    {
        path: '/case',  // 设计案例
        name: 'case',
        component: ()=>import('../views/case/case.vue')
    },
    {
        path: '/about',  // 关于我们
        name: 'about',
        component: ()=>import('../views/about/about.vue')
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    // routes: routes,
    routes
})

// 导入路由对象
export default router
