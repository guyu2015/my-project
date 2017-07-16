webpackJsonp([2,51] {
  17:function(t,e,n) {
    "use strict";
    function a(t) {
      return t&&t.__esModule?t: {
        default:t
      }
    }Object.defineProperty(e,"__esModule" {
      value:!0
    }
  );
    var o=n(16),i=a(o),r=n(15),s=n(2);
    a(s);
    e.default= {
      computed:(0,i.default)( {
      },(0,r.mapState)( {
        cartNum:function(t) {
          return t.app.cartNum
        }
        ,waittoypayNum:function(t) {
          return t.app.waittoypayNum
        }
      })),methods: {
        checkout:function(t) {
          this.$store.dispatch("checkout",t)
        }
      }}},19:function(t,e,n) {
    var a,o;
    a=n(17);
    var i=n(20);
    o=a=a|| {
      },"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a
  }
,20:function(t,e) {
    t.exports= {
      render:function() {
        var t=this,e=t.$createElement,n=t._self._c||e;
        return n("footer" {
          directives:[ {
            name:"stop-touchmove",rawName:"v-stop-touchmove"
          }
          ],staticClass:"footer",attrs: {
            id:"bottombar"
          }
        },[t._t("default"),t._v(" "),n("div",[n("ul" {
          attrs: {
            id:"footermenuNav"
          }
        },[n("li",[n("router-link" {
            attrs: {
              to:"/",replace:"","active-class":"selected",exact:""
            }
          },[n("div" {
            staticClass:"ico homeico"
          }
        ),t._v(" "),n("span" {
          staticClass:"lispan"
        }
          ,[t._v("首页")])])],1),t._v(" "),n("li",[n("router-link" {
            attrs: {
              to:"/all",replace:"","active-class":"selected",exact:""
            }
          },[n("div" {
            staticClass:"ico typeico"
          }
        ),t._v(" "),n("span",[t._v("全部产品")])])],1),t._v(" "),n("li",[n("router-link" {
            attrs: {
              to:"/stroll",replace:"","active-class":"selected",exact:""
            }
          },[n("div" {
            staticClass:"ico strollico"
          }
        ),t._v(" "),n("span",[t._v("闲逛")])])],1),t._v(" "),n("li",[n("router-link" {
            attrs: {
              to:"/cart","active-class":"selected",exact:""
            }
          },[n("div" {
            staticClass:"ico shoppingcartico"
          }
        ),t._v(" "),n("span",[t._v("购物车")]),t._v(" "),t.cartNum>0&&t.cartNum<100?n("div" {
          staticClass:"life-cart-num radius50"
        }
          ,[n("span" {
          staticClass:"radius50"
        }
          ,[t._v(t._s(t.cartNum))])]):t._e(),t._v(" "),t.cartNum>99?n("div" {
          staticClass:"life-cart-num-three"
        }
          ,[n("span",[t._v(t._s(t.cartNum))])]):t._e()])],1),t._v(" "),n("li",[n("router-link" {
            attrs: {
              to:"/usercenter",replace:"","active-class":"selected",exact:""
            }
          },[n("div" {
            staticClass:"ico accountcenterico"
          }
        ),t._v(" "),n("span",[t._v("账户中心")]),t._v(" "),n("span" {
        class: {
            "hint-acct":t.waittoypayNum>0
          }
        })])],1)])])],2)},staticRenderFns:[]}},44:function(t,e,n) {
    "use strict";
    function a(t) {
      return t&&t.__esModule?t: {
        default:t
      }
    }Object.defineProperty(e,"__esModule" {
      value:!0
    }
  );
    var o=n(25),i=a(o),r=n(1),s=(a(r),n(2)),c=a(s),l=n(5),d=a(l);
    e.default= {
      data:function() {
        return {
          navs:window.navMenus||[],currentPath:"/home"
        }
      },methods: {
        openChanel:function(t,e) {
          (0,c.default)("#navUL li").each(function(t,n) {
              t==e?(0,c.default)(n).addClass("selected"):(0,c.default)(n).removeClass("selected")
            }
          ),this.initOffset(),d.default.push( {
              path:t
            }
          )},initOffset:function() {
          var t=(0,c.default)("#navUL li.selected"),e=t.index();
          e>0&&(e-=1);
          for(var n=1,a=0;
              a<e;
              a++)n+=(0,c.default)("#navUL li").eq(e).outerWidth(!0);
          (0,c.default)("#navPanelDiv").animate( {
              scrollLeft:n
            }
            ,200)},changeWidth:function() {
          var t=0;
          (0,c.default)("#navUL").children().each(function() {
              t+=(0,c.default)(this).outerWidth(!0)
            }
          ),(0,c.default)("#navUL").width(t)}},created:function() {
        var t=this;
        t.currentPath=t.$route.path,0==t.navs.length?i.default.getNavs().then(function(e) {
          window.navMenus=e,t.navs=e,t.$nextTick(function() {
              t.changeWidth(),t.initOffset()
            }
          )}):t.$nextTick(function() {
            t.changeWidth(),t.initOffset()
          }
        )},mounted:function() {
        (0,c.default)("#footermenuNav").find("li").eq(0).find("a").addClass("selected")
      }
    }},53:function(t,e,n) {
    var a,o;
    a=n(44);
    var i=n(55);
    o=a=a|| {
      },"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a
  }
,55:function(t,e) {
    t.exports= {
      render:function() {
        var t=this,e=t.$createElement,n=t._self._c||e;
        return n("div" {
          staticClass:"wrap-menuNavNewProduct",attrs: {
            title:"分类导航条"
          }
        },[n("div" {
          staticClass:"menuNavNewProductPanel",attrs: {
            id:"navPanelDiv"
          }
        },[n("ul" {
          staticClass:"menuNavNewProduct",staticStyle: {
            width:"1000px"
          }
          ,attrs: {
            id:"navUL"
          }
        },[t._l(t.navs,function(e,a) {
          return["webpage"!=e.Code?n("li" {
            staticClass:"font-large",class: {
              selected:t.currentPath==e.linkUrl
            }
            ,on: {
              click:function(n) {
                t.openChanel(e.linkUrl,a)
              }
            }},[n("a",[t._v(t._s(e.Name))])]):t._e(),t._v(" "),"webpage"==e.Code?n("li" {
            staticClass:"font-large",on: {
              click:function(n) {
                t.$options.filters.open(e.Uri,e.Name)
              }
            }},[n("a",[t._v(t._s(e.Name))])]):t._e()]})],2)])])},staticRenderFns:[]}},138:function(t,e) {
    t.exports="data:image/png;
    base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4BAMAAADLSivhAAAAElBMVEXu7u7////8/Pzz8/P5+fn29vYLYZEUAAACtUlEQVRYw+2UzZazIAyGadG9oN0b1D1qu8fW2U9npvd/K18MIDpHe/y2c3hPi/zkMSFEWFRUVFRUVFTUX1Pnnnx8/DebCGNZBUIfZMZJBMGFJtqyFZ8+iB6lqVdswVch5IelyCEXmtd+8SxwtaS4Mly6C1lxii8YZD7uktr1XqTtnAyGVvc3UNkaRoYEFQ3ZUn7/A2NPScs7cErByxXcujTWLLV2sAMzB2+sprlLCWt34L4P8O31bfMtcjIyDAprnm/BHBOLCZqEBSNHUdlN08uemt5CMWx67tGO94PEADie9NmGOdCjZonPlNmCXTpbaoopknLOGM8XZluw56RPKeRzGZxLdjoGe6dwsanAR6uPw6mosKahmDOm2HE4EWpSYzMhNL+g2XE4GKJLk5TTXP4GNjswntHJ0N734SQLMA/VT9RT272TfjbgdgGzECJRtd27oWGzAUO5gAdsKMeWcgd+oUe5hjPa2QzTXIUNFXc4JKBaU3rB3kDIV/8DouwBkanRjIOof7xZImwnFaIeYeX4rpzM1NNTU6IhCDnfgi5TNHnsVu5D95tF7YprxvR6/Eaj1VwyOUsKFtRmv03N8kis3GgQJOeuUwqkUpUv8okdsjWMf73p+fnxQn3lHqZiXcJqFH1xl36YVPdbM8MUVJLvelZseGRchAnQIaqTQD10gKEezW+YefiK65Q+p/MyeYA/RHfh2+sFuNFgL1li5oFS+Ft57odHrrfDZl0tmvARAr65eellLPXwkJWHYXVU56YDIY+FTUoX9xfn8imHz9n0ign7eAefZRFg+AYZLi3Z1pjP8g0MFcyuus+2knyO+9JqqtdduCvoeOYRoq1xceQTfNovkk7i+lfjy63QvGDcuJFp618VNnZ1X929ua2mzpmnLFUmZINd7VcVFRUVFRUVFRX1Dxefbh6b6BgqAAAAAElFTkSuQmCC"
  }
,146:function(t,e,n) {
    var a,o;
    n(380),a=n(187);
    var i=n(558);
    o=a=a|| {
      },"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-60df7298",t.exports=a
  }
,150:function(t,e) {
    (function(e) {
        t.exports=e
      }
    ).call(e {
    })
  }
,155:function(t,e,n) {
    "use strict";
    function a(t) {
      return t&&t.__esModule?t: {
        default:t
      }
    }Object.defineProperty(e,"__esModule" {
      value:!0
    }
  );
    var o=n(25),i=(a(o),n(1)),r=a(i),s=n(12),c=a(s),l=n(2),d=a(l);
    e.default= {
      name:"combination-chart",props:["content","index"],methods: {
        coords:function(t,e,n) {
          return r.default.coords(t,e,n)
        }
        ,openChart:function(t) {
          t.Uri&&t.Uri.indexOf("/item/")>-1?r.default.setScrollTop():"home"==this.$store.state.app.currentRouterKey&&c.default.set("homeScrollTop",(0,d.default)(window).scrollTop()),this.$options.filters.openInner(t.Uri)
        }
      }}},187:function(t,e,n) {
    "use strict";
    function a(t) {
      return t&&t.__esModule?t: {
        default:t
      }
    }Object.defineProperty(e,"__esModule" {
      value:!0
    }
  );
    var o=n(60),i=a(o),r=n(31),s=a(r),c=n(16),l=a(c),d=n(11),u=a(d),f=n(15),h=n(2),p=a(h),m=n(10),v=a(m),g=n(1),w=a(g),b=n(12),y=a(b),C=n(25),x=a(C),k=n(13),I=(a(k),n(18)),T=(a(I),n(441)),_=a(T),E=n(53),D=a(E),S=n(19),P=a(S),N=n(54),A=a(N),L=n(104),M=a(L),F=n(107),U=a(F),H=n(235),R=a(H);
    n(67),n(57);
    var $=n(5),O=a($),z=n(7),B=n(105),W=a(B);
    u.default.component("v-nav",D.default),u.default.component("v-footer",P.default),u.default.component("v-combination-chart",_.default),u.default.component("v-shelf-item",A.default),u.default.component("v-affix",M.default),u.default.component(z.Spinner.name,z.Spinner),u.default.component("v-download",U.default),u.default.component("v-countdown",W.default),u.default.use(z.InfiniteScroll),e.default= {
      name:"home",data:function() {
        return {
          banners:[],contents:[],topictabIndex:0,topictabs:[],topicItems:[],combinationPageSize:5,productPageSize:10,loading:!0,showMiddleNav:!1,showloading:!0,initSwiper:!1,showError:!1,firstScreen:!0,countDownBanner:null,countTimeDown:"",isApp:w.default.isApp()
        }
      },computed:(0,l.default)( {
      },(0,f.mapState)( {
        showDownload:function(t) {
          return!w.default.isApp()&&0==t.app.clickedDownloadDialog
        }
        ,fromRouterKey:function(t) {
          return t.app.fromRouterKey
        }
      })),watch: {
        $route:"fetchData"
      }
      ,created:function() {
        "adhome"==this.$route.name&&w.default.setCookie("hideDownload",!0),this.firstScreen=!0,this.showloading=!0,this.loadData(),window.homePage=this
      }
      ,destroyed:function() {
        window.homePage=void 0
      }
      ,mounted:function() {
        window.addEventListener("scroll",this.handleFixed,!1),window.addEventListener("touchmove",this.handleFixed,!1),window.addEventListener("load",function() {
            R.default.attach(document.body)
          }
          ,!1)},methods: {
        fetchData:function() {
          v.default.state.app.resumeStatus&&this.$store.dispatch("updateResumeStatus",!1)
        }
        ,getHomePagingInfo:function() {
          return w.default.jsonTryParse(sessionStorage.getItem("homePagingInfo"))|| {
              combinationChartData:[],productData:[],combinationPage:1,productPageInfo:[]
            }
        },cacheHomePagingInfo:function(t) {
          sessionStorage.setItem("homePagingInfo",(0,s.default)(t))
        }
        ,removeHomePagingInfo:function() {
          this.firstScreen=!1,this.loading=!1,y.default.clear("contents_home_v2"),sessionStorage.removeItem("homePagingInfo"),this.loadData(),this.$refs.pulldown&&this.$refs.pulldown.onTopLoaded()
        }
        ,clickBannerHandler:function(t) {
          t&&(t.indexOf("/item/")!==-1?w.default.setScrollTop():y.default.set("homeScrollTop",(0,p.default)(window).scrollTop()),this.$options.filters.openInner(t))
        }
        ,changeScrollTop:function() {
          var t=this.$store.state.app.fromRouterKey;
          if("new"!=t&&"chanel"!=t&&"all"!=t&&"usercenter"!=t&&"stroll"!=t&&"cart"!=t)if("item"==t) {
            var e=this.$route.query.sort||0;
            e&&this.changeTopictabIndex(e),w.default.changeScrollTop()
          }
          else {
            var n=y.default.get("homeScrollTop");
            n>0?((0,p.default)("body,html").animate( {
                scrollTop:n
              }
              ,100),y.default.set("homeScrollTop",0)):(0,p.default)("body,html").animate( {
                scrollTop:0
              }
              ,100)}},getIndexClass:function(t) {
          return"index-"+t
        }
        ,changeTopictabIndex:function(t) {
          O.default.replace( {
            path:this.$route.fullpath,query: {
              sort:t
            }
          });
          var e=(0,p.default)("html").height(),n=this.getHeaderFixedHeight(),e=(0,p.default)("html").height()-n;
          (0,p.default)(".wrap-shelf").css( {
              "min-height":e
            }
          ),(0,p.default)("body").scrollTop((0,p.default)(".index-list-navs").offset().top-n),this.topictabIndex=t,this.topicItems=[];
          var a=this;
          a.$nextTick(function() {
              (0,p.default)("#footermenuNav li:first a:first").addClass("selected"),a.topicItems=[],a.loadMore(!1)
            }
          )},handleFixed:function() {
          var t=(0,p.default)(".index-list-navs"),e=(0,p.default)(".index-list-navs > div");
          if(0!=t.length&&0!=e.length) {
            var n=(0,p.default)("body").scrollTop(),a=t.offset().top,o=this.getHeaderFixedHeight();
            n>=a-o?e.css( {
                position:"fixed",top:o
              }
            ):e.css( {
                position:"static"
              }
            )}},getHeaderFixedHeight:function() {
          var t=0==(0,p.default)(".top-bar-app").length?0:(0,p.default)(".top-bar-app").outerHeight(!0),e=0==(0,p.default)(".wrap-heard").length?0:(0,p.default)(".wrap-heard").outerHeight(!0),n=0==(0,p.default)(".wrap-menuNavNewProduct").length?0:(0,p.default)(".wrap-menuNavNewProduct").outerHeight(!0);
          return t+e+n+w.default.getIosTopHeight()
        }
        ,reloadHandler:function() {
          this.showError=!1,this.showloading=!0,this.loadData(!1)
        }
        ,loadData:function(t) {
          var e=this;
          x.default.getContents(t).then(function(t) {
              if(null==t||null==t.InnerData||0==t.Result)return e.showError=!0,void(e.showloading=!1);
              var n=e.getHomePagingInfo();
              n.combinationChartData=[],n.productData=[];
              for(var a=0;
                  a<t.InnerData.length;
                  a++) {
                var o=t.InnerData[a];
                "ShortCut_2"!==o.Type&&"CombinationChart"!==o.Type||n.combinationChartData.push(o),"banner"==t.InnerData[a].Type&&t.InnerData[a].InnerData?(e.banners=[],t.InnerData[a].InnerData.forEach(function(t) {
                    e.banners.push(t)
                  }
                )):"topic_tab"==t.InnerData[a].Type?(e.topictabs=[],t.InnerData[a].InnerData&&t.InnerData[a].InnerData.forEach(function(t) {
                    e.topictabs.push(t)
                  }
                ),n.productData=o.InnerData):"CountDownTime_V2"==t.InnerData[a].Type&&t.InnerData[a].InnerData&&(e.countDownBanner=t.InnerData[a].InnerData,e.countDownBanner.TimeStamp&&(e.countTimeDown=e.countDownBanner.TimeStamp))}0===n.productPageInfo.length&&n.productData.forEach(function(t,e) {
                n.productPageInfo.push(0)
              }
              ),(0,i.default)(n.combinationChartData).forEach(function(t) {
                if("ShortCut_2"==t.Type) {
                  var e=t.InnerData.TouchElem;
                  e.forEach(function(t) {
                    if(t.Uri.indexOf("app://")>=0) {
                      var e=t.Uri.substring(6),n=e.split("/");
                      e="#/"+n[0],t.Uri=e
                    }
                  })}}),n.maxCombinationPage=Math.floor(n.combinationChartData.length/e.combinationPageSize)+(n.combinationChartData.length%e.combinationPageSize===0?0:1),e.contents=[],n.combinationChartData.slice(0,n.combinationPage*e.combinationPageSize).forEach(function(t) {
                e.contents.push(t)
              }
              ),e.cacheHomePagingInfo(n),e.$nextTick(function() {
                e.changeScrollTop(),0==e.initSwiper&&e.banners.length>1&&(window.indexSwiper=new Swiper(".swiper-container" {
                  loop:!0,pagination:".swiper-pagination",autoplay:5e3,autoplayDisableOnInteraction:!1,width:window.innerWidth
                }
                ),e.initSwiper=!0),e.loading=!1}),e.showloading=!1,e.$refs.pulldown&&e.$refs.pulldown.onTopLoaded()},function(t) {
              e.showError=!0,e.showloading=!1,e.$refs.pulldown&&e.$refs.pulldown.onTopLoaded()
            }
          )},loadMore:function(t) {
          var e=!1;
          this.loading=!0;
          var n=this,a=n.getHomePagingInfo();
          return a&&a.combinationChartData.length?(a.combinationPage<a.maxCombinationPage?(a.combinationPage++,n.contents=a.combinationChartData.slice(0,a.combinationPage*n.combinationPageSize)):a.productData.length?(n.showMiddleNav=!0,a.productPageInfo[n.topictabIndex]*n.productPageSize<a.productData[n.topictabIndex].Items.length?(t===!1&&0!==a.productPageInfo[n.topictabIndex]||a.productPageInfo[n.topictabIndex]++,n.topicItems=a.productData[n.topictabIndex].Items.slice(0,a.productPageInfo[n.topictabIndex]*n.productPageSize)):(n.topicItems=a.productData[n.topictabIndex].Items,e=!0)):e=!0,e?n.$nextTick(function() {
              (0,p.default)(".home-loadmore-spinner").hide(),(0,p.default)("#homeLoadMoreLoadingText").html("~没有更多了~")
            }
          ):((0,p.default)(".home-loadmore-spinner").show(),n.loading=!1),void n.cacheHomePagingInfo(a)):void(this.loading=!1)},timerStopHandler:function() {
          this.countDownBanner=null,this.removeHomePagingInfo()
        }
        ,hideDownload:function() {
          v.default.dispatch("clickDownloadDialog")
        }
      },beforeDestroy:function() {
        window.removeEventListener("touchmove",this.handleFixed,!1),window.removeEventListener("scroll",this.handleFixed,!1),window.removeEventListener("load",function() {
            R.default.attach(document.body)
          }
          ,!1)},directives: {
        "swiper-height": {
          inserted:function(t) {
            (0,p.default)(t).css("height",(0,p.default)(window).width()/750*500)
          }
        }}}},235:function(t,e,n) {
    function a(t) {
      return t&&t.__esModule?t: {
        default:t
      }
    }var o,i=n(49),r=a(i);
    !function() {
      "use strict";
      function a(t,e) {
        function n(t,e) {
          return function() {
            return t.apply(e,arguments)
          }
        }var o;
        if(e=e|| {
            },this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!a.notNeeded(t)) {
          for(var i=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,c=0,l=i.length;
              c<l;
              c++)r[i[c]]=n(r[i[c]],r);
          s&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!0),t.addEventListener("touchmove",this.onTouchMove,!0),t.addEventListener("touchend",this.onTouchEnd,!0),t.addEventListener("touchcancel",this.onTouchCancel,!0),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,a) {
            var o=Node.prototype.removeEventListener;
            "click"===e?o.call(t,e,n.hijacked||n,a):o.call(t,e,n,a)
          }
            ,t.addEventListener=function(e,n,a) {
            var o=Node.prototype.addEventListener;
            "click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t) {
                  t.propagationStopped||n(t)
                }
              ),a):o.call(t,e,n,a)}),"function"==typeof t.onclick&&(o=t.onclick,t.addEventListener("click",function(t) {
              o(t)
            }
            ,!1),t.onclick=null)}}var i=navigator.userAgent.indexOf("Windows Phone")>=0,s=navigator.userAgent.indexOf("Android")>0&&!i,c=/iP(ad|hone|od)/.test(navigator.userAgent)&&!i,l=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),d=c&&/OS [6-7]_\d/.test(navigator.userAgent),u=navigator.userAgent.indexOf("BB10")>0;
      a.prototype.needsClick=function(t) {
        switch(t.nodeName.toLowerCase()) {
          case"button":case"select":case"textarea":if(t.disabled)return!0;
          break;
          case"input":if(c&&"file"===t.type||t.disabled)return!0;
            break;
          case"label":case"iframe":case"video":return!0
        }
        return/\bneedsclick\b/.test(t.className)},a.prototype.needsFocus=function(t) {
        switch(t.nodeName.toLowerCase()) {
          case"textarea":return!0;
          case"select":return!s;
          case"input":switch(t.type) {
            case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1
          }
            return!t.disabled&&!t.readOnly;
          default:return/\bneedsfocus\b/.test(t.className)}},a.prototype.sendClick=function(t,e) {
        var n,a;
        document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),a=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)
      }
        ,a.prototype.determineEventType=function(t) {
        return s&&"select"===t.tagName.toLowerCase()?"mousedown":"click"
      }
        ,a.prototype.focus=function(t) {
        var e;
        c&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()
      }
        ,a.prototype.updateScrollParent=function(t) {
        var e,n;
        if(e=t.fastClickScrollParent,!e||!e.contains(t)) {
          n=t;
          do {
            if(n.scrollHeight>n.offsetHeight) {
              e=n,t.fastClickScrollParent=n;
              break
            }
            n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(t) {
        return t.nodeType===Node.TEXT_NODE?t.parentNode:t
      }
        ,a.prototype.onTouchStart=function(t) {
        var e,n,a;
        if(t.targetTouches.length>1)return!0;
        if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],c) {
          if(a=window.getSelection(),a.rangeCount&&!a.isCollapsed)return!0;
          if(!l) {
            if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;
            this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)
          }
        }return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},a.prototype.touchHasMoved=function(t) {
        var e=t.changedTouches[0],n=this.touchBoundary;
        return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n
      }
        ,a.prototype.onTouchMove=function(t) {
        return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)
      }
        ,a.prototype.findControl=function(t) {
        return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button,input:not([type=hidden]),keygen,meter,output,progress,select,textarea")
      }
        ,a.prototype.onTouchEnd=function(t) {
        var e,n,a,o,i,r=this.targetElement;
        if(!this.trackingClick)return!0;
        if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;
        if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;
        if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,d&&(i=t.changedTouches[0],r=document.elementFromPoint(i.pageX-window.pageXOffset,i.pageY-window.pageYOffset)||r,r.fastClickScrollParent=this.targetElement.fastClickScrollParent),a=r.tagName.toLowerCase(),"label"===a) {
          if(e=this.findControl(r)) {
            if(this.focus(r),s)return!1;
            r=e
          }
        }else if(this.needsFocus(r))return t.timeStamp-n>50||c&&window.top!==window&&"input"===a?(this.targetElement=null,!1):(this.focus(r),this.sendClick(r,t),c&&"select"===a||(this.targetElement=null,t.preventDefault()),!1);
        return!(!c||l||(o=r.fastClickScrollParent,!o||o.fastClickLastScrollTop===o.scrollTop))||(this.needsClick(r)||(t.preventDefault(),this.sendClick(r,t)),!1)},a.prototype.onTouchCancel=function() {
        this.trackingClick=!1,this.targetElement=null
      }
        ,a.prototype.onMouse=function(t) {
        return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))
      }
        ,a.prototype.onClick=function(t) {
        var e;
        return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)
      }
        ,a.prototype.destroy=function() {
        var t=this.layer;
        s&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)
      }
        ,a.notNeeded=function(t) {
        var e,n,a,o;
        if("undefined"==typeof window.ontouchstart)return!0;
        if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]) {
          if(!s)return!0;
          if(e=document.querySelector("meta[name=viewport]")) {
            if(e.content.indexOf("user-scalable=no")!==-1)return!0;
            if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0
          }
        }if(u&&(a=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),a[1]>=10&&a[2]>=3&&(e=document.querySelector("meta[name=viewport]")))) {
          if(e.content.indexOf("user-scalable=no")!==-1)return!0;
          if(document.documentElement.scrollWidth<=window.outerWidth)return!0
        }
        return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(o=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(o>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(e.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},a.attach=function(t,e) {
        return new a(t,e)
      }
        ,"object"===(0,r.default)(n(150))&&n(150)?(o=function() {
        return a
      }
        .call(e,n,e,t),!(void 0!==o&&(t.exports=o))):"undefined"!=typeof t&&t.exports?(t.exports=a.attach,t.exports.FastClick=a):window.FastClick=a}()},310:function(t,e,n) {
    e=t.exports=n(3)(),e.push([t.id,".combo-title[data-v-46782024] {
      width:100%;
    text-align:center;
    font-size:2rem
  }
.img-wrap[data-v-46782024] {
    background:#eee url("+n(138)+") no-repeat 50%
  }
  ",""])},318:function(t,e,n) {
  e=t.exports=n(3)(),e.push([t.id,".fade-enter[data-v-60df7298],.fade-leave-active[data-v-60df7298] {
    opacity:.3
}
.fade-enter-active[data-v-60df7298],.fade-leave-active[data-v-60df7298] {
  transition:opacity .3s
}
.index-list-navs[data-v-60df7298] {
  height:3rem
}
.life-index-list[data-v-60df7298] {
  width:100%;
  border-bottom:.05rem solid #eee;
  top:7.2rem;
  z-index:100
}
._v-container[data-v-60df7298] {
  height:auto!important
}
.middle-nav[data-v-60df7298] {
  height:40px;
  line-height:40px
}
.middle-nav-item[data-v-60df7298] {
  float:left;
  text-align:center;
  width:25%;
  box-sizing:border-box
}
.middle-nav-item a[data-v-60df7298] {
  font-size:1.35rem;
  display:inline-block;
  width:100%;
  text-align:center;
  height:18px;
  line-height:18px;
  color:#a0a0a0;
  font-size:1.25rem
}
.middle-nav-item:not(:last-child) a[data-v-60df7298] {
  border-right:1px solid #f2f2f2
}
.middle-nav-item.active a[data-v-60df7298] {
  color:#ac2c2b
}
.home-loadmore-spinner[data-v-60df7298] {
  display:inline-block;
  vertical-align:middle;
  margin-right:4px
}
#loadingAlert[data-v-60df7298] {
  text-align:center;
  color:#888;
  padding-bottom:16px
}
.item-combo[data-v-60df7298] {
  margin-bottom:1rem
}
.swiper-container[data-v-60df7298] {
  background:#eee url("+n(138)+") no-repeat 50%
}
.UnionPanel[data-v-60df7298] {
  margin-bottom:0
}
",""])},371:function(t,e,n) {
var a=n(310);
"string"==typeof a&&(a=[[t.id,a,""]]);
n(4)(a {
});
a.locals&&(t.exports=a.locals)
}
,380:function(t,e,n) {
  var a=n(318);
  "string"==typeof a&&(a=[[t.id,a,""]]);
  n(4)(a {
  });
  a.locals&&(t.exports=a.locals)
}
,441:function(t,e,n) {
  var a,o;
  n(371),a=n(155);
  var i=n(546);
  o=a=a|| {
    },"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-46782024",t.exports=a
}
,546:function(t,e) {
  t.exports= {
    render:function() {
      var t=this,e=t.$createElement;
      t._self._c||e;
      return t._m(0)
    }
    ,staticRenderFns:[function() {
      var t=this,e=t.$createElement,n=t._self._c||e;
      return n("div" {
        attrs: {
          title:"组合图活动"
        }
      },[n("div" {
        staticClass:"combo-title"
      }
        ,[t._v(t._s(t.content.InnerData.Title))]),t._v(" "),n("div" {
        staticClass:"img-wrap",style: {
          height:t.$options.filters.imageSize(t.content.InnerData.ImageWidth,t.content.InnerData.ImageHeight).height+"px"
        }
      },[n("img" {
        directives:[ {
          name:"lazy-src",rawName:"v-lazy-src",value: {
            src:t.$options.filters.imgAuto(t.content.InnerData.ImageUrl,t.$store.getters.pageWidth)
          }
          ,expression:" {
          src:$options.filters.imgAuto(content.InnerData.ImageUrl,$store.getters.pageWidth)
        }
          "}],staticStyle: {
          width:"100%"
    }
      ,style: {
        height:t.$options.filters.imageSize(t.content.InnerData.ImageWidth,t.content.InnerData.ImageHeight).height+"px"
      }
      ,attrs: {
        usemap:"#planetmap"+t.index
      }
    }),t._v(" "),n("map" {
  attrs: {
    name:"planetmap"+t.index,id:"planetmap"+t.index
  }
},t._l(t.content.InnerData.TouchElem,function(e) {
  return n("area" {
    attrs: {
      shape:"rect",coords:t.coords(t.content.InnerData.ImageWidth,t.content.InnerData.ImageHeight,e)
    }
  ,on: {
      click:function(n) {
        t.openChart(e)
      }
    }})}))])])}]}},558:function(t,e) {
  t.exports= {
    render:function() {
      var t=this,e=t.$createElement,n=t._self._c||e;
      return n("div" {
      },[t.isApp&&"redirect"==t.fromRouterKey?n("v-update-app"):t._e(),t._v(" "),t.showDownload?t._e():n("v-gotop"),t._v(" "),t._m(0),t._v(" "),n("article" {
        directives:[ {
          name:"fix-ios",rawName:"v-fix-ios"
        }
          {
            name:"show",rawName:"v-show",value:t.firstScreen&&(t.showloading||t.showError),expression:"firstScreen && (showloading || showError)"
          }
        ],staticClass:"home-body"},[n("v-loading" {
        attrs: {
          "show-loading":t.showloading&&!t.showError,"show-error":t.showError
        }
        ,on: {
          reloadHandler:t.reloadHandler
        }
      })],1),t._v(" "),n("article" {
        directives:[ {
          name:"fix-ios",rawName:"v-fix-ios"
        }
          {
            name:"show",rawName:"v-show",value:!(t.firstScreen&&(t.showloading||t.showError)),expression:"!(firstScreen && (showloading || showError))"
          }
          {
            name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"
          }
        ],staticClass:"home-body",attrs: {
          "infinite-scroll-disabled":"loading","infinite-scroll-distance":"100"
        }
      },[n("v-pull-down" {
        ref:"pulldown",on: {
          load:t.removeHomePagingInfo
        }
      },[n("div",[null!=t.countDownBanner?n("div" {
        staticClass:"item-countdown"
      }
        ,[n("img" {
          staticStyle: {
            width:"100%"
          }
          ,attrs: {
            src:t.$options.filters.imgAuto(t.countDownBanner.ImgUrl,t.$store.getters.pageWidth)
          }
          ,on: {
            click:function(e) {
              t.$options.filters.openInner(t.countDownBanner.Uri)
            }
          }}),t._v(" "),t.countTimeDown?n("v-countdown" {
        attrs: {
          time:t.countTimeDown,msg:"活动仅剩："
        }
        ,on: {
          timerStopHandler:t.timerStopHandler
        }
      }):t._e()],1):n("div" {
        staticClass:"item-banner"
      }
      ,[n("div" {
        directives:[ {
          name:"swiper-height",rawName:"v-swiper-height"
        }
        ],staticClass:"swiper-container"},[n("div" {
        staticClass:"swiper-wrapper"
      }
        ,t._l(t.banners,function(e) {
          return n("div" {
            staticClass:"swiper-slide"
          }
          ,[n("a" {
            on: {
              click:function(n) {
                t.clickBannerHandler(e.Uri)
              }
            }},[n("img" {
            staticStyle: {
              width:"100%"
            }
            ,attrs: {
              src:t.$options.filters.imgAuto(e.ImageUrl,t.$store.getters.pageWidth)
            }
          })])])})),t._v(" "),t.banners.length>1?n("div" {
        staticClass:"swiper-pagination"
      }
      ):t._e()])])]),t._v(" "),t._l(t.contents,function(t,e) {
        return n("div" {
          staticClass:"item-combo",class:t.InnerData.ClassName
        }
        ,[n("v-combination-chart" {
          attrs: {
            index:e,content:t
          }
        })],1)})],2),t._v(" "),t.showMiddleNav&&t.topictabs&&t.topictabs.length>0?n("div" {
        staticClass:"index-list-navs"
      }
        ,[n("div" {
        staticClass:"life-index-list"
      }
        ,[n("div" {
          directives:[ {
            name:"average-width",rawName:"v-average-width"
          }
          ],staticClass:"middle-nav"},t._l(t.topictabs,function(e,a) {
          return n("div" {
            staticClass:"middle-nav-item",class: {
              active:t.topictabIndex==a
            }
          },[n("a" {
            attrs: {
              href:"javascript:void(0);
              "
            }
            ,on: {
              click:function(e) {
                t.changeTopictabIndex(a)
              }
            }},[e.Topic?[t._v(t._s(e.Topic.Header.Title.Text))]:t._e()],2)])}))])]):t._e(),t._v(" "),n("div" {
        staticClass:"wrap-shelf",staticStyle: {
          margin:"-8em auto 2em"
        }
      },t._l(t.topicItems,function(t) {
        return n("v-shelf-item" {
          attrs: {
            item:t
          }
        })})),t._v(" "),t.loading?n("div" {
        attrs: {
          id:"loadingAlert"
        }
      },[n("mt-spinner" {
        staticClass:"home-loadmore-spinner",attrs: {
          type:"fading-circle",size:20
        }
      }),t._v(" "),n("span" {
        attrs: {
          id:"homeLoadMoreLoadingText"
        }
      },[t._v("数据加载中...")])],1):t._e()],1),t._v(" "),n("v-footer"),t._v(" "),n("v-download" {
        attrs: {
          showDownload:t.showDownload
        }
      ,on: {
          hideDownload:t.hideDownload
        }
      })],1)},staticRenderFns:[function() {
      var t=this,e=t.$createElement,n=t._self._c||e;
      return n("v-header" {
        attrs: {
          "show-download":!1
        }
      },[n("div" {
        staticClass:"wrap-heard"
      }
        ,[n("div" {
          staticClass:"header-Ico"
        }
      ),t._v(" "),n("a" {
        attrs: {
          href:"#/all"
        }
      },[n("span" {
        staticClass:"head-typeimg"
      }
      )])]),t._v(" "),n("v-nav")],1)}]}}});
