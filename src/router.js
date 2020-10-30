import Vue from 'vue'
import Router from 'vue-router'
import layout from './views/layout'  //引入根目录下的home.vue组件
// import login from './views/login'  //引入根目录下的study.vue组件

Vue.use(Router)

export default new Router({
    routes: [              //配置路由，这里是个数组
        {                    //每一个链接都是一个对象
            path: '/',         //链接路径
            name: 'layout',     //路由名称，
            component: layout,   //对应的组件模板
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: () => import('./views/index/index.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/login/index.vue')
        }
    ]
})
