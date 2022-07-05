<script lang="ts" setup>
import { MenuItemWithLink } from '../../core'
import VPSidebarLink from './VPSidebarLink.vue'
import { isActive } from '../support/utils'
import { useData } from 'vitepress'
import { ref } from 'vue';
import VTIconChevronDown from './../../core/components/icons/VTIconChevronDown.vue';
import VTIconChevronRight from './../../core/components/icons/VTIconChevronRight.vue';

const props = defineProps<{
  text: string
  items: MenuItemWithLink[],
  collapsible: boolean,
  collapsed: boolean,
}>()

const { page } = useData()
const open = ref(false)

function hasActiveLink() {
  const { relativePath } = page.value
  return props.items.some((item) => isActive(relativePath, item.link))
}
</script>

<template>
  <section class="VPSidebarGroup">
    <div class="title" :class="{ '-is-collapsible': collapsible }">
      <h2 class="title-text" :class="{ active: hasActiveLink() }">
        {{ text }}
        <VTIconChevronRight v-if="collapsible && !open" @click="open = !open" class="vt-link-icon" :class="{ open }" />
        <VTIconChevronDown v-if="collapsible && open" @click="open = !open" class="vt-link-icon" :class="{ open }" />
      </h2>
    </div>

    <template v-if="collapsible && open || !collapsible">
      <template v-for="item in items" :key="item.link">
        <VPSidebarLink :item="item" />
      </template>
    </template>
  </section>
</template>

<style scoped>
.title {
  padding: 6px 0;
  text-transform: uppercase;
}

.title.-is-collapsible {
  display: flex;
  justify-content: space-between;
}

.vt-link-icon {
  fill: var(--vt-c-text-1) !important;
}

@media (min-width: 960px) {
  .title {
    padding: 10px 0px 6px 0px;
  }
}

.title-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
}
</style>
