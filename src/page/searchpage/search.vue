<template>
    <div class="search">
        <div class="header">
            <i  class="iconfont" >&#xe65b;</i>
            <input type="text">
            <span>搜索</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'search',
    data(){
        return{
            aaa:'search',
        }
    }
    
}
</script>

<style lang="scss" scoped>
.header{
    width: 90%;
    height: 1rem;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4fcaac;
    input{
        width: 70%;
        height: .5rem
    }
    i{
        font-size: .4rem
    }
}
</style>


