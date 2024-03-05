<script setup>
import { ref } from 'vue'

let insList = ref([
    {id: 1, title: '北京风景-155㎡-现代风格装修案例', desc: '北京风景-155㎡-现代风格装修案例', imgUrl: '10.png', watchNum: 200},
    {id: 2, title: '三亚风景-182㎡-现代风格装修案例', desc: '三亚风景-182㎡-现代风格装修案例', imgUrl: '11.png', watchNum: 300},
    {id: 3, title: '北京风景-155㎡-现代风格装修案例', desc: '北京风景-155㎡-现代风格装修案例', imgUrl: '10.png', watchNum: 200},
    {id: 4, title: '三亚风景-182㎡-现代风格装修案例', desc: '三亚风景-182㎡-现代风格装修案例', imgUrl: '11.png', watchNum: 300},
    {id: 5, title: '北京风景-155㎡-现代风格装修案例', desc: '北京风景-155㎡-现代风格装修案例', imgUrl: '10.png', watchNum: 200},
    {id: 6, title: '三亚风景-182㎡-现代风格装修案例', desc: '三亚风景-182㎡-现代风格装修案例', imgUrl: '11.png', watchNum: 300},
    {id: 7, title: '北京风景-155㎡-现代风格装修案例', desc: '北京风景-155㎡-现代风格装修案例', imgUrl: '10.png', watchNum: 200},
    {id: 8, title: '三亚风景-182㎡-现代风格装修案例', desc: '三亚风景-182㎡-现代风格装修案例', imgUrl: '11.png', watchNum: 300},
    {id: 9, title: '北京风景-155㎡-现代风格装修案例', desc: '北京风景-155㎡-现代风格装修案例', imgUrl: '10.png', watchNum: 200},
])
</script>

<template>
    <div class="container-bg">
        <div class="renovation">
            <div class="index-title">
                <h3>实景案例</h3>
                <p>看看邻居家怎么装</p>
            </div>
            <div class="renovation-list">
                <ul>
                    <li v-for="(v, i) in insList" :key="i">
                        <div class="renovation-card">
                            <a href="#">
                                <div class="renovation-img">
                                    <img :src="`src/assets/images/${v.imgUrl}`" alt="">
                                </div>
                                <div class="renovation-box">
                                    <h3>{{ v.title }}</h3>
                                    <div class="renovation-box-info">
                                        <p>{{ v.desc }}</p>
                                        <span><i class="iconfont icon-aixin"></i>{{ v.watchNum }}人查看</span>
                                    </div>
                                </div>
                                <div class="renovation-hover">
                                    <span>查看详情</span>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>