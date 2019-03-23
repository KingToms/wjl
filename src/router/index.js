import vue from 'vue'
import Router from 'vue-router'
import App from '../App'

// 首页
import Home from '@/page/homepage/index'
//搜索
import Search from '@/page/searchpage/search'
// 个人中心
import Mine from '@/page/userpage/index'
//发现
import Find from '@/page/findpage/index'
//订单
import Order from '@/page/orderpage/index'



vue.use(Router)
const router=new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            redirect:'/home'//重定向首页
        },
        //首页路由
        {
            path:'/home',
            name:'Home',
            component:Home,
        },
        //个人中心路由
        {
            path:'/user',
            component:Mine
        },
        //搜索
        {
            path:'/search',
            name:'Search',
            component:Search
        },
        //订单
        {
            path:'/order',
            name:'Order',
            component:Order
        },
        {
            path:'/find',
            name:'Find',
            component:Find
        }
    ]
})

export default router