<script lang="ts" setup>
import { VTSwitchAppearance } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <div v-if="config.appearance" class="VPNavBarAppearance">
    <VTSwitchAppearance />
  </div>
</template>

<style scoped>
.VPNavBarAppearance {
  display: none;
  width: 20px;
  height: 20px !important;
}

@media (min-width: 1280px) {
  .VPNavBarAppearance {
    display: flex;
  }
}
</style>
