<template>
    <div>
      <div class="header">
        <span class="btn-back"><router-link to="/Setting"  class="left-back-img"></router-link></span>
        <p class="title">关于LifeVC</p>
      </div>
      <div class="about">
        <div class="about-one">
          <div class="client">
            <div class="client1">
              <img src="http://i1.lifevccdn.com/Images/m/AboutLifeVC/client.png">
            </div>
            <div class="client2">
              <img src="http://i1.lifevccdn.com/Images/m/AboutLifeVC/weixin825.png">
            </div>
          </div>
          <div class="title">
            <div class="client-title1">
              <p>扫描二维码，</p>
              <p>下载LifeVC客户端</p>
            </div>
            <div class="client-title2">
              <p>扫描二维码，</p>
              <p>关注LifeVC官方微信</p>
            </div>

          </div>
        </div>
        <div class="about-two">
          <h3>公司简介</h3>
          <p>LifeVC，一个源自欧洲生活灵感的家居品牌，始终坚持品质和舒适实用的设计精神。从家居日用到家纺，从家饰到家具，LifeVC10000多种欧洲灵感家居产品，涵盖家的每一个角落。希望我们舒适实用的产品，陪你一起走过人生的每一个美好时刻。人生很短，家最重要。LifeVC，陪你生活一辈子！</p>
        </div>
      </div>

    </div>
</template>

<script>
    export default {}
</script>

<style>
  body{
    background-color: #f8f8f8;
  }
  .header{

    width : 100%;
    height : 2.1rem;
    background: #89be48;
    /*position: fixed;*/
    /*z-index : 5;*/
  }
  .header .title{
    margin: 0 auto;
    line-height: 2.2rem;
    font-size: 0.85rem;
    text-align: center;
    color: #fff;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }
  .btn-back{
    width: 10%;
    height: 3.8rem;
    /*position: absolute;*/
    left: 0;
    top: 0;
  }
  .left-back-img{
    width: 0.5rem;
    height: 1.2rem;
    display: block;
    float: left;
    position: absolute;
    margin-left: 3%;
    margin-top: .3rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeAQMAAAAW3KwoAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAADZJREFUCNdjYGA4wMDACMTMDQwM7EAuHxDLALEFEBcA8QMc0lAsAxYDyYHUgNSC9ID04lNwAACHIArVHBwTzAAAAABJRU5ErkJggg==) no-repeat ;
  }
  .about{
    max-width: 640px;
    padding: 1rem 0 0;
  }
  .about-one , .about-two{
    width: 92%;
    overflow: hidden;
    background-color: #ffffff;
    border-style: solid;
    border-color: #e3e3e3;
    border-width: 1px 0;
    text-align: left;
    font-size: 0.7em;
    color: #989898;
    line-height: 0.7em;
    margin-top: 0.2rem;
    margin-bottom: 0.7rem;
    padding: 4% 4% 5%;
  }
   .client, .title {
    overflow: hidden;
    font-size: 0.9em;
     line-height: 1.6em;
  }
  .client1, .client2{
    width: 42%;

    border: 1px solid #231815;
    padding: 1.5%;
  }
 .client1,  .client-title1{
    width: 42%;
    float: left;

    padding: 1.5%;
   display:inline-block;
  }
  img {
    border: none;
    max-width: 100%;
  }
   .client2, .client-title2 {
     display:inline-block;
     padding: 1.5%;
     width: 42%;
    float: right;
  }
  .about-two h3{
    font-size: 1.4em;
    color: #535353;
    line-height: 1.8em;
    font-weight: 400;
  }
 p{
   font-weight: 400;
   font-size: 1em;
   color: #a8a8a8;
   line-height: 1.5em;
 }
</style>
