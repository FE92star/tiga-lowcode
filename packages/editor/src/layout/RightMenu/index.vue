<script lang="ts" setup>
import { menuList } from './menus'
</script>

<template>
  <Teleport to="body">
    <ul id="menu" class="context-menu__editor">
      <li
        v-for="item in menuList"
        :key="item.name"
        class="context-menu__item"
        aria-disabled="true"
      >
        <span>{{ item.name }}</span>
        <span class="context-menu__item-shortcut">{{ item.shortcut }}</span>
      </li>
    </ul>
  </Teleport>
</template>

<style lang="less" scoped>
.context-menu__editor {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  width: 164px;
  padding: 8px 0;
  border: 1px solid var(--stroke);
  border-radius: 4px;
  outline: 0;
  background-color: #fff;
  color: var(--text-default);
  box-shadow: var(--panel-shadow);
  font-size: 14px;
  user-select: none;
  visibility: hidden;
}

#menu {
  width: 196px;
  font-family: var(--global-font-family);
}

.visible {
  visibility: visible !important;
}

.context-menu__item {
  padding: 0 16px;
  position: relative;

  .fbc();
  height: 36px;

  & > span {
    color: default;
  }

  &-shortcut {
    color: var(--text-dis);
    font-size: 12px;
  }
}

.context-menu__item[aria-disabled] {
  color: var(--text-dis);
  pointer-events: none;
}
</style>
