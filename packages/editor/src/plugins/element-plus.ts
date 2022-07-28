import type { App, Component } from 'vue'
import 'element-plus/dist/index.css'

import { ArrowLeft, ArrowRight, Collection } from '@element-plus/icons-vue'

const components = [ArrowLeft, ArrowRight, Collection]

export function setupElementPlus(app: App): void {
  components.forEach((component: Component) => {
    app.component(component.name!, component)
  })
}
