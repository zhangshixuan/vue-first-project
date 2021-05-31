import Vue from 'vue'
import App from './App.vue'
import { Button, Cell, CellGroup, NumberKeyboard } from 'vant'

Vue.use(Button).use(Cell).use(CellGroup).use(NumberKeyboard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
