<template>
    <div>
        <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            fixed
        />
        <div class="content">
            <p class="fixed">尊敬的各位业主/住户：</p>
            <p class="fixed">你们好！</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;{{this.content}}</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;让我们精诚协作,携手共建美好家园！</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;感谢您对我们工作的支持与理解！</p>    
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;24小时服务热线：0838-2556766</p>
            <p class="remind fixed">注意：客户服务中心上班时间为8：00—18：30（周末、节假日照常上班8:30-18:00），若您不方便前来缴纳，可通过银行转账或联系我们上门收取。</p>
            <p class="comm">旌城一品客户服务中心</p>
            <p></p>
            <p class="fixed">报名业主：{{this.people}}</p> 
            <p></p>
            <van-button size="large" class="recharge" @click="sendMessage">报名</van-button>         　
        </div>
    </div>
</template>
<script>
import { activityDetail, sendName } from '@/api/api';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
    name: 'activity',
    data() {
        return{
            title: '',
            content: '',
            people: '',
            username: '',
            showSend: true,
            showDia: false
        }
    },
    created() {
        this.list();
    },
    methods:{
        onClickLeft() {
            this.$router.back();
        },
        list() {
            this.title = this.$route.query.title;
            activityDetail({title: this.title})
                .then(res=>{
                    this.content = res.data[0].content;
                    this.people = res.data[0].people;
                })
                .catch(err=>{
                    Toast.fail(err);
                })
        },
        sendMessage() {
            if(!this.$store.state.username) {
                this.$router.push({
                    name: 'Login'
                })
            }else {
                this.username = this.$store.state.username;
                let params = [];
                params = this.people.split(",");
                for(let i=0; i<=params.length; i++){
                    if(this.username == params[i]) {
                        this.showDia = true;
                        this.showSend = false;
                        Dialog.alert({
                        title: '提示',
                        message: `您已报名${this.title}！`
                    }).then(() => {
                    // on close
                    });
                    }
                }
                if(!this.showDia && this.showSend) {
                    Dialog.confirm({
                        title: '提示',
                        message: `确认报名${this.title}这个活动吗??`
                    }).then(() => {
                        sendName({title: this.title, username: this.username, people: this.people})
                        .then(res=>{
                            Toast.success(res.msg);
                            this.list();
                            this.showSend = false;
                            this.showDia = true;
                        })
                        .catch(err=>{
                            Toast.fail(err);
                        })  
                    }).catch(() => {
                    // on cancel
                    });
                }
            }
        }
    }
}
</script>
<style scoped>
.content{
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 46px;
}
.fixed{
    text-align: left;
    margin: 12px;
}
.remind{
    color: blueviolet;
}
.comm{
    text-align: right;
}
.recharge{
    color: #fff;
    background-color: #ea8d50;
    margin: 12px 0 12px 0;
}
</style>