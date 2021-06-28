import { BMapGLConfig } from '@/types/vue-baidu-map-gl'

export default function ({
  ak,
  version = '1.0',
  type = 'webgl'
}: BMapGLConfig): Promise<BMapGL> {
  if (global.BMapGL !== undefined) {
    return Promise.resolve(global.BMapGL)
  } else {
    if (global.$$chain === undefined || global.$$chain === null) {
      global.$$chain = new Promise<BMapGL>((resolve, reject) => {
        const script = document.createElement('script')
        script.src = `https://api.map.baidu.com/api?v=${version}&type=${type}&ak=${ak}&callback=$$MapLoadCallback`
        global.$$MapLoadCallback = () => {
          if (global.BMapGL === undefined) {
            reject(new Error('load script error'))
          } else {
            resolve(global.BMapGL)
          }
          // 删除全局临时变量
          delete global.$$MapLoadCallback
          delete global.$$chain
          document.body.removeChild(script)
        }
        document.body.appendChild(script)
      })
    }
    return global.$$chain
  }
}
