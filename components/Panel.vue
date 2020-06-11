<template>
  <div class="panel">
    <div class="sm:hidden">
      <select
        v-model="activeTab"
        aria-label="Selected tab"
        class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
      >
        <option :value="0">Press</option>
        <option :value="1">Livestream</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex">
          <tab-button
            :is-active="activeTab === 0"
            @click.native="activeTab = 0"
          >
            Press
          </tab-button>
          <tab-button
            :is-active="activeTab === 1"
            @click.native="activeTab = 1"
          >
            Livestream
          </tab-button>
        </nav>
      </div>
    </div>
    <div v-if="activeTab === 0">
      <a
        v-for="item in press"
        :key="item.url"
        :href="item.url"
        rel="noopener"
        class="panel-item"
      >
        {{ item.name }}
      </a>
    </div>
    <div v-if="activeTab === 1">
      <a
        v-for="item in livestream"
        :key="item.url"
        :href="item.url"
        rel="noopener"
        class="panel-item"
      >
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    press: Array,
    livestream: Array
  },
  data() {
    return {
      activeTab: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  max-width: 500px;
  margin: 20px auto;
}

.panel-item {
  cursor: pointer;
  align-items: center;
  color: #363636;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding: 0.5em 0.75em;
  border-bottom: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  &:hover {
    background-color: whitesmoke;
  }
}
</style>
