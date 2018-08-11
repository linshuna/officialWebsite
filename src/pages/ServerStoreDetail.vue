<template>
  <div>

    <div class="inner-wrap">
      <div class="server-store-wrap">
        <el-container>
          <el-main>
            <el-container class="store-detail-wrap">
              <el-aside width="200px">
                <!--<img alt="图片" src="../assets/images/大新闻图.png" width="200px" height="200px"/>-->
                <el-carousel height="200px">
                  <el-carousel-item v-for="item in shopImg" :key="item">
                    <img alt="图片" :src="item" width="200px" height="200px"/>
                  </el-carousel-item>
                </el-carousel>
              </el-aside>
              <el-main>
                <h1 class="border-bottom-1px">{{shopMsg.name}}</h1>
                <div class="store-msg">
                  <p>营业时间：{{shopMsg.storeTime}}</p>
                  <p>服务电话：{{shopMsg.phone}}</p>
                  <p class="address">门店地址：{{shopMsg.province}}{{shopMsg.city}}{{shopMsg.dist}}{{shopMsg.address}}</p>
                  <div class="btn-wrap" @click.stop="goShopDetail(shopMsg.id)">
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
            <div class="store-detail" v-html="content">
              <!--<ul class="store-detail-list">
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
              </ul>-->
            </div>
          
          </el-tab-pane>
          <el-tab-pane label="门店评价" name="second">
            <div class="total-elvate">
              <p class="elvate-title">综合评价</p>
              <div>
                <span class="elvate-big-font">{{eval.all | datasFilter}}</span>
              </div>
              <div class="store-elvate-msg">
                <span class="elvate-small-font">
                  <span class="red">{{eval.count}}</span>人评价</span>
                <ul class="store-elvate">
                  <li>
                    <img src="../assets/images/态度.png"/>
                    <span>门店环境：{{eval.around | datasFilter}}</span>
                  </li>
                  <li>
                    <img src="../assets/images/态度.png"/>
                    <span>服务态度：{{eval.attitude | datasFilter}}</span>
                  </li>
                  <li>
                    <img src="../assets/images/态度.png"/>
                    <span>服务质量：{{eval.service | datasFilter}}</span>
                  </li>
                  <li>
                    <img src="../assets/images/态度.png"/>
                    <span>技术娴熟：{{eval.tech | datasFilter}}</span>
                  </li>
                  <li>
                    <img src="../assets/images/态度.png"/> 
                    <span>价格实惠：{{eval.price | datasFilter}}</span>
                  </li>  
                </ul>
              </div>              
            </div>
            <template v-if="shopevaluateList&&shopevaluateList.length>0">
              <ul class="elvate-list">
                <li v-for="item in shopevaluateList">
                  <div class="elvate-nav">
                    <div class="nav_left">
                      <img :src="item.headimg" alt="服务图片">
                    </div>
                    <div class="nav_center">
                      <p>{{item.buyname}} - {{item.buycarNo}}</p>
                      <div class="nav_center_center">
                        <span class="setElvate">综合评价：</span>
                        <el-rate
                          v-model="(item.evaluateShow-0).toFixed(2)"
                          disabled
                          show-score
                          text-color="#ff9900" score-template="{value}">
                        </el-rate>
                      </div>
                      <p class="elvate-wrap">
                        <span>门店环境：{{item.aroundscore}}</span>
                        <span>服务态度：{{item.attitudescore}}</span>
                        <span>服务质量：{{item.servicescore}}</span>
                        <span>技术娴熟：{{item.techscore}}</span>
                        <span>价格实惠：{{item.pricescore}}</span>
                      </p>
                      <p class="section_top_left_ptop">{{item.province}}{{item.city}}{{item.dist}}{{item.address}}</p>
                    </div>
                    <div class="nav_bottom">{{item.message | noAssessTip}}</div>
                  </div>
                  
                </li>
              </ul>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="count"
                :current-page.sync="currentPage">
              </el-pagination> 
            </template>
            <template v-else>
              <p style="font-size: 14px;padding-bottom: 10px;margin-top: 20px;">该门店暂无评价</p>
            </template>
            
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    
  </div>
</template>
<script>
  //评价
  import Commond from '@/components/Commond'
  import {stopDetail,evaluate} from '@/utils/api.js'
  export default {
    data(){
      return {
        shopId: '',
        activeName: 'first',
        shopMsg: {},//门店详情
        shopImg: [],//轮播图
        content: '',//门店介绍
        shopevaluateList: [],//商品评价
        eval: {},
        currentPage: 1,
        count: 1,
        latitude: '',
        longitude: ''
      }
    },
    created() {
      this.shopId = this.$route.params.shopId;
    },
    watch:{
      currentPage: function(newVal,oldVal){
        this.initEvaluate()
      },
      latitude:function(newVal,oldVal){
        let container = this.$refs.container
        console.log(this.latitude)
        var center = new qq.maps.LatLng(this.latitude,this.longitude);
        var map = new qq.maps.Map(container,{
            center: center,
            zoom: 13
        });

        var marker = new qq.maps.Marker({
            map:map,
            position: center
        });   
      }
    },
    mounted() {
      this.$nextTick(()=>{
         
        //门店详情   
        stopDetail({shop_id: this.shopId}).then(res => {
          this.shopMsg = res;
          this.shopImg = res.images;//轮播图
          this.content = this.$options.filters.unescape(res.content);//获取门店介绍
          this.eval = res.eval;//获取评价数
          //获取经纬度
          this.latitude = res.latitude;
          this.longitude = res.longitude;
        })
        //门店评价
        this.initEvaluate()
         
      })
    },
    methods: {
      handleClick: function(){

      },
      initEvaluate: function(){
        evaluate({id: this.shopId,page: this.currentPage}).then(res => {
          this.count = res.page.count*10;
          this.shopevaluateList = res.list;
        })
      },
      goShopDetail: function(id){
        this.$router.push({path: '/ServerStore/ServerStoreDetail/Appointments/'+id})
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
      .address{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
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
  .elvate-wrap{
    span{
      padding-right: 10px;
      color: gray;
    }
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