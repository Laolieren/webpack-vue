import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import VueResource from 'vue-resource'
import routerConfig from "./router/router.js"
import store from './utils/store.js';
import ElementUI from 'element-ui';
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import echarts from 'echarts'
import Vuepreview from 'vue-preview'

Vue.prototype.$echarts = echarts;

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Mint)
Vue.use(Vuepreview)
Vue.use(ElementUI,{ zhLocale });

const router = new VueRouter(routerConfig);
new Vue({
    el: "#app",
    router: router,
    store,
    render: h => h(App)
})