import Vue, { PropType, VNode } from 'vue'
import loadScript from './loadScript'
import { BMapGLConfig, MapTypeId } from '@/types/vue-baidu-map-gl'

export default Vue.extend({
  props: {
    options: {
      type: [Object] as PropType<BMapGLConfig>,
      required: true
    },
    minZoom: {
      type: Number as PropType<number>,
      required: false,
      default: () => 3
    },
    maxZoom: {
      type: [Number] as PropType<number>,
      required: false,
      default: () => 18
    },
    mapType: {
      type: [String] as PropType<MapTypeId>,
      required: false,
      default: () => MapTypeId.BMAP_EARTH_MAP
    },
    enableAutoResize: {
      type: [Boolean] as PropType<boolean>,
      required: false,
      default: () => true
    }
  },

  mounted () {
    loadScript(this.options).then(BMapGL => {
      const map = new BMapGL.Map(this.$el)
      map.centerAndZoom(new BMapGL.Point(121.491, 31.233), 11)
      this.$emit('mounted', map)
    })
  },
  render (h): VNode {
    return h('div', {
      style: {
        height: '100%',
        width: '100%'
      }
    })
  }
})
