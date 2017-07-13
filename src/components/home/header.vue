<template>
  <div id="total-content">
    <div id="header">
      <div id="header-up">
        <img src="./img2.png"/>
        <span class="icon-list2"></span>
      </div>
      <div id="nav">
        <ul id="navList">
          <li>
            <router-link to="/FirstPage">首页</router-link>
          </li>
          <li>
            <router-link to="/NewPage">新品</router-link>
          </li>
          <li>
            <router-link to="/HomeCloth">家居服</router-link>
          </li>
          <li>
            <router-link to="/Living">生活</router-link>
          </li>
          <li>
            <router-link to="/Sofa">软装</router-link>
          </li>
          <li>
            <router-link to="/Bedding">床品</router-link>
          </li>
          <li>
            <router-link to="/Work">工作和旅行</router-link>
          </li>
          <li>
            <router-link to="/Understand">了解LifeVC</router-link>
          </li>
        </ul>
        <div class="line"></div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
  .active{
    color : green;
  }
  #header{
    position : fixed;
    z-index: 10;
    left : 0;
    top : 0;
    width : 100%;
    height : 2rem;
  }
  #header-up{
    text-align: center;
    background-color :rgb(137,190,72);
    height : 100%;
    width : 100%;
  }
  #header-up img{
    height : 50%;
    margin-top : 0.5rem;

  }
  #navList li {
    font-size : 0.55rem;
    text-align: center;
    display: inline-block;
    padding: 0 0.8rem;
  }
  #navList li a {
    text-decoration: none;
    color: #020202;
  }
  #nav {
    background : #fff;
    height: 2rem;
    wigth : 100%;

  }
  #navList .active a{
    color:rgb(137,190,72);
  }
  #navList a:visited{
    color :rgb(137,190,72);
  }
  #navList {
    white-space: nowrap;
  }
  .line{
    width : 100%;
    height :2px;
    background-color : #e2e2e2;
    margin-top:0.6rem;
  }

  #total-content{
    margin-bottom:1.9rem;
  }

</style>
