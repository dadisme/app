<template>
  <div>
    <!-- 标题栏 -->
    <van-nav-bar
      title="活动"
      fixed
    />
    <div class="content">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity',
  data () {
    return {

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
ul{
  margin: 0 12px 62px 12px;
  padding-bottom: 12px;
  li{
    background-color: red;
    width: 100%;
    height: 200px;
    margin-bottom: 12px;
  }
}
</style>
