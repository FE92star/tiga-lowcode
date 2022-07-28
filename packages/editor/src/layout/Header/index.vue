<script lang="ts" setup>
import ToolGroup from './Tools.vue'
import Snapshot from './Snapshot.vue'
</script>

<template>
  <div class="editor-header">
    <div class="editor-header__left">
      <a
        href="/"
        target="_blank"
        class="editor-header-home"
      >
        <img
          src="https://st0.dancf.com/static/02/202105211033-926a.png"
          alt="logo"
        >
      </a>

      <ToolGroup />

      <span class="editor-header__left-pipe" />

      <Snapshot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.editor-header {
  .fbc();

  position: relative;
  z-index: 300;
  width: 100%;
  height: var(--odyssey-editor-header-height);
  background-color: #fff;
  box-shadow: 0 -1px 0 0 #eee;
  border-bottom: 1px solid var(--bg-reg);

  &__left {
    display: flex;
    align-items: center;

    &-pipe {
      margin-left: 12px;
      width: 1px;
      height: 20px;
      background-color: #ebedf0;
    }
  }

  &-home {
    width: 40px;
    height: 40px;
    margin: 0 12px 0 18px;

    & > img {
      display: block;
      width: 100%;
    }
  }
}
</style>
