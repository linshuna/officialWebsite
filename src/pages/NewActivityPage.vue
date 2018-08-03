<template>
  <div>
    <el-container class="main">
      <el-header height="auto">
        <base-top-header></base-top-header>
      </el-header>
      <base-header activeIndex='7'></base-header>
    </el-container>
    <div class="new-wrap">
      <div class="inner-wrap">
        <!--<template v-for="item in activityLatestList">
          <new-activity :activityMsg="activityLatestList"></new-activity>
        </template>-->
        <new-activity :activityMsg="activityLatestList"></new-activity>
      </div>
      
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
   import { 
    activityLatest,//最新活动
  } from '@/utils/api.js'
  export default {
    data(){
      return {
        date: new Date(),
        activityLatestList: {}
      }
    },
    components:{
      'base-top-header': BaseTopHeader,
      'base-footer':BaseFooter,
      'new-activity': NewActivity,
      'base-header':BaseHeader
    },
    mounted() {
      this.init()
    },
    methods:{
      init: function(){
        activityLatest().then(res => {
          this.activityLatestList = res;
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .new-wrap{
    padding-top: 30px;
    width: 100%;
    background: #fff;
  }
  .new-activity-wrap{
    padding: 10px 0;
    margin-bottom: 20px;
  }
</style>