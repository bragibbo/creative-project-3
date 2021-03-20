import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vSelect from 'vue-select'
import mock from './mock-data'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

let data = {
  students: mock,
  remove(student) {
    this.students = this.students.filter(currStudent => currStudent.id != student.id);
  },
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
