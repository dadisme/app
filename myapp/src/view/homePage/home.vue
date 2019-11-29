<template>
  <div>
    <!-- 标题栏 -->
    <van-nav-bar
      title="首页"
      fixed
    />
    <div class="content">
      <van-swipe class="swiper" vertical :autoplay="3000">
        <van-swipe-item><img src="../../img/sy/xq.jpg"></van-swipe-item>
        <van-swipe-item><img src="../../img/sy/gou.jpg"></van-swipe-item>
        <van-swipe-item><img src="../../img/sy/rubush.jpeg"></van-swipe-item>
      </van-swipe>
      <van-grid class="index-icon">
        <van-grid-item icon="star-o" text="水费" />
        <van-grid-item icon="bulb-o" text="电费" />
        <van-grid-item icon="fire-o" text="气费" />
        <van-grid-item icon="smile-o" text="物业费" />
        <van-grid-item icon="replay" text="报修申请" />
        <van-grid-item icon="friends-o" text="家政管理" />
        <van-grid-item icon="comment-circle-o" text="活动" to="/Activity"/>
        <van-grid-item icon="plus" text="更多" to="/Life"/>
      </van-grid>
      <div class="index-board">
      <span>小区公告</span>
      <ul>
        <li>
          <span>关于双十一快递</span>
        </li>
        <li>
          <span>关于双十一快递关于双十一快递关于双十一快递</span>
        </li>
        <li>
          <span>关于双十一快递</span>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  created() {

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
.swiper{
  margin-top: 46px;
  height: 245px;
  width: 100%;
}
img{
  width: 100%;
  height: 245px;
}
.index-icon{
  margin: 12px 0;
}
.index-board{
  text-align: left;
  margin-bottom: 62px;
  span{
    width: 100%;
    font-weight: 600;
  }
  ul{
    li{
      width: 100%;
      height: 100px;
      background-color: #fff;
      margin-bottom: 12px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      span{
        font-size: 20px;
        font-weight: 400;
        margin: 0 24px;
        }
      }
  }
}
</style>
