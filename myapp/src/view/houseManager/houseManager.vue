<template>
    <div>
        <van-nav-bar
            title="家政管理"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <van-tree-select
                    :items="items"
                    :active-id.sync="activeIds"
                    :main-active-index.sync="activeIndex"
                    @click-nav="left"
                    @click-item="right"
                />
                <p>请选择期望的时间段</p>
                <van-cell is-link @click="showPopupStart">开始时间</van-cell>
                <p>开始时间：{{startTimes}}</p>
                <van-popup v-model="showStart" position="bottom">
                    <van-datetime-picker
                        v-model="currentDateStart"
                        type="date"
                        :min-date="minDate"
                        :formatter="formatter"
                        @confirm="startTime"
                        @cancel="cancel"
                    />
                </van-popup>
                <van-cell is-link @click="showPopupEnd">结束时间</van-cell>
                <p>结束时间：{{endTimes}}</p>
                <van-popup v-model="showEnd" position="bottom">
                    <van-datetime-picker
                        v-model="currentDateEnd"
                        type="date"
                        :min-date="minDate"
                        :max-date="maxDate"
                        :formatter="formatter"
                        @confirm="endTime"
                        @cancel="cancel"
                    />
                </van-popup>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            items: [{ text: '清洁阿姨', children: [{text:'一次', id:1},{text:'一周一次', id:2},{text:'一个月一次', id:3},{text:'一季度一次',id:4},{text:'半年一次', id:5},{text:'其他情况', id:6}] },
                    { text: '做饭阿姨', children: [{text:'午餐', id:1},{text:'晚餐', id:2},{text:'午餐+晚餐', id:3},{text:'一日三餐', id:4},{text:'住家', id:5},{text:'其他情况', id:6}] },
                    { text: '月嫂', children: [{text:'详情需面谈', id: 1}] },
                    { text: '育儿嫂', children: [{text:'详情需面谈', id:1}] }],
            activeIds: 1,
            activeIndex: 0,
            selectPeo: 0,
            selectTim: '',
            showStart: false,
            showEnd: false,
            currentDateStart: new Date(),
            currentDateEnd: new Date(),
            minDate: new Date(),
            maxDate: new Date(2021, 10, 1),
            startTimes: '',
            endTimes: ''
        }
    },
    watch:{
        
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        left(index) {
            this.selectPeo = this.items[index].text;
            console.log(this.selectPeo)
        },
        right(data) {
            this.selectTim = data.text;
            console.log(this.selectTim);
        },
        showPopupStart() {
            this.showStart = true;
        },
        showPopupEnd() {
            this.showEnd = true;
        },
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            } else if (type === 'month') {
                return `${value}月`
            }else if (type === 'date') {
                return `${value}日`
            }
            return value;
        },
        startTime(value) {
            this.startTimes = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
            console.log(this.startTimes);
            this.showStart = false;
            let start = new Date(Date.parse(value));
            this.compare(start,0);
        },
        endTime(value) {
            this.endTimes = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
            console.log(this.endTimes);
            this.showEnd = false;
            let end = new Date(Date.parse(this.endTimes));
            this.compare(0,end);
        },
        cancel() {
            this.showStart = false;
            this.showEnd = false;
        },
        compare(s,e) {
            console.log(s,e)
        }
    }
}
</script>
<style scoped>
.content{
  background-color: #DFE1E6;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.w{
    margin-top: 46px;
}
p{
    text-align: left;
    margin: 6px 0;
}
</style>