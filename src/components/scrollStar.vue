<template>
  <div class="set-star-inline">
      <div class="set-star-bg">
        <div class="set-star-active">
          <span class="set-star-active-width" :style="{width: this.width*20+'px'}"></span>
          <div class="star-img"></div>     
        </div>
         
      </div>  
  </div>
</template>
<script>
export default {
  props:{
    width: {type: String}
  },
  data(){
    return{}
  },
  created() {
    console.log(this.width)
  },
}  
</script>
<style lang="scss">
  .set-star-inline,.set-star-bg{
    display: inline-block;
    vertical-align: middle;
  }
  .set-star-active{
    width: 100px;
    height: 20px;
    position: relative;
    background: #fff;
    overflow: hidden;
  }
  .set-star-active-width{
    position: absolute;
    top: 1px;
    left: 2px;
    height: 20px;
    background: #FA9E15;
  }
  .star-img{
    position: absolute;
    width: 100px;
    height: 20px;
    top:0;
    background: url('../assets/images/star-icon-while.png') repeat-x;
    background-size:20px 20px;
  }
</style>
