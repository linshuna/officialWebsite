<template>
  <div>
    <div class="footer">
      <div class="inner-wrap">
        <div class="link">
          <el-tabs v-model="activeName">
            <el-tab-pane label="友情链接" name="first">
              <p class="store-name">
                <span v-for="item in linkList"><a :href="item.url" target="_blank">{{item.title}}</a></span>
              </p>
          
            </el-tab-pane>
            <el-tab-pane label="快速链接" name="second">
              <p class="store-name" v-if="provinceList">
                <span v-for="item in provinceList" @click.stop="checkProvince(item)">{{item.areaName}}</span>
              </p>
              <p class="store-name" v-if="cityList">
                <span v-for="item in cityList" @click.stop="checkCity(item)">{{item.areaName}}</span>
              </p>
              <p class="store-name" v-if="distList">
                <span v-for="item in distList" @click.stop="checkDist(item)">{{item.areaName}}</span>
              </p>
            </el-tab-pane>
          </el-tabs>
        
          
        </div>

        <!--轮播图-->
        <el-carousel :interval="5000" arrow="always" height="50px" class="footer-carousel">
          <el-carousel-item v-for="item in bottomList" :key="item">
            <h3>{{item}}</h3>
          </el-carousel-item>
        </el-carousel>
        <el-row :gutter="20" class="server-link">
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <h2>服务支持</h2>
              <p>常见问题</p>
              <p>服务范围</p>
              <p>友情链接</p>
              <p>招商加盟</p>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <h2>关于我们</h2>
              <p>公司简介</p>
              <p>服务门店</p>
              <p>联系我们</p>
              <p>企业合作</p>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <h2>支付方式</h2>
              <p>到店付款</p>
              <p>微信支付</p>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <h2>服务简介</h2>
              <p>配送安装</p>
              <p>产品保修</p>
              <p>E店服务</p>
              <p>用户协议</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <h2>热线电话</h2>
              <p class="hot-phone">020-83544791</p>
              <p>周一至周五 8:00-24:00</p>
              <p>我要投诉</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer-font">
      <p>© 2007-2018 Tuhu.cn Corporation, All Rights Reserved</p>
      <p>广州微位科技有限公司 版权所有 粤ICP备11004912号-2 总部地址：广州市越秀区东风中路越秀城市广场 </p>
    </div>
  </div>
  
</template>
<script>
  import { link,bottom,province,city,dist,stopList } from '@/utils/api.js'
  export default {
    data(){
      return {
        linkList: [],
        activeName: 'first',
        bottomList: [],
        provinceList: [],
        provinceId: '',
        provinceName: '',
        cityList: [],
        cityId: '',
        cityName:'',
        distList: [],
        distId: '',
        distName: ''
      }
    },
    mounted() {
      this.$nextTick(function(){
        //快速链接
        link().then(res => {
          this.linkList = res;
          console.log(res)
        })
        //底部轮播
        bottom().then(res => {
          this.bottomList = res;
        })
        //初始化省
        this.initProvince()
      })
    },
    watch: {
      provinceId: function(){
        this.initCity();//显示城市
      },
      cityId: function(){
        this.initDist();//显示区域
      }
    },
    methods:{
      initProvince: function(){
        province().then(res => {
          this.provinceList = res;
        })
      },
      checkProvince: function(item){
        this.provinceId = item.areaId;
        this.provinceName = item.areaName
      },
      initCity: function(){
        this.provinceList = []
        city({areaId: this.provinceId}).then(res => {
          this.cityList = res
        })
      },
      checkCity: function(item){
        this.cityId = item.areaId;
        this.cityName = item.areaName;
      },
      initDist: function(){
        this.cityList = []
        dist({areaId: this.cityId}).then(res => {
          this.distList = res
        })

      },
      checkDist: function(item){
        let checkJson = {
            province: this.provinceName,
            city: this.cityName,
            dist: item.areaName,
            provinceCode: this.provinceId,
            cityCode: this.cityId,
            distCode: item.areaId};
        window.localStorage.setItem('checkedCity',JSON.stringify(checkJson))
        //页面跳转
        this.$router.push({path: '/ServerStore/'+item.areaCode})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer{
    margin-top: 30px;
    background: #fff;
    padding: 30px 0 45px 0;
  }
  .link,.copylink{
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 30px;
  }
  .link{
    .link-title{
      text-align: left;
      a:first-child{
        padding-right: 20px;
        border-right: 1px solid gray;
      }
      a:last-child{
        padding-left: 20px;
      }
      a{
        font-size: 14px;
        color: #333333;
      }
    }  
  }
  .copylink{
    .link-title{
      text-align: left;
      padding-left:20px;
      
    }

  }
  
  .el-row{
    line-height: 30px;
  }
  .el-carousel__container{
    height: 50px;
  }
  .footer-carousel{
    line-height: 50px;
    .el-carousel__arrow{
      background-color: transparent;
      color: gray;
      font-weight: 600;
    }
    .el-carousel__indicators{
      display: none;
    }
  }
  .footer-font{
    margin-top: 30px;
    padding-bottom:30px;
    font-size: 12px;
    color: #999999;
    line-height: 22px;
  }
  .store-name{
    text-align: left;
    span{
      font-size: 12px;
      margin-right: 20px;
      color: #999999;
    }
  }
  .store-name span:hover{
    cursor: pointer;
    color: #F82501;
  }
  .el-carousel__item{
    h3{
      font-size: 16px;
      color: #666666;
    }
  }
  .server-link{
    h2{
      font-size: 14px;
      color: #333333;
      text-align: left;
      font-weight: 500;
    }
    p{
      font-size: 12px;
      color: #999999;
      text-align: left;
    }
    .hot-phone{
      font-size: 20px;
      color: #F82501;
    }
  }
  .el-carousel__arrow i{
    font-weight: bold;
  }
</style>
<style>
.footer-carousel{
  line-height: 50px;
}
.footer-carousel .el-carousel__arrow{
  background-color: transparent;
  color: gray;
  font-weight: 600;
}
.footer-carousel .el-carousel__indicators{
  display: none;
}
.link #tab-first{
    border-right: 1px solid gray;
    line-height: 20px;
    height: 20px;
}
.link .el-tabs__nav-wrap::after{
  background-color: transparent;
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
</style>