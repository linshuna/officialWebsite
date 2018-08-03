<template>
    <div class="Aspiration mask">
        <div class="inner-wrap">
            <!--<el-container class="main">-->
                <el-header height="auto">
                    <base-top-header></base-top-header>
                </el-header>

                <base-header activeIndex='7'></base-header>

                <div class="Aspiration-nav">
                    <div class="Aspiration-nav-top">

                        <el-row :gutter="24">
                            <el-col :span="10">
                                <div class="Aspiration-nav-left">
                                    <p>4.99</p>
                                    <p>
                                        <base-star :stars="5"></base-star>
                                    </p>
                                    <p><i>4542人</i>评价</p>
                                </div>
                            </el-col>

                            <el-col :span="7">
                                <div class="Aspiration-nav-content">
                                    <div class="Aspiration-nav-right-first">
                                        <div class="Aspiration-nav-right-msg">
                                            <img src="../assets/images/态度.png" alt="">
                                            <p>服务态度</p>
                                        </div>

                                        &nbsp<p>4.96</p>
                                    </div>
                                    <div class="Aspiration-nav-right">
                                        <div class="Aspiration-nav-right-msg">
                                            <img src="../assets/images/态度.png" alt="">
                                            <p>服务质量</p>
                                        </div>

                                        &nbsp<p>4.96</p>
                                    </div>
                                    <div class="Aspiration-nav-right">
                                        <div class="Aspiration-nav-right-msg">
                                            <img src="../assets/images/态度.png" alt="">
                                            <p>技术娴熟</p>
                                        </div>

                                        &nbsp<p>4.96</p>
                                    </div>

                                </div>
                            </el-col>
                            <el-col :span="7">
                                <div class="Aspiration-nav-content-right">
                                    <div class="Aspiration-nav-right-first">
                                        <div class="Aspiration-nav-right-msg">
                                            <img src="../assets/images/态度.png" alt="">
                                            <p>服务态度</p>
                                        </div>

                                        &nbsp<p>4.96</p>
                                    </div>
                                    <div class="Aspiration-nav-right">
                                        <div class="Aspiration-nav-right-msg">
                                            <img src="../assets/images/态度.png" alt="">
                                            <p>服务质量</p>
                                        </div>

                                        &nbsp<p>4.96</p>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>


                <ul>
                    <li>
                        <div class="new-Discount">
                            <el-row :gutter="20">
                                <el-col :span="7">
                                    <div class="grid-content bg-purple-left">
                                        <img src="../assets/images/特惠背景.png" alt="" width="198px" height="160px">
                                    </div>
                                </el-col>
                                <el-col :span="15">
                                    <div class="bg-purple-center" width="666px;">
                                        <div class="top">
                                            <p>姓名asdasdasd 车牌：粤A1W9J3</p>
                                        </div>
                                        <div class="star">
                                            <base-star :stars="5"></base-star>
                                        </div>

                                        <div class="footer">
                                            <p class="section">a速度快拉上决定离开家卡拉斯京打开了手机的老师决定了卡升级啦开始打卡了手机打
                                                萨达大厦阿斯顿爱上大叔啊啊的卡老师急拉就看电视剧符合当时看见发货快速的减肥健康的发货速度看见发货的说将匡扶汉室咖啡健康的发货时看见发送</p>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="2">
                                    <div class="grid-content bg-purple-right"></div>
                                </el-col>
                            </el-row>
                        </div>
                    </li>


                </ul>
            <!--</el-container>-->

            <base-footer></base-footer>
        </div>
    </div>
</template>

<script>
    //顶部
    import BaseTopHeader from '@/components/BaseTopHeader'
    //头部
    import BaseHeader from '@/components/BaseHeader'

    //底部
    import BaseFooter from "@/components/BaseFooter"
    //星星
    import star from "@/components/star"

    export default {
        name: "Aspiration",
        data() {
            return {
                // date: new Date，
                // value2:null
            }
        },
        components: {
            'base-top-header': BaseTopHeader,
            'base-footer': BaseFooter,

            'base-header': BaseHeader,
            'base-star': star
        }
    }

</script>

<style lang="scss" scoped>

    .Aspiration-nav {
        padding: 20px;
        height: 175px;
        background-color: #fff;
        margin-top: 96px;
        border: 1px solid #efefef;
        .Aspiration-nav-content{
            padding-left: 50px;
        }
        .Aspiration-nav-top {
            height: 135px;
            background-color: #fff;

            .Aspiration-nav-right, .Aspiration-nav-right-first {
                display: flex;
                align-items: center;
                margin-top: 10px;

                .Aspiration-nav-right-msg, .Aspiration-nav-right-first {

                    background-color: #efefef;
                    display: flex;
                    align-items: center;
                    width: 121px;
                    img {
                        padding-right: 30px;
                    }
                }
                .Aspiration-nav-right-first {
                    margin-top: 0;
                }
                p:first-child {
                    background-color: #efefef;
                }
            }
            .Aspiration-nav-left {
                display: flex;
                flex-direction: column;
                p:first-child {
                    font-size: 32px;
                    color: #F82501;
                }
                p {
                    text-align: left;
                }
                p:last-child {
                    color: #999999;
                }
                i {
                    color: #F82501;
                }
            }
        }
    }

    .new-Discount {
        background-color: #fff;
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        border: 1px solid #efefef;
        /*background-color: #ff0;*/
        .bg-purple-left {
        }
        .bg-purple-center {
            width: 100%;
            display: flex;
            flex-direction: column;
            height: 160px;
            /*background: #f00;*/
            .top {
                text-align: left;
            }
            .star {
                margin-top: 20px;

                img {
                    width: 24px;
                    height: 24px;
                }
            }
            .footer {
                margin-top: 20px;
            }

        }
    }

    .section {
        overflow: hidden;
        height: 100px;
    }


</style>