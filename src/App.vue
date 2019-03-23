<template>
  <div id="app">
    <router-view/>
    <!-- <FooterNav/> -->
  </div>
</template>

<script>
import {getdata} from './api/service'
import { Script } from 'vm';
import JQ from '../static/js/jquery.min.js';
import FooterNav from './components/footernav'
export default {
    name: 'App',
    data(){
        return{
            reponseData:'',
            datas:{}
        }
    },
    created(){
        // this.getdata('/api/plate/list_prize','POST',{})
        // this.getpro()
    },
    computed:{
        
    },
    methods:{
        getdata(url,type,obj,box){
            JQ.ajax({
                type:type,
                datatype:'JSON',
                url:url,
                data:obj,
                success:function(res){
                    console.log(res)
                },
                error:function(error){
                    console.log(error)
                }
            })
        },
        getpro(){
            var url=this.HOST+'/plate/list_prize'
            this.$axios.post(url,{

            })
            .then(res=>{
                console.log((res.data))
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    components:{
        FooterNav,
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px;x */
}
@font-face {
  font-family: 'iconfont';  /* project id 1103305 */
  src: url('//at.alicdn.com/t/font_1103305_xcgp1zmobkc.eot');
  src: url('//at.alicdn.com/t/font_1103305_xcgp1zmobkc.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1103305_xcgp1zmobkc.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1103305_xcgp1zmobkc.woff') format('woff'),
  url('//at.alicdn.com/t/font_1103305_xcgp1zmobkc.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1103305_xcgp1zmobkc.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>
