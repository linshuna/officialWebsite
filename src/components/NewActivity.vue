<template>
  <div class="new-activity-wrap">
    <el-container>
      <el-aside width="300px">
        <img src="../assets/images/activityPic.png" alt="广告图片" width="280px" height="140px"/>
      </el-aside>
      <el-main>
        <p class="activityTitle">E店养车新店周庆 全场5折起</p>
        <div class="set-activity-font">
          E店养车目前开启5周年庆典活动，爆款5折抢购，并可在每日10点准时开抢各类优惠券，
          含有：5折保养券，5折轮胎券，5折车品券，100元，200元轮胎优惠券和100元保养券等，
          各类爆款等你来抢购，买买们可以关注一下～        
        </div>
        <p class="activityTime">活动时间：2018年12月12日—12月31日</p>
        <div class="time-wrap">
          <h2>{{date}}</h2>
          <h3>{{month}}月</h3>
          <h5>{{year}}</h5>
        </div>
      </el-main>
    </el-container>
  
  </div>

</template>
<script>
  export default {
    props:{
      gainDate: {type: Date}
    },
    data(){
      return{
        date: new Date(this.gainDate).getDate(),
        month: new Date(this.gainDate).getMonth()+1,
        year: new Date(this.gainDate).getFullYear(),
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
      font-size: 48px;
      letter-spacing: 0;
    }
    h3{
      font-size: 24px;
    }
    h5{
      font-size: 28px;
    }
  }
</style>