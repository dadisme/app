<template>
  <div>
    <van-tabbar route active-color="#07c160">
      <van-tabbar-item
        to="/"
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
        to="/Notice"
        icon="comment-circle-o"
      >
        公告
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
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
