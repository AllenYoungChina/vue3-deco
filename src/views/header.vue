<script setup>
import { ref } from 'vue'
let headerlist = ref([
    {title: '首页', path: '/index'},
    {title: '全屋设计', path: '/house'},
    {title: '厨房设计', path: '/kitchen'},
    {title: '家居搭配', path: '/collocation'},
    {title: '设计案例', path: '/case'},
    {title: '关于我们', path: '/about'}
])
</script>

<template>
    <div class="header">
        <div class="header-list">
            <div class="header-top">
                <div class="logo">
                    <a href="#" title="家居装饰"></a>
                </div>
                <ul>
                    <li v-for="(v, i) in headerlist" :key="i">
                        <router-link :to="v.path">
                            <span>{{ v.title }}</span>
                        </router-link>
                    </li>
                </ul>
                <div class="header-right">
                    <div class="header-right-l">
                        <!-- <img src="@/assets/images/telt.png" alt=""> -->
                    </div>
                    <div class="header-right-r">
                        <p>24小时咨询热线</p>
                        <p class="header-right-r-number">400-000-0000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>