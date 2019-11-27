<template>
  <div>
    <!-- 标题栏 -->
    <van-nav-bar
      title="我的"
      fixed
    />
    <!-- 登陆显示栏 -->
    <div class="column-login">
      <span class="w">
        <router-link to="/Login">{{userName}}</router-link>
      </span>
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
.w{
  margin: 0 12px;
}
.column-login{
  width: 100%;
  height: 80px;
  background-color: #07c160;
  text-align: left;
  top: -14px;
  position: relative;
  left: 0;
  span{
    line-height: 80px;
    font-size: 20px;
    font-weight: 400;
    a{
      color: #fff;
    }
  }
}
</style>
