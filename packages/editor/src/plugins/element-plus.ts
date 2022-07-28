import type { App, Component } from 'vue'
import 'element-plus/dist/index.css'

import { ElAffix, ElLoading } from 'element-plus'

import { ArrowLeft, ArrowRight, Collection } from '@element-plus/icons-vue'

const components = [ElAffix, ArrowLeft, ArrowRight, Collection]

const plugins = [ElLoading]

export function setupElementPlus(app: App): void {
  components.forEach((component: Component) => {
    app.component(component.name!, component)
  })
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
