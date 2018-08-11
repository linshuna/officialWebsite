<template>
    <swiper v-if="data.length > 0" :options="options">
        <swiper-slide v-for="(item, index) in data" :key="index" class="pb10rem">
            <template>

                <img :src="item.bannerA" class="responsive-img">
            </template>

        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';


    export default {
        components: {
            swiper,
            swiperSlide,

        },
        data()
        {
            return {
            }
        },
        props:{
            data:{
                type:Array,
                required:true,
            },
            options:{
                type:Object,
                default(){
                    return
                }
            }
        }


    }
</script>
<style>
    .swiper-wrapper{
        width: 100%;
        height:550px;
    }
    .pb10rem{
        flex-shrink: 0;
        width: 100%;
        height: 550px;
    }
</style>


