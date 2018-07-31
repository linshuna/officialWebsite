<template>
  <div>

    <!--下拉菜单-->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
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
      <el-menu-item index="3">服务门店</el-menu-item>
      <el-submenu index="4">
        <template slot="title">保养资讯</template>
        <el-menu-item index="4-1">养车干货</el-menu-item>
        <el-menu-item index="4-2">车主心声</el-menu-item>
        <el-menu-item index="4-3">企业资讯</el-menu-item>
        <el-menu-item index="4-4">客户服务</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">自助保养</el-menu-item>
      <el-menu-item index="6">关于我们</el-menu-item>
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

  }
</script>