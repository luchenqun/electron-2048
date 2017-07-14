import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Element);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
