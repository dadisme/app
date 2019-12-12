<template>
    <div>
        <van-nav-bar
            title="业主信息"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <p>姓名：{{userName}}</p>
                <p>地址：{{userAddress}}</p>
                <p>电话：{{userTele}}</p>
                <p>邮箱：{{userEmail}}</p>
                <p>是否入住：{{isCheck}}</p>
                <p v-if="show">入住时间：{{checkTime}}</p>
            </div>  
        </div>
    </div>
</template>
<script>
import { aboutUser } from '@/api/api';
import { Toast } from 'vant';
export default {
    data() {
        return{
            userName: '',
            userAddress: '',
            userTele: '',
            userEmail: '',
            isCheck: '',
            checkTime: '',
            show: ''
        }
    },
    mounted() {
        aboutUser({userName: this.$store.state.username})
            .then(res => {
                if(res.status == 200){
                    this.userName = res.data[0].username;
                    this.userAddress = res.data[0].useraddress;
                    this.userTele = res.data[0].usertele;
                    this.checkTime = res.data[0].checktime;
                    this.userEmail = res.data[0].useremail;
                    if(res.data[0].ischeck == 1){
                        this.isCheck = '是';
                        this.show = 1;
                    }else{
                        this.isCheck = '否';
                        this.show = 0;
                    }
                }
            })
            .catch(error => {
                Toast.fail(error);
            })
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
p{
    font-size: 20px;
}
</style>