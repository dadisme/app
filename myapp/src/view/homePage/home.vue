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
      <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
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

<style scoped>
.content{
  background-color: #DFE1E6;
  width: 100%;
  height: 100%;
  position: absolute;
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
</style>
