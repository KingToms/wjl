import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)


const state={
    userList:[],
    httpError:{
        hasError:false,
        status:'',
        statusText:''
    }
}
const mutations={
    setUserList(state,data){
        state.userList=data
    },
    ON_HTTP_ERROR(state,payload){
        state.httpError = payload
    }
}
const action={
    commitUserList:({commit},userList)=>commit('setUserList',userList)
}
export default new Vuex.Store({
    state,
    mutations
})