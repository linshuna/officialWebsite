<template>
  <div class="footer">
    <div class="link">
      <p class="link-title">
        <a href="javascript:void(0)">友情链接</a>
        <a href="javascript:void(0)">快速链接</a>
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
    </div>
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
    </div>
    <!--轮播图-->
    <el-carousel :interval="5000" arrow="always" height="50px" class="footer-carousel">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>滚动滚动滚动滚动滚动滚动{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <p>内容1</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <p>内容2</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <p>内容3</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <p>内容4</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
          <p>发动机上课</p>
        </div>
      </el-col>
    </el-row>
    <div class="footer-font">
      <p>Copyright @ 2007-2018 Harsonfjgkd All Rights</p>
      <p>有限公司 版权所有 粤ICP备100502号-1 总部地址：广州市越秀区 电话：13539713955</p>
      <p></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer{
    margin-top: 30px;
  }
  .link,.copylink{
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 30px;
  }
  .link{
    .link-title{
      text-align: left;
      padding-left:20px;
      a:first-child{
        padding-right: 20px;
        border-right: 1px solid gray;
      }
      a:last-child{
        padding-left: 20px;
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