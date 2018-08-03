<template>
  <div>
    <el-container class="main">
      <el-header height="auto">
        <base-top-header></base-top-header>
      </el-header>
    </el-container>
    <base-header  activeIndex='3'></base-header>
    <div class="inner-wrap">
      <div class="server-store-wrap">
        <el-container>
          <el-main>
            <el-container class="store-detail-wrap">
              <el-aside width="200px">
                <img alt="图片" src="../assets/images/大新闻图.png" width="200px" height="200px"/>
              </el-aside>
              <el-main>
                <h1 class="border-bottom-1px">越秀洗车房</h1>
                <div class="store-msg">
                  <p>营业时间：8:00-23:00</p>
                  <p>服务电话：1380013800</p>
                  <p>门店地址：越秀区</p>
                  <div class="btn-wrap">
                    <button>预约</button>
                  </div>
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
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="门店介绍" name="first">
            <div class="store-detail">
              <ul class="store-detail-list">
                <li>
                  <p class="store-detail-title">
                    <img src="../assets/images/checkCarIcon.png"/>
                    <span>汽车美容服务项目</span>
                  </p>
                  <el-row :gutter="20">
                    <el-col :span="6">
                      <div>
                        <i class="el-icon-circle-check"></i>
                        <span>5座精致洗车</span>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div>
                        <i class="el-icon-circle-check"></i>
                        <span>5座精致洗车</span>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div>
                        <i class="el-icon-circle-check"></i>
                        <span>5座精致洗车</span>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div>
                        <i class="el-icon-circle-check"></i>
                        <span>5座精致洗车</span>
                      </div>
                    </el-col>
                  </el-row>
                </li>
              </ul>
            </div>
          
          </el-tab-pane>
          <el-tab-pane label="门店评价" name="second">
            <div class="total-elvate">
              <p class="elvate-title">综合评价</p>
              <div>
                <span class="elvate-big-font">4.9</span>
              </div>
              <div class="store-elvate-msg">
                <span class="elvate-small-font">
                  <span class="red">2000</span>人评价</span>
                <ul class="store-elvate">
                  <li>
                    <img src="../assets/images/态度.png"/>
                    <span>门店环境：</span>
                  </li>
                  <li>
                    <img src="../assets/images/态度.png"/>
                    <span>服务态度：</span>
                  </li>
                  <li>
                    <img src="../assets/images/态度.png"/>
                    <span>服务质量：</span>
                  </li>
                  <li>
                    <img src="../assets/images/态度.png"/>
                    <span>技术能力：</span>
                  </li>
                  <li>
                    <img src="../assets/images/态度.png"/>
                    <span>价格实惠：</span>
                  </li>  
                </ul>
              </div>
              
            </div>
            <ul class="elvate-list">
                <li v-for="item in shopevaluateList">
                  <div class="elvate-nav">
                    <div class="nav_left">
                      <img :src="item.headimg" alt="服务图片">
                    </div>
                    <div class="nav_center">
                      <p>{{item.uname}} - {{item.carNo}}</p>
                      <div class="nav_center_center">
                        <span class="setElvate">综合评价：</span>
                        <el-rate
                          v-model="item.evaluatenum"
                          disabled
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                      </div>
                      <p class="section_top_left_ptop">{{item.province}}{{item.city}}{{item.dist}}{{item.address}}</p>
                    </div>
                    <div class="nav_bottom">{{item.message | noAssessTip}}</div>
                  </div>
                  
                </li>
              </ul>
          </el-tab-pane>
        </el-tabs>
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
  //底部
  import BaseFooter from "@/components/BaseFooter"
  //评价
  import Commond from '@/components/Commond'
  export default {
    data(){
      return {
        activeName: 'first',
        shopevaluateList: [{
          addtime:"2018-08-01",
          carNo:"京DY***7",
          evaluatenum:"5.0",
          headimg:"http://w.hhqccar.cn/Public/App/head/1532415214_659.jpg",
          message:"范德萨发",
          uname:"罗"
        }]
      }
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
    methods: {
      handleClick: function(){

      }
    }
  }
</script>
<style lang="scss" scoped>
  .server-store-wrap{
    margin-top: 20px;
    .el-main{
      padding: 0;
      
      .store-detail-wrap{
        .el-main{
          padding: 0 16px;
          margin: 0 10px;
          background: #fff;
          text-align: left;
        }
      }
      h1{
        font-size: 18px;
        line-height: 35px;
        text-align: left;
        color: #333;
      }
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
      line-height: 25px;
      font-size: 14px;
      color: #666;
    }
    .store-msg{
      margin-top: 10px;
      .btn-wrap{
        margin-top: 20px;
        button{
          width:160px;
          color: #fff;
          font-size: 16px;
          height: 35px;
          background: #F82501;
          border: none;
        }
      }  
    }
    
    
  }
  .store-detail-main{
    margin-top: 20px;
    background: #fff;
    .store-detail{
      width:100%;
      padding: 0 20px;
      box-sizing: border-box;
      .store-detail-list{
        padding-bottom: 20px;
        .store-detail-title{
          text-align: left;
          width: 100%;
          background: #F8F8F8;
          padding: 0 30px;
          box-sizing: border-box;
          height: 36px;
          line-height: 36px;
        }
        .el-row{
          padding: 0 30px;
          box-sizing: border-box;
          text-align: left;
          font-size: 12px;
          color: #4E4E4E;
          margin-top: 18px;
          i{
            color:green;
            font-size: 18px;
            vertical-align: middle;
          }
          span{
            vertical-align: middle;
          }
        }
      }
    }
    .total-elvate{
      text-align: left;
      background: #fff;
      padding: 10px 20px;
      position: relative;
      .elvate-big-font{
        font-size: 30px;
        color: #F82501;
        padding: 2px 0;
      }
      .red{
        color: #F82501;
      }
      .store-elvate{
        width: 300px;
        position: absolute;
        right: 20px;
        top: 0;
        li{
          display: inline-block;
          width: 120px;
          background: #F2F2F2;
          height: 20px;
          line-height: 20px;
          padding: 0 4px;
          box-sizing: border-box;
          margin:0 20px 10px 0;
          span{
            padding-left: 10px;
          }
        }
      }
      .store-elvate-msg{
        color: #999;
        .set-padding{
          display: inline-block;
          margin-left: 30px;
          span{
            margin-right: 20px;
          }
        }
      }
      
    }
  }
.elvate-list{
  width: 100%;
  li{
    width: 100%;  
    padding-left: 10px;
    box-sizing: border-box; 
    background-color: #fff;
  }
  .elvate-nav {
    height: 100px;
    border-top: 1px solid #ececec;
    padding: 10px 18px 10px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: left;
  }

  .nav_left {
    width: 50px;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  ul {
    margin-top: 10px;
  }
  .nav_left p {
    line-height: 0.3rem;
  }

  .nav_center {
    width: 50%;
    display: inline-block;
    vertical-align: middle;
    padding-left: 10px;
  }
  .nav_center p:first-child {
    color: #707070;
    font-weight: 600;
    font-size: 14px;
  }
  .nav_center p:last-child {
    color: #707070;
    font-size: 12px;
  }

  .nav_center_left {
    display: flex;
    padding-right: 10px;
    line-height: 25px;
  }
  .nav_center_center{
    display: flex;
    align-items: center;
  }

  .nav_center_left p:first-child,
  .nav_center_right p:first-child {
    color: #707070;
    font-size: 12px;
  }
  .nav_bottom{
    padding-top: 8px;
    width: 100%;
    font-size: 12px;
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}
.el-rate{
  display: inline;
  vertical-align: middle;
}
</style>
<style>

  .store-detail-main .el-tabs__item.is-active {
    background: #fff;
    border-top-color: transparent;
    color: #F82501;
    border-top: 2px solid #F82501;
  }
  .store-detail-main .el-tabs--card>.el-tabs__header .el-tabs__item:hover{
    color: #F82501;
  }
  .el-tabs__item:focus.is-active.is-focus:not(:active) {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #333;
  }
</style>