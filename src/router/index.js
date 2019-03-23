import vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '@/page/homepage/index'
import Mine from '@/page/userpage/index'



vue.use(Router)
const router=new Router({
    mode: 'history',
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/user',
            component:Mine
        }
    ]
})

export default router