<script setup>
import { ref } from 'vue'
import { CountTo } from 'vue3-count-to'

let advantageList1 = ref([
    {num: 50, name: '万+精英家庭选择'},
    {num: 29, name: '个城市直营分公司'},
    {num: 200, name: '余家直营门店'},
    {num: 200, name: '余辐射服务城市'}
])

let advantageList2 = ref([
    {icon: 'icon-a-ziyuan22', title: '高效品质', sub: '10年以上工龄工人，统一培训考核，统一管理，统一调配，高素质工人为您带来高品质装修。'},
    {icon: 'icon-yanshou', title: '验收严格', sub: '213个施工节点，360度无死角验收，层层把关，交给您一个完美的新家。'},
    {icon: 'icon-fuwu', title: '服务专业', sub: '微信直播每日施工进度，施工现场尽收眼底，从未有过的五星级装修体验。'},
    {icon: 'icon-ketangxiaobangyang', title: '口碑评价', sub: '科学的绩效评价体系，可查询施工人员的客户口碑、施工经验和施工能力，对客户满意度低的人员实行淘汰机制。'}
])
</script>

<template>
    <div class="container-bg">
        <div class="advantage">
            <div class="index-title">
                <h3>品牌优势</h3>
                <p>值得依赖的实力派</p>
            </div>
            <div class="advantage-item1">
                <ul>
                    <li v-for="(v, i) in advantageList1" :key="i">
                        <!-- <span class="advantage-num">{{ v.num }}</span> -->
                        <CountTo class="advantage-num" :starVal="0" :endVal="v.num" :duration="3000">{{ v.num }}</CountTo>
                        <span>{{ v.name }}</span>
                    </li>
                </ul>
            </div>
            <div class="advantage-item2">
                <ul>
                    <li v-for="(v, i) in advantageList2" :key="i">
                        <i class="iconfont" :class="v.icon"></i>
                        <h4>{{ v.title }}</h4>
                        <p>{{ v.sub }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>