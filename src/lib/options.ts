export interface BMapGLConfig {
  version?: string | number
  type?: string,
  ak: string
}

export enum MapTypeId {
  /**
   * 此地图类型展示普通街道视图
   */
  BMAP_NORMAL_MAP = 'BMAP_NORMAL_MAP',
  /**
   *
   * 此地图类型展示地球卫星视图地图图层类
   */
  BMAP_EARTH_MAP = 'BMAP_EARTH_MAP'
}

export interface MapOptions {
  /**
   * 地图允许展示的最小级别
   */
  minZoom?: number;
  /**
   * 地图允许展示的最大级别
   */
  maxZoom?: number;
  /**
   * 地图类型，默认为BMAP_NORMAL_MAP
   */
  mapType?: MapTypeId;
  /**
   * 开启自动适应地图容器变化，默认启用
   */
  enableAutoResize: boolean;
}

const globalConfig: BMapGLConfig = {
  ak: ''
}
export {
  globalConfig
}
