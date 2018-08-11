<template>
    <div class="Appointments-wrap">
        <div class="appointments inner-wrap">
            <img src="../assets/images/banner.png" alt="">


            <div class="appointments-msg">
                
                <div class="appointments-msg-section">
                    <div>
                      <span>车牌类型：</span>
                      <el-input v-model="carplate" placeholder="请输入厂牌" @focus="checked=true"></el-input>
                      <el-input v-model="carmodule" placeholder="请输入车牌" @focus="checked=true"></el-input>
                      <el-input v-model="carnat" placeholder="请输入车系" @focus="checked=true"></el-input>
                    </div>

                    <!--<p class="appointments-msg-title">马自达 马自达3 1.5L 2015年生产</p>-->
                    <div class="appointments-msg-bg">
                        <div class="appointments-msg-left">
                            <div class="msg-section-content">

                                <p>预约车主姓名:</p>
                                <el-input v-model="appname" placeholder="请输入内容"></el-input>
                            </div>
                            <div class="msg-section-content">

                                <p>当前行驶里程:</p>
                                <el-input v-model="mileage" placeholder="请输入内容"></el-input>公里
                            </div>
                            <div class="msg-section-content">

                                <p>预约服务项目:</p>
                                <el-select v-model="Service" placeholder="请选择" >
                                    <el-option
                                            v-for="item in AppointServiceList"
                                            :key="item.vid"
                                            :label="item.name"
                                            :value="item.name">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>

                        <div class="appointments-msg-right">
                            <div class="msg-section-content">

                                <p>当前车牌号码:</p>
                                <el-input v-model="carNo" placeholder="请输入车牌号码"></el-input>
                            </div>
                            <div class="msg-section-content">

                                <p>预约车主手机:</p>
                                <el-input v-model="phone" placeholder="请输入手机号码"></el-input>
                            </div>
                            <div class="msg-section-content">

                                <p>其他备注信息:</p>
                                <el-input v-model="remark" placeholder="请输入备注信息"></el-input>
                            </div>

                        </div>
                    </div>

                    <div class="appointments-msg-footer">
                        <p>预约日期时间:</p>
                        <el-date-picker
                            v-model="orderDay"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                    </div>

                    <div class="msg-section-content">
                        请输出验证码:<el-input v-model="VerificationCode" placeholder="请输入备注信息"></el-input>
                        <img :src="codeImg" class="img-code" @click="updateCode" alt="验证码" title="点击换一张">
                    </div>

                    <button class="footer-btn" @click="order">立即预约</button>
                </div>

            </div>
        </div>
        <brand :checked.sync="checked" @getCarplate="getCarplate" @getCarmodel="getCarmodel" @getCarnat="getCarnat"></brand>
    </div>

</template>

<script>
    import {AppointOrder,AppointService} from'../utils/api.js'
    import brand from "@/components/brand"
    export default {
       data(){
           return{
               AppointServiceList: [],
               value: '',
               appname:'',
               mileage:'',
               Service:'',
               phone:'',
               remark:'',
               orderDay:'',
               carNo:'',
               codeImg:'http://w.hhqccar.cn/Public/assets/yzm.php',
               VerificationCode:'',
               vid:1,
               shop_id:'',
               modelid: '',
               checked: false,
               carplate: '',
               carmodule: '',
               carnat: ''
           }
       },
       components:{
         'brand': brand
       },
        methods:{
            order(){
                    if(!this.modelid){
                      alert('请选择车辆类型');
                      return false;
                    }else if(!this.appname){
                        alert('请输入预约车主姓名');
                        return false;
                    }else if(!this.carNo||this.carNo.length<=7){
                      if (this.carNo.length <= 7){
                        var express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[警京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{0,1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}[A-Z0-9]{0,1}[A-Z0-9]{0,1}$/;
                        if(!express.test(this.carNo)){
                          alert("请输入正确的车牌号码");
                          return false;
                        }

                      }
                      if(!this.carNo){
                        alert('请输入车牌号码')
                        return false;
                      }
                        
                    }else if(!this.mileage){
                        alert('请输入里程')
                        return false;
                    }else if(!this.phone){
                        let reg = /^1[3|5|8]\d{9}$/
                        if (!reg.test(this.phone)) {
                          alert('请输入正确的手机号码')
                          return
                        }else{
                          alert('请输入预约车主手机号码')
                        }
                        
                        return false;
                    }else if(!this.Service){
                        alert('请选择项目')
                        return false;
                    }else if(!this.orderDay){
                        alert('请选择预约时间')
                        return false;
                    }else if(!this.VerificationCode){
                        alert('请输入验证码')
                        return false;
                    }



                let reqData = {
                    modelid:this.modelid,
                    // name:this.value,
                    orderDay: this.orderDay,
                    appname: this.appname,
                    name: this.Service,
                    phone: this.phone,
                    carNo:this.carNo,
                    remark: this.remark,
                    shop_id:this.shop_id,
                    code:this.VerificationCode,
                    mileage: this.mileage,
                }
                console.log(reqData)
                AppointOrder({lists:JSON.stringify(reqData)}).then(res=>{
                    // console.log(lists);
                    if(!res.errorCode){
                      alert("预约成功") 
                      let _this = this;
                      setTimeout(function(){
                        _this.$router.push({path: '/ServerStore/ServerStoreDetail/AppointSuccess/'+res.orderNo})
                      },1000)
                    }
                    
                })
            },
            updateCode() {
                this.codeImg = `http://w.hhqccar.cn/Public/assets/yzm.php?=${Math.random()}`;
            },
            _AppointServicelist(){
                AppointService({shop_id:this.shop_id}).then(res=>{
                    this.AppointServiceList =res
                    console.log(res);
                })
            },
            getCarplate: function(value){
              this.carplate = value
            },
            getCarmodel: function(value){
              this.carmodule = value
            },
            getCarnat: function(data){
              this.modelid = data.model_id;
              this.carnat = data.carnat
            }


        },
        mounted(){
           this._AppointServicelist()

        },
        created(){
            this.shop_id = this.$route.params.shopId;

        }
    }
</script>

<style scoped>

    .el-input{
        width: 250px;
    }
</style>
<style lang="scss" scoped>
    .footer-btn{
        background-color: #f82501;
        color: #fff;
        width: 286px;
        height: 44px;
        margin-top: 50px;

    }
    .appointments-msg-footer{
        text-align: left;
        margin-left: 150px;
        margin-top: 50px;
        p{
          display: inline-block;
        }
    }
    .appointments-msg-bg{
        display: flex;
    }
    .appointments-msg-title {
        text-align: left;
        margin-left: 150px;
        font-size: 24px;
    }

    .appointments-msg-section {
        background-color: #fff;
        height: 608px;
        margin-top: 37px;
        padding-top: 30px;
        .msg-section-content {
            display: flex;
            margin-top: 30px;
            align-items: center;
            margin-left: 150px;
            p{
              margin-right: 5px;
            }
            .el-select{
              width: 250px;
            }
            .img-code{
              margin-left: 5px;
            }
        }
    }
</style>