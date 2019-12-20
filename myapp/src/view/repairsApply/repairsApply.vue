<template>
    <div>
        <van-nav-bar
            title="报修申请"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <textarea placeholder="请简述您要报修的情况" border v-model="place" maxlength="85" @input="placeInput"></textarea>
                <span class="xianzhi">{{remnant}}/85</span>
                <van-button size="large" class="recharge" @click="repairsApply">通知物业</van-button>
                <p class="message"><van-icon name="warning" class="warning" />温馨提示</p>
                <p class="message">通知物业后，稍后会有工作人员及时联系您询问报修的情况并确认上门时间。</p>
                <p class="message">如果事发紧急也可以直接拨打物业电话：030-8075462</p>
            </div>  
        </div>
    </div>
</template>
<script>
import { repairsApply } from '@/api/api';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
    data() {
        return{
            place: '',
            remnant: 0
        }
    },
    methods: {
        placeInput(){
            var txtVal = this.place.length;
            this.remnant = txtVal;
        },
        onClickLeft() {
            this.$router.back();
        },
        repairsApply (){
            if(this.place) {
                repairsApply({username: this.$store.state.username, place: this.place})
                    .then(res=>{
                        this.place = '';
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
        background-color: #ea8d50;
        margin: 12px 0 12px 0;
        width: 100%;
    }
    p{
        margin: 12px 12px;
    }
    .warning{
        color: #e2110c;
        font-size: 15px;
        top: 4px;
    }
    .message{
        color: #A1A6B3;
        font-size: 12px;
    }
}
.xianzhi{
    position: relative;
    left: 85%;
    top: -30px;
}
</style>