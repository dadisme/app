<template>
    <div>
        <van-nav-bar
            title="我的银行卡"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <van-collapse v-model="activeNames">
                    <van-collapse-item title="我的银行卡" name="1">
                        <p>111</p>
                        <p>222</p>
                    </van-collapse-item>
                </van-collapse>
                <van-button size="large" class="addCard" to="/bindCard/addCard">新增</van-button>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    data() {
    return {
      activeNames: ['1']
    };
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