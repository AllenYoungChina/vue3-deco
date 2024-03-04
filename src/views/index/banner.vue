<script setup>
import { ref } from 'vue'

let bannerList = ref([
    {id: 1, img_url: 'banner1.jpg'},
    {id: 2, img_url: 'banner2.jpg'},
    {id: 3, img_url: 'banner3.jpg'},
])
</script>

<template>
    <div class="banner">
        <div class="banner-list">
            <el-carousel height="600px" arrow="never">
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                    <img :src="`/src/assets/images/${item.img_url}`" alt="">
                </el-carousel-item>
            </el-carousel>
            <div class="banner-item">
            <img src="@/assets/images/footer_bottom.png" alt="">
        </div>
        </div>
    </div>
</template>

<style scoped>

</style>