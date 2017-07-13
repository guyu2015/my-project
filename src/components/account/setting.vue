<template>
    <div>
      <div class="header">
        <span class="btn-back"><router-link to="/Person" class="left-back-img"></router-link></span>
        <p class="title">设置</p>
      </div>
      <div class="dashboard">
        <ul style="margin-bottom: 1rem;">
          <li @click="clearCookie">
            <span class="pd20 item-title">清理缓存</span> <span class="arr-r"></span>
            <span class="item-tip"></span>
          </li> <!----> <!---->
          <router-link to="/About"><li style="margin-top: 1rem;">
          <span class="pd20 item-title">关于LifeVC</span>
            <span  class="arr-r"></span>
            <span class="item-tip">平台: browser 版本：5.1.2 - 261</span>
          </li></router-link>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
      methods : {
        clearCookie(){
            confirm('确定要清除缓存吗')

        }
      }
    }
</script>

<style>
  body {

    background-color: #f6f6f6;
  }
  .header{
    width : 100%;
    height : 2.1rem;
    background: #89be48;
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
    /*position: absolute;*/
    margin-left: 2%;
    margin-top: .3rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeAQMAAAAW3KwoAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAADZJREFUCNdjYGA4wMDACMTMDQwM7EAuHxDLALEFEBcA8QMc0lAsAxYDyYHUgNSC9ID04lNwAACHIArVHBwTzAAAAABJRU5ErkJggg==) no-repeat ;
  }
  ul{
    list-style : none;
  }
  .dashboard li {

    width: 100%;
    height: 2.5rem;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    margin: -1px auto 1rem;
  }
  .pd20 {
    padding-left: 20px;
  }
  .dashboard li .item-title {
    float: left;
    vertical-align: 0;
    font-size: 0.7rem;
    color: #585858;
  }
  .dashboard li .item-title {
    display: inline-block;
    line-height: 2.5rem;
    text-decoration: none;
  }
  .dashboard li .arr-r {
    width: 10px;
    height: 10px;
    display: inline-block;
    float: right;
    border-right: 2px solid #bbb;
    border-top: 2px solid #bbb;
    margin: 25px 10px 0 0;
    -webkit-transform: rotate(45deg);
  }
  .dashboard li .item-tip, .dashboard li .item-title {
    display: inline-block;
    line-height: 2.5rem;
    text-decoration: none;
  }
  .dashboard li .item-tip {
    height: 2.5rem;
    float: right;
    text-align: right;
    font-size: 0.5rem;
    color: #ccc;
    padding-right: 5px;
  }
</style>
