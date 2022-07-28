<script lang="ts" setup>
import BasicLayoutHeader from './Header.vue'
import BasicLayoutAsider from './Sider.vue'
</script>

<template>
  <div class="editor-layout">
    <header class="editor-layout__header">
      <BasicLayoutHeader />
    </header>
    <div class="editor-layout__aside">
      <BasicLayoutAsider />
    </div>
    <section class="editor-layout__content">
      <slot />
    </section>
  </div>
</template>

<style lang="less" scoped>
.editor-layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  &__header {
    width: 100%;
  }

  &__aside {
    display: flex;
    position: relative;
    z-index: 200;
    border-right: 1px solid var(--bg-reg);
    height: calc(100vh - var(--odyssey-editor-header-height));
  }

  &__content {
    position: relative;
    background-color: var(--bg-reg);
    z-index: 1;
  }
}
</style>
