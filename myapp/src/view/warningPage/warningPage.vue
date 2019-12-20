<template>
    <div>
        <van-nav-bar
            title="注意"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <h2>申明</h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;该app的解释权归该小区旌城上品所有，上面一切的内容都可以找总物业查看。如若有疑问，欢迎各位业主找物业公司核实内容。</p>
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
h2{
    text-align: center;
}
</style>