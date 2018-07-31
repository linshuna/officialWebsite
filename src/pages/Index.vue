<template>
  <div>
    <el-container class="main">
      <el-header height="auto">
        <base-top-header></base-top-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <p class="asideTitle">自助保养</p>
          <img alt="图片" src="../assets/images/特惠背景.png" width="180px" height="80px"/>
          <el-input v-model="carplate" placeholder="请输入厂牌"></el-input>
          <el-input v-model="carmodule" placeholder="请输入车牌"></el-input>
          <el-input v-model="carnat" placeholder="请输入车系"></el-input>
          <el-button type="primary">立即体验</el-button>
        </el-aside>
        <el-main>
          <base-header activeIndex='1'></base-header>
          <!--轮播图-->
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        
        </el-main>
      </el-container>
    </el-container>
    
    <div class="new-activity">
      <h1>最新活动</h1>
      <new-activity :gainDate="new Date()"></new-activity>
    </div>
    <div class="car-server">
      <h1>汽车服务</h1>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/特惠背景.png" alt="广告图片" width="200px" height="200px"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/特惠背景.png" alt="广告图片"  width="200px" height="200px"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/特惠背景.png" alt="广告图片" width="200px" height="200px"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/特惠背景.png" alt="广告图片"  width="200px" height="200px"/>
          </div>
        </el-col>
      </el-row>
     
    </div>
    <div class="about-us">
      <h1>关于我们</h1>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="公司简介" name="first">
          <el-container>
            <el-aside width="300px">
              <img src="../assets/images/特惠背景.png" alt="广告图片" width="250px" height="250px"/>
            </el-aside>
            <el-main>公司简介</el-main>
          </el-container>
        </el-tab-pane>
        <el-tab-pane label="保养资讯" name="second">保养资讯</el-tab-pane>
        <el-tab-pane label="企业文化" name="third">企业文化</el-tab-pane>
      </el-tabs>
      <el-container class="laster-new">
        <el-main>
          <el-row>
            <el-col :span="3"><img src="../assets/images/特惠背景.png" alt="广告图片"  height="60px"/></el-col>
            <el-col :span="21">
              <div class="grid-content bg-purple-dark">
                发动机阿里看风景的肯德基法兰克打扫房间发动机阿里看风景的肯德基法兰克打扫房间</br>
                发动机阿里看风景的肯德基法兰克打扫房间发动机阿里看风景的肯德基法兰克打扫房间</br>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3"><img src="../assets/images/特惠背景.png" alt="广告图片"  height="60px"/></el-col>
            <el-col :span="21">
              <div class="grid-content bg-purple-dark">
                发动机阿里看风景的肯德基法兰克打扫房间发动机阿里看风景的肯德基法兰克打扫房间</br>
                发动机阿里看风景的肯德基法兰克打扫房间发动机阿里看风景的肯德基法兰克打扫房间</br>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3"><img src="../assets/images/特惠背景.png" alt="广告图片"  height="60px"/></el-col>
            <el-col :span="21">
              <div class="grid-content bg-purple-dark">
                发动机阿里看风景的肯德基法兰克打扫房间发动机阿里看风景的肯德基法兰克打扫房间</br>
                发动机阿里看风景的肯德基法兰克打扫房间发动机阿里看风景的肯德基法兰克打扫房间</br>
              </div>
            </el-col>
          </el-row>
        </el-main>
        <el-aside width="200px">
          <img src="../assets/images/特惠背景.png" alt="广告图片" width="200px" height="200px"/>
          <p class="lastFont">头条</p>
        </el-aside>
      </el-container>
      
      
    </div>
    <div class="recommend-store-wrap">
      <h1>推荐门店</h1>
      <el-container class="recommend-store">
        <el-aside width="200px">
            <img src="../assets/images/特惠背景.png" alt="广告图片" width="200px" height="260px"/>
        </el-aside>
        <el-main>
          <el-row :gutter="16">
            <el-col :span="12">
              <commond></commond>
            </el-col>
            <el-col :span="12">
              <commond></commond>
            </el-col>
          </el-row>
          <el-row :gutter="16">
            <el-col :span="12">
              <commond></commond>
            </el-col>
            <el-col :span="12">
              <commond></commond>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    
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
  //评价
  import scrollStar from "@/components/scrollStar"
  import Commond from '@/components/Commond'
  export default {
    
    data() {
      return {
        
        carplate:'',
        carmodule: '',
        carnat: '',
        
        activeName: 'first',
      };

    },
    components:{
      'base-top-header': BaseTopHeader,
      'base-footer':BaseFooter,
      'new-activity': NewActivity,
      'scroll-star': scrollStar,
      'base-header':BaseHeader,
      'commond': Commond
    },
    
    methods: {
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      
      handleClick(tab, event) {//tab切换
        console.log(tab, event);
      }
    }
  }
</script>
<style lang="scss" scoped>
  $border-color: #dcdcdc;
  .main{
    .el-input{
      margin: 10px 0;
    } 
    .el-main{
      padding: 0;
    }
    .el-aside{
      padding: 10px;
      box-sizing: border-box;
      border: 1px solid #f4f4f4;
      box-sizing: border-box;
      overflow: hidden;
    }
    
  }
  
  .asideTitle{
    text-align: center;
    margin-bottom: 10px;
  }
  h1{
    font-size: 18px;
    font-weight: 300;
    text-align: left;
    padding: 6px 0 6px 20px;
  }
//  下拉菜单样式
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .new-activity{
    margin-top: 30px;
  }

  .car-server{
    margin-top: 30px;
    .el-row{
      margin-top: 20px;
    }
    h1{
      border-bottom: 1px solid $border-color;
    }
    .grid-content{
      overflow: hidden;
      width:200px;
      text-align: center;
      margin: 0 auto;
    }
    .grid-content img{
      transition: all 1s linear;
    }
    .grid-content img:hover{
      transform: scale(1.2);
      transition: all 1s linear;
    }
  }

  //关于我们的样式
  .about-us{
    margin-top: 30px;
    padding-right: 30px;
    .el-aside{
      border: none;
    } 
  }
  .laster-new{
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
    vertical-align: middle;
    margin-top: 30px;
    
    .el-row{
      margin-bottom:20px;
    }
    .lastFont{
      text-align: center;
      margin-top: 10px;
    }
  }
  //推荐门店
  .recommend-store-wrap{
    h1{
      border-bottom: 1px solid $border-color;
    }
  }
  .recommend-store{
    margin-top: 20px;
    padding-left: 10px;
    box-sizing: border-box;
    .el-main{
      text-align: left;
      padding:0 20px;
      box-sizing: border-box;
      p{
        line-height: 24px;
      }
    }
  }
  
</style>
<style>
  .about-us .el-tabs__nav{
    float: right!important;
  }  

</style>