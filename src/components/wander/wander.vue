<template>
    <div>
      <div class="header">
        <span class="btn-back"><label class="left-back-img"></label></span>
        <p class="title">闲逛</p>
      </div>
      <div class="wander-content">
        <div class="blank"></div>
        <div class="left-hand">
          <div data-v-e6620f52="" class="stroll-item">
            <div class="stroll-type-item"><div class="stroll-item-layer"><img class="stroll-item-img" src="http://i.lifevccdn.com/upload/stroll/e726ff1fb1d44685a91cf76ff56d5018.jpg" lazy="loaded"> <span class="tag-new">New</span></div> <h3 class="stroll-item-title"><a href="javascript:void(0);">分类整理收纳箱</a></h3> <div class="stroll-price-bar"><span class="price">￥<em>49</em></span> <span class="comment">月销 2662</span></div></div> <!----> <!----></div>
          <div data-v-e6620f52="" class="stroll-item">
            <div class="stroll-type-item"><div class="stroll-item-layer"><img class="stroll-item-img" src="http://i.lifevccdn.com/upload/stroll/33b9b2000fe24e2083f22620658f3ad1.jpg" lazy="loaded"> <span class="tag-new">New</span></div> <h3 class="stroll-item-title"><a href="javascript:void(0);">电蚊香</a></h3> <div class="stroll-price-bar"><span class="price">￥<em>29</em></span> <span class="comment">月销 4416</span></div></div> <!----> <!----></div>
          <div data-v-e6620f52="" class="stroll-item">
            <div class="stroll-type-item"><div class="stroll-item-layer"><img class="stroll-item-img" src="http://i.lifevccdn.com/upload/stroll/5b388119f79444ba889c4f6b9a118bad.jpg" lazy="loaded"> <!----></div> <h3 class="stroll-item-title"><a href="javascript:void(0);">加拿大原生木浆抽纸（12包）</a></h3> <div class="stroll-price-bar"><span class="price">￥<em>29</em></span> <span class="comment">月销 7317</span></div></div> <!----> <!----></div>
        </div>
        <div class="right-hand">
          <div class="stroll-item"><!----> <!---->
            <div class="stroll-type-item  clearFix">
              <div class="cat-menu-a"><span>49元包1年</span></div>
              <div class="cat-menu-a"><span>今日新品</span></div>
              <div class="cat-menu-a"><span>送500元积分</span></div>
              <div class="cat-menu-a"><span>金币商城</span></div>
            </div>
          </div>
          <div data-v-e6620f52="" class="stroll-item">
            <div class="stroll-type-item"><div class="stroll-item-layer"><img class="stroll-item-img" src="http://i.lifevccdn.com/upload/stroll/9c66a042b58048219b6c5c1290426c94.jpg" lazy="loaded"> <span class="tag-new">New</span></div> <h3 class="stroll-item-title"><a href="javascript:void(0);">全棉舒适四件套(绵羊)</a></h3> <div class="stroll-price-bar"><span class="price">￥<em>269</em><span class="original">￥319</span></span> <span class="comment">月销 1681</span></div></div> <!----> <!----></div>
          <div data-v-e6620f52="" class="stroll-item">
            <div class="stroll-type-item"><div class="stroll-item-layer"><img class="stroll-item-img" src="http://i.lifevccdn.com/upload/stroll/865c7b1282a84b239d5f5d5c28972c2b.jpg" lazy="loaded"> <span class="tag-new">New</span></div> <h3 class="stroll-item-title"><a href="javascript:void(0);">全效洗衣液(5合1)</a></h3> <div class="stroll-price-bar"><span class="price">￥<em>39</em></span> <span class="comment">月销 4354</span></div></div> <!----> <!----></div>
          <div data-v-e6620f52="" class="stroll-item">
            <div class="stroll-type-item"><div class="stroll-item-layer">
              <img class="stroll-item-img" src="http://i.lifevccdn.com/upload/stroll/e2b2e00afcbf428a8da047d73f7fa168.jpg" lazy="loaded"> <span class="tag-new">New</span></div> <h3 class="stroll-item-title"><a href="javascript:void(0);">耐磨高弹力旅行箱保护套</a></h3> <div class="stroll-price-bar"><span class="price">￥<em>39</em><span class="original">￥49</span></span> <span class="comment">月销 5368</span></div></div> <!----> <!----></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
  .blank{
    width : 100%;
    height : 2rem;

  }
  a {
    background: transparent;
  }
  .header{

    width : 100%;
    height : 1.9rem;
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
  .left-hand {
    width: 50%;
    float: left;
  }
  .stroll-item {
    margin: 3%;
    width: 94%;
    clear: both;
  }
  .stroll-type-item {
    margin: 0  1%;

  }
  .stroll-item .stroll-item-layer {
    border-radius: 8px;
    position: relative;

  }
  .stroll-item-layer img{
    /*border: 0 none;*/
    vertical-align: middle;
    border-radius: 8px;
    width : 100%;
    height : 100%;

  }
  .stroll-item .tag-new {
    background-color: #79da87;
    max-width: 94%;
    overflow: hidden;
    display: inline-block;
    text-align: left;
    font-size: .4rem;
    color: #fff;
    line-height: 0.7rem;
    text-transform: uppercase;
    padding: 0 .2rem;
    position: absolute;
    left: 0;
    top: .4rem;
    /*z-index: 6;*/
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
  }
  .stroll-item-title {
    font-size: 0.55rem;
    padding: .2rem  0 .1rem;
    overflow: hidden;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
  }
  .stroll-item-title a{
    color: #545454;
    text-decoration: none;
    font-size: 0.58rem;
  }
  .stroll-price-bar {
    text-align: left;
    width: 100%;
    font-size: .4rem;
    height: 0.7rem;
    overflow: hidden;
  }
  .stroll-price-bar .price {
    font-size: 0.8rem;
    line-height: 0.7rem;
    display: inline-block;
    color: #ff475d;
    /*font-weight: 400;*/
    overflow: hidden;
    text-align: left;
    width: auto;
  }
  em, i {
    font-style: normal;
  }
  .stroll-price-bar .comment {
    font-size: 0.62rem;
    line-height: 0.68rem;
    width: auto;
    max-width: none;
    overflow: hidden;
    float: right;
    display: inline-block;
    text-align: right;
    color: #999;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis
  }
  .right-hand{
    width : 50%;
    float :right;
  }
  .stroll-item{
    margin: 3%;
    width: 94%;
    clear: both;
  }
  .stroll-type-item {
    margin: 0 1%;
  }
  .cat-menu-a {
    width: 47%;
    min-height: 1.2rem;
    background-color: #eaeaea;
    border: 0;
    border-radius: 8px;
    vertical-align: middle;
    font-size: 0.6rem;
    color: #4a4a4a;
    vertical-align: center;
    padding: .6rem .5%;
    display: inline-block;
    margin: 1%;
    float: left;
    display: -webkit-flex;
    text-align: center;
  }
  .cat-menu-a span {
    margin: auto;
  }
  .stroll-price-bar .original {
    font-size: .4rem;
    display: inline-block;
    color: #888;
    text-decoration: line-through;
    margin-left: 5px;
  }
</style>
