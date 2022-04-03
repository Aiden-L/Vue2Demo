// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// router
import router from './router'
// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import myrequest
import myRequest from './common/request.js'
Vue.prototype.$request = myRequest
// import myconfig
import config from './common/config.js'
Vue.prototype.$config = config
// import common js
import myfuncs from './common/common.js'
Vue.prototype.$funcs = myfuncs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
