import axios from 'axios'
import qs from 'qs'

var instance =axios.create({
    baseURL: 'https://api-mm.qiaocat.com',
    timeout:6000,
})

// 请求拦截器
instance.interceptors.request.use(function(config){
    // app.$vux.loading.show({

    // })

    return config
},function(error){
    return Promise.reject(error)
})
// 相应拦截器
instance.interceptors.request.use(res=>{

    return res.data
},error=>{
    return Promise.rejrct(error)
})

/**
 * 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
 * 函数的参数及返回值如下：
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
export default function(method,url,data=null){
    method=method.toLowerCase();
    if(method=='post'){
        return instance.post(url,data)
    }else if(method=="get"){
        return instance.get(url,{params:data})
    }else if(method=='delete'){
        return instance.delete(url,{params:data}) 
    }else if(method=='put'){
        return instance.put(url,data)
    }else{
        console.log('未知的method'+method)
        return false
    }
}
