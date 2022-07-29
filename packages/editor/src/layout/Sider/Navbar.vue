<script lang="ts" setup></script>

<template>
  <div class="aside-navbars">
    <div class="aside-navbar-list">
      <div class="aside-navbar">
        <el-icon><Notebook /></el-icon>
        <span class="aside-navbar__text">模板</span>
      </div>
      <div class="aside-navbar">
        <el-icon><Food /></el-icon>
        <span class="aside-navbar__text">文字</span>
      </div>
      <div class="aside-navbar">
        <el-icon><ColdDrink /></el-icon>
        <span class="aside-navbar__text">元素</span>
      </div>
      <div class="aside-navbar">
        <el-icon><Picture /></el-icon>
        <span class="aside-navbar__text">照片</span>
      </div>
      <div class="aside-navbar">
        <el-icon><ElementPlus /></el-icon>
        <span class="aside-navbar__text">照片</span>
      </div>
      <div class="aside-navbar">
        <el-icon><Basketball /></el-icon>
        <span class="aside-navbar__text">背景</span>
      </div>
      <div class="aside-navbar">
        <el-icon><Mic /></el-icon>
        <span class="aside-navbar__text">音乐</span>
      </div>
      <div class="aside-navbar">
        <el-icon><Avatar /></el-icon>
        <span class="aside-navbar__text">我的</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.aside-navbars {
  position: relative;
  width: var(--odyssey-editor-navbars-width);
  height: 100%;
  background-color: #fff;
}

.aside-navbar-list {
  width: var(--odyssey-editor-navbars-width);
  height: 100%;
  box-shadow: inset -1px 0 0 0 #ebedf0;
}

.aside-navbar {
  position: relative;
  padding: 14px 0;
  color: #757e8a;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  user-select: none;
  cursor: pointer;

  &__text {
    display: inline-block;
    width: 100%;
  }

  .el-icon {
    font-size: 24px;
  }
}
</style>
