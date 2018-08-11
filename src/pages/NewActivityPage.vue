<template>
  <div>
    
    <div class="new-wrap">
      <div class="inner-wrap">
        <!-- @click.stop="goNews(item.id,item.state,item.url)"-->
        <div v-for="item in activityLatestList">
          <new-activity :activityMsg="item"></new-activity>
        </div>
      </div>
      
    </div>
    
  </div>
</template>
<script>
  //最新活动组件
  import NewActivity from "@/components/NewActivity"
   import { 
    activityIndex,//最新活动
  } from '@/utils/api.js'
  export default {
    data(){
      return {
        date: new Date(),
        activityLatestList: {}
      }
    },
    components:{
      'new-activity': NewActivity,
    },
    mounted() {
      this.init()
    },
    methods:{
      init: function(){
        activityIndex().then(res => { 
          this.activityLatestList = res.list;
        })
      },
      goNews: function(id,state,url){
        if(state==1){
          this.$router.push({path: '/NewActivityPageDetail/'+id})
        }else{
          window.location.href = url
        }
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