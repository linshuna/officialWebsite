<template>
  <div>
    
    <div class="base-top-header">
      <img src="../assets/images/特惠背景.png" alt="logo图片" width="280px" height="80px"/>
      <div class="base-top-right">
        <el-select
          v-model="keyword"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading"
          class="el-search-left">
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      
      </div>
      
    </div>
  
  </div>
</template>

<script>
  export default {
    data(){
      return{
        options4: [],
        keyword: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"],
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods:{
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      },
    }
  }
</script>
<style lang="scss" scoped>
  .el-header{
    position: relative;
  }
  .base-top-header{
    background: #fff;
    
    display: flex;
    padding: 10px;
    justify-content: space-between;
    width: 100%;
    z-index:100;  
    .el-select{
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
    img{
      display: flex;
      align-item: center;
    }
    .base-top-right{
      display: flex;
      align-item: end;
    }
  }
</style>