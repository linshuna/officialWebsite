<template>
  <div class="commond-wrap">
    <img src="../assets/images/门店1.png" alt="广告图片" width="250px" height="180px"/>
    <div class="store-container">
      <div class="set-recommend-title border-bottom-1px">
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
    </div>
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
    max-width: 250px;
    text-align: left;
    .store-container{
      max-width: 250px;
      background: #fff;
      padding: 10px 20px;
      box-sizing: border-box;
    }
    .el-main{
      padding: 0 20px;
    }
    img{
      border-radius: 3px 3px 0 0;
    }
  }
  .el-rate{
    display: inline-block;
  }
  .set-recommend-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    line-height: 25px;
    padding-bottom: 5px;
    span{
      display: flex;
      align-items: center;
    }
    img{
      display: flex;
      align-items: end;
      width: 20px;
    }
  }
  .store-container{
    .startCommond{
      span{
        vertical-align: middle;
      }
    }
    p{
      line-height: 25px;
    }
  }
  

</style>