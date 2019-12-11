<template>
  <div>
    <!-- 标题栏 -->
    <van-nav-bar
      title="生活"
      fixed
    />
    <div class="content">
      <van-grid class="life-icon">
        <span>生活缴费</span>
        <van-grid-item icon="star-o" text="水费" class="star-o" to="/waterRate" />
        <van-grid-item icon="bulb-o" text="电费" class="bulb-o" to="/electricRate" />
        <van-grid-item icon="fire-o" text="气费" class="fire-o" to="/gasRate" />
        <van-grid-item icon="smile-o" text="物业费" class="smile-o" to="/propertyRate" />
      </van-grid>
      <van-grid class="life-icon">
        <span>物业管理</span>
        <van-grid-item icon="replay" text="报修申请" class="replay" to="/repairsApply" />
        <van-grid-item icon="friends-o" text="家政管理" class="friends-o" to="/houseManager" />
        <van-grid-item />
        <van-grid-item />
      </van-grid>
      <van-grid class="life-icon">
        <span>我的房子</span>
        <van-grid-item icon="flower-o" text="小区介绍" class="flower-o" to="/aboutPublic" />
        <van-grid-item icon="user-o" text="业主信息" class="user-o" to="/aboutUser" />
        <van-grid-item icon="wap-home-o" text="房屋信息" class="wap-home-o" to="/aboutHouse" />
        <van-grid-item icon="manager-o" text="负责人信息" class="manager-o" to="/aboutManager" />
      </van-grid>
      <van-grid class="life-icon last">
        <span>精彩社区</span>
        <van-grid-item icon="comment-circle-o" text="公告" class="comment-circle-o" to="/Notice" />
        <van-grid-item icon="records" text="物业投诉" class="records" to="/propertyComplain" />
        <van-grid-item />
        <van-grid-item />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Life',
  data () {
    return {

    }
  },
  mounted() {
    console.log(this.$store.state.username);
  }
}
</script>

<style scoped lang="scss">
.content{
  background-color: #DFE1E6;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.life-icon{
  margin-bottom: 12px;
  text-align: left;
  span{
    font-weight: 500;
    font-size: 18px;
    width: 100%;
    background-color: #fff;
    height: 52px;
    line-height: 52px;
    padding: 0 12px;
  }
}
.life-icon:first-child{
  margin-top: 46px;
}
.last{
  margin-bottom: 46px;
  padding-bottom: 1px;
}
.star-o{
  color: #1400ff;
}
.bulb-o{
  color: #e66120;
}
.fire-o{
  color: #e2110c;
}
.smile-o{
  color: #e1e104;
}
.replay{
  color: #ea8d50;
}
.friends-o{
  color: #1fc461;
}
.comment-circle-o{
  color: #07c160;
}
.manager-o{
  color: #1f69c4;
}
.wap-home-o{
  color: #a43504;
}
.user-o{
  color: #e40937;
}
.flower-o{
  color: #09e466;
}
.records{
  color: #ff0000;
}
</style>
