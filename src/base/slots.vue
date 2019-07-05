<template>
    <div class="child">
        <!-- <slot name="up"></slot> -->
        <h3>这里是子组件</h3>
        <!-- <slot></slot> -->
        <slot :data="data">
        </slot>
    </div>
</template>
<script>
export default {
  name: 'slots',
  data () {
    return {
      str: 'h3232311',
      data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba',
             'zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba',
             'zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba',
             'zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba',
             'zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba',
             'zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba',
             'zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba',
             'zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba',
             'zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba',
             'zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
    }
  },
  mounted(){
    // console.log(this);
  },
  methods: {
    getTest(){
      // console.log(this);
    }
  }
  }
</script>
<style lang="sass">
div {
  color: red;
}
</style>