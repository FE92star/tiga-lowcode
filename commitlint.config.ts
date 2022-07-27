export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'refactor',
        'style',
        'test',
        'chore',
        'perf',
        'workflow',
        'build',
        'types',
        'release',
        'deps'
      ] // [新功能，修复bug，文档，重构，纯样式修改，测试，构建过程或辅助工具的变动，性能优化，工作区流程变更，构建，类型，发版，依赖]
    ],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always']
  }
}
