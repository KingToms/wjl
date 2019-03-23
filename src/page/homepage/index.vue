<template>
    <div class="home">
        <button @click='getdata'>获取数据</button>
    </div>
</template>


<script>
import API from '../../api/api.js'
export default {
    name:'home',
    data(){
        return{
            aa:'www',
            newData:[],
            showdata:false,
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        getdata(){
            API.JH_news('/news/index','type=top&key=123456')
            .then(res=>{
                this.newData=res.articles;
                // console.log(this.newData)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
    
}
</script>


<style scoped>
*{
    margin: 0;
    padding: 0;
}
</style>