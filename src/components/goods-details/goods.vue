<template>
    <div>
      <div class="header">
        <span class="btn-back"><label class="left-back-img"></label></span>
        <p class="title">商品介绍</p>
      </div>
      <div class="goods-content">
        <swiper id="banner" ref="mySwiper">
          <swiper-slide class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" style="width: 400px;">
            <a><img src="http://i.lifevccdn.com/upload/AppItemHeaders/506e9b9d69a54c0295f5a1012a744782_d1242x0.jpg "style="width: 100%;">
            </a></swiper-slide>
          <swiper-slide class="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style="width: 400px;"><a><img data-v-60df7298="" src="http://i.lifevccdn.com/upload/AppItemHeaders/177adc7f1a3440cfb4c9052fd66c9c40_d1242x0.jpg" style="width: 100%;"></a>
          </swiper-slide>
          <swiper-slide  class="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style="width: 400px;"><a><img data-v-60df7298="" src="http://i.lifevccdn.com/upload/AppItemHeaders/5ead50b9d67b48799e7ca8b57e77696e_d1242x0.jpg" style="width: 100%;"></a>
          </swiper-slide>
          <swiper-slide class="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style="width: 400px;"><a><img data-v-60df7298="" src="http://i.lifevccdn.com/upload/AppItemHeaders/df3c3c366448416881f4cb8ae4e4064d_d1242x0.jpg" style="width: 100%;"></a>
          </swiper-slide>
          <swiper-slide class="swiper-slide" data-swiper-slide-index="3" style="width: 400px;"><a><img data-v-60df7298="" src="http://i.lifevccdn.com/upload/AppItemHeaders/b2a94d5d5cfb41719ffc281eef859d59_d1242x0.jpg" style="width: 100%;"></a>
          </swiper-slide>

          <div class="swiper-pagination swiper-pagination-bullets">
            <span class="swiper-pagination-bullet" slot="scrollbar"></span>
            <span class="swiper-pagination-bullet" slot="scrollbar"></span>
            <span class="swiper-pagination-bullet" slot="scrollbar"></span>
            <span class="swiper-pagination-bullet" slot="scrollbar"></span>
            <span class="swiper-pagination-bullet" slot="scrollbar"></span>
          </div>
        </swiper>

      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
  .header{

    width : 100%;
    height : 2rem;
    background: #89be48;
    position: fixed;
    z-index : 5;
  }
  .header .title{
    margin: 0 auto;
    line-height: 2rem;
    font-size: 0.8rem;
    text-align: center;
    color: #fff;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }
  .header .btn-back{
    width: 10%;
    height: 3.8rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  .left-back-img{
    width: 0.5rem;
    height: 1.2rem;
    display: block;
    float: left;
    position: absolute;
    left: 20%;
    top: .3rem;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeAQMAAAAW3KwoAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAADZJREFUCNdjYGA4wMDACMTMDQwM7EAuHxDLALEFEBcA8QMc0lAsAxYDyYHUgNSC9ID04lNwAACHIArVHBwTzAAAAABJRU5ErkJggg==) no-repeat;
  }
  #banner{
    position : relative;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    width : 100%;
    height : 16rem;
  }
  .goods-content{
    /*height :15rem;*/
    padding-top : 2rem;
  }
  .swiper-slide{
    width : 20%;
    height :16rem;
    float : left;
  }
  .swiper-slide img{
    width : 10%;
    height : 100%;
  }
  .swiper-pagination{
    position :fixed;
    bottom : 10px;
    left : 30%;
    width : 30%;
    height : 20px;
  }
  .swiper-pagination-bullet{

  }
</style>
