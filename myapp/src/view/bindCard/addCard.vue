<template>
    <div>
        <van-nav-bar
            title="增加绑定银行卡"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <van-cell-group class="reg-from">
                    <van-field v-model="cardNum" clearable border label="银行卡号" placeholder="请输入增加的银行卡号" :error-message="cardNumErr" />
                    <van-field v-model="cardName" clearable border label="姓名" placeholder="请输入银行卡绑定姓名" :error-message="cardNameErr" />
                </van-cell-group>
                <van-button size="large" class="addCard" to="/bindCard/addCard">添加</van-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cardNum: '',
            cardNumErr: '',
            cardName: '',
            cardNameErr: ''
        }
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
    }
}
</script>
<style scoped>
.content{
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.w{
    margin: 58px 12px 0 12px;
    text-align: left;
}
.addCard{
    color: #fff;
    background-color: #ff0000;
}
</style>