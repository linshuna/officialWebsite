<template>
    <div class="DetailsMaintenance-wrap mask">
        <el-container class="main">
            <el-header height="auto">
                <base-top-header></base-top-header>
            </el-header>
            <base-header activeIndex='7'></base-header>
        </el-container>
        <div class="new-wrap">
            <div class="inner-wrap">
                <el-container>
                    <el-main width="968px">
                        <ul class="inner-wrap-ul">
                            <li>
                                <div class="Maintenance-left">
                                    <img src="../assets/images/特惠背景.png" width="346px" height="152px" alt="">
                                    <div class="Maintenance-left-p">
                                        <p>保养5折优惠</p>
                                        <p>萨达等哈手机的哈萨克觉得哈是多久。</p>
                                        <p>但是等哈死都啊师大 u 哈斯哈绥芬河dadasdsadasdasdasd</p>
                                        <p>达萨达达达萨达萨达达萨达萨达大厦大</p>
                                        <p class="Maintenance-date">今天</p>
                                    </div>


                                </div>
                            </li>
                            <li>
                                <div class="Maintenance-left">
                                    <img src="../assets/images/特惠背景.png" width="346px" height="152px" alt="">
                                    <div class="Maintenance-left-p">
                                        <p>保养5折优惠</p>
                                        <p>萨达等哈手机的哈萨克觉得哈是多久。</p>
                                        <p>但是等哈死都啊师大 u 哈斯哈绥芬河dadasdsadasdasdasd</p>
                                        <p>达萨达达达萨达萨达达萨达萨达大厦大</p>
                                        <p class="Maintenance-date">今天</p>
                                    </div>


                                </div>
                            </li>
                            <li>
                                <div class="Maintenance-left">
                                    <img src="../assets/images/特惠背景.png" width="346px" height="152px" alt="">
                                    <div class="Maintenance-left-p">
                                        <p>保养5折优惠</p>
                                        <p>萨达等哈手机的哈萨克觉得哈是多久。</p>
                                        <p>但是等哈死都啊师大 u 哈斯哈绥芬河dadasdsadasdasdasd</p>
                                        <p>达萨达达达萨达萨达达萨达萨达大厦大</p>
                                        <p class="Maintenance-date">今天</p>
                                    </div>


                                </div>
                            </li>
                            <div class="page">
                                <el-pagination
                                        background
                                        layout="prev, pager, next"
                                        :total="1000">
                                </el-pagination>
                            </div>
                        </ul>


                    </el-main>
                    <el-aside width="307px">
                        <ul class="activity">
                            <div class="activity-nav"><p>最新活动</p></div>

                            <li class="activity-li">
                                <img src="../assets/images/活动图片.png" width="244px" height="241px" alt="">
                            </li>
                            <li class="activity-li">
                                <img src="../assets/images/活动图片.png" width="244px" height="241px" alt="">
                            </li>
                        </ul>
                    </el-aside>

                </el-container>

            </div>
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

    export default {
        data() {
            return {
                date: new Date()
            }
        },
        components: {
            'base-top-header': BaseTopHeader,
            'base-footer': BaseFooter,
            'base-header': BaseHeader
        },
    }
</script>
<style lang="scss" scoped>

    .new-wrap {
        padding-top: 30px;
        .inner-wrap {
            .inner-wrap-ul {
                background-color: #fff;
                .page{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 70px;
                }
            }
        }
        .activity {

            padding-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .activity-li {
                width: 269px;
                background-color: #fff;
                padding: 0;
            }
            .activity-nav {
                width: 269px;
                padding-top: 10px;
                margin-bottom: 10px;
                background-color: #fff;
                height: 57px;
                line-height: 37px;
            }
        }

        .Maintenance-left {
            background-color: #fff;
            display: flex;
            padding: 12px 0 12px 30px;
            border-bottom: 1px solid #ccc;

            /*position:relative;*/
            .Maintenance-date {
                position: absolute;
                right: 10px;
                top: 10%;
            }
            .Maintenance-left-p {
                display: flex;
                flex-direction: column;
                text-align: left;
                margin-left: 64px;
                position: relative;
                p:first-child {
                    padding-bottom: 30px;
                }
            }
        }
        .el-main {
            /*width: 968px;*/
            /*background-color: #ff0;*/
        }
        .el-aside {
            /*background-color: pink;*/
            li {
                padding: 12px 0 12px 0;
            }
        }
    }
</style>