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
                            <li v-for="item in NewsIndexList">
                                <div class="Maintenance-left">
                                    <img :src="item.pic" width="346px" height="152px" alt="">
                                    <div class="Maintenance-left-p">
                                        <p>{{item.title}}</p>
                                      <p>
                                          {{item.des}}
                                      </p>
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

                            <li class="activity-li" v-for="item in activityLatestList">
                                <img :src="item.pic" width="100%" height="100%" alt="">
                            </li>
                        </ul>
                    </el-aside>w

                </el-container>

            </div>
        </div>

        <base-footer></base-footer>
    </div>
</template>
<script>
    import {NewsIndex,NewsActivityLatest} from '../utils/api.js'
    //顶部
    import BaseTopHeader from '@/components/BaseTopHeader'
    //头部
    import BaseHeader from '@/components/BaseHeader'
    //底部
    import BaseFooter from "@/components/BaseFooter"

    export default {
        data() {
            return {
                date: new Date(),
                NewsIndexList:'',
                activityLatestList:''
            }
        },
        components: {
            'base-top-header': BaseTopHeader,
            'base-footer': BaseFooter,
            'base-header': BaseHeader
        },
        mounted(){
            this._getNewsIndex()
            this._getactivityLatest()
        },
        methods:{
            _getNewsIndex(){
                NewsIndex().then(res=>{
                    this.NewsIndexList = res.list
                    console.log(res.list);
                })
            },
            _getactivityLatest(){
                NewsActivityLatest().then(res=>{
                  this.activityLatestList = res
                    console.log(res);
                })
            }
        }
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
                padding: 10px;
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
            position: relative;

            /*position:relative;*/
            .Maintenance-date {
                position: absolute;
                right: 10px;
                top: 10%;
                color: #ccc;
            }
            .Maintenance-left-p {
                display: flex;
                flex-direction: column;
                text-align: left;
                margin-left: 64px;
                /*position: relative;*/
                height: 152px;
                overflow: hidden;
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