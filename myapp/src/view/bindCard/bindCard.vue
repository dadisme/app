<template>
    <div>
        <van-nav-bar
            title="我的银行卡"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                <van-collapse v-model="activeNames">
                    <van-collapse-item title="我的银行卡" name="1">
                        <p v-if="data.card1">{{data.card1}}<span @click="deleteCrad('1')" class="right"><van-icon name="cross" /></span></p>
                        <p v-if="data.card2">{{data.card2}}<span @click="deleteCrad('2')" class="right"><van-icon name="cross" /></span></p>
                        <p v-if="data.card3">{{data.card3}}<span @click="deleteCrad('3')" class="right"><van-icon name="cross" /></span></p>
                    </van-collapse-item>
                </van-collapse>
                <van-button size="large" class="addCard" to="/bindCard/addCard">新增</van-button>
            </div>
        </div> 
    </div>
</template>
<script>
import { bindCard,deleteCard } from '@/api/api';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
    data() {
        return {
        activeNames: ['1'],
        data: ''
        };
    },
    mounted() {
        this.list();
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        list() {
            bindCard({username: this.$store.state.username})
                .then(res => {
                    this.data = res.data[0];
                })
                .catch(err => {
                    Toast.fail(err);
                })
        },
        deleteCrad(index) {
            Dialog.confirm({
                title: '提示',
                message: `确认解除绑定银行卡${index}吗??`
            }).then(() => {
                // on confirm
                let params = {
                    username: this.$store.state.username,
                    index: index
                };
                deleteCard(params)
                    .then(res => {
                        Toast.fail(res.msg);
                        this.list();
                    })
                    .catch(err => {
                        Toast.fail(err);
                    })
            }).catch(() => {
                // on cancel
            });
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
.right{
    float: right;
}
</style>