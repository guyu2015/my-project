<template>
  <footer id="bottombar" class="footer">
    <div>
      <ul id="footermenuNav">
        <li>
          <router-link to="/Home"  class="selected"><div class="ico homeico"></div> <span class="lispan">首页</span>
          </router-link>
        </li>
        <li class="import">
          <router-link to="/AllProduce" class=""><div class="ico typeico"></div> <span>全部产品</span></router-link>
        </li>
        <li>
          <router-link to="/Wander" class=""><div class="ico strollico"></div> <span>闲逛</span></router-link>
        </li>
        <li>
        <router-link to="/ShopCart" class=""><div class="ico shoppingcartico"></div> <span>购物车</span> <!----> <!----></router-link>
        </li>
        <li @click="changeColor">
          <router-link to="/Person" class=""><div class="ico accountcenterico"></div> <span>账户中心</span> <span class=""></span></router-link>
        </li>
      </ul>
    </div>

  </footer>
</template>

<script>
export default {
    data (){
        return{
            isShow : true
        }
    },
  methods : {
    changeColor(isShow){
        return this.isShow = !isShow
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #bottombar{

    position : fixed;
    z-index: 10;
    bottom : 0;
    left : 0;
    height :2.5rem;
    width : 100%;
    background-color : #f8f8f8;
    line-height: 2rem;
  }
  #footermenuNav{
    margin-left : 0.5rem;
    list-style : none;
  }

  #footermenuNav li {

    padding : 0.5rem 1rem 1rem 0.5rem;
    text-align: center;
    float : left;
  }

  #footermenuNav a{
    background: transparent;
    display : block;
    color : #ababab;
    text-decoration: none;
    font-size :0.5rem;

  }

  #footermenuNav .homeico{
    background-image: url('./img3.png');
  }
  #footermenuNav  .typeico{
    background-image: url('./img8.png');

  }
  #footermenuNav .shoppingcartico{
    background-image: url('./img5.png');

  }
  #footermenuNav .strollico{
    background-image: url('./img6.png');

  }
  #footermenuNav .accountcenterico{
    background-image: url('./img7.png');

  }
  #footermenuNav .ico{
    margin : 0 auto;
    width :20px;
    height : 20px;
    background-size: 100%;
    margin-bottom : -0.5rem;
    background-repeat: no-repeat;


  }


  #footermenuNav  li  .active{
    color : #009c42;
    /*background-image: url('./img4.png');*/

  }
</style>

