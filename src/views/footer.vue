<script setup>
import { ref } from 'vue'

let footerList = ref([
    {
        title: '关于我们',
        urlList: [
            {name: '品牌简介', url: '#'}, 
            {name: '品牌文化', url: '#'},
            {name: '取暖历程', url: '#'},
            {name: '荣誉资质', url: '#'},
            {name: '人才策略', url: '#'}
        ]
    },
    {
        title: '产品中心',
        urlList: [
            {name: '产品介绍', url: '#'}, 
            {name: '产品展示', url: '#'},
            {name: '安装说明', url: '#'}
        ]
    },
    {
        title: '新闻中心',
        urlList: [
            {name: '品牌资讯', url: '#'}, 
            {name: '热门观点', url: '#'},
            {name: '家居动态', url: '#'},
            {name: '精彩视频', url: '#'}
        ]
    },
])
</script>

<template>
    <div class="footer">
        <div class="footer-list">
            <div class="footer-left">
                <ul>
                    <li v-for="(v, i) in footerList" :key="i">
                        <p>{{ v.title }}</p>
                        <a v-for="(v2, i2) in v.urlList" :key="i2" :href="v2.url">{{ v2.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="footer-map"></div>
        </div>
    </div>
</template>

<style scoped>

</style>