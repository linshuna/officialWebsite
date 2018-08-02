<template>
  <div>
    <el-container class="main">
      <el-header height="auto">
        <base-top-header></base-top-header>
      </el-header>
      <div class="main-banner">
        <div class="main-banner-bg"></div>
        <el-container class="inner-wrap">
          <el-aside width="200px">
            <p class="asideTitle">自助保养</p>
            <img alt="图片" src="../assets/images/特惠背景.png" width="180px" height="80px"/>
            <el-input v-model="carplate" placeholder="请输入厂牌" @focus="checked=true"></el-input>
            <el-input v-model="carmodule" placeholder="请输入车牌" @focus="checked=true"></el-input>
            <el-input v-model="carnat" placeholder="请输入车系" @focus="checked=true"></el-input>
            <el-button type="primary">立即体验</el-button>
          </el-aside>
          <el-main>
            <base-header activeIndex='1'></base-header>
            <!--轮播图-->
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="(item,index) in 4" :key="item">
                <img src="../assets/images/banner.png" alt="轮播图"/>
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          
          </el-main>
        </el-container>
      </div>
      
      
      
    </el-container>
    <div class="set-main-bg">
      <div class="inner-wrap">
        <div class="new-activity">
          <h1>最新活动</h1>
          <new-activity :gainDate="new Date()"></new-activity>
        </div>
      </div>
    </div>
    <div class="inner-wrap">
      <div class="car-server">
          <h1>汽车服务</h1>
          <el-container>
            <el-aside width="230">
              <img src="../assets/images/汽车服务.png" alt="广告图片" width="230px" height="410px"/>
            </el-aside>
            <el-main>
              <el-row :gutter="22">
                <el-col :span="6">
                  <div class="car-server-tip">
                    <p class="server-first-title">漆面镀晶</p>
                    <p class="server-second-title">高亮持久不氧化</p>
                    <img src="../assets/images/镀晶.png" alt="广告图片" width="200px" height="200px"/>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="car-server-tip">
                    <p class="server-first-title">漆面镀晶</p>
                    <p class="server-second-title">高亮持久不氧化</p>
                    <img src="../assets/images/镀晶.png" alt="广告图片" width="200px" height="200px"/>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="car-server-tip">
                    <p class="server-first-title">漆面镀晶</p>
                    <p class="server-second-title">高亮持久不氧化</p>
                    <img src="../assets/images/镀晶.png" alt="广告图片" width="200px" height="200px"/>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="car-server-tip">
                    <p class="server-first-title">漆面镀晶</p>
                    <p class="server-second-title">高亮持久不氧化</p>
                    <img src="../assets/images/镀晶.png" alt="广告图片" width="200px" height="200px"/>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="22">
                <el-col :span="6">
                  <div class="car-server-tip">
                    <p class="server-first-title">漆面镀晶</p>
                    <p class="server-second-title">高亮持久不氧化</p>
                    <img src="../assets/images/镀晶.png" alt="广告图片" width="200px" height="200px"/>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="car-server-tip">
                    <p class="server-first-title">漆面镀晶</p>
                    <p class="server-second-title">高亮持久不氧化</p>
                    <img src="../assets/images/镀晶.png" alt="广告图片" width="200px" height="200px"/>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="car-server-tip">
                    <p class="server-first-title">漆面镀晶</p>
                    <p class="server-second-title">高亮持久不氧化</p>
                    <img src="../assets/images/镀晶.png" alt="广告图片" width="200px" height="200px"/>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="car-server-tip">
                    <p class="server-first-title">漆面镀晶</p>
                    <p class="server-second-title">高亮持久不氧化</p>
                    <img src="../assets/images/镀晶.png" alt="广告图片" width="200px" height="200px"/>
                  </div>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
          
        </div>
    </div>
    <div class="set-main-bg">
        <div class="about-us inner-wrap">
          <h1>关于我们</h1>
          <el-container class="about-us-top">
            <el-aside width="300px">
              <img src="../assets/images/大新闻图.png" alt="广告图片" width="250px" height="250px"/>
            </el-aside>
            <el-main>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="公司简介" name="first">
                  <h2>E位养车是全国第一家汽车后市场用工、管理服务平台</h2>
                  <div class="tabCon">
                    E店养车，互联网养车开创者，中国领先的直营连锁养车平台。车发发以“强大线上平台＋线下连
                    锁运营系统”构建闭环的产业互联网模式，提升行业效率，优化资源配置，为宝马、奔驰、奥迪、
                    路虎等36个中高端汽车品牌提供美容、保养、维修、钣喷、保险、车务等一站式汽车服务， 同时
                    也为传统汽修门店提供赋能服务
                  </div>
                </el-tab-pane>
                <el-tab-pane label="保养资讯" name="second">保养资讯</el-tab-pane>
                <el-tab-pane label="企业文化" name="third">企业文化</el-tab-pane>
              </el-tabs>  
            </el-main>
          </el-container>
          
          <el-container class="laster-new">
            <el-main>
              <el-row class="border-top-1px clearFloat">
                <el-col :span="4">
                  <img src="../assets/images/新闻图1.png" alt="广告图片" width="100%"  height="65px"/>
                </el-col>
                <el-col :span="20">
                  <div class="title-wrap clearFloat">
                    <span class="title fl">引领行业,首家新能源专修旗舰店E店养车石化路店开业</span>
                    <span class="time fr">2018-07-24</span>
                  </div>
                  <div class="set-padding">
                    发动机阿里看风景的肯德基法兰克打扫房间发动机阿里看风景的肯德基法兰克打扫房间
                  </div>
                  <span class="more">MORE ></span>
                </el-col>
              </el-row>
              <el-row class="border-top-1px clearFloat">
                <el-col :span="4">
                  <img src="../assets/images/新闻图1.png" alt="广告图片" width="100%"  height="65px"/>
                </el-col>
                <el-col :span="20">
                  <div class="title-wrap clearFloat">
                    <span class="title fl">引领行业,首家新能源专修旗舰店E店养车石化路店开业</span>
                    <span class="time fr">2018-07-24</span>
                  </div>
                  <div class="set-padding">
                    发动机阿里看风景的肯德基法兰克打扫房间发动机阿里看风景的肯德基法兰克打扫房间
                  </div>
                  <span class="more">MORE ></span>
                </el-col>
              </el-row>
              <el-row class="border-top-1px clearFloat">
                <el-col :span="4">
                  <img src="../assets/images/新闻图1.png" alt="广告图片" width="100%"  height="65px"/>
                </el-col>
                <el-col :span="20">
                  <div class="title-wrap clearFloat">
                    <span class="title fl">引领行业,首家新能源专修旗舰店E店养车石化路店开业</span>
                    <span class="time fr">2018-07-24</span>
                  </div>
                  <div class="set-padding">
                    发动机阿里看风景的肯德基法兰克打扫房间发动机阿里看风景的肯德基法兰克打扫房间
                  </div>
                  <span class="more">MORE ></span>
                </el-col>
              </el-row>
            </el-main>
            <el-aside width="300px">
              <img src="../assets/images/大新闻图.png" alt="广告图片" width="300px" height="300px"/>
              <p class="lastFont">头条</p>
            </el-aside>
          </el-container>
          
          
        </div>
    </div>
    <div class="inner-wrap">
        <div class="recommend-store-wrap">
          <h1>推荐门店</h1>
          <el-row :gutter="18">
            <el-col :span="6">
              <commond></commond>
            </el-col>
            <el-col :span="6">
              <commond></commond>
            </el-col>
            <el-col :span="6">
              <commond></commond>
            </el-col>
            <el-col :span="6">
              <commond></commond>
            </el-col>
          </el-row>
          <!--<el-container class="recommend-store">
            <el-aside width="200px">
                
            </el-aside>
            <el-main>
              <el-row :gutter="16">
                <el-col :span="12">
                  
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
          </el-container>-->
        
        </div>
    </div>

      <div class="mask" v-if="checked">
        <div class="inner-mask">
          <div class="inner-center">
            <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click.native="close">
              <i class="el-message-box__close el-icon-close"></i>
            </button>
            <div class="border-bottom-1px check-car-title">
              <img src="../assets/images/checkCarIcon.png" alt="车标" width="25px"/>
              <span>选择车型</span>
            </div>
            <el-steps :active="active" align-center simple>
              <span :class="{'active': active>=1}">1</span><el-step title="选择品牌"></el-step>
              <span :class="{'active': active>=2}">2</span><el-step title="选择车系"></el-step>
              <span :class="{'active': active>=3}">3</span><el-step title="选择车型"></el-step>
            </el-steps>
            <div class="zimu-wrap">
              <span class="hot">热门</span>
              <template v-for="item in zimuArr">
                <span>{{item}}</span>
              </template>
            </div>
            <div class="check-car-main">
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item,index) in carType" @click.native="checkCarType">
                  <div class="check-car">
                    <img :src="item.icon" alt="车标" width="20px"/>
                    <span>{{item.name}}</span>
                  </div>
                </el-col>
              </el-row>

            </div>
          </div>
          
      
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
  //评价
  import scrollStar from "@/components/scrollStar"
  import Commond from '@/components/Commond'
  export default {
    
    data() {
      return {
        checked: false,
        active: 1,
        carplate:'',
        carmodule: '',
        carnat: '',
        zimuArr: ['A','B','C','D','E','F','G','H','I','J','K','L'],
        carType:[ {icon: require('../assets/images/checkCarIcon.png'),name: '奥迪'},
                  {icon: require('../assets/images/checkCarIcon.png'),name: '奥迪'},
                  {icon: require('../assets/images/checkCarIcon.png'),name: '奥迪'},
                  {icon: require('../assets/images/checkCarIcon.png'),name: '奥迪'}
                ],
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
    mounted() {
    },
    methods: {
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      
      handleClick(tab, event) {//tab切换
        console.log(tab, event);
      },
      checkCarType: function(){
        
        this.active = 2
      },
      close: function(){
        console.log('选中')
        this.checked=false
      }
    }
  }
</script>
<style lang="scss" scoped>
  $border-color: #dcdcdc;
  $main-color: #F82501;
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
  .main-banner{
    position: relative;
    background: #FEBB2A;
    .main-banner-bg{
      height: 41px;
      background: $main-color;
      position: absolute;
      width: 100%;
    } 
    .inner-wrap{
      position: relative;
      z-index: 999;
    }
    .el-aside{
      padding-top: 41px;
      background: rgba(0,0,0,.7);
      border: none;
      color: #fff;
      
      
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
  .el-carousel__item img{
    width: 80%;
    height: auto;
  }
  .set-main-bg{
    background: #fff;
    padding: 10px 0 20px 0;
    margin-top: 30px;
  }

  .car-server{
    margin-top: 30px;
    .el-container{
      margin-top: 10px;
    }
    .el-main{
      padding: 0 20px;
    }
    .el-col{
      margin-bottom: 10px;
    }
    .car-server-tip{
      position: relative;
      width:100%;
      max-width: 200px;
      .server-first-title{
        font-size: 18px;
        color: #333333;
        position: relative;
        z-index: 2;
        padding-top:30px;
      }
      .server-second-title{
        font-size: 10px;
        color: #666666;
        position: relative;
        z-index: 2;
        padding-top:10px;
      }
      img{
        position: absolute;
        width:100%;
        top: 0;
        left: 0;
      }
    }
    h1{
      border-bottom: 1px solid $border-color;
    }
    .car-server-tip{
      overflow: hidden;
      height: 200px;
      text-align: center;
      margin: 0 auto;
    }
    .car-server-tip:hover{
      box-shadow: 1px 1px 10px #b9b9b9;
    }
    .car-server-tip img{
      transition: all 1s linear;
    }
    .car-server-tip img:hover{
      transform: scale(1.1);
      transition: all 1s linear;
    }
  }

  //关于我们的样式
  .about-us{
    padding-right: 30px;
    .about-us-top{
      .el-main{
        padding: 0;
      }
    }
    .el-aside{
      border: none;
    } 
    .el-main{
      padding-right: 20px;
      h2{
        text-align: left;
        margin-bottom: 20px;
      }
      .tabCon{
        text-align: left;
      }
    }
  }
  .laster-new{
    text-align: left;
    box-sizing: border-box;
    vertical-align: middle;
    margin-top: 30px;
    .el-row{
      padding: 15px 0;
    }
    .title-wrap{
      padding: 0 10px;
      box-sizing: border-box;
      line-height: 24px;
      .title{
        font-size: 14px;
        color: #333333;
        font-weight: 500;
      }
      .time{
        font-size: 12px;
        color: #828282;
      }
    }
    .set-padding{
      padding: 0 10px;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 6px 0;
      white-space: nowrap;
    }
    .more{
      font-size: 13px;
      color: #FF5F00;
      padding-left: 10px;
    }
    .lastFont{
      text-align: center;
      margin-top: 10px;
    }
  }
  //推荐门店
  .recommend-store-wrap{
    margin-top: 30px;
    h1{
      // border-bottom: 1px solid $border-color;
      margin-top: 10px;
    }
  }
  .recommend-store-wrap .commond-wrap:hover{
    border-radius: 6px 6px 0 0;
    box-shadow: 1px 1px 10px #b9b9b9;
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
  
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    width: 99%;
    z-index: 99999;
    .inner-mask{
      width: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .inner-center{
        position: relative;
        z-index: 999;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        background: #fff;
      }
      .check-car-title{
        text-align: left;
        line-height: 20px;
        padding-bottom: 10px;
      }
      .el-steps{
        margin: 10px 0;
      }
      .zimu-wrap{
        text-align: left;
        margin-bottom: 10px;
        .hot{
          color: #fff;
          display: inline-block;
          width:35px;
          line-height: 18px;
          background: $main-color;
          text-align: center;
        }
        span{
          font-size: 12px;
          color: #898989;
          margin-right: 20px;
        }
      }
      .check-car-main{
        text-align: center;
        .el-row{
          margin-top: 10px;
        }
        .check-car{
          max-width: 125px;
          text-align: left;
          box-sizing: border-box;
          padding: 5px 10px;
          line-height: 20px;
          border: 1px solid #DDDDDD;
          span{
            margin-left: 20px;
          }
        }
        .check-active{
          border: 1px solid $main-color;
        }
      }
    }
    .inner-mask::after{
      width: 100%;
      height: 100%;
      padding: 5px;
      content: '';
      position: absolute;
      left: -5px;
      top: -5px;
      opacity: 0.2;
      background: #000000;
    }
  }
</style>
<style>
  .el-tabs__item.is-active{
    color: #F82501;
  }
  .el-tabs__active-bar{
    background-color: #F82501;
  }
  .el-tabs__nav .el-tabs__item:hover{
    color: #F82501;
  }
  .about-us .el-tabs__nav{
    float: right!important;
  }  
  .main-banner .el-input .el-input__inner{
    height: 30px;
    border: 1px solid #F1825B;
    border-radius: 0;
  }
  .main-banner .el-button{
    background: #F82501;
    width:180px;
    height:30px;
    padding: 0;
    border-radius: 0;
    border: none;
    margin-top: 10px;
  }
  .mask .el-step{
    text-align: left!important;
  }
  .mask .el-step__icon{
    display: none;
  }
  .mask .el-steps span{
    line-height: 20px;
    font-size: 16px;
    border: 1px solid transparent;
    border-radius: 50%;
    display: inline-block;
    width: 20px;
    height: 20px;
    color: #fff;
    background: #CBCBCB;
  }
  .mask .inner-mask .active{
    background: #F82501;
  }
  .mask .is-finish{
    color: #F82501;
  }
  .mask .el-step__line-inner{
    display:none;
  }
  

</style>