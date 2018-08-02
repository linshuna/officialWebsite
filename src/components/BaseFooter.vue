<template>
  <div>
    <div class="footer">
      <div class="inner-wrap">
        <div class="link">
          <p class="link-title">
            <a href="javascript:void(0)">友情链接</a>
            <a href="javascript:void(0)">快速链接</a>
          </p>
          <p class="store-name">
            <span>汽车之家</span>
            <span>汽配龙</span>
            <span>镭射眼智能行车记录仪</span>
            <span>丰途轮毂</span>
            <span>腾讯汽车</span>
            <span>新浪汽车</span>
            <span>网易汽车</span>
            <span>搜狐汽车</span>
            <span>易车网</span>
            <span>爱卡汽车</span>
            <span>太平洋汽车网</span>
            <span>百姓网</span>
            <span>虎扑网</span>
            <span>TOM汽车</span>
          </p>
          <p class="store-name">
            <span>铁路网上订票官网</span>
            <span>广州生活服务</span>
            <span>极限户外-自驾越野</span>
            <span>汽车图片</span>
            <span>二手车交易</span>
            <span>奥迪Q2</span>
            <span>瓜子二手车</span>
            <span>消费众测</span>
          </p>
        </div>
        <!--
        <div class="copylink">
          <p class="link-title">
            <a href="javascript:void(0)">备份链接</a>
          </p>
          <el-row>
            <el-col :span="3"><div class="grid-content bg-purple"> E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light">E店保养</div></el-col>
          </el-row>
          <el-row>
            <el-col :span="3"><div class="grid-content bg-purple"> E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">E店保养</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light">E店保养</div></el-col>
          </el-row>
        </div>-->
        <!--轮播图-->
        <el-carousel :interval="5000" arrow="always" height="50px" class="footer-carousel">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>8月26日九州快讯专访E店养车, 解密汽车连锁规模发展之秘诀!</h3>
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
</style>