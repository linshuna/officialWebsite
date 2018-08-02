<template>
  <div>
    <el-container class="main">
      <el-header height="auto">
        <base-top-header></base-top-header>
      </el-header>
    </el-container>
    <base-header activeIndex='3'></base-header>
    <div class="server-store-wrap inner-wrap">
      <el-container>
        <el-main>
          <div id="container" ref="container"></div>
        </el-main>
        <el-aside width="450px">
          <!--店铺列表--> 
          <router-link to="/ServerStore/ServerStoreDetail">
            <!--店铺内容--> 
          </router-link>
          
        </el-aside>
      </el-container>
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
      return {}
    },
    components:{
      'base-top-header': BaseTopHeader,
      'base-footer':BaseFooter,
      'base-header':BaseHeader,
      'commond': Commond
    },
    mounted() {
      this.$nextTick(()=>{
        let container = this.$refs.container
        var center = new qq.maps.LatLng(39.916527,116.397128);
        var map = new qq.maps.Map(container,{
            center: center,
            zoom: 13
        });

        var latlngBounds = new qq.maps.LatLngBounds();
        var points = [
                new qq.maps.LatLng(39.916527,116.39712),
                new qq.maps.LatLng(38.81987,115.49425),
                new qq.maps.LatLng(39.9,116.4),
              ];
        var markers = [];
        //添加四个标注，并将其存入数组marker[]
        for(var i = 0;i<points.length;i++){
          var gmarker = new qq.maps.Marker({
            position : points[i],
            map : map,
          });
          markers.push(gmarker);
        }
        var setVeiwPort = function () {
          var bounds = new qq.maps.LatLngBounds();
          for(var i = 0;i < markers.length;i++){
            bounds.extend(markers[i].getPosition());
          }
          map.fitBounds(bounds);
        };
        

      })
    },
  }
</script>
<style lang="scss" scoped>
  .server-store-wrap{
    margin-top: 20px;
    .el-main{
      padding: 0 20px;
    }
  }
  #container{
    height: 400px;
  }
  .commond-wrap{
    margin:8px 0;
  }
</style>