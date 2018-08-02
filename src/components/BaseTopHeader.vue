<template>
  <div class="header">
    
    <div class="base-top-header inner-wrap">
      <img src="../assets/images/LOGO.png" alt="logo图片" width="200px"/>
      <div class="base-top-right">
        <div class="search-wrap">
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
          <el-button type="primary" class="search" icon="el-icon-search"></el-button>
        
        </div>
        
        <div class="set-header-type">
          <img src="../assets/images/ilike.png" alt="like" width="23px" height="23px"/>
          <p>我喜欢</p>
        </div>
        <div class="set-header-type">
          <img src="../assets/images/weixin.png" alt="weixin" width="23px" height="23px"/>
          <p>微信</p>
        </div>
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
  .header{
    background: #fff;
  }
  .el-header{
    position: relative;
  }
  .base-top-header{
    background: #fff;
    position: relative;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    width: 100%;
    z-index:100;  
    
    .set-header-type{
      margin: 0 10px;
      text-align: center;
      img{
        display: inline-block;
      }
      p{
        line-height: 25px;
      }
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
  .base-top-right{
    position: absolute;
    right: 10px;
    bottom: 10px;
    .search-wrap{
      font-size: 0;
      .el-select{
        vertical-align: middle;
      }
      .search{
        background: #F82501;
        width: 40px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
        position: relative;
      }  
    }    
  }
  
  
</style>
<style>
  .base-top-right .el-select .el-input__inner{
    border: 1px solid #F82501;
    border-radius: 0;
  }
  .search{
    border: none;
    border-radius: 0;
  }
  .el-icon-search{
    border: none;
    border-radius: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size:20px;
  }
</style>