<template>
    <div>
        <van-nav-bar
            title="电费"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <p>地址:&nbsp;&nbsp;&nbsp;{{this.$store.state.useraddress}}</p>
                <p>用户:&nbsp;&nbsp;&nbsp;{{this.$store.state.username}}</p>
                <p>用电量:&nbsp;&nbsp;&nbsp;{{num}}度</p>
                <p>大约剩余电量:&nbsp;&nbsp;&nbsp;{{surplus}}度</p>
                <p>余额:&nbsp;&nbsp;&nbsp;{{money}}元</p>
                <div>
                    <van-grid :column-num="3">
                            <van-grid-item
                                :key="50"
                                text="50元"
                                class="water-money"
                                @click="outActive(50)"
                            />
                            <van-grid-item
                                :key="100"
                                text="100元"
                                class="water-money"
                                @click="outActive(100)"
                            />
                            <van-grid-item
                                :key="200"
                                text="200元"
                                class="water-money"
                                @click="outActive(200)"
                            />
                            <van-grid-item
                                :key="300"
                                text="300元"
                                class="water-money"
                                @click="outActive(300)"
                            />
                            <van-grid-item
                                :key="waterCustom"
                                class="water-money"
                                @click="outActive(waterCustom)"
                            >
                                <input placeholder="自定义金额" type="text" v-model="waterCustom"/>           
                        </van-grid-item>
                    </van-grid>
                </div>               
            </div>
            <p class="money">充值金额：{{nowMoney}}</p>
            <van-button size="large" class="recharge" @click="payforElectric">充值</van-button>
            <p class="message"><van-icon name="warning" class="warning" />温馨提示</p>
            <p class="message">根据国家发展改革委印发《关于居民生活用电试行阶梯电价的指导意见的通知》，调整后的居民用户每月用电量划分为3档，电价施行分档递增。</p>
            <p class="message">第一档：电量每户每月210度及以下的用户电价不变，执行每度0.5469元。</p>
            <p class="message">第二档：电量每户每月210-400度之间的用户将在第一档电价基础上每度加价0.05元，为0.5969元。</p>
            <p class="message">第三档：电量每户每月400度以上的用户将在第一档电价基础上每度加价0.3元，为0.8469元。</p>
        </div>
        <van-popup v-model="show" position="bottom" closeable class="popup">
            <!-- 密码输入框 -->
            <van-password-input
            :value="value"
            border
            />
            <!-- 数字键盘 -->
            <van-number-keyboard
            :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            />
        </van-popup>
    </div>
</template>
<script>
import { electricRate } from '@/api/api';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
    data() {
        return{
            waterMoney: '',
            waterCustom: '',
            nowMoney: '',
            show: false,
            showKeyboard: true,
            value: '',
            num: '',
            money: '',
            surplus: ''
        }
    },
    mounted() {
        this.dataList();
    },
    methods: {
        dataList() {
            electricRate({username: this.$store.state.username})
            .then(res => {
                if(res.status == 200){
                    this.num = Math.round(res.result[0].num);
                    this.money = Math.round(res.result[0].money);
                    if(this.money >= 0) {
                        if(this.num<=210) {
                            let all = Math.round(this.money/0.5469);
                            if(all > this.num ) {
                                this.surplus = all - this.num;
                            }else {
                                this.surplus = '0';
                            }
                        }else if(this.num>210 && this.num<=400) {
                            let all = 210/0.5469+(this.num-210)/0.5969;
                            if(all > this.num ) {
                                this.surplus = all - this.num;
                            }else {
                                this.surplus = '0';
                            }
                        }else if(this.num>400) {
                            let all = 210/0.5469+190/0.5969+(this.num-400)/0.8469;
                            if(all > this.num ) {
                                this.surplus = all - this.num;
                            }else {
                                this.surplus = '0';
                            }
                        }
                    }else {
                        this.surplus = '0';
                    }
                }
            })
            .catch(error => {
                Toast.fail(error);
            })
        },
        onClickLeft() {
            this.$router.back();
        },
        outActive(num){
            var gridItem = document.getElementsByClassName('water-money');
            gridItem[0].classList.remove('active');
            gridItem[1].classList.remove('active');
            gridItem[2].classList.remove('active');
            gridItem[3].classList.remove('active');
            gridItem[4].classList.remove('active');
            switch (num) {
                case 50:
                    gridItem[0].classList.add('active');
                    break;
                case 100:
                    gridItem[1].classList.add('active');
                    break;
                case 200:
                    gridItem[2].classList.add('active');
                    break;
                case 300:
                    gridItem[3].classList.add('active');
                    break;
                default:
                    gridItem[4].classList.add('active');
                    break;
            }
            this.nowMoney = num;
        },
        payforElectric (){
            if(this.nowMoney) {
                this.showPopup();
            }else {
                Dialog.alert({
                    title: '提示',
                    message: '请选择您充值的数字！'
                }).then(() => {
                // on close
                });
            }
        },
        showPopup() {
            this.show = true;
            this.value = '';
        },
        onInput(key) {
            this.value = (this.value + key).slice(0, 6);
            if(this.value.length == 6) {
                if(this.value == '111111') {
                    var paymon = Number(this.nowMoney) + this.money;
                    electricRate({username: this.$store.state.username, value: paymon })
                        .then(res => {
                            this.show = false;
                            this.dataList();
                            Toast.success(res.msg);
                        })
                }
            }
        },
        onDelete() {
            this.value = this.value.slice(0, this.value.length - 1);
        }
    }
}
</script>
<style scoped lang="scss">
.content{
  background-color: #DFE1E6;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.w{
    margin: 46px 0 0 0;
    background-color: #fff;
    width: 100%;
}
p{
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    margin: 12px 12px 0 12px;
}
.water-money{
    border: 1px solid gray;
    flex-basis: 27%!important;
    margin: 12px 3%;
    height: 42px;
    input{
        width: 80px;
        text-align: center;
        border: none;
        font-size: 12px;
    }
}
.active{
    border: 1px solid #e66120;
    // background-color: rgba(255,214,48,0.15);
}
.money{
    color: red;
}
.recharge{
    color: #fff;
    background-color: #e66120;
    margin: 12px 0 12px 0;
}
.warning{
    color: #e66120;
    font-size: 15px;
    top: 4px;
}
.message{
    color: #A1A6B3;
    font-size: 12px;
}
.popup{
    height: 40%;
}
</style>