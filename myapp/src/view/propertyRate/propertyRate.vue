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
                <p>地址:</p>
                <p>用户:</p>
                <p>面积:</p>
                <p>物业费：</p>
                <p>未缴纳:</p>
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
        }
    },
    methods: {
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
                this.showPopup();
            }else {
                Dialog.alert({
                    title: '提示',
                    message: '请选择您缴费的数字！'
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
                console.log(this.value);
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
</style>