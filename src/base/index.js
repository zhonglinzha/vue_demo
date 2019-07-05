import Vue from 'vue';
import App from './app';
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad)

Vue.directive('test', {
    bind: function(el,binding,vnode,oldVnode){
        console.log('------1-------');
    },
    inserted: function(el,binding,vnode,oldVnode){
        console.log('------2-------');
    },
    update: function(el,binding,vnode,oldVnode){
        console.log('------3-------');
    },
    componentUpdated: function(el,binding,vnode,oldVnode){
        console.log('------4-------');
    },
    unbind: function(el,binding,vnode,oldVnode){
        console.log('------5-------');
    }
});

const vm = new Vue({
    el: "#app",
    render: (h) => h(App)
})

