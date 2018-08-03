<template>
  <div class="commond-wrap">
    <img :src="recommend.pic" alt="广告图片" width="250px" height="180px"/>
    <div class="store-container">
      <div class="set-recommend-title border-bottom-1px">
        <span>{{recommend.name}}</span>
        <img src="../assets/images/navigation-icon.png" @click="openMap(recommend.longitude,recommend.latitude,recommend.dist,recommend.address)"/>
      </div>
      <div class="startCommond">
        <span>评价：</span>
        <el-rate
          v-model="recommend.evaluateShow"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </div>
      <p>营业时间：{{recommend.storeTime}}</p>
      <p>地址：{{recommend.province}}{{recommend.dist}}{{recommend.city}}{{recommend.address}}</p>
    </div>
  </div>
</template>
<script>
  export default { 
    props: {
      recommend: {type: Object}
    },
    data(){
      return {

      }
    },
    methods:{
      openMap: function(long,lat,dist,address){
        this.map(long,lat,dist,address) 
      }
    }
  }
</script>

<style lang="scss" scoped>
  .commond-wrap{
    max-width: 250px;
    text-align: left;
    border-radius: 4px 4px 0 0;
    border: 1px solid #efefef;
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
      transform: scale(0.8);
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  

</style>