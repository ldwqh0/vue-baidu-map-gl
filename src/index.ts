import { BMap, loadScript } from './lib'
import _Vue, { PluginObject } from 'vue'
import { BMapGLConfig, globalConfig } from './lib/options'

export default {
  install (Vue: typeof _Vue, config: BMapGLConfig) {
    // 将选项合并到全局配置中
    Object.assign(globalConfig, config)
    Vue.component('BMap', BMap)
  }
} as PluginObject<unknown>

export {
  BMap,
  loadScript
}
