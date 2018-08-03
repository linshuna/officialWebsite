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
                <el-aside width="380px">
                    <div class="container-address">
                        <!--店铺列表-->
                        <el-select
                                v-model="sheng"
                                @change="choseProvince"
                                placeholder="省级地区">//这个change事件是select的，不是option的，别写在option里面
                            <el-option
                                    v-for="item in province"
                                    :key="item.id"
                                    :label="item.value"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                        <el-select
                                v-model="shi"
                                @change="choseCity"
                                placeholder="市级地区">
                            <el-option
                                    v-for="item in shi1"
                                    :key="item.id"
                                    :label="item.value"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                        <el-select
                                v-model="qu"
                                @change="choseBlock"
                                placeholder="区级地区">
                            <el-option
                                    v-for="item in qu1"
                                    :key="item.id"
                                    :label="item.value"
                                    :value="item.id">
                            </el-option>
                        </el-select>

                    </div>
                    
                    <router-link to="/ServerStore/ServerStoreDetail">
                        <!--店铺内容-->
                        <div class="container-msg">
                          <div class="container-nav"><p>NO.1 微位科技服务店 (花都店)</p>
                              <img src="../assets/images/navigation-icon.png" alt="">
                          </div>
                          <div class="container-msg-img"><img src="../assets/images/门店1.png" alt="">
                              <div class="container-msg-content">
                                  <div class="container-msg-star"><p>评价:</p>
                                      <base-star :stars="3"></base-star>
                                      <p>总订单: 7876单</p></div>
                                  <p>营业时间: 08:00-18:00</p>
                                  <p>地址: 广州市荔湾区芳信路224号</p>
                              </div>
                          </div>
                      </div>
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
    //星星
    import star from '@/components/star'

    export default {
        data() {
            return {}
        },
        components: {
            'base-top-header': BaseTopHeader,
            'base-footer': BaseFooter,
            'base-header': BaseHeader,
            'commond': Commond,
            'base-star': star
        },
        mounted() {
            this.$nextTick(() => {
                let container = this.$refs.container
                var center = new qq.maps.LatLng(39.916527, 116.397128);
                var map = new qq.maps.Map(container, {
                    center: center,
                    zoom: 13
                });

                var latlngBounds = new qq.maps.LatLngBounds();
                var points = [
                    new qq.maps.LatLng(39.916527, 116.39712),
                    new qq.maps.LatLng(38.81987, 115.49425),
                    new qq.maps.LatLng(39.9, 116.4),
                ];
                var markers = [];
                //添加四个标注，并将其存入数组marker[]
                for (var i = 0; i < points.length; i++) {
                    var gmarker = new qq.maps.Marker({
                        position: points[i],
                        map: map,
                    });
                    markers.push(gmarker);
                }
                var setVeiwPort = function () {
                    var bounds = new qq.maps.LatLngBounds();
                    for (var i = 0; i < markers.length; i++) {
                        bounds.extend(markers[i].getPosition());
                    }
                    map.fitBounds(bounds);
                };


            })
        },
    }
</script>
<style>
    .el-select {
        width: 126px;
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
        width: 400px;
        display: flex;
    }

    #container {
        height: 400px;
    }

    .commond-wrap {
        margin: 8px 0;
    }

    .container-msg {
        padding: 0 15px 15px 15px;
        position: relative;
        .container-nav {
            width: 314px;
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