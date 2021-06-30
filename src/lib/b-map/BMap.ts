import Vue, { PropType, VNode } from 'vue'
import loadScript from '@/lib/load-script'
import { BMapGLConfig, globalConfig, MapTypeId } from '../options'

export default Vue.extend({
  props: {
    options: {
      type: [Object] as PropType<BMapGLConfig>,
      required: false,
      default: () => ({})
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
    loadScript({
      ...globalConfig,
      ...this.options
    }).then(BMapGL => {
      const map = new BMapGL.Map(this.$el, {
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        mapType: this.mapType,
        enableAutoResize: this.enableAutoResize
      })
      map.centerAndZoom(new BMapGL.Point(106.239187, 35.862655), 4)
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
