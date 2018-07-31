<template>
  <div>
    <el-container class="main">
      <el-header height="auto">
        <base-top-header></base-top-header>
      </el-header>
      <base-header activeIndex='7'></base-header>
    </el-container>
    <div class="new-wrap">
      <new-activity :gainDate="date"></new-activity>
    </div>
    
    <base-footer></base-footer>
  </div>
</template>
<script>
   //顶部
  import BaseTopHeader from '@/components/BaseTopHeader'
  //头部
  import BaseHeader from '@/components/BaseHeader'
  //最新活动组件
  import NewActivity from "@/components/NewActivity"
  //底部
  import BaseFooter from "@/components/BaseFooter"
  export default {
    data(){
      return {
        date: new Date()
      }
    },
    components:{
      'base-top-header': BaseTopHeader,
      'base-footer':BaseFooter,
      'new-activity': NewActivity,
      'base-header':BaseHeader
    },
  }
</script>
<style lang="scss" scoped>
  .new-wrap{
    margin-top: 30px;
  }
</style>