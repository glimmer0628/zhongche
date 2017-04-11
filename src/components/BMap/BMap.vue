<template>
  <div id="allmap" v-bind:style="mapStyle"></div>
</template>
<script>
import BMap from 'BMap';
import { startLocation, endLocation } from '../../vuex/actions';
export default {
  data () {
    return {
      mapStyle: {
        width: '100%',
        height: '360px'
      },
      counting: false
    };
  },
  props: {
    start: String,
    end: String
  },
  vuex: {
    getters: {
      startCode: ({ user }) => user.location.startCode,
      endCode: ({ user }) => user.location.endCode
    },
    actions: {
      startLocation,
      endLocation
    }
  },
  ready () {
    let map = new BMap.Map('allmap');
    map.centerAndZoom(new BMap.Point(120.384428, 36.105215), 11);
    let walking = new BMap.WalkingRoute(map, {renderOptions: {map: map, autoViewport: true}});
    // walking.search(new BMap.Point(120.384749, 36.093831), new BMap.Point(120.384369, 36.073621));
    this.$watch('start', () => {
      // 起止点连线
      if (!(this.start && this.end)) {
        return;
      }
      // 起点地址转换
      let myGeo = new BMap.Geocoder();
      myGeo.getPoint(this.start, (staPoint) => {
        if (staPoint) {
          this.startLocation(staPoint);
          // 终点地址转换
          myGeo.getPoint(this.end, (endPoint) => {
            if (endPoint) {
              this.endLocation(endPoint);
              walking.search(new BMap.Point(staPoint.lng, staPoint.lat), new BMap.Point(endPoint.lng, endPoint.lat));
            } else {
              window.alert('您选择地址没有解析到结果!');
            }
          }, this.end.substring(0, this.end.indexOf('省') + 1));
        } else {
          window.alert('您选择地址没有解析到结果!');
        }
      }, this.start.substring(0, this.start.indexOf('省') + 1));
    });
    map.enableScrollWheelZoom(true);
  }
};
</script>