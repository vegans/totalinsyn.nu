import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  observer: true
})
