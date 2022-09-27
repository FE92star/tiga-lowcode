<script lang="ts" setup>
import { onMounted } from 'vue'
import BasicLayout from '@/layout/BasicLayout.vue'
import RightMenu from '@/layout/RightMenu/index.vue'

onMounted(() => {
  document.title = 'Tiga-Editor'
})
</script>

<template>
  <BasicLayout>
    <router-view />
  </BasicLayout>

  <RightMenu />
</template>
