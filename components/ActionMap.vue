<template>
  <div>
    <Divider>Karta</Divider>
    <client-only>
      <MglMap
        :access-token="accessToken"
        :map-style="mapStyle"
        :center="coordinates[0]"
        :zoom="11"
        :scroll-zoom="false"
        @load="loaded"
      >
        <!-- <MglNavigationControl :show-compass="false" position="top-right" /> -->
        <MglMarker
          v-for="(coord, i) in coordinates"
          :key="i"
          :coordinates="coord"
          color="#F1B500"
        />
      </MglMap>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    coordinates: Array
  },
  data() {
    return {
      accessToken:
        'pk.eyJ1IjoiYmVuamljayIsImEiOiJjazNhbHY5NXowZDAyM2dtcjNvZjc0eHYxIn0.szv0m6PsD7q5cVAAlI6uCg',
      mapStyle: 'mapbox://styles/benjick/ck9qw07vv4er41ilcvzls5k3d'
    }
  },
  methods: {
    loaded({ component }) {
      if (this.coordinates.length > 1) {
        const lng = this.coordinates.map((coordinate) => coordinate.lon)
        const lat = this.coordinates.map((coordinate) => coordinate.lat)
        const maxLng = Math.max(...lng)
        const minLng = Math.min(...lng)
        const maxLat = Math.max(...lat)
        const minLat = Math.min(...lat)
        const southWest = [minLng, minLat]
        const northEast = [maxLng, maxLat]
        component.actions.fitBounds([southWest, northEast], {
          padding: 25
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mapboxgl-map,
.mgl-map-wrapper {
  height: 375px;
}
</style>
