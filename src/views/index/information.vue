<script setup>
import { ref } from 'vue'

let infoImgList = ref([
    {id: 1, img_url: '10.png'},
    {id: 2, img_url: '11.png'}
])

let articleList = ref([
    {
        id: 1,
        title: '如何辨别实木地板的色差',
        desc: '消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。而色差往往成为消费者与商家争议的焦点，而在购买时如何避免这个问题呢？',
        date: '2023-06-11',
        img_url: '10.png'
    },
    {
        id: 2,
        title: '如何辨别实木地板的色差',
        desc: '消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。而色差往往成为消费者与商家争议的焦点，而在购买时如何避免这个问题呢？消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。而色差往往成为消费者与商家争议的焦点，而在购买时如何避免这个问题呢？消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。而色差往往成为消费者与商家争议的焦点，而在购买时如何避免这个问题呢？消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。而色差往往成为消费者与商家争议的焦点，而在购买时如何避免这个问题呢？消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。',
        date: '2023-06-11',
        img_url: '10.png'
    },
    {
        id: 3,
        title: '如何辨别实木地板的色差',
        desc: '消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。而色差往往成为消费者与商家争议的焦点，而在购买时如何避免这个问题呢？消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。而色差往往成为消费者与商家争议的焦点，而在购买时如何避免这个问题呢？消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。而色差往往成为消费者与商家争议的焦点，而在购买时如何避免这个问题呢？消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。而色差往往成为消费者与商家争议的焦点，而在购买时如何避免这个问题呢？消费者在购买地板时，往往发现地板的颜色存在差异，即俗称色差。',
        date: '2023-06-11',
        img_url: '10.png'
    },
])
</script>

<template>
    <!-- 家装资讯 -->
    <div class="container-bg">
        <div class="information">
            <div class="index-title">
                <h3>家装资讯</h3>
                <p>了解家装知识 装修不留遗憾</p>
            </div>
            <div class="information-list">
                <div class="information-left">
                    <el-carousel height="380px" arrow="always" indicator-position="none">
                        <el-carousel-item v-for="(v, i) in infoImgList" :key="i">
                            <img :src="`src/assets/images/${v.img_url}`" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="information-right">
                    <ul>
                        <li v-for="(v, i) in articleList" :key="i">
                            <div class="information-r-img">
                                <img :src="`src/assets/images/${v.img_url}`" alt="">
                            </div>
                            <div class="information-r-list">
                                <p class="information-title">{{ v.title }}</p>
                                <p class="information-time">{{ v.date }}</p>
                                <p class="information-desc">{{ v.desc }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>