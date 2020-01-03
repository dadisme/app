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
        <van-popup v-model="showPop" position="bottom" closeable class="popup">
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
        <van-dialog
            v-model="showDia"
            title="提示"
            show-cancel-button
            show-confirm-button
            :beforeClose="beforeClose"
        >
            <p class="sure-money">确定要支付{{nowMoney}}元吗？</p>
            <van-collapse v-model="activeNames">
                <van-collapse-item title="我的银行卡" name="1" class="my-card">
                    <van-radio-group v-model="radio" @change="cardOption(radio)">
                        <van-cell-group>
                            <van-cell :title="data.card1" clickable @click="radio = '1'" v-if="data.card1" class="cell">
                                <van-icon name="success" v-if="showCard1"/>
                            </van-cell>
                            <van-cell :title="data.card2" clickable @click="radio = '2'" v-if="data.card2" class="cell">
                                <van-icon name="success" v-if="showCard2"/>
                            </van-cell>
                            <van-cell :title="data.card3" clickable @click="radio = '3'" v-if="data.card3" class="cell">
                                <van-icon name="success" v-if="showCard3"/>
                            </van-cell>
                        </van-cell-group>
                    </van-radio-group>
                </van-collapse-item>
            </van-collapse>
        </van-dialog>
    </div>
</template>
<script>
import { electricRate, bindCard } from '@/api/api';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
    data() {
        return{
            waterMoney: '',
            waterCustom: '',
            nowMoney: '',
            showPop: false,
            showKeyboard: true,
            value: '',
            num: '',
            money: '',
            surplus: '',
            showDia: false,
            activeNames: ['1'],
            radio: '0',
            data: '',
            showCard1: false,
            showCard2: false,
            showCard3: false,
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
                bindCard({username: this.$store.state.username})
                .then(res => {
                    this.data = res.data[0];            
                    if(this.data.card1 == ''&&this.data.card2 == ''&&this.data.card3 == '') {
                        this.$router.push({
                            name: 'bindCard'
                        })
                    }else {
                        this.showDia = true;
                    }
                })
                .catch(err => {
                    Toast.fail(err);
                })
            }else {
                Dialog.alert({
                    title: '提示',
                    message: '请选择您充值的数字！'
                }).then(() => {
                // on close
                });
            }
        },
        cardOption(index) {
            if(index == '1') {
                this.showCard1 = true;
                this.showCard2 = false;
                this.showCard3 = false;
            }else if(index == '2') {
                this.showCard1 = false;
                this.showCard2 = true;
                this.showCard3 = false;
            }else if(index == '3') {
                this.showCard1 = false;
                this.showCard2 = false;
                this.showCard3 = true;
            }
        },
        beforeClose(action, done) {
            if (action === 'confirm') {
                if(this.showCard1||this.showCard2||this.showCard3) {
                    done();
                    this.showPopup();
                }else {
                    Dialog.alert({
                        title: '提示',
                        message: '请选择银行卡!!'
                    }).then(() => {
                    // on close
                        done();
                    });
                }
                
            } else {
                done();
            }         
        },
        showPopup() {
            if(this.$store.state.pwd == '') {
                this.$router.push({
                    name: 'paypwd'
                })
            }else {
                this.showPop = true;
                this.value = '';
            }
        },
        onInput(key) {
            let cardNum = '';
            if(this.showCard1) {
                cardNum = this.data.card1;
            }else if(this.showCard2){
                cardNum = this.data.card2;
            }else if(this.showCard3) {
                cardNum = this.data.card3;
            }
            this.value = (this.value + key).slice(0, 6);
            if(this.value.length == 6) {
                if(this.value == this.$store.state.pwd) {
                    var paymon = Number(this.nowMoney) + this.money;
                    electricRate({username: this.$store.state.username, value: paymon, cardNum: cardNum })
                        .then(res => {
                            this.showPop = false;
                            this.dataList();
                            Toast.success(res.msg);
                        })
                }else {
                    Dialog.alert({
                        title: '提示',
                        message: '支付密码错误!!'
                    }).then(() => {
                    // on close
                    });
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
.sure-money{
    text-align: center;
}
.my-card{
    text-align: left;
}
.cell{
    height: 35px;
}
</style>