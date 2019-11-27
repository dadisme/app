<template>
    <div>
        <p @click="boundMine">login</p>   
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: 'nono'
        }
    },
    methods: {
        boundMine() {
            this.$router.push({
                name: 'Mine',
                query: {
                    id: this.username
                }
            })
        }
    }
}
</script>
<style scoped>
    
</style>