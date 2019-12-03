<template>
  <div>
    <!-- 标题栏 -->
    <van-nav-bar
      title="公告"
      fixed
    />
    <div class="content">
      <ul>
        <li>
          <router-link to="/Notice/noticeMessage">
            <img src="../../assets/img/gg/property.jpg">
            <p>物业缴费提醒</p>
          </router-link>         
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity',
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
  top: -14px;
}
ul{
  margin: 46px 12px 50px 12px;
  padding-bottom: 1px;
  padding-top: 20px;
  li{
    background-color: #fff;
    width: 100%;
    height: 300px;
    margin-bottom: 12px;
    img{
      width: 100%;
      height: 85%;
    }
    p{
      font-size: 26px;
      font-weight: 600;
      margin-top: 0;
      color: #2c3e50;
    }
  }
}
</style>
