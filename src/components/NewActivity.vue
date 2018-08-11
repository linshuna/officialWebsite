<template>
  <div class="new-activity-wrap">
    <el-container @click.native="goNewsDetail(activityMsg.id)">
      <el-aside width="300px">
        <img :src="activityMsg.pic" alt="广告图片" width="280px" height="140px"/>
      </el-aside>
      <el-main>
        <p class="activityTitle">{{activityMsg.title}}</p>
        <div class="set-activity-font">
          {{activityMsg.desc}}        
        </div>
        <p class="activityTime">活动时间：{{activityMsg.runtime}}—{{activityMsg.outtime}}</p>
        <div class="time-wrap">
          <h2>{{activityMsg.day}}</h2>
          <h3>{{activityMsg.month}}</h3>
          <h5>{{activityMsg.year}}</h5>
        </div>
      </el-main>
    </el-container>
  
  </div>

</template>
<script>
  export default {
    props:{
      activityMsg: {type: Object}
    },
    data(){
      return{
        date: new Date(this.gainDate).getDate(),
        month: new Date(this.gainDate).getMonth()+1,
        year: new Date(this.gainDate).getFullYear(),
      }
    },
    methods:{
      goNewsDetail: function(id){
        this.$router.push({path: '/NewsDetail/'+id+"/7"});
      }
    }
  }
</script>
<style lang="scss" scoped>
  .new-activity-wrap{
    .el-main{
      text-align: left;
      padding:10px 0 10px 20px;
      box-sizing: border-box;
      position: relative;
      box-sizing: border-box;
      overflow: hidden;
      .activityTitle{
        margin-bottom: 30px;
        font-weight: 600;
        font-size: 16px;
      }
      .set-activity-font{
        width: 400px;
      }
      .activityTime{
        margin-top: 30px;
      }
    }
  }
  .time-wrap{
    min-width: 100px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0,-50%);
    border-radius: 5px;
    background: #FFEAD6;
    color: #F82501;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    h2{
      font-family: PingFangSC-Semibold;
      font-size: 36px;
      letter-spacing: 0;
    }
    h3{
      font-size: 20px;
    }
    h5{
      font-size: 18px;
    }
  }
</style>
<style>
.new-activity-wrap .el-aside img{
  max-width: 280px;
  height: 140px;
  display: inline-block;
}
      
</style>