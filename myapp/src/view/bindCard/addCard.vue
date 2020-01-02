<template>
    <div>
        <van-nav-bar
            title="增加绑定银行卡"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <van-cell-group class="reg-from">
                    <van-field v-model="cardNum" clearable border label="银行卡号" placeholder="请输入增加的银行卡号" :error-message="cardNumErr"/>
                    <van-field v-model="cardName" clearable border label="姓名" placeholder="请输入银行卡绑定姓名" disabled/>
                </van-cell-group>
                <van-button size="large" class="addCard" to="/bindCard/addCard" @click="addCard">添加</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import { addCard, bindCard } from '@/api/api';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
    data() {
        return {
            cardNum: '',
            cardNumErr: '',
            cardName: this.$store.state.username,
            data: ''
        }
    },
    mounted() {
        bindCard({username: this.$store.state.username})
            .then(res => {
                this.data = res.data[0];
            })
            .catch(err => {
                Toast.fail(err);
            })
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        addCard() {
            this.cardNumErr = '';
            let params = {
                username: this.$store.state.username
            };
            if(this.cardNum) {
                if(this.data.card1&&this.data.card2&&this.data.card3) {
                    Dialog.alert({
                        title: '提示',
                        message: '银行卡数量上限为三张卡!！'
                    }).then(() => {
                    // on close
                    });
                }else {
                    Dialog.confirm({
                        title: '提示',
                        message: '确认添加吗？？'
                    }).then(() => {
                    // on confirm
                        if(!this.data.card1&&!this.data.card2&&!this.data.card3) {
                            params.card1 = this.cardNum;
                        }else if(this.data.card1&&!this.data.card2&&!this.data.card3) {
                            params.card1 = this.data.card1;
                            params.card2 = this.cardNum;
                        }else if(this.data.card1&&this.data.card2&&!this.data.card3) {
                            params.card1 = this.data.card1;
                            params.card2 = this.data.card2;
                            params.card3 = this.cardNum;
                        }else if(!this.data.card1&&this.data.card2&&this.data.card3) {
                            params.card1 = this.cardNum;
                            params.card2 = this.data.card2;
                            params.card3 = this.data.card3;
                        }else if(!this.data.card1&&!this.data.card2&&this.data.card3) {
                            params.card1 = this.cardNum;
                            params.card3 = this.data.card3;
                            console.log(params.card1)
                        }else if(this.data.card1&&!this.data.card2&&this.data.card3) {
                            params.card1 = this.data.card1;
                            params.card2 = this.cardNum;
                            params.card3 = this.data.card3;
                        }else if(!this.data.card1&&this.data.card2&&!this.data.card3) {
                            params.card1 = this.cardNum;
                            params.card2 = this.data.card2;
                        }else if(!this.data.card1&&!this.data.card2&&this.data.card3) {
                            params.card1 = this.cardNum;
                            params.card3 = this.data.card3;
                        }
                        addCard(params)
                        .then(res => {
                            Toast.success(res.msg);
                            setTimeout(() => {
                                Toast.clear();
                                this.$router.push({name: 'bindCard'});
                            }, 1000);
                        })
                        .catch(err => {
                            Toast.fail(err);
                        })
                    }).catch(() => {
                    // on cancel
                    });
                }
            }else {
                this.cardNumErr = '请输入银行卡号';
            }
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
.addCard{
    color: #fff;
    background-color: #ff0000;
}
</style>