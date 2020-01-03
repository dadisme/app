<template>
    <div>
        <van-nav-bar
            title="小区介绍"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            fixed
        />
        <div class="content">
            <div class="message">
                <p class="title">旌城上品</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;旌城上品是xx集团旗下高端人文地产系示范项目。魅力城历时5年倾力打磨，1.2.3期已全实景呈现，成就青羊片区高尚生活坐标。旌城上品作为万兴献礼黄河的代表作，不惜斥巨资打造项目豪宅级的全能生活居住配套，旌城上品自身不仅拥有一万余平米的独立商业配套，含近5000㎡的酒店及英伦风情开放式漫游街区。潜心研究舒居户型再加上超强配套，穿堂风设计，超大入户花园、彰显华府生活尺度的阔绰客厅、随享步入式衣帽间及阔尺飘窗的奢华主卧、关怀到细节的独立储藏室……全面刷新高层住宅的居住标准。旌城一品高层采用点式大尺度围合布局，最大楼间距达到195余米，通透性极强。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;旌城上品作为万兴献礼黄河的代表作，不惜斥巨资打造项目豪宅级的全能生活居住配套，旌城上品自身不仅拥有一万余平米的独立商业配套，含近5000㎡的酒店及英伦风情开放式漫游街区。更配备15000㎡中央景观、超阔泳池、网球场，双层地下车库，底层架空层还含有乒乓球区、亲子游戏区、健身设备区，真正把愉悦的生活还给每一个人和每一个家庭。潜心研究舒居户型再加上超强配套，穿堂风设计，超大入户花园、彰显华府生活尺度的阔绰客厅、随享步入式衣帽间及阔尺飘窗的奢华主卧、关怀到细节的独立储藏室……</p>
                <van-row class="single">
                    <van-col span="12">物业类别：住宅</van-col>
                    <van-col span="12">建筑类别板楼：多层</van-col>
                </van-row>
                <van-row class="single">
                    <van-col span="12">环线位置：三环外</van-col>
                    <van-col span="12">容积率：4.50</van-col>
                </van-row>
                <van-row class="single">
                    <van-col span="12">所属商圈：光华</van-col>
                    <van-col span="12">绿化率：36%</van-col>
                </van-row>
                <van-row class="single">
                    <van-col span="12">物业地址：青羊xx号</van-col>
                    <van-col span="12">物业费：1.60元/平方米·月</van-col>
                </van-row>
                <van-row class="single">
                    <van-col span="12">周边配套：xx市场</van-col>
                    <van-col span="12">周边医院：xx医院</van-col>
                </van-row>
                <van-row class="single">
                    <van-col span="12">装修状况：毛坯</van-col>
                    <van-col span="12">房价走势：14170元/平米</van-col>
                </van-row>
                <p></p>
                <van-row class="single">
                    <van-col span=24>交通状况：32A、89路公交车在xx站下车；407路、523路、309路、78路、32路公交车在立交下车。地铁在小区外只需走十分钟即可到达四号线。</van-col>
                </van-row>
                <p class="last">欢迎各位业主入住。</p>
                <img src="../../assets/img/xq/xq.jpg">
                <p class="xq">旌城上品物业部门</p>
                <p class="time">2013年12月20日</p>
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
<style scoped lang="scss">
.content{
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: -20px;
}
.message{
    margin: 0 12px 12px 12px;
    text-align: left;
    .title{
        font-size: 30px;
        font-weight: 600;
        text-align: center;
    }
    img{
        margin: 12px 0;
        width: 100%;
    }
    .last{
        font-size: 24px;
    }
    .xq, .time{
        text-align: right;
    }
}
p{
    letter-spacing: 4px;
    font-size: 17px;
}
.single{
    font-size: 16px;
}
</style>