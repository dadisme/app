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
                <textarea rows="16" cols="47" placeholder="请输入您的意见或者建议" border v-model="advice" maxlength="85" @input="adviceInput"></textarea>
                <span class="xianzhi">{{remnant}}/85</span>
                <van-button size="large" class="recharge" @click="complain">提交</van-button>
            </div>  
        </div>
    </div>
</template>
<script>
import { propertyComplain } from '@/api/api';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
    data() {
        return{
            advice: '',
            remnant: 0
        }
    },
    methods: {
        adviceInput(){
            var txtVal = this.advice.length;
            this.remnant = txtVal;
        },
        onClickLeft() {
            this.$router.back();
        },
        complain (){
            if(this.advice) {
                propertyComplain({username: this.$store.state.username, advice: this.advice})
                    .then(res=>{
                        this.advice = '';
                        Toast.success(res.msg);
                    })
                    .catch(error=>{
                         Toast.fail(error);
                    })
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
        width: 91%;
        height: 210px;
    }
    .recharge{
        color: #fff;
        background-color: #ff0000;
        margin: 12px 0 12px 0;
        width: 100%;
    }
}
.xianzhi{
    position: relative;
    left: 85%;
    top: -30px;
}
</style>