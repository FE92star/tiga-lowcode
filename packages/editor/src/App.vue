<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useVisibilityChange } from './hooks/useVisibilityChange'
import BasicLayout from '@/layout/BasicLayout.vue'
import RightMenu from '@/layout/RightMenu/index.vue'

let visibleEffect: () => void

onMounted(() => {
  visibleEffect = useVisibilityChange({
    show: () => {
      document.title = 'Tiga-Editor'
    },
    hide: () => {
      document.title = 'わあ、私は壊れてしまった～～～'
    }
  })
})

onBeforeUnmount(() => {
  visibleEffect()
})
</script>

<template>
  <BasicLayout>
    <router-view />
  </BasicLayout>

  <RightMenu />
</template>
