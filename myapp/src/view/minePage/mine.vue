<template>
  <div>
    <!-- 标题栏 -->
    <van-nav-bar
      title="我的"
      fixed
    />
    <!-- 登陆显示栏 -->
    <div class="content">
      <div class="column-login">
        <span class="w">
          <img src="../../assets/img/tx/tx.png">
          <router-link to="/Login">{{userName}}</router-link>
        </span>
      </div>
      <div class="user-homemess">
        <van-cell value="小区介绍" to="/Login"/>
        <van-cell value="业主信息" />
        <van-cell value="房屋信息" />
        <van-cell value="负责人信息" />
      </div>
      <div class="user-take">
        <van-cell value="修改账号" />
        <van-cell value="查看订阅" />
        <van-cell value="提出意见" />
        <van-cell value="报名活动" />
      </div>
      <div class="init">
        <van-cell value="注意" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      userName: '',
    }
  },
  created() {
    this.$route.query.id ? this.userName = this.$route.query.id:this.userName = '请登录';
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
.w{
  margin: 0 12px;
}
.column-login{
  width: 100%;
  height: 160px;
  background-color: #07c160;
  text-align: left;
  margin-top: 46px;
  span{
    line-height: 160px;
    font-size: 20px;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    img{
      width: 80px;
      height: 85px;
      border-radius: 50%;
    }
    a{
      color: #fff;
      margin-left: 12px;
    }
  }
}
.user-homemess{
  margin: 12px 0;
}
.user-take{
  margin-bottom: 12px;
}
</style>
