<template>
    <div>
        <van-nav-bar
            title="标题"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div>
            <p class="fixed">尊敬的各位业主/住户：</p>
            <p class="fixed">你们好！</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;感谢你们一直以来对我们物业工作的理解、支持与配合。正是有了大家的支持，才使我们的
               物业服务品质不断地提升。物业管理费收入是提高服务的基础和各项开支的来源,是小区治安
               秩序、环境绿化及卫生、房屋公共设施配套管理的根本保证。2019年已接近尾声，尚有部分
               业主未能按时缴纳物业服务费。如果物业服务费不能按时缴纳，将会对物业管理服务工作造
               成严重的影响。同时，严重侵犯了已交费业主的切身利益。请尚未缴纳2019年物业服务费的
               业主在百忙之中抽空到客户服务中心缴纳。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;让我们精诚协作,携手共建美好家园！</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;感谢您对我们工作的支持与理解！</p>    
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;24小时服务热线：0838-2556766</p>
            <p class="remind fixed">注意：客户服务中心上班时间为8：00—18：30（周末、节假日照常上班8:30-18:00），若您不方便前来缴纳，可通过银行转账或联系我们上门收取。</p>
            <p class="comm">旌城一品客户服务中心</p>
            <p class="comm">2019年11月28日</p>                        　
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        onClickLeft() {
            this.$router.back();
        }
    }
}
</script>
<style scoped>
.fixed{
    text-align: left;
}
.remind{
    color: blueviolet;
}
.comm{
    text-align: right;
}
</style>