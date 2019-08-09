import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: resolve => require(['@page/Login'], resolve),
    },
    {
      path: '/menu',
      name: 'Menu',
      component: resolve => require(['@page/Menu'], resolve),
      // children: [{
      //   path: '/menu',
      //   name: 'Menu',
      //   component: resolve => require(['@/components/Menu'], resolve),
      // }]
    },
    // {
    //   path: '/userInfo',
    //   name: 'UserInfo',
    //   component: resolve => require(['@/components/UserInfo'], resolve),
    // },
    // {
    //   path: '/goods',
    //   name: 'Goods',
    //   component: resolve => require(['@/components/Goods'], resolve),
    // },
    // {
    //   path: '/broadcast',
    //   name: 'Broadcast',
    //   component: resolve => require(['@/components/Broadcast'], resolve),
    // },
    // {
    //   path: '/broadcastList',
    //   name: 'BroadcastList',
    //   component: resolve => require(['@/components/BroadcastList'], resolve),
    // },
    // {
    //   path: '/update',
    //   name: 'Update',
    //   component: resolve => require(['@/components/Update'], resolve),
    // }
  ]
})
