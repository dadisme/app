<template>
    <div>
        <van-nav-bar
            title="报名活动"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            fixed
        />
        <div class="content" v-for="(item,i) in data" :key="i">
            <van-cell :title="item.title" is-link @click="detail(i)" class="cell"/>
        </div>
    </div>
</template>
<script>
import { seeActivity } from '@/api/api';
import { Toast } from 'vant';
export default {
    name: 'seeActivity',
    data() {
        return {
            data: ''
        }
    },
    mounted() {
        this.list();
    },
    methods:{
        onClickLeft() {
            this.$router.back();
        },
        list() {
            seeActivity({username: this.$store.state.username})
                .then(res=>{
                    this.data = res.data;
                })
                .catch(err=>{
                    Toast.fail(err);
                })
        },
        detail(i) {
            this.$router.push({
                name: 'activity',
                query: {
                    title: this.data[i].title
                }
            })
        }
    }
}
</script>
<style scoped>
.content{
  background-color: #DFE1E6;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 46px;
}
.cell{
    text-align: left;
}
</style>