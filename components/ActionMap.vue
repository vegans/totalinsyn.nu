<template>
  <div class="map">
    <div class="is-divider" data-content="Map"></div>
    <no-ssr>
      <MglMap
        :access-token="accessToken"
        :map-style="mapStyle"
        :center="coordinates"
        :zoom="11"
      >
        <MglMarker :coordinates="coordinates" color="blue" />
      </MglMap>
    </no-ssr>
  </div>
</template>

<script>
import { MglMap, MglMarker } from 'vue-mapbox'

export default {
  name: 'Map',
  components: {
    MglMap,
    MglMarker
  },
  props: {
    coordinates: Array
  },
  head() {
    return {
      link: [
        {
          href:
            'https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css',
          rel: 'stylesheet'
        }
      ]
    }
  },
  data() {
    return {
      accessToken:
        'pk.eyJ1IjoiYmVuamljayIsImEiOiJjazNhbHY5NXowZDAyM2dtcjNvZjc0eHYxIn0.szv0m6PsD7q5cVAAlI6uCg',
      mapStyle: 'mapbox://styles/benjick/ck1t54q2a071j1clzqkqx54bj',
      location: null
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  height: 300px;
}
</style>
