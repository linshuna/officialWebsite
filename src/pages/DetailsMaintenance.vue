<template>
    <div class="DetailsMaintenance-wrap">

      <div class="new-wrap">
          <div class="inner-wrap">
              <el-container>
                  <el-main width="968px">
                      <ul class="inner-wrap-ul">
                          <li v-for="item in NewsIndexList" @click.stop="goNewsDetail(item.id)">
                              <div class="Maintenance-left">
                                  <img :src="item.pic" width="346px" height="152px" alt="">
                                  <div class="Maintenance-left-p">
                                      <p>{{item.title}}</p >
                                    <p>
                                        {{item.des}}
                                    </p >
                                      <p class="Maintenance-date">今天</p >
                                  </div>
                              </div>
                          </li>
                          <div class="page">
                              <el-pagination
                                      background
                                      layout="prev, pager, next"
                                      :total="count"
                                      :current-page.sync="currentPage">
                              </el-pagination>
                          </div>
                      </ul>


                  </el-main>
                  <el-aside width="307px">
                      <ul class="activity">
                          <div class="activity-nav"><p>最新活动</p ></div>

                          <li class="activity-li" v-for="item in activityLatestList" @click.stop="goNewsDetail(item.id)">
                              <img :src="item.pic" width="100%" height="100%" alt="">
                          </li>
                      </ul>
                  </el-aside>

              </el-container>

          </div>
      </div>

    </div>
</template>
<script>
    import {NewsIndex,NewsActivityLatest} from '../utils/api.js'

    export default {
        data() {
            return {
                date: new Date(),
                NewsIndexList:'',
                activityLatestList:'',
                count: 10,
                currentPage: 1
            }
        },
        mounted(){
            this._getNewsIndex()
            this._getactivityLatest()
        },
        watch:{
          currentPage: function(newVal,oldVal){
            console.log(newVal)
            this._getNewsIndex()
          }
        },
        methods:{
            _getNewsIndex(){
                NewsIndex({page: this.currentPage}).then(res=>{
                    this.NewsIndexList = res.list
                    this.count = res.page.count*10
                })
            },
            _getactivityLatest(){
                NewsActivityLatest().then(res=>{
                  this.activityLatestList = res
                })
            },
            goNewsDetail: function(id){//查看详情
              this.$router.push({path: '/NewsDetail/'+id+"/4-1"});
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
                li:hover{
                  cursor: pointer;
                }
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
            li:hover{
              cursor: pointer;
            }
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
            padding: 12px 15px 12px 15px;
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
                margin-left: 25px;
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