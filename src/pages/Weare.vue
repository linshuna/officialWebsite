<template>
    <div class="Weare-wrap">
      <div class="new-wrap">
          <!--<img src="../../assets/images/1屏.png" alt="">-->
              <base-swiper :data="bannerA" :options="bannerCOptions"></base-swiper>
      </div>
    </div>
</template>
<script>
    import Swiper from '@/components/Swiper'



    export default {
        components:{
              'base-swiper' : Swiper,
        },


        data() {
            return {
                bannerCOptions:{
                    slidesPerView :'auto',
                    loopedSlides: 'auto',
                    autoplay: {
                        delay: 500000,
                    },
                    // pagination: {
                    //     el: '.swiper-pagination',
                    // },
                    direction:'vertical'


                },
                bannerA:[{bannerA:require('../assets/images/1屏.png')},
                    {bannerA:require('../assets/images/2屏.png')},
                    {bannerA:require('../assets/images/3屏.png')},
                    {bannerA:require('../assets/images/4屏.png')},
                    {bannerA:require('../assets/images/5屏.png')},
                    {bannerA:require('../assets/images/6屏.png')}]
            }
        },


    }
</script>
<style>

    .Weare-wrap .swiper-wrapper{
        width: 100%;
        height: 500px!important;
    }
    .swiper-wrapper img{
        width: 100%;

        height: 500px!important;
    }
    .swiper-slide-active{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .swiper-slide{
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
    }
    .Weare-wrap{
        background-color: #fff;
    }
</style>
<style lang="scss" scoped>
    .new-wrap {
        margin-top: 3px;
        height: 100%;
    }
    .swiper-wrapper{
        width: 100%;
        /*height: 500px!important;*/
    }

</style>