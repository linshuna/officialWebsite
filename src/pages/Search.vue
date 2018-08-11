<template>
  <div>

    <div class="search-wrap base-top">
      <div class="inner-wrap">
        <span class="search-font">内容搜索</span>
         <input v-model="keyword" placeholder="请输入关键词" class="el-search-left" @keyup.enter="searchCon"/>
        <el-button type="primary" class="search" @click.stop="searchCon">搜素</el-button> 
      </div>
       
    </div>
    <div class="inner-wrap">
    
      <el-tabs v-model="activeName" class="news-list-tab">
        <el-tab-pane label="新闻" name="first">
          <template v-if="!newsList||newsList.length==0">
            <p style="padding-bottom: 10px;font-size: 14px;color:gray;">暂时搜索不到{{keyword}}相关的新闻信息，更换输入条件</p>
          </template>
          <template v-else>
            <ul class="news-list-wrap">
              <li v-for="item in newsList" class="border-bottom-1px">
                <h1>{{item.title}}</h1>
                <div class="news-detail-con">
                  <img :src="item.pic"/>
                  <div class="news-left">
                    <p>{{item.des}}</p>
                    <p class="news-time">{{item.addtime}}</p>
                  </div>
                </div>
              </li>
            </ul>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="newsCount"
              :current-page.sync="currentNewsPage">
            </el-pagination> 
          </template>
          
        </el-tab-pane>
        <el-tab-pane label="门店" name="fourth">
          <template v-if="!shopList||shopList.length==0">
            <p style="padding-bottom: 10px;font-size: 14px;color:gray;">暂时搜索不到{{keyword}}相关的门店信息，更换输入条件</p>
          </template>
          <template v-else>
            <div class="store-msg inner-wrap">
              <ul class="store-list-wrap">
                <li v-for="item in shopList" class="border-bottom-1px">
                  <div class="flexDiv">
                    <div class="left-section">
                      <div class="store-msg-img">
                          <img :src="item.pic" alt="">
                      </div>
                      <div class="store-msg-p">
                          <h1>{{item.name}}</h1>
                          <p class="pstar">
                            评价: <base-star :stars="item.evaluateShow"></base-star>
                          </p>
                          <div class="store-msg-p-nav">
                            <span class="address">地址:{{item.city}}{{item.dist}}{{item.address}}</span>
                            <img src="../assets/images/navigation-icon.png" alt="">
                            <span class="store-msg-p-nav-span"></span>
                          </div>
                          <p>营业时间: {{item.storeTime}}</p>
                          <div>总订单: <span class="many">{{item.sale}}</span>单</div>
                      </div>
                    </div>
                    <div class="right-section">
                      <div class="main-right">
                          <div class="main-right-p">
                              <span>综合评分</span>
                              <span class="main-score">{{item.evaluatePre}}%</span>
                          </div>
                          <button class="main-btn">查看详情</button>
                      </div>

                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="shopCount"
              :current-page.sync="currentShopPage">
            </el-pagination> 
          </template>
          
        
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  //最新活动组件
  import NewActivity from "@/components/NewActivity"
  //星星
  import star from '@/components/star'
  import {newsSearch,shopSearch} from '@/utils/api.js'
  export default {
    data(){
      return{
        keyword: '',
        loading: false,
        options4:[],
        activeName: 'first',
        shopCount: 1,
        currentShopPage: 1,
        shopList: [],
        currentNewsPage: 1,
        newsCount: 1,
        newsList: [],
        
      }
    },
    components:{
      'new-activity': NewActivity,
      'base-star': star
    },
    created() {
      let con = this.$route.params.con;
      this.keyword = con==-1?'':con;
    },
    mounted() {
      this.$nextTick(function(){
        this.initNews()
        this.initShop()
      })
    },
    watch: {
      currentNewsPage: function(newVal,oldVal){
        this.initNews();
      },
      currentShopPage: function(newVal,oldVal){
        this.initShop();
      },
      keyword: function(newVal,oldVal){
        
        this.keyword = newVal;
        //新闻和门店的初始化
        this.initNews()
        this.initShop()
      }
    },
    methods:{
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          // setTimeout(() => {
          //   this.loading = false;
          //   this.options4 = this.list.filter(item => {
          //     return item.label.toLowerCase()
          //       .indexOf(query.toLowerCase()) > -1;
          //   });
          // }, 200);
        } else {
          // this.options4 = [];
        }
      },
      initNews: function(){
        newsSearch({keyword: this.keyword,page: this.currentNewsPage}).then(res => {
          this.newsCount = res.page.count * 10;
          this.newsList = res.list
        })
      },
      initShop: function(){
        shopSearch({keyword: this.keyword,page: this.currentShopPage}).then(res => {
          this.shopCount = res.page.count*10;
          this.shopList = res.list
        })
      },
      searchCon: function(){
        this.initNews();
        this.initShop();
        console.log(this.keyword)
      }
    }
  }
</script>
<style lang="scss" scoped>
.search-wrap{
  font-size: 0;
  text-align: left;
  background: #fff;
  padding: 10px 0;
  .search-font{
    display: inline-block;
    font-size: 12px;
    line-height: 40px;
    vertical-align: middle;
    padding-right: 10px;
  }
  .el-select{
    vertical-align: middle;
  }
  .search{
    background: #F82501;
    width: 70px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    border-radius: 0;
    border: none;
  }  
}    
.news-list-wrap {
  width: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  text-align: left;
  padding-left: 10px;
  box-sizing: border-box;
  li{
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
  h1{
    font-size: 14px;
    font-weight: 600;
  }
  .news-detail-con{
    margin: 10px 0;
    img{
      width: 60px;
      height: 60px;
      vertical-align: top;
    }
    .news-left{
      width: 80%;
      height: 60px;
      display: inline-block;
      vertical-align: top;
      padding-left: 20px;
      box-sizing: border-box;
      position: relative;
      p{
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

      }
    }
    .news-time{
      margin-top: 20px;
      position: absolute;
      bottom: 0;
      left: 20px;
    }
  }
}
.inner-wrap{
  width: 100%;
  background: #fff;
  margin-top: 10px;
}

.store-list-wrap{
  width:100%;
  li{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
}
.flexDiv{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
  .left-section{
    .store-msg-img {
      display: inline-block;
      vertical-align: top;
      img{
        width: 200px;
        height: 120px;
      }
     
    }
    .store-msg-p{
      vertical-align: top;
      display: inline-block;
      text-align: left;
      padding-left: 20px;
      color: #666666;
      line-height: 23px;
      .address{
        padding-right: 10px;
      }
      h1{
        font-size: 15px;
        font-weight: 600;
        padding-bottom: 10px;
      }
    }
    .many {
        display: inline-block;
        font-size: 5px !important;
        color: orange;
    }
  }
}
  .el-search-left{
    border: 1px solid #F82501;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    vertical-align: middle;
    padding-left: 10px;
    width:200px;
    box-sizing: border-box;
  }

  
  .right-section{
      padding-top: 20px;
      .main-right {
          display: flex;
          flex-direction: column;
          justify-content:center;
          align-items: center;
          .main-btn{
              margin-top: 20px;
              width: 101px;
              height: 30px;
              background-color: #f00;
              color: #fff;
          }
          .main-score {
              color: #f00;
          }
      }
  }

  .store-top {
      height: 38px;
      background-color: #efefef;
  }


</style>
<style>
  .base-top .el-select .el-input__inner{
    border: 1px solid #F82501;
    border-radius: 0;
    width: 200px;
    height: 30px!important;
  }
  .base-top .search{
    height: 30px!important;
  }
  .base-top .search span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .news-list-tab .el-tabs__nav-scroll{
    background: #F6F8F7;
  }
  .news-list-tab .el-pagination{
    text-align: left;
    margin: 20px 0;
  }
  .el-tabs__item.is-active{
    color: #F82501;
  }
  .el-tabs__active-bar{
    background-color: #F82501;
  }
  .el-tabs__nav .el-tabs__item:hover{
    color: #F82501;
  }
  .flexDiv .el-rate{
    display: line-block;
  }
</style>