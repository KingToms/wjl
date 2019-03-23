<template>
  <div class="FooterNav">
    <ul class="footernav">
        <li :class="className" @click="torouter($event)">
            <i class="iconfont" >&#xe601;</i>
            首页
        </li>
        <li :class="className" @click="torouter($event)">
            <i class="iconfont" >&#xe717;</i>
            发现
        </li>
        <li :class="className" @click="torouter($event)">
            <i class="iconfont" >&#xe65d;</i>
            订单
        </li>
        <li :class="className" @click="torouter($event)">
            <i class="iconfont" >&#xe600;</i>
            我的
        </li>
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
.active{
    color: #d81e06;
}
.footernav{
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    li{
        padding:  .1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
}
</style>
