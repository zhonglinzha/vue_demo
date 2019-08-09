<template>
  <div>
    {{message}}
    <Menu  ref='menu'/>
  </div>
</template>

<script>
const chalk = require('chalk');
import Menu from './Menu.vue';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

  export default {
    name: "Login",
    components: {
      Menu
    },
    data() {
      return {
        message: 1,
      };
    },
    methods: {},
    mounted(){
      console.log(this.$el);
      // NProgress.start();
      // NProgress.set(0.4)
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
 
</style>
