import Vue from 'vue'
import App from './App.vue'

console.log('Created By ldwqh0@outlook.com')

/**
 *  一定要使用 render函数创建app,这样就不需要依赖完整的esm，也就是不需要打包vue的编译模块了，
 *  vue的模板编译模块体积打约是25KB左右
 */
/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
