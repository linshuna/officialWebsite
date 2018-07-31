<template>
  <div class="commond-wrap">
    <el-container>
      <el-aside width="200px">
        <img src="../assets/images/特惠背景.png" alt="广告图片" width="200px" height="120px"/>
      </el-aside>
      <el-main>
        <div class="set-recommend-title">
          <span>越秀洗车房</span>
          <img src="../assets/images/navigation-icon.png"/>
        </div>
        <div class="startCommond">
          <span>评价：</span>
          <el-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
        <p>营业时间：09:00-20:00</p>
        <p>地址：越秀区</p>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  export default { 
    data(){
      return {
        value5: 3.7
      }
    }
  }
</script>

<style lang="scss" scoped>
  .commond-wrap{
    .el-main{
      padding: 0 20px;
    }
  }
  .el-rate{
    display: inline-block;
  }
  .set-recommend-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    span{
      display: flex;
      align-items: center;
    }
    img{
      display: flex;
      align-items: end;
      width: 25px;
    }
  }
  .startCommond{
    span{
      vertical-align: middle;
    }
  }

</style>