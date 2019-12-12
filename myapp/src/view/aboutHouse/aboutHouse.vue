<template>
    <div>
        <van-nav-bar
            title="房屋信息"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <p>姓名：{{userName}}</p>
                <p>住址：{{userAddress}}</p>
                <p>建筑面积：{{coverArea}}平方米</p>
                <p>公摊面积：{{publicArea}}平方米</p>
                <p>实际使用面积：{{coverArea-publicArea}}平方米</p>
            </div>  
        </div>
    </div>
</template>
<script>
import { aboutHouse } from '@/api/api';
import { Toast } from 'vant';
export default {
    data() {
        return{
            userName: '',
            userAddress: '',
            coverArea: '',
            publicArea: ''
        }
    },
    mounted() {
        aboutHouse({userName: this.$store.state.username})
            .then(res => {
                if(res.status == 200){
                    this.userName = res.data[0].username;
                    this.userAddress = res.data[0].useraddress;
                    this.coverArea = res.data[0].coverarea;
                    this.publicArea = res.data[0].publicarea;
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