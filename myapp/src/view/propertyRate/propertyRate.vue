<template>
    <div>
        <van-nav-bar
            title="物业费"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <p>地址:&nbsp;&nbsp;&nbsp;{{this.$store.state.useraddress}}</p>
                <p>用户:&nbsp;&nbsp;&nbsp;{{this.$store.state.username}}</p>
                <p>面积:&nbsp;&nbsp;&nbsp;{{this.$store.state.area}}平方米</p>
                <p>物业费&nbsp;&nbsp;&nbsp;{{property}}/月</p>
                <p>已缴纳:&nbsp;&nbsp;&nbsp;{{money}}</p>
                <p>未缴纳:&nbsp;&nbsp;&nbsp;{{needmoney}}</p>
                <div>
                    <van-grid :column-num="3">
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
            <p class="money">缴费金额：{{nowMoney}}</p>
            <van-button size="large" class="recharge" @click="payforProperty">缴费</van-button>
            <p class="message"><van-icon name="warning" class="warning" />温馨提示</p>
            <p class="message">经过反复测算研究，参照本市同行业商业物业费收费的标准，集合广大业主的意见和建议，物业费的收费标准如下</p>
            <p class="message">小区物业费1.60元/㎡。</p>
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
import { propertyRate, bindCard } from '@/api/api';
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
            money: '',
            property: '',
            needmoney: '',
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
            propertyRate({username: this.$store.state.username})
            .then(res => {
                if(res.status == 200){
                    this.money = Math.round(res.result[0].money);
                    this.property = Math.round(this.$store.state.area/1.6);
                    if(this.money >= this.property) {
                        this.needmoney = '0';
                    }else {
                        this.needmoney = this.property - this.money;
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
            switch (num) {
                default:
                    gridItem[0].classList.add('active');
                    break;
            }
            this.nowMoney = num;
        },
        payforProperty (){
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
                    message: '请选择您缴费的数字！'
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
                    propertyRate({username: this.$store.state.username, value: paymon })
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
    border: 1px solid #e1e104;
    // background-color: rgba(255,214,48,0.15);
}
.money{
    color: red;
}
.recharge{
    color: #fff;
    background-color: #e1e104;
    margin: 12px 0 12px 0;
}
.warning{
    color: #e1e104;
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