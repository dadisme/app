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
        <van-grid-item icon="star-o" text="水费" />
        <van-grid-item icon="bulb-o" text="电费" />
        <van-grid-item icon="fire-o" text="气费" />
        <van-grid-item icon="smile-o" text="物业费" />
      </van-grid>
      <van-grid class="life-icon">
        <span>物业管理</span>
        <van-grid-item icon="replay" text="报修申请" />
        <van-grid-item icon="friends-o" text="家政管理" />
        <van-grid-item />
        <van-grid-item />
      </van-grid>
      <van-grid class="life-icon">
        <span>我的房子</span>
        <van-grid-item icon="replay" text="小区介绍" />
        <van-grid-item icon="friends-o" text="业主信息" />
        <van-grid-item icon="replay" text="房屋信息" />
        <van-grid-item icon="friends-o" text="负责人信息" />
      </van-grid>
      <van-grid class="life-icon">
        <span>精彩社区</span>
        <van-grid-item icon="replay" text="活动" />
        <van-grid-item icon="replay" text="物业投诉" />
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
  }
}
</script>

<style scoped lang="scss">
.content{
  background-color: #DFE1E6;
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
}
.life-icon{
  margin-bottom: 12px;
  text-align: left;
  span{
    font-weight: 500;
    font-size: 20px;
    width: 100%;
    background-color: #fff;
    height: 56px;
    line-height: 56px;
    padding: 0 12px;
  }
}
.life-icon:first-child{
  margin-top: 46px;
}
</style>
