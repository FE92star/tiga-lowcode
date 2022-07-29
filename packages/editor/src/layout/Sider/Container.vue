<script lang="ts" setup></script>

<template>
  <div class="editor-aside__layouts-container">
    <div class="aside-add">
      <div class="aside-add__button">
        <button class="aside-add__button-add">
          <el-icon style="font-size: 16px">
            <Plus />
          </el-icon>
          <span class="aside-add__button-add-text">添加画布</span>
        </button>
        <button class="aside-add__button-import" />
      </div>
    </div>
    <ul class="editor-aside__layout-list">
      <li v-for="item in 2" :key="item" />
    </ul>
  </div>
</template>

<style lang="less" scoped>
.editor-aside__layouts-container {
  .fdc();

  position: relative;
  width: 176px;
  height: 100%;
  background-color: #fff;
  box-shadow: inset -1px 0 0 0 #e8eaec;
}

.aside-add {
  padding: 12px 20px;
  font-size: 14px;
  background-color: #fff;

  &__button {
    position: relative;
    display: flex;
    width: 136px;
    height: 40px;
    border-radius: 4px;
    color: var(--primary);
    background-color: #f1f2f4;
    transition: 0.3s;

    &-add {
      width: 104px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding-left: 16px !important;
      color: #444950;

      &-text {
        font-size: 14px;
        padding-left: 8px;
      }
    }

    &-import {
      position: relative;
      width: 32px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      color: transparent;

      &::after {
        content: '';
        position: absolute;
        top: 17px;
        right: 12px;
        border-top: 5px solid #606770;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
      }
    }

    & > button {
      .fac();
      padding: 0;
      border: 0;
      outline: 0;
      background-color: transparent;
      font-weight: 500;
      user-select: none;
      cursor: pointer;
    }
  }
}

.editor-aside__layout-list {
  width: 100%;
  height: calc(100% - 64px);
  padding-top: 1px;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;

  & > li {
    --content-width: 129px;
    .fac();
    padding: 9px 0 9px 27px;
    cursor: pointer;
    min-height: 280px;
    background-color: #e8eaec;
    margin-bottom: 24px;
  }
}
</style>
