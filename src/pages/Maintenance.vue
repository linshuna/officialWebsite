<template>
    <div class="maintenance-wrap">
        <div class="maintenance">
            <img :src="AdtList.pic" alt="" height="520px" width="100%" class="inner-wrap">
            <!--<el-row :gutter="24">-->
            <!--<el-col :span="24">-->
            <div class="inner-wrap">
                <div class="grid-content maintenance-top inner-wrap">
                    <el-steps :space="800" :active="3" finish-status="success">
                        <el-step title="选择车型"></el-step>
                        <el-step title="推荐车型"></el-step>
                        <el-step title="确认保养"></el-step>
                    </el-steps>
                </div>

            </div>

            <!--</el-col>-->
            <!--</el-row>-->
            <template v-if="model_id==0">
              <p style="padding: 1rem 0;color:gray;">请选择车型!</p>
            </template>
            <template v-else>
              <div class="selectionCar inner-wrap">
                  <div class="selectionCar-section">
                      <div class="selectionCar-msg">
                          <p class="selectionCar-title">{{title}}</p>
                          <div class="selectionCar-msg-center">
                              <!--<el-select v-model="value" placeholder="请选择">
                                  <el-option
                                          v-for="item in options"
                                          :key="item.value"
                                          :label="item.label"
                                          :value="item.value">
                                  </el-option>
                              </el-select>-->
                          </div>
                      </div>
                      <div class="selectionCar-msg-ul">
                          <ul class="selectionCar-ul">
                              <li class="selectionCar-msg-li" v-for="(item,index) in maintainList" @click.stop="carOfferOption(item,index)" :class="{'active-color':item.checked}">
                                  <p>{{item.title}}</p>
                              </li>
                          </ul>

                      </div>
                  </div>

              </div>
              <div class="inner-wrap">
                  <el-row :gutter="20" class="maintenance-section inner-wrap">
                      <el-col :span="10"><p>名称</p></el-col>
                      <el-col :span="8"><p>工时</p></el-col>
                      <el-col :span="8"><p>配件</p></el-col>
                      <el-col :span="8"><p>金额</p></el-col>
                  </el-row>
                  <template v-if="!carOfferList||carOfferList.length==0">
                    <p style="padding: 1rem 0;background: #fff;color:gray;">暂时搜不到对应的报价信息，请更换筛选条件</p>
                  </template>
                  <template v-else>
                    <ul>
                      <li v-for="item in carOfferList">
                          <el-row :gutter="20" class="maintenance-section-msg">
                              <el-col :span="10"><p>{{item.name}}</p></el-col>
                              <el-col :span="8"><p>￥{{item.works}}</p></el-col>
                              <el-col :span="8"><p>￥{{item.parts}}</p></el-col>
                              <el-col :span="8"><p class="redColor">￥{{item.total}}</p></el-col>
                          </el-row>
                      </li>
                    </ul>
                  </template>
                  
              </div>
            </template>
            

        </div>
    </div>
</template>

<script>
    import {
        IndexAd, //广告接口
        seriesCarPlate,//车牌的类型
        MaintainMiles,// 自助保养 里程接口
        carOffer,//车辆的报价
        carmodelTitle
    } from '../utils/api.js'

    export default {
        data() {
            return {
                date: new Date(),
                AdtList: [],
                options: [],
                value: '',
                model_id:'',
                maintainList:[],
                carOfferList: [],
                activeId: 1,
                title: ''
            }
        },
        mounted() {
            this._IndexAd()
            this.model_id = this.$route.params.carnatid
            // this.initCarplate();//查看款式
            this.initCarplateTitle();//车系
        },
        watch:{
          model_id: function(newVal,oldVal){
            this._MaintainMiles(newVal)
            
          }
        },
        methods: {
            _IndexAd() {
                IndexAd().then(res => {
                    this.AdtList = res[2]
                })
            },
            initCarplateTitle: function(){
              if(this.model_id==0){
                alert("请选择车型");
                // let _this = this;
                // setTimeout(function(){
                //   _this.$router.push({'path': '/'})
                // },1000)
                return false;
              }
              carmodelTitle({model_id: this.model_id}).then(res => {
                this.title = res.model;
              }) 
            },
            _MaintainMiles(id){
              if(this.model_id==0){
                return false;
              }
              MaintainMiles({model_id: id}).then(res=>{
                // this.activeId = res[0]['model_id'];
                // console.log(res[0]['model_id'])
                this.maintainList = res;
                res.map((item,index) => {
                  console.log(index)
                  this.$set(this.maintainList[index],'checked',index==0?true:false)
                })
              })
            },
            carOfferOption: function(item,num){
              this.maintainList.map((item,index) => {
                  this.maintainList[index]['checked'] = false
              })
              this.maintainList[num]['checked'] = true
              this.carOfferList = [];//清空数据
              carOffer({title: item.title,model_id: this.model_id}).then(res => {

                this.carOfferList = res.list;
                
              })
            }
        },

    }
</script>
<style>
    .el-step__head.is-wait, .el-step__head.is-process, .el-step__head.is-success {
        text-align: left;
    }

    .el-step__title.is-success {
        margin-left: -20px;
    }

</style>

<style lang="scss" scoped>
    .selectionCar-msg {
        position: relative;
        display: flex;
        .selectionCar-msg-center {
            padding-top: 45px;
        }
        .selectionCar-title {
            display: inline-block;
            left: 0;
            margin-bottom: 10px;
            position: absolute;
            font-size: 24px;
        }
    }
    .selectionCar-msg-li{
        width: 165px;
        height: 52px;
        border: 1px solid #ccc;
        line-height: 52px;
        margin: 20px 20px 0 0 ;
    }
    .selectionCar-msg-ul{
      display: flex;
      .selectionCar-ul{
        display: flex;
        flex-wrap: wrap;
      }
    }
    .maintenance-section {
        margin: 0 !important;
    }

    .maintenance-section-msg {
        margin: 0 !important;
        .redColor{
          color: #F82501;
          font-size: 14px;
        }
    }

    .selectionCar-title {
        display: inline-block;
        left: 20px;
        margin-bottom: 10px;
        position: absolute;
    }

    .selectionCar {
        background-color: #fff;
        border-bottom: 1px solid #efefef;
        padding: 20px 100px 20px 100px;
        position: relative;

    }

    .maintenance {
        .maintenance-top {
            width: 100%;
            height: 186px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 41px 0 41px 0;
            background-color: #fff;
            border: 1px solid #efefef;
            padding-left: 230px;
            .el-steps {
                width: 800px;

            }

        }
        .maintenance-section {
            height: 78px;
            display: flex;
            align-items: center;
            background-color: #fff;
            border-bottom: 1px solid #efefef;
        }
        .maintenance-section-msg {
            height: 133px;
            display: flex;
            align-items: center;
            background-color: #fff;
            border-bottom: 1px solid #efefef;
        }
    }
    .active-color{
      border:1px solid #F82501!important;
      color: #F82501!important;
    }
    .selectionCar-ul li:hover{
      border:1px solid #F82501!important;
      color: #F82501!important;
      cursor: pointer;
    }
</style>