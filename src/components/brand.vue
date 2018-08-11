<template>
  <div>
    <div class="mask" v-if="checked">
      <div class="inner-mask">
        <div class="inner-center">
          <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click.native="close">
            <i class="el-message-box__close el-icon-close"></i>
          </button>
          <div class="border-bottom-1px check-car-title">
            <img src="../assets/images/checkCarIcon.png" alt="车标" width="25px"/>
            <span>选择车型</span>
          </div>
          <el-steps :active="active" align-center simple>
            <span :class="{'active': active>=1}">1</span><el-step title="选择品牌"></el-step>
            <span :class="{'active': active>=2}">2</span><el-step title="选择车系"></el-step>
            <span :class="{'active': active>=3}">3</span><el-step title="选择车型"></el-step>
          </el-steps>
          <div class="zimu-wrap">
            <span class="hot">热门</span>
            <template v-for="item in zimuArr">
              <span @click="abc(item)">{{item}}</span>
            </template>
          </div>
          <div class="check-car-main">
            <el-row :gutter="20" v-if="active==1">
              <el-col :span="6" v-for="(item,index) in IndexCarplateList"@click.native="checkCarType(item.carplateid,item.carplate)"  >
                <div class="check-car" >
                  <img :src="item.icon" alt="车标" width="20px"/>
                  <span>{{item.carplate}}</span>

                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" v-if="active==2" >
              <el-col :span="6" v-for="(item,index) in CarmodelList"@click.native="checkCarmodel(item.carmodelid,item.carmodel)">
                <div class="check-car" >
                  <span>{{item.carmodel}}</span>

                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" v-if="active==3" >
              <el-col :span="6" v-for="(item,index) in IndexCarnatList" @click.native="checkCarnar(item.model_name,item.model_id)">
                <div class="check-car" >
                  <span>{{item.model_name}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        
    
      </div>      
    </div>
  </div>
</template>
<script>
  import { 
    IndexCarplate,//首页 车品牌
    IndexCarmodel,
    IndexCarnat,//首页 车型车系
  } from '@/utils/api.js'
  export default {
    props:{
      checked: {type: Boolean}
    },
    data (){
      return {
        zimuArr: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        IndexCarplateList: [],
        caractive: 1,
        active: 1,
        CarmodelList:[],
        IndexCarnatList: [],
        carplate: '',
        carmodule: '',
        carmodelid: '',
        model_id: ''
        // newsCategoryLists: [],
      }
    },
    watch:{
      checked: function(newVal,oldVal){
        if(newVal){
          this._IndexCarplate('A')
        }
      }
    },
    methods:{
      abc(carens){
        this._IndexCarplate(carens)
      },
      // //选择车辆信息 车型号 接口
      _IndexCarmodel(caricon){
          IndexCarmodel({carplateid:caricon}).then(res =>{
              this.CarmodelList = res
          })
      },
      //选择车辆信息 车系
      _IndexCarnat(carmodelid){
          IndexCarnat({carnatid:carmodelid}).then(res =>{
              this.IndexCarnatList = res
              // console.log(res);
          })
      },
      //选择车辆信息 车品牌 字母
      _IndexCarplate(caren) {
          IndexCarplate({en:caren}).then(res => {
              this.IndexCarplateList=res
              // console.log(res);
          });

      },
      close: function(){
        console.log('选中')
        // this.checked=false
        this.$emit("update:checked",false)
      },
      checkCarType: function(caricon,carplate){
        this.carplate=carplate
        this.active = 2
        this._IndexCarmodel(caricon)
        this.$emit('getCarplate',carplate)
      },
      //车型 点击
      checkCarmodel(carmodelid,carmodels){
          this.carmodelid=carmodelid
          this.carmodule=carmodels
          this.active=3
          this._IndexCarnat(carmodelid)
          this.$emit('getCarmodel',carmodels)
      },
      //车系点击 车系
      checkCarnar(carnats,modelid){
          this.model_id = modelid
          // this.checked=false
          this.carnat=carnats
          this.$emit('update:checked',false)
          this.$emit('getCarnat',{
            'carnat': carnats,
            'model_id': modelid
          })
      },
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #dcdcdc;
  $main-color: #F82501;
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    width: 99%;
    z-index: 99999;
    .inner-mask{
      min-height: 400px;
      width: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .inner-center{
        min-height: 400px;
        position: relative;
        z-index: 999;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        background: #fff;
      }
      .check-car-title{
        text-align: left;
        line-height: 20px;
        padding-bottom: 10px;
      }
      .el-steps{
        margin: 10px 0;
      }
      .zimu-wrap{
        text-align: left;
        margin-bottom: 10px;
        .hot{
          color: #fff;
          display: inline-block;
          width:35px;
          line-height: 18px;
          background: $main-color;
          text-align: center;
        }
        span{
          font-size: 12px;
          color: #898989;
          margin-right: 20px;
        }
      }
      .check-car-main{
        text-align: center;
        .el-row{
          margin-top: 10px;
        }
        .check-car{
          font-size: 12px;
          max-width: 180px;
          text-align: left;
          box-sizing: border-box;
          padding: 5px 10px;
          line-height: 20px;
          border: 1px solid #DDDDDD;
          margin-bottom: 10px;
          span{
            margin-left: 4px;
          }
        }
        .check-active{
          border: 1px solid $main-color;
        }
      }
    }
    .inner-mask::after{
      width: 100%;
      height: 100%;
      padding: 5px;
      content: '';
      position: absolute;
      left: -5px;
      top: -5px;
      opacity: 0.2;
      background: #000000;
    }
  }
</style>
<style>
  .mask .el-step{
    text-align: left!important;
  }
  .mask .el-step__icon{
    display: none;
  }
  .mask .el-steps span{
    line-height: 20px;
    font-size: 16px;
    border: 1px solid transparent;
    border-radius: 50%;
    display: inline-block;
    width: 20px;
    height: 20px;
    color: #fff;
    background: #CBCBCB;
  }
  .mask .inner-mask .active{
    background: #F82501;
  }
  .mask .is-finish{
    color: #F82501;
  }
  .mask .el-step__line-inner{
    display:none;
  }
</style>