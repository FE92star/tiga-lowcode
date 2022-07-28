<template>
  <section class="editor-header-snapshot">
    <div class="editor-header-snapshot__btns">
      <el-icon><ArrowLeft /></el-icon>
      <el-icon><ArrowRight /></el-icon>
      <el-icon><Collection /></el-icon>
    </div>
  </section>
</template>

<style lang="less" scoped>
.editor-header-snapshot {
  .fac();

  &__btns {
    margin-left: 12px;

    .fac();
  }
}
</style>
