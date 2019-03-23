<template>
  <div class="FooterNav">
    <ul class="footernav">
        <!-- <li :class="className" @click="torouter($event)"> -->
            <router-link to="/home">
                <i class="iconfont" >&#xe601;</i>
                <p>首页</p> 
            </router-link>
        <!-- </li> -->
        <!-- <li :class="className" @click="torouter($event)"> -->
            <router-link to="/find">
                <i class="iconfont" >&#xe717;</i>
                <p>发现</p> 
            </router-link>
        <!-- </li> -->
        <!-- <li :class="className" @click="torouter($event)"> -->
            <router-link to="order">
                <i class="iconfont" >&#xe65d;</i>
                <p>订单</p> 
            </router-link>
        <!-- </li> -->
        <!-- <li :class="className" @click="torouter($event)"> -->
            <router-link to="user">
                <i class="iconfont" >&#xe600;</i>
                <p>我的</p> 
            </router-link>
        <!-- </li> -->
    </ul>
  </div>
</template>

<script>
// import '../../config/index.js'
// import func from './vue-temp/vue-editor-bridge.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      className:''
    }
  },
  created(){
    //   this.getdata()
    //   this.getdate()
  },
  methods:{
      getdata(){
            this.$axios.post('/api/wechat_qcs/qcs_product_index_list',{

            }).then(function(res){
            console.log(1)
            console.log(res)
            }).catch(function(err){
            console.log(err)
            })
      },
      getdate(){
          this.$axios({
              method:'post',
              url:'/api/wechat_qcs/qcs_product_index_list',
              data:{

              }
          })
      },
      torouter(e){
        
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.router-link-active{
    color: #d81e06;
}
.footernav{
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    a{
        padding:  .1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
}
</style>
