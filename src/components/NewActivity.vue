<template>
  <div class="new-activity-wrap">
    <el-container>
      <el-aside width="300px">
        <img src="../assets/images/特惠背景.png" alt="广告图片" width="280px" height="140px"/>
      </el-aside>
      <el-main>
        <p class="activityTitle">保养5折优惠</p>
        <div>
          <p>保养5折优惠</p>
          <p>保养5折优惠</p>
          <p>保养5折优惠</p>          
        </div>
        <p class="activityTime">活动时间：2018年7月30日-2018-9月1日</p>
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
    .el-container{
      background: #efefef;
    }
    .el-main{
      text-align: left;
      padding:10px 0 10px 20px;
      box-sizing: border-box;
      position: relative;
      .activityTitle{
        margin-bottom: 30px;
      }
      .activityTime{
        margin-top: 30px;
      }
    }
  }
  .time-wrap{
    width: 70px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0,-50%);
    border-radius: 5px;
    background: #545c64;
    color: #fff;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    h2{
      font-size: 30px;
    }
    h3{
      font-size: 20px;
    }
  }
</style>