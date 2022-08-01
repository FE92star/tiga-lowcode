<template>
  <Teleport to="body">
    <div id="menu">
      rightmenu
    </div>
  </Teleport>
</template>

<style lang="less" scoped>
#menu {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  width: 150px;
  height: 150px;
  background: #1b1a1a;
  border-radius: 5px;
  display: none;
}
.visible {
  display: block !important;
}
</style>
