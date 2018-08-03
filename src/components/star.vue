<template>
    <div>
        <el-rate
                v-model="stars"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
        </el-rate>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                // value5:stars,
                stars:0
            }
        },
        props:['stars']
    }
</script>