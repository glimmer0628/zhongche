import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routerConfig from './routerConfig';
import vueWechatTitle from 'vue-wechat-title';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Toast from './components/Toast/index';
import VueCookie from 'vue-cookie';

Vue.use(Toast);
Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.use(VueResource);
Vue.use(vueWechatTitle);
Vue.use(VueAwesomeSwiper);
Vue.http.options.emulateJSON = true;

var router = new VueRouter({
  linkActiveClass: 'active'
});

routerConfig(router);

// For every new route scroll to the top of the page
router.beforeEach(function () {
  window.scrollTo(0, 0);
});

// If no route is matched redirect home
router.redirect({
  '*': '/activity'
});

// when first get into the page redirect to '/acticity'
// router.go('/activity');

router.start(App, '#app');
