<template>
    <div class="Aspiration">
      <div class="inner-wrap">
          <div class="nav-top"><img src="../assets/images/WechatIMG110.png" alt=""><p class="nav-top-p">首页 > 车主心声</p></div>
              <ul>
                  <li  v-for="item in CarOwnersVoiceList">
                      <!--<div class="new-Discount" >-->
                          <el-row :gutter="24">
                              <el-col :span="4">
                                  <div class="grid-content bg-purple-left">
                                      <img :src= "item.headimg"  alt="" width="80px" height="80px" >
                                  </div>
                              </el-col>

                              <el-col :span="20">
                                  <div class="bg-purple-center">
                                      <div class="top">
                                          <p>姓名:{{item.buyname}} 车牌：{{item.buycarNo}}</p>
                                      </div>
                                      <div class="star">
                                          <span>评价：</span><base-star :stars="5"></base-star>
                                      </div>

                                      <div class="footer">
                                          <p class="section">
                                  {{item.message}}
                                          </p>
                                      </div>
                                  </div>
                              </el-col>
                          </el-row>
                      <!--</div>-->
                  </li>


              </ul>
          <div class="page">

              <el-pagination
                      background
                      :current-page.sync="currentPage"
                      layout="total, prev, pager, next"
                      :total="count"
                      >
              </el-pagination>

          </div>
      </div>
    </div>
</template>

<script>
    import {CarOwnersVoice} from  '../utils/api.js'
    //星星
    import star from "@/components/star"

    export default {
        name: "Aspiration",
        data() {
            return {
                CarOwnersVoiceList:'',
                count: '',
                currentPage: 1
                // date: new Date，
                // value2:null
            }
        },
        components: {
            'base-star': star
        },
        mounted(){
            this._getCarOwnersVoice()
        },
        watch:{
          currentPage: function(newVal,oldVal){
            this._getCarOwnersVoice()
          }
        },
        methods: {
        _getCarOwnersVoice(){
            CarOwnersVoice({page: this.currentPage}).then(res=>{
                this.CarOwnersVoiceList = res.list
                this.count = res.page.count*10;
                console.log(res.page);
            })
        },

        }
    }

</script>

<style lang="scss" scoped>
    .nav-top {
        display: flex;
        padding-left: 3%;
        padding-top: 1%;
        align-items: center;
        img {
            height: 30px;
            margin-right: 1%;
        }

    }
  .star{
    span{
      vertical-align: middle;
    }
  }
.bg-purple-left img{
    border-radius: 100%;
}
    .new-Discount {
        background-color: #fff;
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        border: 1px solid #efefef;
    }
        /*background-color: #ff0;*/
        .bg-purple-left {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 200px;
        }
        .top{
            text-align: left;
        }
        .bg-purple-center {
            display: flex;
            flex-direction: column;
            height: 200px;
          justify-content: center;

            .star {
                margin-top: 20px;
                    text-align: left;
                /*img {*/
                    /*width: 24px;*/
                    /*height: 24px;*/
                /*}*/
            }
            .footer {
                margin-top: 20px;
            }

        }

    .inner-wrap{
        background-color: #fff;
    }
    .section {
        text-align: left;
    }


</style>
<style>
.el-rate__text{
  display: none;
}
</style>