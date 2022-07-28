<template>
  <section class="editor-header-tools">
    <div class="header-save">
      <div class="header-save__tools">
        <div class="header-save__tool-btn">
          文件
        </div>
        <div class="header-save__tool-btn">
          视图
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.editor-header-tools {
  .fac();

  height: 100%;
}

.header-save {
  .fac();

  &__tools {
    display: flex;
  }

  &__tool-btn {
    height: 40px;
    line-height: 40px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    color: #444950;
    cursor: pointer;
  }
}
</style>
