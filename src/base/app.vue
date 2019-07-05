<template>
     <div class="father">
       <!-- <svg-icon name="dk"></svg-icon> -->
       <Icon name="dk" scale="20"></Icon>
        <h3 @click="change">这里是 父组件{{str}}</h3>
        <test :propE='teste'></test>
        <slots ref='sl' id='sls'>
            <template v-slot="data">
              <div class="1">
                <div v-for="(item, index) in data.data" :key='index'>{{item}}</div>
              </div>
            </template>
        </slots>
       <div>
          <img v-for="(item, index) in imgList" :key='index' v-lazy="item" width="200px;" height="200px">
       </div>
    </div>
</template>
<script>

import slots from './slots.vue';
import test from './test.vue';
// import svgIcon from './svgIcon.vue';
import Icon from 'vue-svg-icon/Icon.vue';
export default {
  components: {slots,test,Icon},
  name: 'App',
  data () {
    return {
      teste: {
        a : 1,
        c : 2,
      },
      imgList: [],
      str: 1,
      imgUrl: 'http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg',
    }
  },
  beforeCreate(){
    setTimeout(()=>{console.log('--------????')},0);
    this.$nextTick(()=>console.log('1'));
    console.log('11111111')
  },
  created(){
  },
  beforeMount(){
    setTimeout(()=>{console.log('--------11121????')},0);
  },
  mounted(){
    for(let i=0; i<100; i++){
      this.imgList.push(this.imgUrl);
    }
    // setInterval(()=>{
    //   this.str++;
    //   console.log(this.str)
    // });
  },
  beforeUpdate(){},
  updated(){},
  beforeDestroy(){},
  destroyed(){},
  methods: {
    change(){
      this.str+=1;
      // console.log(this.$el);
    }
  }
  }
</script>
<style lang="sass">
div {
  color: red;
}
</style>