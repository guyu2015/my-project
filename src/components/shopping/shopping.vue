<template>
    <div>
      <div class="header">
        <span class="btn-back"><label class="left-back-img"></label></span>
        <p class="title">购物车</p>
      </div>
      <div class="content">
        <div class="header-login">
          <a href="#" class="header-login-fr">登录</a>
          <span class="header-text-ff">你可以在登录后同步电脑与手机购物车中的商品</span>
        </div>
      </div>
      <div class="input-box">
        <div class="box-inner">
          <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码" class="exch-ipt">
          <input value="兑换" type="button" class="exchange" />
        </div>
      </div>

      <div class="shopping-car">
          <div class="shop"><img src="./img/img12.png"/></div>

          <div class="carts-text">
            <p>您的购物车还是空荡荡的</p>
          </div>
        <div class ="carts-link" >
          <a href="#/">赶紧去逛逛</a>
        </div>


      </div>
      <div class="last-box">
        <div class="last">
          <div class="text item"><p>Rico.S为你精心推荐</p></div>
          <div class="ul-list item">
          <ul class="third-list">
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item">
                <a data-v-5cc9f28f="" href="#/item/23028"><img data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
                <p data-v-5cc9f28f="" class="title">自粘式缝隙贴(2卷装)</p> <p data-v-5cc9f28f="" class="price">￥19</p>
              </div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/19184"><img data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1704201923204119_d230x230.jpg"></a> <p data-v-5cc9f28f="" class="title">酵素洗衣液(超强洁净)</p> <p data-v-5cc9f28f="" class="price">￥29</p></div></li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/16427"><img data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1508271208278864_d230x230.jpg"></a> <p data-v-5cc9f28f="" class="title">懒人清洁扫把(地砖专用)</p> <p data-v-5cc9f28f="" class="price">￥19</p></div></li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/25139"><img data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1705041713502720_d230x230.jpg"></a> <p data-v-5cc9f28f="" class="title">加拿大原生木浆抽纸（12包）</p> <p data-v-5cc9f28f="" class="price">￥29</p></div></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
  a{
    text-decoration: none;
  }
  .header{

    width : 100%;
    height : 2.1rem;
    background: #89be48;
    position: fixed;
    z-index : 5;
  }
  .header .title{
    margin: 0 auto;
    line-height: 1.9rem;
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
    background: url('./img/img11.png') no-repeat;
  }
  .content{
    position: absolute;
   top : 2.1rem;
    width: 100%;
    height: 2.3rem;
    background-color: #f0fae6;
    margin: 0;
    padding: .4rem 0 .2rem;
  }
  .header-login{
    width: 74%;
    min-height:1.2rem;
    display: table;
    overflow: hidden;
    margin: 0rem auto;
    padding: 0 0 0 21%;
    position: relative;
  }
  .header-login-fr{
    width: 18%;
    height: 1.2rem;
    display: block;
    background: #fff;
    border: 1px solid #8bc146;
    text-align: center;
    font-size: 0.6rem;
    color: #88c13e;
    line-height: 1.2rem;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .header-text-ff{
    width: 100%;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    font-size: 0.6rem;
    color: #333;
    line-height: 0.8rem;
  }
  .input-box{
    position : absolute;
    top : 4.4rem;
    width: 100%;
    height: 2rem;
    background-color: #fff;
    margin: 0;
    padding: 0.4rem 0.2rem;
    border-bottom: 1px solid #f2f2f2;
  }
  .box-inner{
    width: 93%;
    height: 1.9rem;
    overflow: hidden;
    margin: 0 auto 0;
    padding: 0;
    position: relative;
  }
  .box-inner .exch-ipt{
    /*padding-left: 8px;*/
    position: absolute;
    top : 0;
    left : 0;
    width: 80%;
    height: 1.5rem;
    line-height: 1.5rem;
    display: inline-block;
    border-radius: 0;
    border: 1px solid #e2e2e2;
    background: #fff;
    text-align:left;
    font-size: 0.5rem;
  }
  button, input, keygen, select, textarea {
    outline: 0 none;

    font-family: \\5FAE\8F6F\96C5\9ED1,Microsoft YaHei,Helvetica,STHeiti,Droid Sans Fallback;
  }
  .exchange{
    width: 20%;
    height:1.59rem;
    line-height: 1.59rem;
    display: inline-block;
    border-radius: 0;
    background: #fff;
    text-align: center;
    font-size: 0.6rem;
    color: #6fbd00;
    letter-spacing: .05rem;
    text-indent: .1rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
    border: 1px solid #6fbd00;
  }
  .shopping-car{
    /*text-align: left;*/
    position : absolute;
    top : 6.8rem;
    width : 100%;
    height : 12rem;

    background-color: rgb(243, 243, 243);
  }
  .carts-text{
    text-align: center;
    font-size: 0.8rem;
    color: rgb(102, 102, 102);
    line-height: 1.1rem;
  }
  .carts-link {
    text-align: center;
  }
  .carts-link  a{
   border: 1px solid rgb(137, 190, 72);
    padding: 0.2rem 0.6rem;
    display: inline-block;
    border-radius: 6px;
    font-size: 0.7rem;
    letter-spacing: 1px;
    margin-top: 6px;
    color: rgb(137, 190, 72);
  }

    .shop{
      width : 100%;
      height : 7rem;
      overflow: hidden;
      padding : 0.2rem 5.2rem 0  5.2rem;
    }
  .shop img{
    width : 60%;
    height : 100%;
    /*position : absolute;*/
    /*vertical-align: middle;*/
    max-width: 160px;
  }
  .last-box{
    position : absolute;
    top : 17rem;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    margin: 0 auto 0;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    overflow: hidden;
  }
  .last-box .item{
    width: 94%;
    overflow: hidden;
    border-bottom: 2px solid #e6e6e6;
    text-align: left;
    font-size: 0.8rem;
    color: #333;
    line-height: 1rem;
    margin: 0 auto;
    padding: .4rem 3%;
  }
  .last-box .text p{
    font-size : 0.65rem;
    line-height: 0.9rem;

  }
   .last .ul-list{
    width: 200%;
    max-height: 12rem;
    /*overflow-y: hidden;*/
    overflow-x: scroll;
    margin: 0 auto;
    padding: 0.7rem 0;
  }
  .last .ul-list .third-list{

    width : 100%;
  }
  .ul-list .third-list li{
    width:4.1rem;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    margin: 0 2px;
  }
  .ul-list .third-list li img{
    width : 100%;

  }
  .third-list li img a{
    color : #333;
  }
  .third-list .cart-assem-item .title {
    width: 100%;
    overflow: hidden;
    display: block;
    text-align: left;
    font-size: 0.4rem;
    color: #333;
    line-height: 0.6rem;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;}
  .third-list .cart-assem-item .price {
    width: 100%;
    overflow: hidden;
    display: block;
    text-align: left;
    font-size: 0.4rem;
    color: #333;
    line-height: 1rem;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    -o-text-overflow: ellipsis;
  }
</style>

