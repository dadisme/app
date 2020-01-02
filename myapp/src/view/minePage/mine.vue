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
          <router-link to="/Login">{{this.id||this.$store.state.username||this.userName}}</router-link>
        </span>
      </div>
      <div class="user-homemess">
        <van-cell title="小区介绍" is-link to="/aboutPublic" icon="flower-o" class="flower-o" />
        <van-cell title="业主信息" is-link to="/aboutUser" icon="user-o" class="user-o" />
        <van-cell title="房屋信息" is-link to="/aboutHouse" icon="wap-home-o" class="wap-home-o" />
        <van-cell title="负责人信息" is-link to="/aboutManager" icon="manager-o" class="manager-o" />
      </div>
      <div class="user-take">
        <van-cell title="修改账号" is-link to="/Reset" icon="brush-o" class="brush-o" />
        <van-cell title="提出意见" is-link to="/propertyComplain" icon="records" class="records" />
        <van-cell title="报名活动" is-link icon="flag-o" class="flag-o" />
        <van-cell title="绑定银行卡" is-link icon="balance-o" class="balance-o" to="/bindCard"/>
         <van-cell title="设置支付密码" is-link to="/paypwd" icon="brush-o" class="brush-o" />
      </div>
      <div class="init">
        <van-cell title="注意" is-link to="/Warning" icon="warning-o" class="warning-o" />
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
      id: ''
    }
  },
  created() {
    if(this.$route.query.id) {
      this.id = this.$route.query.id;
      this.userName = '';
      sessionStorage.setItem('name', this.id);
    }else{
      this.id = '';
      this.userName = '请登录';
    }
  },
  mounted() {
    this.$store.state.username = sessionStorage.getItem('name');
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
  top: -14px;
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
.init{
  margin-bottom: 50px;
}
.user-homemess{
  margin: 12px 0;
}
.user-take{
  margin-bottom: 12px;
}
div{
  text-align: left;
}
span{
  color: #2c3e50;
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
.warning-o{
  color: #ff0000;
}
.flag-o{
  color: #49045a;
}
.brush-o{
  color: #083268;
}
.balance-o{
  color: #ff0000;
}
</style>
