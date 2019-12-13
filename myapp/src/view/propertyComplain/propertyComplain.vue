<template>
    <div>
        <van-nav-bar
            title="物业投诉"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <textarea rows="16" cols="47" placeholder="请输入您的意见或者建议" border v-model="advice"></textarea>
                <van-button size="large" class="recharge" @click="complain">提交</van-button>
            </div>  
        </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    data() {
        return{
            advice: ''
        }
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        complain (){
            if(this.advice) {
                console.log('111');
            }else {
                Dialog.alert({
                    title: '提示',
                    message: '请填写内容！'
                }).then(() => {
                // on close
                });
            }
        }
    },
}
</script>
<style scoped lang="scss">
.content{
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.w{
    margin: 56px 0 0 0;
    text-align: left;
    textarea{
        margin: 0 12px;
    }
    .recharge{
        color: #fff;
        background-color: #ff0000;
        margin: 12px 0 12px 0;
    }
}
</style>