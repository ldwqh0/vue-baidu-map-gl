import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 这里是一个组件的列表
const components = {
  'b-map': 'src/lib/BMap',
  'load-script': 'src/lib/loadScript'
}

const externals = {}
const entries = {}
Object.keys(components).forEach(key => {
  externals[`@/lib/${key}`] = `vue-baidu-map-gl/lib/${key}`
  entries[key] = resolve(__dirname, '../', `src/lib/${key}`)
})

export {
  entries,
  externals
}
export default components
