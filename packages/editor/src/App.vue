<template>
  <el-row class="mb-4">
    <el-button type="primary">
      Primary
    </el-button>
    <el-button type="success">
      Success
    </el-button>
    <el-button type="info">
      Info
    </el-button>
    <el-button type="warning">
      Warning
    </el-button>
    <el-button type="danger">
      Danger
    </el-button>
  </el-row>
</template>
<script lang="ts" setup>
import { add } from '@tiga/shared'
import { effect } from 'vue'

effect(() => {
  console.log(add(1, 2))
})
</script>
