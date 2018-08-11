<template>
  <div>

    <div class="detail">
      <div class="inner-wrap">
        <div v-html="content"></div>
      </div>
    </div>

  </div>
</template>
<script>

   import { 
    activityDetail,//最新活动详情
  } from '@/utils/api.js'
  export default {
    data(){
      return {
        content: ''
      }
    },
    mounted() {
      let id = this.$route.params.id;
      activityDetail({id: id}).then(res => {
        this.content = this.$options.filters.unescape(res.details.content)
      })
    },
  }
</script>
<style>
  .detail img{
    display: inline-block;
    width: 100%;
  }
</style>