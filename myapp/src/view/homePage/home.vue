<template>
  <div>
    <!-- 标题栏 -->
    <van-nav-bar
      title="首页"
      fixed
    />
    <div class="content">
      <div class="index-swiper">
        <van-swipe class="swiper" vertical :autoplay="3000">
          <van-swipe-item @click="detail('aboutPublic')"><img src="../../assets/img/sy/xq.jpg"></van-swipe-item>
          <van-swipe-item @click="detail('fedDetail')"><img src="../../assets/img/sy/gou.jpg"></van-swipe-item>
          <van-swipe-item @click="detail('rubushDetail')"><img src="../../assets/img/sy/rubush.jpeg"></van-swipe-item>
        </van-swipe>
      </div>
      <van-grid class="index-icon">
        <van-grid-item icon="star-o" text="水费" class="star-o" to="/waterRate" />
        <van-grid-item icon="bulb-o" text="电费" class="bulb-o" to="/electricRate" />
        <van-grid-item icon="fire-o" text="气费" class="fire-o" to="/gasRate" />
        <van-grid-item icon="smile-o" text="物业费" class="smile-o" to="/propertyRate" />
        <van-grid-item icon="replay" text="报修申请" class="replay" to="/repairsApply" />
        <van-grid-item icon="friends-o" text="家政管理" class="friends-o" to="/houseManager" />
        <van-grid-item icon="comment-circle-o" text="公告" to="/Notice" class="comment-circle-o" />
        <van-grid-item icon="plus" text="更多" to="/Life"/>
      </van-grid>
      <div class="index-board">
        <span>小区活动</span>
        <ul>
          <li @click="activity(i)" v-for="(item,i) in data" :key="i">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { activityPage } from '@/api/api';
import { Toast } from 'vant';
export default {
  name: 'Home',
  data () {
    return {
      data: ''
    }
  },
  created() {
    this.list();
  },
  methods: {
    list() {
      activityPage()
      .then(res=>{
          this.data = res.data;
      })
      .catch(err=>{
          Toast.fail(err);
      })
    },
    detail(way) {
      this.$router.push({
        name: way,
      })
    },
    activity(i) {
      this.$router.push({
        name: 'activity',
        query: {
          title: this.data[i].title,
        }
      })
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
.index-swiper{
  margin-top: 60px;
  .swiper{
    height: 245px;
    width: 100%;
  }
}
img{
  width: 100%;
  height: 245px;
}
.index-icon{
  margin: 12px 0;
}
.star-o{
  color: #1400ff;
}
.bulb-o{
  color: #e66120;
}
.fire-o{
  color: #e2110c;
}
.smile-o{
  color: #e1e104;
}
.replay{
  color: #ea8d50;
}
.friends-o{
  color: #1fc461;
}
.comment-circle-o{
  color: #07c160;
}
.index-board{
  text-align: left;
  margin-bottom: 50px;
  span{
    width: 100%;
    font-weight: 600;
  }
  ul{
    padding-bottom: 1px;
    li{
      width: 100%;
      height: 100px;
      background-color: #fff;
      margin-bottom: 12px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      span{
        font-size: 20px;
        font-weight: 400;
        margin: 0 24px;
        }
      }
  }
}
</style>
