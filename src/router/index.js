import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home-app.vue'
import AllProduce from '../components/all-produce/all-produce.vue'
import Wander from '../components/wander/wander.vue'
import Person from '../components/account/person-center.vue'
import ShopCart from '../components/shopping/shopping.vue'
import Login from '../components/account/login.vue'
import Register from '../components/account/regester.vue'
import Setting from '../components/account/setting.vue'
import About from '../components/account/about.vue'
import Bedding from '../components/home/Bedding.vue'
import FirstPage from '../components/home/firstpage.vue'
import HomeCloth from '../components/home/HomeCloth.vue'
import Living from '../components/home/Living.vue'
import NewPage from '../components/home/new-page.vue'
import Sofa from '../components/home/Sofa.vue'
import Understand from '../components/home/Understand.vue'
import Work from '../components/home/Work.vue'

Vue.use(Router);

export default new Router({
  linkActiveClass : 'active',
  history: true,
  routes: [
    { path: '/',
      component: Home },
    { path: '/Home',
      component: Home },
    { path: '/Wander',
      component: Wander },
    { path: '/ShopCart',
      component: ShopCart },
    { path: '/Person',
      component: Person },
    { path: '/AllProduce',
      component: AllProduce },
    { path: '/Login',
      component: Login },
    { path: '/Register',
      component: Register },
    { path: '/Setting',
      component: Setting },
    { path: '/About',
      component: About },
    { path: '/Work',
      component: Work },
    { path: '/Understand',
      component: Understand },
    { path: '/Sofa',
      component: Sofa },
    { path: '/NewPage',
      component: NewPage },
    { path: '/Bedding',
      component: Bedding },
    { path: '/FirstPage',
      component: FirstPage },
    { path: '/HomeCloth',
      component: HomeCloth },
    { path: '/Living',
      component: Living }
  ]
})
