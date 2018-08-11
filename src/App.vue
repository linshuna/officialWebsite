<template>
  <div id="app">
    <el-container class="main" v-if="!$route.meta.actived">
        <el-header height="auto">
            <base-top-header></base-top-header>
        </el-header>
        <base-header :activeIndex.sync='activeIndex'></base-header>
    </el-container>

    <router-view @getType="getType"/>
    
    <base-footer v-if="!$route.meta.actived"></base-footer>
  </div>
</template>

<script>
//顶部
import BaseTopHeader from '@/components/BaseTopHeader'
//头部
import BaseHeader from '@/components/BaseHeader'
//底部
import BaseFooter from "@/components/BaseFooter"
export default {
  name: 'App',
  components: {
      'base-top-header': BaseTopHeader,
      'base-footer': BaseFooter,
      'base-header': BaseHeader
  },
  data(){
    return{
      active: '',
      activeIndex: ''
    }
  },
  created() {
    console.log(this.active)
    // this.$router.push({path: '/'})
    this.activeIndex = this.$route.meta.activeIndex
  },
  methods: {
    getType: function(value){
      this.activeIndex = value;
      console.log(value)
    }
  }
}
</script>

<style>
#app {
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  background: #F6F8F7;
  font-size: 14px;
}
.inner-wrap{
  min-width:990px;
  max-width: 1190px;
  margin: 0 auto;
}
.banner{
  width:100%;
  background:rgb(248, 37, 1);
}
</style>
