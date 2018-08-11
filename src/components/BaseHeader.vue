<template>
  <div class="banner">

    <!--下拉菜单-->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo inner-wrap"
      mode="horizontal"
      background-color="#F82501"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/">首页</router-link>  
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">汽车服务</template>
        <el-menu-item index="2-1">清洗养护</el-menu-item>
        <el-menu-item index="2-2">维修保养</el-menu-item>
        <el-menu-item index="2-3">违章代缴</el-menu-item>
        <el-menu-item index="2-4">紧急救援</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/ServerStore/0">服务门店</router-link> </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <router-link to="/DetailsMaintenance">保养资讯</router-link> 
        </template>
        <el-menu-item index="4-1">养车干货</el-menu-item>
        <el-menu-item index="4-2">
          <router-link to="/DetailsMaintenance/Aspiration">车主心声</router-link> 
        </el-menu-item>
        <el-menu-item index="4-3">企业资讯</el-menu-item>
        <el-menu-item index="4-4">客户服务</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">
        <span @click="baoyang">自助保养</span>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link to="/Weare">关于我们</router-link>
      </el-menu-item>
      <el-menu-item index="7">
        <router-link to="/NewActivityPage">最新活动</router-link>  
      </el-menu-item>
      <el-menu-item index="8">入驻申请</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    props:{
      activeIndex: {type: String}
    },
    data(){
      return{}
    },
    methods: {
      baoyang: function(){
        alert("请选择车牌类型");
        return false;
      }
    }

  }
</script>
<style lang="scss" scoped>
  
 
</style>
<style>
  .banner .el-menu--horizontal>.el-menu-item{
    height: 31px;
    line-height: 31px;
  }
  .banner .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 31px;
    line-height: 31px;
  }
  .banner .el-menu--horizontal{
    border-bottom: none;
    margin: 0 auto!important;
  }
  .el-submenu .el-menu-item{
    background-color: rgba(0,0,0,.3);
  }
  .el-submenu  .el-menu-item.is-active {
    color: #F82501;
    background: #FFFFFF;
  }
  .el-submenu__title i {
    color: #ffffff;
  }
</style>