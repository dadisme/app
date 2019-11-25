<template>
  <div>
    <van-tabbar route active-color="#07c160">
      <van-tabbar-item
        to="/Home"
        icon="home-o"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
        to="/Life"
        icon="apps-o"
      >
        生活
      </van-tabbar-item>
      <van-tabbar-item
        to="/Activity"
        icon="comment-circle-o"
      >
        活动
      </van-tabbar-item>
      <van-tabbar-item
        to="/Mine"
        icon="user-o" 
      >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
