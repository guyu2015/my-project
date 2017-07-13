<template>
    <div class="login">
      <div class="pic">
        <router-link to="/Person" data-v-4e187200="" class="acct_top_back"></router-link>

        <img src="./img/img9.png"/>
      </div>


        <div class="content">
          <div class="background">
            <img src="./img/login-big-bg.jpg"/>
          </div>
          <div class="text">
            <p class="text-second">老用户登录</p>
          </div>
          <div class="box">
          <div class="telephone">
          <div class="box-content">
            <input  type="text" class="tel" placeholder="请输入手机号" />
          </div>
          <div class="box-content">
            <input  type="password" class="tel" placeholder="请输入登录密码" />
          </div>
            <a class="forget" href="#">忘记密码</a>

          <div class="fast-content"><a class="fast" href="#"><span>手机号快捷登录</span></a>
            <b data-v-4e187200=""></b></div>
          </div></div>
          <div class="btn">
            <input type="button" value="登录" class="btn_login">
            <input type="button" value="注册" class="btn_register">
          </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .login{
      position:relative;
      z-index:200;
    }
   .background{
    position: absolute;
    width : 100%;
    height : 100%;
  }
   .background img{
    position: absolute;
    z-index: -1;
    top :0;
    left : 0;
    bottom : 0;
    right : 0;
    width : 100%;
    height : 100%;

  }
   .pic{
     width: 100%;
     height: 6rem;
     background: #fff;
     position: relative;
   }
   .pic .acct_top_back{
     width: 26px;
     height: 26px;
     display: block;
     border-radius: 50%;
     position: absolute;
     left: .7rem;
     top: 46px;
     border: 1px solid #3aad36;
   }

  .pic img{
    position: absolute;
    top : 30%;
    left :34%;
    width : 32%;

  }
  .content{
    position: relative;
    width: 100%;
    /*background: #e3e3e3;*/
    height: 15.2rem;

  }
   input,button{
     outline:none;
     -webkit-appearance:none;
   }
  .content .text{
    text-align: center;
    font-size : 20px;
    line-height :3.6rem;
    color: #037049;
  }
    .content  .telephone{
      box-sizing: border-box;
      height : 6.5rem;
      /*background: pink;*/
      position: relative;

    }
    .content .box-content{
      width: 90%;
      margin: 0 auto;
      height: 2.1rem;
      border-bottom: 1px solid #dbdbdb;
      position: relative;
    }
    .content  .telephone .tel{
      font-size: 16px;
      width: 100%;
      background: transparent;
      position: absolute;
      left: 0;
      top: 0;
      border : none;
      height: 2.1rem;
      box-sizing: border-box;
    }
    .telephone .forget{
      display: inline-block;
      float: right;
      text-align: right;
      font-size: 16px;
      color: #3aad36;
      text-decoration: none;
      border: 1px solid #3aad36;
      border-radius: 4px;
      padding: .17rem .6rem;
      text-align: center;
      position: absolute;
      top : 2.7rem;
      right: .8rem;
    }
    .content  .fast-content{
      padding: .4rem 1rem .4rem;
      text-align: right;
      height: 1rem;
      width: 90%;
      margin: 0 auto;
      font-size: 16px;
      box-sizing: border-box;
      position: relative;
    }
    .content  .fast-content .fast{
      color: #3aad36;
      letter-spacing: 1px;
      font-size: 15px;
      margin: 0 0 0 1rem;
    }
    .fast-content .fast a{
    float: right;
    line-height: .4rem;
    margin-right: .14rem;
    }
    .content  .fast-content b{
    color : #3aad36;
    -webkit-transform:rotate(45deg);
    width: 8px;
    height: 8px;
    display: block;
    position: absolute;
    right:15px;
    font-weight: 700;
    top: .65rem;

    border-top: 1px solid;
    border-right: 1px solid;
  }
   .btn_login {    width: 80%;
      overflow: hidden;
      display: block;
      outline: none;
      text-align: center;
      font-size: 19px;
      color: #fff;
      line-height: 1.5rem;
      letter-spacing: 20px;
      text-indent: 20px;
      box-sizing: border-box;
     margin: 0 auto .7rem;
     background-color: #3aad36;
     border: 1px solid #3aad36;
     border-radius: 5px;
    }
   .btn_register{
     width: 80%;
     overflow: hidden;
     display: block;
     outline: none;
     text-align: center;
     font-size: 19px;
     color: #fff;
     line-height: 1.4rem;
     letter-spacing: 20px;
     text-indent: 20px;
     box-sizing: border-box;

     margin: 10px auto 0;
     background-color: #8a8a8a;
     border: 1px solid #8a8a8a;
     border-radius: 5px;
     opacity: .5;
     fill-opacity: 50%;
    }
    .acct_top_back[data-v-4e187200]:after {
     content: "";
     width: 14px;
     height: 14px;
     display: block;
     border-left: 1px solid #3aad36;
      -webkit-transform: rotate(-45deg);
     border-top: 1px solid #3aad36;
     position: absolute;
     left: 10px;
     top: 5px;
   }

   button, input, keygen, select, textarea {
     outline: 0 none;}
</style>
