<template>
  <div>

    <div class="inner-wrap detailCon" v-html="content"></div>

  </div>

</template>
<script>
  import {newsDetail} from '@/utils/api.js'
  import {CarOwnersVoice} from  '../utils/api.js'
  export default {
    data (){
      return {
        content: ''
      }
    },
    mounted() {
      let id = this.$route.params.id;
      newsDetail({id: id}).then(res => {
        this.content = this.$options.filters.unescape(res.content)
      })
      //获取类型
      let type = this.$route.params.activeIndex;
      this.$emit('getType',type)
    },

  }
</script>
<style lang="scss" scoped>
  .inner-wrap{
    background: #fff;
  }
  .detailCon{
    width:100%;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
<style>
  .detailCon img{
    max-width: 100%!important;
  }
</style>