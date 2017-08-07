// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import effect from 'components/effect/effect.vue';
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */
const routes = [
  {path: '/effect', component: effect}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  ...App
}).$mount('#app');
