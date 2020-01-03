<template>
    <div>
        <van-nav-bar
            title="文明养犬"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            fixed
        />
        <div>
            <p class="fixed">尊敬的各位业主/住户：</p>
            <p class="fixed">你们好！</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;为进一步加强旌城上品建成区养犬的管理工作，保障人民群众身体健康和人身安全，维护城市环境和社会公共秩序，推进全国文明城市创建，倡导市民文明规范养犬行为，结合我市实际，持续开展不文明养犬专项整治行动，通告如下：</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;一、携犬外出时应当由具有完全民事行为能力的成年人对所养犬进行牵领，并束链（绳），不束链（绳）的视为无主犬、流浪犬，进行捕捉。注意避让老年人、残疾人、孕妇和儿童。携犬人对犬只排泄的粪便应当即时清除，不得破坏环境卫生。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;二、遛犬时间为晚7点后至第二天早上7点前。禁止携犬进入机关、医院、学校、儿童活动场所、体育馆、博物馆、图书馆、影剧院、候车室、大型商场、购物中心等人员密集的室内公共场所和公园、绿地、广场等室外公共场所。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;三、犬只咬伤、抓伤他人的，养犬人应当立即将被伤害者送至医疗部门诊治，并依法承担被伤害者的诊治费和其它经济损失。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;四、养犬人要定期为犬只注射狂犬病疫苗，定期检疫、登记。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;五、从事犬类经营和服务的机构，应当符合有关动物防疫规定，依法办理注册登记手续。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;六、各区、功能区负责对各自辖区内的养犬情况，持续深入逐家逐户进行摸排，对养犬户的姓名及犬只种类、数量登记造册，教育引导属地内的居民文明养犬，自觉抵制不文明养犬行为。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;七、各区、功能区不文明养犬整治专项行动工作队，持续对各类不文明养犬行为实施规劝、治理和处罚。阻碍国家机关工作人员依法执行公务的，由公安机关依照相关法律法规予以处罚。构成犯罪的，依法追究刑事责任。</p>
            <p class="fixed">&nbsp;&nbsp;&nbsp;&nbsp;八、2019年11月1日到2020年12月31日开展专项整治，全面清理城区不文明养犬问题。</p>
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
    name: 'fedDetail',
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