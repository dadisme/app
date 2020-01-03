<template>
    <div>
        <van-nav-bar
            title="垃圾分类"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            fixed
        />
        <div>
            <p class="fixed">尊敬的各位业主/住户：</p>
            <p class="fixed">你们好！</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;为全面贯彻落实《旌城区生活垃圾强制分类制度实施方案》的要求，推进小区垃圾分类工作，提高垃圾分类投放质量，现就小区开展生活垃圾分类工作有关事项通知如下：</p>
            <h3>一、垃圾的分类</h3>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;生活垃圾分成易腐垃圾、可回收物、有害垃圾、园林绿化垃圾、建筑（装修）垃圾、大件垃圾和其他垃圾等类别。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;1．易腐垃圾：餐厨垃圾和蔬菜瓜果垃圾、腐肉、肉碎骨、畜禽产品内脏等有机垃圾。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;2．可回收物：废纸，废塑料，废金属，废包装物，废旧纺织物，废弃电器电子产品，废玻璃，废纸塑铝复合包装等。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;3．有害垃圾：废电池，废荧光灯管，废温度计，废血压计，废药品及其包装物，废油漆、溶剂及其包装物，废杀虫剂、消毒剂及其包装物等。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;4．园林绿化垃圾：绿化修剪、养护作业产生的树枝枝干、枯枝败叶等园林绿化垃圾。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;5．建筑（装修）垃圾：建设单位、施工单位或个人新建、改建、扩建和拆除各类建筑物、构筑物、管网等以及装饰装修房屋过程中所产生的弃土、弃料及其它废弃物。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;6．大件垃圾：日常生活中产生的体积较大、整体性强，需要拆分再处理的废弃物品，包括废旧大型家具类。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;7．其他垃圾：除上述垃圾以外的生活垃圾，主要包括灰土、卫生间废纸、一次性餐具等难以回收的废弃物。</p>
            <h3>二、各类垃圾桶分布区域</h3>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;可回收物垃圾桶为蓝色、其他垃圾桶为灰色、有害垃圾桶为红色、餐厨垃圾桶为绿色。</p> 
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;可回收物垃圾桶分布在开太楼茶水间、清洁间，修远楼茶水间、卫生间、清洁站。</p> 
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;有害垃圾桶和餐厨垃圾桶分布在修远楼清洁站。</p> 
            <h3>三、垃圾分类工作要求</h3>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;1.提高认识，明确责任。小区各部门应明确职责，高度重视垃圾分类处理工作，积极做好实施和推进工作。</p> 
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;2.自觉行动，争做表率。加强垃圾分类宣传，引导业主们树立垃圾分类意识，并自觉按照要求将生活垃圾分类投放垃圾桶，倡导管理员争做“垃圾分类”的践行者和表率，确保垃圾分类工作取得良好实效。</p> 
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;垃圾分类是建设文明小区、落实节能减排的一项利国利民措施。为加快推进生活垃圾分类的实施，确保小区生活运行安全稳定，请小区各部门、业主们认真贯彻落实要求，积极做好垃圾分类的宣传动员和配合工作，为创建美好小区环境贡献出自己的力量。</p>  
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;让我们精诚协作,携手共建美好家园！</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;感谢您对我们工作的支持与理解！</p>    
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;24小时服务热线：0838-2556766</p>
            <p class="remind fixed">注意：客户服务中心上班时间为8：00—18：30（周末、节假日照常上班8:30-18:00）</p>
            <p class="comm">旌城一品客户服务中心</p>                      　
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name: 'rubushDetail',
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
    margin: 12px;
}
.remind{
    color: blueviolet;
}
.comm{
    text-align: right;
}
</style>