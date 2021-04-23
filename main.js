import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import HeadNav from '@/component/headNav.vue'
Vue.component('HeadNav',HeadNav)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
