<template>
  <section class="editor-header-tools">
    <div class="header-save">
      <div class="header-save__tools">
        <el-button link>
          文件
        </el-button>
        <el-button link>
          视图
        </el-button>
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
}
</style>
