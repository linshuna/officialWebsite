<template>
    <div class="AppointSuccess-wrap">
        <div class="appointSuccess" >
            <img src="../assets/images/BitmapCopy.png" alt="" width="200px" height="200px">
            <div class="appointSuccess-msg">
                <p class="pone">恭喜你，提交预约成功！</p>
                <p class="pt">本次预约单号为：{{orderNo}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppointSuccess",
        data(){
          return {
            orderNo :''
          }
        },
        mounted() {
          this.$nextTick(function(){
            this.orderNo = this.$route.params.orderNo
          })
        },
    }
</script>

<style scoped>
    .appointSuccess{
        background-color: #fff;
        margin-top: 30px;
        padding: 20px 0;
    }

    .pone{
        color: #f82501;
        font-size: 32px;
        margin-top: 55px;
    }
    .pt{
        font-size: 22px;
        color: #333333;
    }
</style>