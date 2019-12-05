<template>
    <div>
        <van-nav-bar
            title="注意"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="content">
            <div class="w">
                
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{

        }
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
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

</style>