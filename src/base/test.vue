<template>
    <div>
        {{propE.a}}
    </div>
</template>
<script>
export default {
  name: 'test',
  props: {
      propE: {
          type: Object,
          default: {}
      }
  },
  data () {
    return {
        b : 2
    }
  },
  mounted(){
      console.log(this.propE);
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