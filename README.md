# tiga-low-code

> 迪迦低代码平台

<p align="center">
  <img src="https://img.shields.io/github/license/FE92star/tiga-lowcode" />
  <a href="https://github.com/FE92star/tiga-lowcode"><img src="https://img.shields.io/github/stars/FE92star/tiga-lowcode" /></a>
  <a href="https://github.com/FE92star/tiga-lowcode"><img src="https://img.shields.io/github/forks/FE92star/tiga-lowcode" /></a>
  <a href="https://github.com/FE92star/tiga-lowcode/issues"><img src="https://img.shields.io/github/issues/FE92star/tiga-lowcode" /></a>
</p>

## 实现参照标准

布局可以直接参照[稿定设计](https://www.gaoding.com/odyssey/design)的 h5 页面制作平台

## 技术栈

vue3+vue-router+ts+vite

## 功能点实现 TODO

- [x] pnpm monorepo 工程搭建
- [ ] 网格线画布
- [ ] 组件编辑器(属性、事件、动画)
- [ ] 自定义组件开发、渲染 schema 规范
- [ ] 组件拖拽、删除、层级调整、吸附
- [ ] 编辑状态的撤销、重做
- [ ] 页面预览、保存功能
- [ ] psd 文件导入与解析
- [ ] 基于 schema 规范进行源码生成
- [ ] 其他有意思的功能模块...

## pnpm monorepo

本项目使用`pnpm`的`workspace`工作区来进行多包管理，下面是一些基本的公用/私有包的安装命令

1. 公用包安装

```bash
pnpm add [package] -w
```

2. 私有包安装

- `scope-package-name`为私有仓库的包名`name`对应的名称

```bash
pnpm add [package] -r --filter [scope-package-name]
```

3. 工作区包之前的互相链接引用

- 同私有包的安装命令一样，只不过包名需要替换，初始化软链会包含`workspace`前缀，`pnpm publish`后会自动修正为真实的包 URL 版本

```bash
pnpm add [scope-package-name] -r --filter [target-scope-package-name]
```

## 依赖安装、启动、构建

```bash
pnpm i
pnpm dev
pnpm build
```
