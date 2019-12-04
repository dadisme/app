<template>
    <div>
        <van-nav-bar
            title="水费"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <p>地址:</p>
                <p>用户:</p>
                <p>用水量:</p>
                <p>剩余水量:</p>
                <p>余额:</p>
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
            <van-button size="large" class="recharge">充值</van-button>
            <p class="message"><van-icon name="warning" class="warning" />温馨提示</p>
            <p class="message">根据税务局通知，为了促进节约用水，现将本小区水价调整后明细如下，用户月用水量划分为3档，水价施行分档递增。</p>
            <p class="message">第一档：居民用水：由2.225元/立方米调整为2.455元/立方米。</p>
            <p class="message">第二档：非居民用水：由2.7445元/立方米调整为2.917元/立方米。</p>
            <p class="message">第三档：特种用水：由3.837元/立方米调整为4.987元/立方米。</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            waterMoney: '',
            waterCustom: '',
            nowMoney: ''
        }
    },
    methods: {
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
    border: 1px solid #1400ff;
    // background-color: rgba(255,214,48,0.15);
}
.money{
    color: red;
}
.recharge{
    color: #fff;
    background-color: #1400ff;
    margin: 12px 0 12px 0;
}
.warning{
    color: #1400ff;
    font-size: 15px;
    top: 4px;
}
.message{
    color: #A1A6B3;
    font-size: 12px;
}
</style>