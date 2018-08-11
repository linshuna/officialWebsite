<template>
    <div>

      <div class="server-store-wrap inner-wrap">
          <el-container>
              <el-main>
                  <div id="container" ref="container"></div>
              </el-main>
              <el-aside width="380px">
                  <div class="container-address">
                      <!--店铺列表//这个change事件是select的，不是option的，别写在option里面-->
                      <el-select
                              v-model="shengCode"
                              @change="choseProvince"
                              placeholder="省级地区">
                          <el-option
                                  v-for="item in provinceList"
                                  :key="item.id"
                                  :label="item.value"
                                  :value="item.id">
                          </el-option>
                      </el-select>
                      <el-select
                              v-model="shiCode"
                              @change="choseCity"
                              placeholder="市级地区">
                          <el-option
                                  v-for="item in cityList"
                                  :key="item.id"
                                  :label="item.value || cityName"
                                  :value="item.id">
                          </el-option>
                      </el-select>
                      <el-select
                              v-model="quCode"
                              @change="choseBlock"
                              placeholder="区级地区">
                          <el-option
                                  v-for="item in distList"
                                  :key="item.id"
                                  :label="item.value || distName"
                                  :value="item.id">
                          </el-option>
                      </el-select>

                  </div>
                  <template v-if="shopList&&shopList.length>0" v-for="item in shopList" >
                    <div @click.stop="goShopDetail(item.id)">
                        <!--店铺内容-->
                        <div class="container-msg">
                          <div class="container-nav"><p>{{item.name}}</p>
                              <img src="../assets/images/navigation-icon.png" alt="">
                          </div>
                          <div class="container-msg-img"><img :src="item.pic" alt="">
                              <div class="container-msg-content">
                                  <div class="container-msg-star"><p>评价:</p>
                                      <base-star :stars="item.evaluateShow"></base-star>
                                      <p>总订单: {{item.sale}}单</p></div>
                                  <p>营业时间: {{item.storeTime}}</p>
                                  <p class="address">地址: {{item.province}}{{item.city}}{{item.dist}}{{item.address}}</p>
                              </div>
                          </div>
                      </div>
                    </div>
                  </template>
                  <template v-if="!shopList||shopList.length==0">
                    <p style="margin-top: 20px;color:gray;font-size: 14px;">暂时搜索不到店铺，更换筛选条件</p>
                  </template>

              </el-aside>
          </el-container>
      </div>

    </div>
</template>
<script>

    //评价
    import Commond from '@/components/Commond'
    //星星
    import star from '@/components/star'
    import {province,city,dist,stopList} from '@/utils/api.js'
    var jsonp = require('jsonp');
    export default {
        data() {
            return {
              shengCode: '',
              provinceList: [], 
              shiCode: '',
              cityList: [],
              quCode: '',
              distList: [],
              addressname:{

              },
              longitude: '',
              latitude: '',
              shopList: [],
              provideName: '',
              cityName: '',
              distName: '',
              pointsArr: []
            }
        },
        components: {
            'commond': Commond,
            'base-star': star
        },
        mounted() {
            this.$nextTick(() => {
                let cityCode = this.$route.params.code;
                if(cityCode>0){
                  this.initShop(cityCode)
                  //还要显示省市区
                  let json = JSON.parse(window.localStorage.getItem('checkedCity'));
                  if(json){
                    // this.provideName = json.province;
                    // this.cityName = json.city;
                    // this.distName = json.dist;
                    this.shengCode = json.provinceCode;
                    this.shiCode = json.cityCode;
                    this.quCode = json.distCode;  

                    this.initProvice(json.province);//初始化省份
                    this.$set(this.addressname,'provideName',json.province)
                    this.$set(this.addressname,'cityName',json.city)
                    this.$set(this.addressname,'distName',json.dist)

                  }
                  
                }else{
                  let _this = this;
                  //https://apis.map.qq.com/ws/location/v1/ip?ip=&key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&output=jsonp
                  jsonp('https://apis.map.qq.com/ws/location/v1/ip?key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&output=jsonp', null, function (err, data){
                    let res = data.result
                    let provide = res.ad_info.province
                    let city = res.ad_info.city
                    let district = res.ad_info.district;
                    _this.initProvice(provide);//初始化省份
                    _this.$set(_this.addressname,'provideName',provide)
                    _this.$set(_this.addressname,'cityName',city)
                    _this.$set(_this.addressname,'distName',district)
                    _this.$set(_this.addressname,'latitude',res.location.lat)
                    _this.$set(_this.addressname,'longitude',res.location.lng)
                    _this.initShop(res.ad_info.adcode) 
                  })  
                }
                
            })
        },
        watch:{
          shengCode: function(newVal,oldVal){
            this.initCity(this.addressname.cityName)
            this.shiCode = '';
            this.quCode = '';
          },
          shiCode: function(newVal,oldVal){
            this.ininDist(this.addressname.distName)
          },
          addressname: function(newVal,oldVal){
            this.provideName = newVal.provideName
            this.cityName = newVal.cityName
            this.distName = newVal.distName
          },
          shopList: function(newVal,oldVal){
            // if(!this.addressname.latitude||!this.addressname.longitude)return false;
            let container = this.$refs.container
            var center = new qq.maps.LatLng(this.addressname.latitude, this.addressname.longitude);
            var map = new qq.maps.Map(container, {
                center: center,
                zoom: 13
            });
            var latlngBounds = new qq.maps.LatLngBounds();
            var bounds = new qq.maps.LatLngBounds();
            var markers = [];
            this.shopList.map((item,index)=>{
              var gmarker = new qq.maps.Marker({
                position: new qq.maps.LatLng(item.latitude,item.longitude),
                map: map,
              }); 
              markers.push(gmarker);
            })
            for (var i = 0; i < markers.length; i++) {
                bounds.extend(markers[i].getPosition());
            }
            map.fitBounds(bounds);
            // var setVeiwPort = function (shop) {
            //   var bounds = new qq.maps.LatLngBounds();
            //   var markers = [];
            //   shop.map((item,index)=>{
            //     console.log(item.latitude)
            //     var gmarker = new qq.maps.Marker({
            //         position: new qq.maps.LatLng(item.latitude,item.longitude),
            //         map: map,
            //     });
            //     markers.push(gmarker);
            //   })
            //   for (var i = 0; i < markers.length; i++) {
            //       bounds.extend(markers[i].getPosition());
            //   }
            //   map.fitBounds(bounds);
            // };
            // setVeiwPort(this.shopList)
          }
        },
        methods:{
          initProvice: function(name){
            province().then(res => {
              if(!res){
                return false;
              }
              this.provinceList = [];
              res.map((item,index) => {
                if(item.areaName == name){//获取初始值
                  this.shengCode = item.areaId
                }
                this.provinceList.push({
                  id: item.areaId,
                  value: item.areaName
                })
              })
            })
          },
          initCity: function(name){
            if(!this.shengCode) return false;
            city({areaId: this.shengCode}).then(res => {
              if(!res){
                return false;
              }
              this.cityList = [];
              res.map((item,index) => {
                if(name == item.areaName){//获取初始值
                  this.shiCode = item.areaId
                }
                this.cityList.push({
                  id: item.areaId,
                  value: item.areaName
                })
              })
            })
          },
          ininDist: function(name){
            if(!this.shiCode) return false;
            dist({areaId: this.shiCode}).then(res => {
              if(!res){
                return false;
              }
              this.distList = [];
              res.map((item,index) => {
                if(name == item.areaName){//获取初始值
                  this.quCode = item.areaId
                }
                this.distList.push({
                  id: item.areaId,
                  value: item.areaName,
                  code: item.areaCode,//编码
                  latitude: item.latitude,
                  longitude: item.longitude
                })
              })
            })
          },
          initShop: function(code){
              stopList({areaCode: code}).then(res => {
                  this.shopList = res;
              })
          },
          choseProvince: function(value){
            this.shengCode = value;
          },
          choseCity:function(value){
            this.shiCode = value;
          },
          choseBlock: function(value){
            this.quCode = value;
            this.distList.map((item,index) => {
              if(item.id == value){
                this.initShop(item.code)
                this.addressname.latitude = item.latitude;
                this.addressname.longitude = item.longitude;
              }
            })
          },
          goShopDetail: function(id){
            this.$router.push({path: '/ServerStore/ServerStoreDetail/'+id})
          }
        },
        
    }
</script>
<style>
    .container-address .el-select {
        width: 126px;
    }
    .el-rate__text{
      display: none;
    }
</style>
<style lang="scss" scoped>
    .server-store-wrap {
        margin-top: 20px;
        .el-main {
            padding: 0 20px;
        }
    }
    .container-address{
        width: 380px;
        display: flex;
    }

    #container {
        height: 400px;
    }

    .commond-wrap {
        margin: 8px 0;
    }

    .container-msg {
        width: 380px;
        padding: 0 15px 15px 15px;
        position: relative;
        margin-bottom: 10px;
        box-sizing: border-box;
        margin-top: 10px;
        .container-nav {
            display: flex;
            align-items: center;
            height: 40px;
            background-color: #fff;
            border-bottom: 1px solid #efefef;

            img {
                position: absolute;
                right: 3%;

            }
        }
        .container-msg-img {
            display: flex;
            align-items: center;
            height: 85px;
            /*padding-left: 15px;*/
            .container-msg-content {
                display: flex;
                flex-direction: column;
                height: 72px;
                line-height: 24px;
                padding-left: 10px;
                width: 80%;
                box-sizing: border-box;
                p.address{
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  width: 100%;
                }
                .container-msg-star {
                    display: flex;
                    p:first-child {
                        margin-right: 8px;
                    }
                    p:last-child {
                        margin-left: 8px;
                    }

                }
                p {
                    text-align: left;
                }
            }
            img {

                width: 72px;
                height: 72px;
            }

        }

        /*width: 381px;*/
        height: 128px;
        background-color: #fff;
    }
</style>