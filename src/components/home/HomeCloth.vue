<template>
  <div>
    <text-header></text-header>
    <div class="load-more">
      <ul id="blockcartegory" class="life-goodsUl clearFix life-child-thank">
        <li>
          <a href="#/channelsub/2860/2877" class="">
            <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg" lazy="loaded"> <dl data-v-6c0a93da="">家务工具</dl></a></li>
        <li>
          <a data-v-6c0a93da="" href="#/channelsub/2860/2879" class="" data-v-20f7755b=""><img data-v-6c0a93da="" src="http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg" lazy="loaded"> <dl data-v-6c0a93da="">家庭清洁剂</dl></a></li>
        <li ><a data-v-6c0a93da="" href="#/channelsub/2860/3404" class="" data-v-20f7755b="">
          <img data-v-6c0a93da="" src="http://i.lifevccdn.com/upload/AppIndexIcon/f14c5afd18a74be197bbef999e58387e.jpg" lazy="loaded"> <dl data-v-6c0a93da="">防霉除菌</dl></a></li>
        <li><a data-v-6c0a93da="" href="#/channelsub/2860/2884" class="" data-v-20f7755b="">
          <img data-v-6c0a93da="" src="http://i.lifevccdn.com/upload/AppIndexIcon/4f4dc02735f74e568d7adbe6ac1522f2.jpg" lazy="loaded"> <dl data-v-6c0a93da="">百纳箱</dl></a></li>
        <li>
          <a data-v-6c0a93da="" href="#/channelsub/2860/2882" class="" data-v-20f7755b=""><img data-v-6c0a93da="" src="http://i.lifevccdn.com/upload/AppIndexIcon/33daaf6cfaa345e8a475ce8ea932a393.jpg" lazy="loaded"> <dl data-v-6c0a93da="">衣物收纳</dl></a></li>
        <li>
          <a data-v-6c0a93da="" href="#/channelsub/2860/2878" class="" data-v-20f7755b=""><img data-v-6c0a93da="" src="http://i.lifevccdn.com/upload/AppIndexIcon/9bbb1b97d5c04460a76fde006f08c6ea.jpg" lazy="loaded"> <dl data-v-6c0a93da="">酵素洗衣液</dl></a></li>
        <li>
          <a data-v-6c0a93da="" href="#/channelsub/2860/2881" class="" data-v-20f7755b=""><img data-v-6c0a93da="" src="http://i.lifevccdn.com/upload/AppIndexIcon/4a8a241b4f7041b2b6bd9bfa1d24a87c.jpg" lazy="loaded"> <dl data-v-6c0a93da="">魔力挂钩</dl></a></li>
        <li>
          <a data-v-6c0a93da="" href="#/channelsub/2860/2885" class="" data-v-20f7755b=""><img data-v-6c0a93da="" src="http://i.lifevccdn.com/upload/AppIndexIcon/6f88e8a13af944019d6b8cee8c723b7e.jpg" lazy="loaded"> <dl data-v-6c0a93da="">生活必备</dl></a></li>
        <li>
          <a data-v-6c0a93da="" href="#/channelsub/2860/3401" class="" data-v-20f7755b=""><img data-v-6c0a93da="" src="http://i.lifevccdn.com/upload/AppIndexIcon/eef70d4649914a2c9323e16c9907d62d.jpg" lazy="loaded"> <dl data-v-6c0a93da="">地毯地垫</dl></a></li>
      </ul>
      <div id="category-banner" class="category-banner">
        <img src="http://i.lifevccdn.com/upload/DesignerMessageImg/9203af2fbef145daa142dd97bb84fae3.jpg" onerror="this.style.display='none'" class="item-pic">
      </div>
      <div class="colths"></div>
    </div>
  </div>
</template>

<script>
  import header from './header.vue'
  export default {
    components : {
      "text-header":header
    }
  }
</script>

<style>
  body{
    background-color : #f3f3f3;
  }
  .load-more{
    margin-top: 4.5rem;
  }
  .life-goodsUl {
    height : 16rem;
    width : 100%;
    background-color: #fff;
  }
  li, ul {
    list-style: none;
  }
  .life-child-thank li {
    width: 25%!important;
    margin: 0.5rem 0;
  }
  /*#blockcartegory{*/
    /*background-color: #fff;*/
  /*}*/
  a{
    text-decoration: none;
    color : #333;
  }
  .life-goodsUl li a dl {

    height: 1rem;
    line-height: 1rem;
    font-size: 0.6rem;
  }
  .life-goodsUl li {
    float: left;
    width: 33.3333%;
    text-align: center;
  }
  .life-goodsUl li a {
    display: block;
  }
  .life-goodsUl li a img {
    width: 80%;
    margin: auto;
  }
  img {
    vertical-align: middle;
  }
  .category-banner {
    width: 100%;
    margin: 1.5em auto 0;
  }
  .item-pic {
    position: relative;
    z-index: 5;
  }
  .category-banner img {
    width: 100%;
    display: block;
    vertical-align: top;
  }
  .colths{
    width : 100%;
    height : 3rem;

  }
</style>

