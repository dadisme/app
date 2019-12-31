<template>
    <transition name="slide">
        <div class="login">
            <h1>修改账号</h1>
            <van-cell-group class="login-from">
                <van-field v-model="userName" clearable border label="姓名" placeholder="请输入您的真实姓名" :error-message="userNameErr" disabled/>
                <van-field v-model="userTel" clearable border label="联系方式" placeholder="请输入您小区注册的号码" :error-message="userTelErr" />
                <van-field v-model="password" clearable border type="password" label="密码" placeholder="请输入六位数字密码" :error-message="passwordErr" />
                <van-field v-model="passwordRep" clearable border type="password" label="重复密码" placeholder="请再次输入六位数字密码" :error-message="passwordRepErr" />    
                <van-cell>
                    <van-row>
                        <van-col span="12" class="btn">
                            <van-button type="primary" size="small" @click="login" :loading="loading">修改</van-button>
                        </van-col>
                        <van-col span="12" class="btn">
                            <van-button type="default" size="small" to="/Login">登录</van-button>
                        </van-col>
                    </van-row>
                </van-cell>
            </van-cell-group>
        </div>
  </transition>
</template>
<script>
import {  pwdCheck, phoneNumCheck } from '@/util/util';
import { reset } from '@/api/api';
import { Toast } from 'vant';
export default {
    data() {
        return {
            userName: '',
            userTel: '',
            password: '',
            passwordRep: '',
            userNameErr: '',
            userTelErr: '',
            passwordErr: '',
            passwordRepErr: '',
            loading: false,
            redirect: this.$route.query.redirect
        }
    },
    mounted() {
        this.userName = this.$store.state.username;
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
            this.userTelErr = '';
            this.passwordErr = '';
            this.passwordRepErr = '';
            this.loading = true;
            if (!phoneNumCheck(this.userTel)) {
                this.userTelErr = '电话格式不正确';
                this.loading = false;
                return;
            }
            if (!pwdCheck(this.password)) {
                this.passwordErr = '密码格式不正确';
                this.loading = false;
                return;
            }
            if (this.password !== this.passwordRep) {
                this.passwordRepErr = '两次密码不一致';
                this.loading = false;
                return;
            }
            reset({ userName: this.userName, password: this.password, userTel:this.userTel })
                .then(res => {
                    console.log(res)
                if (res.status === 200) {
                    this.loading = false;
                    Toast.success('跳转登陆界面');
                        setTimeout(() => {
                        Toast.clear();
                        this.$router.push('Login');
                        }, 1000);
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