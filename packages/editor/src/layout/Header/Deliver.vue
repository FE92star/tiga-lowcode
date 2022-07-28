<template>
  <div class="header-deliver">
    <div class="generate-container">
      <div class="generate-container__setting-button">
        <el-button link>
          设置
        </el-button>
      </div>
      <div class="generate-container__preview-button">
        <el-button link>
          预览
        </el-button>
      </div>
      <div class="generate-button">
        <el-dropdown size="large" split-button type="primary">
          发布
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>下载</el-dropdown-item>
              <el-dropdown-item>复制作品</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header-deliver {
  position: relative;
  .fec();

  width: var(--odyssey-editor-operator-width);
  padding: 0 10px;
}

.generate-container {
  .fcc();

  &__setting-button {
    margin-right: 8px;
  }
}

.generate-button {
  margin-left: 16px;
  box-shadow: 0 6px 8px 0 rgb(34 84 244 / 16%);
}
</style>
