<template>
    <div>
        <van-nav-bar
            title="设置支付密码"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <van-cell-group class="reg-from">
                    <van-field v-model="paypwd" clearable border label="支付密码" placeholder="请输入六位支付密码" :error-message="paypwdErr" type="password"/>
                    <van-field v-model="paypwdRep" clearable border label="确认支付密码" placeholder="请再次输入六位支付密码" :error-message="paypwdRepErr" v-if="!alread" type="password"/>
                </van-cell-group>
                <van-button size="normal" v-if="alread" class="paypwd wid" @click="detail">查看</van-button>
                <van-button size="large" v-if="!alread" class="paypwd" @click="setpaypwd" :loading="loading">设置</van-button>
                <van-button size="normal" v-if="alread" class="paypwd wid" @click="reset">修改</van-button>
            </div>
        </div>
        <van-dialog
            v-model="show"
            title="提示"
            show-cancel-button
            show-confirm-button
            :beforeClose="beforeClose"
        >
            <van-field v-model="password" clearable border label="登陆密码" placeholder="请输入六位登陆密码" :error-message="passwordErr" type="password" v-if="!showPwd"/>
            <van-field v-model="paypwd" clearable border label="支付密码" :error-message="paypwdErr" v-if="showPwd"/>
        </van-dialog>
    </div>
</template>
<script>
import { pwdCheck  } from '@/util/util';
import { paypwd, paypwdDetail, login } from '@/api/api';
import { Toast } from 'vant';
export default {
    data() {
        return {
            paypwd: '',
            paypwdRep: '',
            paypwdErr: '',
            paypwdRepErr: '',
            alread: true,
            loading: false,
            data: '',
            show: false,
            showPwd: false,
            password: '',
            passwordErr: ''
        }
    },
    mounted() {
        this.list();
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        list() {
            paypwdDetail({ username: this.$store.state.username })
                .then(res => {
                    if (res.status === 200) {
                        this.data = res.data[0];
                        if(this.data.pwd == null) {
                            this.alread = false;
                        }else {
                            this.paypwd = this.data.pwd;
                            this.alread = true;
                            sessionStorage.setItem('pwd', this.data.pwd);
                            this.$store.state.pwd = sessionStorage.getItem('pwd');
                        }
                    } 
                })
                .catch(error => {
                    Toast.fail(error);
                });
        },
        setpaypwd() {
            this.paypwdErr = '';
            this.paypwdRepErr = '';
            if(this.paypwd == this.data.pwd) {
                this.paypwdErr = '修改密码与原密码一致';
                this.loading = false;
                return;
            }
            if (!pwdCheck(this.paypwd)) {
                this.paypwdErr = '密码格式不正确';
                this.loading = false;
                return;
            }
            if (this.paypwd !== this.paypwdRep) {
                this.paypwdRepErr = '两次密码不一致';
                this.loading = false;
                return;
            }
            paypwd({ username: this.$store.state.username, pwd: this.paypwd })
                .then(res => {
                if (res.status === 200) {
                    this.loading = false;
                    Toast.success(res.msg);
                    this.alread = true;
                    setTimeout(() => {
                    Toast.clear();
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
        },
        detail() {
            this.show = true;
            this.showPwd = false;
            this.password = '';
        },
        beforeClose(action, done) {
            if (action === 'confirm') {
                if (!pwdCheck(this.password)) {
                    this.passwordErr = '密码格式不正确';
                    this.loading = false;
                    return;
                }
                login({ userName: this.$store.state.username, password: this.password })
                .then(res => {
                    if (res.status === 200) {
                        this.loading = false;
                        this.showPwd = true;
                        setTimeout(done, 5000);
                        this.list();
                    } 
                })
                .catch(error => {
                    Toast.fail(error);
                    this.loading = false;
                });
            } else {
                done();
            }
        },
        reset() {
            this.paypwd = '';
            this.alread = false;
        }
    }
}
</script>
<style scoped>
.content{
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.w{
    margin: 58px 12px 0 12px;
    text-align: left;
}
.paypwd{
    color: #fff;
    background-color: #ff0000;
}
.wid{
    width: 49%;
}
</style>