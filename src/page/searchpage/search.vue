<template>
    <div class="search">
        <div class="header">
            <i  class="iconfont" >&#xe65b;</i>
            <input type="text">
            <span>搜索</span>
        </div>
        <div class="histore">

        </div>
        <div class="clearHis">
            清除历史记录
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
.clearHis{
    position: fixed;
    bottom: 0;
    width: 70%;
    left: 15%;
    height: .5rem;
    line-height: .5rem;
    color: #fff;
    background-color: #4fcaac;
    text-align: center;
    z-index: 10;
}
</style>


