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
                <p>姓名：</p>
                <p>地址：</p>
                <p>电话：</p>
                <p>是否入住：</p>
                <p>入住时间：</p>
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{

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
p{
    font-size: 20px;
}
</style>