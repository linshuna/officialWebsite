<template>
    <div class="maintenance-wrap mask">
        <div class="maintenance">

            <el-container class="main">
                <el-header height="auto">
                    <base-top-header></base-top-header>
                </el-header>
                <base-header activeIndex='7'></base-header>
            </el-container>
            <img src="../assets/images/特惠背景.png" alt="" height="520px" width="100%">
            <!--<el-row :gutter="24">-->
                <!--<el-col :span="24">-->
                    <div class="grid-content maintenance-top">
                        <el-steps :space="800" :active="3" finish-status="success">
                            <el-step title="选择车型"></el-step>
                            <el-step title="推荐车型"></el-step>
                            <el-step title="确认保养"></el-step>
                        </el-steps>
                    </div>
                <!--</el-col>-->
            <!--</el-row>-->

            <el-row :gutter="20" class="maintenance-section">
                <el-col :span="10"><p>名称</p></el-col>
                <el-col :span="8"><p>描述</p></el-col>
                <el-col :span="8"><p>金额</p></el-col>
                <el-col :span="8"><p>省</p></el-col>
            </el-row>
            <ul>
                <li>
                    <el-row :gutter="20" class="maintenance-section-msg">
                        <el-col :span="10"><p>发动机机油</p></el-col>
                        <el-col :span="8"><p>萨达萨达/沃尔特/40-JD/5L装</p></el-col>
                        <el-col :span="8"><p>¥415</p></el-col>
                        <el-col :span="8"><p>¥85</p></el-col>
                    </el-row>

                </li>
                <li>
                    <el-row :gutter="20" class="maintenance-section-msg">
                        <el-col :span="10"><p>发动机机油</p></el-col>
                        <el-col :span="8"><p>萨达萨达/沃尔特/40-JD/5L装</p></el-col>
                        <el-col :span="8"><p>¥415</p></el-col>
                        <el-col :span="8"><p>¥85</p></el-col>
                    </el-row>

                </li>
                <li>
                    <el-row :gutter="20" class="maintenance-section-msg">
                        <el-col :span="10"><p>发动机机油</p></el-col>
                        <el-col :span="8"><p>萨达萨达/沃尔特/40-JD/5L装</p></el-col>
                        <el-col :span="8"><p>¥415</p></el-col>
                        <el-col :span="8"><p>¥85</p></el-col>
                    </el-row>

                </li>
                <li>
                    <el-row :gutter="20" class="maintenance-section-msg">
                        <el-col :span="10"><p>发动机机油</p></el-col>
                        <el-col :span="8"><p>萨达萨达/沃尔特/40-JD/5L装</p></el-col>
                        <el-col :span="8"><p>¥415</p></el-col>
                        <el-col :span="8"><p>¥85</p></el-col>
                    </el-row>

                </li>

            </ul>

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
<style>
    .el-step__head.is-wait,.el-step__head.is-process,.el-step__head.is-success{
        text-align: left;
    }
    .el-step__title.is-success{
        margin-left: -20px;
    }

</style>

<style lang="scss" scoped>

    .maintenance {
        .maintenance-top {
            width:100%;
            height: 186px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 41px 0 41px 0;
            background-color: #fff;
            border: 1px solid #efefef;
            padding-left: 90px;
            .el-steps{
                width: 800px;

            }


        }
        .maintenance-section {
            height:78px;
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
</style>