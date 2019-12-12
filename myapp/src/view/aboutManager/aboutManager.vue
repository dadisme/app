<template>
    <div>
        <van-nav-bar
            title="负责人信息"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <p>姓名：{{manager}}</p>
                <p>联系方式：{{mTele}}</p>
                <p>负责区域：{{mArea}}</p>
                <p>办公地点：{{mPlace}}</p>
                <p>紧急联系电话：{{urgency}}</p>
            </div>  
        </div>
    </div>
</template>
<script>
import { aboutManager } from '@/api/api';
import { Toast } from 'vant';
export default {
    data() {
        return{
            manager: '',
            mTele: '',
            mArea: '',
            mPlace: '',
            urgency: ''
        }
    },
    mounted() {
        aboutManager({userName: this.$store.state.username})
            .then(res => {
                if(res.status == 200){
                    var address = res.data[0].useraddress;
                    var addressreg = /\d/;
                    var n = address.match(addressreg);
                    if(n == 1||2||3) {
                        this.manager = '张守一';
                        this.mTele = '0830-1010100';
                        this.mArea = '旌城上品一栋二栋三栋';
                        this.mPlace = '旌城上品二栋负一楼';
                        this.urgency = '19990909090';
                    }else if(n == 4||5||6) {
                        this.manager = '张守四';
                        this.mTele = '0830-2020200';
                        this.mArea = '旌城上品四栋五栋六栋';
                        this.mPlace = '旌城上品五栋负一楼';
                        this.urgency = '18880808080';
                    }else if(n == 7||8||9) {
                        this.manager = '张守七';
                        this.mTele = '0830-3030300';
                        this.mArea = '旌城上品七栋八栋九栋';
                        this.mPlace = '旌城上品八栋负一楼';
                        this.urgency = '17770707070';
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