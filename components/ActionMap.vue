<template>
  <div class="map">
    <ti-divider>Map</ti-divider>
    <client-only>
      <MglMap
        :access-token="accessToken"
        :map-style="mapStyle"
        :center="coordinates"
        :zoom="11"
      >
        <MglMarker :coordinates="coordinates" color="#1C64F2" />
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
      mapStyle: 'mapbox://styles/benjick/ck1t54q2a071j1clzqkqx54bj',
      location: null
    }
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
  }
}
</script>

<style lang="scss" scoped>
.map {
  height: 300px;
}
</style>
