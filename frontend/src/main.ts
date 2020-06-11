import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import GoogleAuth from 'vue-google-auth';

import 'bootstrap/dist/css/bootstrap.min.css';

/* Google Auth */

Vue.use(GoogleAuth, { client_id: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' })
Vue.googleAuth().load()

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
