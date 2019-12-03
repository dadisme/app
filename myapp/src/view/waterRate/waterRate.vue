<template>
    <div>
        <van-nav-bar
            title="水费"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="w">
            <p>地址</p>
            <p>用户</p>
            <div>
                <van-radio-group v-model="waterMoney">
                    <van-grid :column-num="2">
                        <van-radio name="50" checked-color="blue" class="yc">
                            <van-grid-item
                                :key="50"
                                text="50元"
                                class="water-money"
                            />
                        </van-radio>
                        <van-radio name="100" checked-color="blue" class="yc">
                            <van-grid-item
                                :key="100"
                                text="100元"
                                class="water-money"
                            />
                        </van-radio>
                        <van-radio name="200" checked-color="blue" class="yc">
                            <van-grid-item
                                :key="200"
                                text="200元"
                                class="water-money"
                            />
                        </van-radio>
                        <van-radio name="300" checked-color="blue" class="yc">
                            <van-grid-item
                                :key="300"
                                text="300元"
                                class="water-money"
                            />
                        </van-radio>
                        <van-radio name="waterCustom" checked-color="blue" class="yc">
                            <van-grid-item
                                :key="waterCustom"
                                class="water-money"
                            >
                                <input placeholder="自定义金额" type="text" v-model="waterCustom"/>           
                        </van-grid-item>
                        </van-radio>
                    </van-grid>
                </van-radio-group>
            </div>               
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            waterMoney: '',
            waterCustom: ''
        }
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        }
    }
}
</script>
<style scoped lang="scss">
.w{
    margin: 0 12px;
}
p{
    text-align: left;
    font-size: 20px;
    font-weight: 600;
}
.water-money{
    border: 1px solid blue;
    flex-basis: 40%!important;
    margin: 12px 5%;
    input{
        width: 80px;
        text-align: center;
        border: none;
    }
}
.yc i{
    display: none;
}
</style>