<template>
  <div>
    <el-container class="main">
      <el-header height="auto">
        <base-top-header></base-top-header>
      </el-header>
    </el-container>
    <base-header  activeIndex='3'></base-header>
    <div class="server-store-wrap">
      <el-container>
        <el-main>
          <el-container class="store-detail-wrap">
            <el-aside width="200px">
              <img alt="图片" src="../assets/images/特惠背景.png" width="200px" height="200px"/>
            </el-aside>
            <el-main>
              <p>越秀洗车房</p>
              <p>8:00-23:00</p>
              <p>电话：1380013800</p>
              <p>地址：越秀区</p>
              <div>
                <button>预约</button>
              </div>
            </el-main>
          </el-container>
        </el-main>
        <el-aside width="450px">
          <div id="container" ref="container"></div>
          
        </el-aside>
      </el-container>
    </div>
    <div class="store-detail-main">
      <el-tabs>
        <el-tab-pane label="门店服务">门店服务</el-tab-pane>
        <el-tab-pane label="门店评价">门店评价</el-tab-pane>
      </el-tabs>
    </div>
    <base-footer></base-footer>
  </div>
</template>
<script>
  //顶部
  import BaseTopHeader from '@/components/BaseTopHeader'
  //头部
  import BaseHeader from '@/components/BaseHeader'
  //底部
  import BaseFooter from "@/components/BaseFooter"
  //评价
  import Commond from '@/components/Commond'
  export default {
    data(){
      return {}
    },
    components:{
      'base-top-header': BaseTopHeader,
      'base-footer':BaseFooter,
      'base-header':BaseHeader
    },
    mounted() {
      this.$nextTick(()=>{
        let container = this.$refs.container
        var center = new qq.maps.LatLng(38.81987,115.49425);
        var map = new qq.maps.Map(container,{
            center: center,
            zoom: 8
        });

        var marker = new qq.maps.Marker({
               map:map,
               position: center
           });     


      })
    },
  }
</script>
<style lang="scss" scoped>
  .server-store-wrap{
    margin-top: 20px;
    .el-main{
      padding: 0 20px;
    }
  }
  #container{
    height: 200px;
  }
  .commond-wrap{
    margin:8px 0;
  }
  .store-detail-wrap{
    position: relative;
    
    p{
      text-align: left;
      line-height: 30px;
      font-size: 18px;
    }
    button{
      width:160px;
      color: #fff;
      font-size: 16px;
      height: 35px;
      background: #fa9e15;
      border: none;
      position: absolute;
      left: 50%;
      bottom: 0;
      tranfrom:translate(-50%,0);
    }
  }
  .store-detail-main{
    margin-top: 20px;
  }
</style>
<style>
  .store-detail-main .el-tabs__nav{
    width:100%;
  }
  .store-detail-main .el-tabs__item{
    width:50%;
  }
  .store-detail-main .el-tabs__active-bar{
    display: none;
  }
</style>