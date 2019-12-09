<template>
    <transition name="slide">
        <div class="login">
            <h1>登陆</h1>
            <van-cell-group class="login-from">
                <van-field v-model="userName" clearable border label="姓名" placeholder="请输入您的真实姓名" :error-message="userNameErr" />
                <van-field v-model="password" clearable border type="password" label="密码" placeholder="请输入密码" :error-message="passwordErr" />
                <div class="repairs">
                    <router-link to="/Reset">忘记密码？</router-link>
                </div>
                <van-cell>
                    <van-row>
                        <van-col span="12" class="btn">
                            <van-button type="primary" size="small" @click="login" :loading="loading">登陆</van-button>
                        </van-col>
                        <van-col span="12" class="btn">
                            <van-button type="default" size="small" to="/Register">注册</van-button>
                        </van-col>
                    </van-row>
                </van-cell>
            </van-cell-group>
        </div>
  </transition>
</template>
<script>
import { nameCheck, pwdCheck } from '@/util/util';
import { login } from '@/api/api';
export default {
    data() {
        return {
            userName: '',
            password: '',
            userNameErr: '',
            passwordErr: '',
            loading: false,
            redirect: this.$route.query.redirect
        }
    },
    mounted() {
            console.log(this.$route);
            if (this.redirect) {
                Toast({
                    position: 'bottom',
                    message: '未登录或登陆过期，请重新登陆~'
                });
            }
        },
    methods: {
        login() {
            this.userNameErr = '';
            this.passwordErr = '';
            this.loading = true;
            if (!nameCheck(this.userName)) {
                this.userNameErr = '姓名格式不正确';
                this.loading = false;
                return;
            }
            if (!pwdCheck(this.password)) {
                this.passwordErr = '密码格式不正确';
                this.loading = false;
                return;
            }
            login({ userName: this.userName, password: (this.password).toString() })
                .then(res => {
                if (res.status === 200) {
                    this.loading = false;
                    this.$router.push({
                    name: 'Mine',
                    query: {
                        id: this.userName
                    }
                })
                } else {
                    this.loading = false;
                    Toast.fail(res.msg);
                }
                })
                .catch(error => {
                Toast.fail(error);
                this.loading = false;
                });
        }
        // reg() {
        // this.$router.push('/reg');
        // }
    }
}
</script>
<style scoped lang="scss">
.login{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    background: url('../../assets/img/login/bgpL.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}
h1{
    margin-top: 40%;
}
.login-from{
    width: 80%;
    text-align: center;
    padding: 10px;
    margin: 0 auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19);
    .repairs{
        font-size: 12px;
        text-align: right;
        color: blue;
    }
}
.btn{
    text-align: center;
    margin-top: 10px;
}
.slide-enter-active, .slide-leave-active{
    transition: all 0.5s;
}
.slide-enter, .slide-leave-to{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

</style>