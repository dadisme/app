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
                <van-button size="large" class="recharge" @click="submit">通知管理员</van-button>
                <p class="message"><van-icon name="warning" class="warning" />温馨提示</p>
                <p class="message">通知物业后，稍后会有工作人员及时联系您询问家政管理的情况并确认上门时间。</p>
                <p class="message">如果事发紧急也可以直接拨打物业电话：030-8075462</p>
            </div>
        </div>
    </div>
</template>
<script>
import { houseManager } from '@/api/api';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
    data() {
        return{
            items: [{ text: '清洁阿姨', children: [{text:'一次', id:1},{text:'一周一次', id:2},{text:'一个月一次', id:3},{text:'一季度一次',id:4},{text:'半年一次', id:5},{text:'其他情况', id:6}] },
                    { text: '做饭阿姨', children: [{text:'午餐', id:1},{text:'晚餐', id:2},{text:'午餐+晚餐', id:3},{text:'一日三餐', id:4},{text:'住家', id:5},{text:'其他情况', id:6}] },
                    { text: '月嫂', children: [{text:'详情需面谈', id: 1}] },
                    { text: '育儿嫂', children: [{text:'详情需面谈', id:1}] }],
            activeIds: 0,
            activeIndex: -1,
            selectPeo: 0,
            selectTim: '',
            showStart: false,
            showEnd: false,
            currentDateStart: new Date(),
            currentDateEnd: new Date(),
            minDate: new Date(),
            maxDate: new Date(2021,12,31),
            startTimes: '',
            endTimes: '',
            allstart: '',
            allend: ''
        }
    },
    methods: {
        submit() {
            var value = this.selectPeo+this.selectTim;
            var time = this.startTimes+'到'+this.endTimes;
            if(!value) {
                Dialog.alert({
                    title: '提示',
                    message: '请选择项目！'
                }).then(() => {
                // on close
                });
            }else if(!this.startTimes||!this.endTimes) {
                Dialog.alert({
                    title: '提示',
                    message: '请选择时间段！'
                }).then(() => {
                // on close
                });
            }else {
                houseManager({username: this.$store.state.username, value: value, time: time})
                .then(res=>{
                    Toast.success(res.msg);
                })
                .catch(error=>{
                    Toast.fail(error);
                })
            }
        },
        onClickLeft() {
            this.$router.back();
        },
        left(index) {
            this.selectPeo = this.items[index].text;
        },
        right(data) {
            this.selectTim = data.text;
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
            this.showStart = false;
            this.allstart = value.getFullYear()*365+(value.getMonth() + 1)*30+value.getDate();
        },
        endTime(value) {
            this.allend = value.getFullYear()*365+(value.getMonth() + 1)*30+value.getDate();
            if(this.allend >= this.allstart) {
                this.endTimes = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
                this.showEnd = false;
            }else {
                Dialog.alert({
                    title: '提示',
                    message: '选择有误！请重新选择！'
                }).then(() => {
                // on close
                });
            }
        },
        cancel() {
            this.showStart = false;
            this.showEnd = false;
        },
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
.recharge{
    color: #fff;
    background-color: #1fc461;
    margin: 0 0 12px 0;
}
.van-tree-select__item--active{
    color: #1fc461;
}
.van-sidebar-item--select{
    border-color: #1fc461;
}
p{
    margin: 8px 12px;
}
.warning{
    color: #1fc461;
    font-size: 15px;
    top: 4px;
}
.message{
    color: #A1A6B3;
    font-size: 12px;
}
</style>