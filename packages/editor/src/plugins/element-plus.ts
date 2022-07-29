import type { App, Component } from 'vue'
import 'element-plus/dist/index.css'

import {
  ArrowLeft,
  ArrowRight,
  Avatar,
  Basketball,
  ColdDrink,
  Collection,
  ElementPlus,
  Food,
  Mic,
  Notebook,
  Picture,
  Plus
} from '@element-plus/icons-vue'

const components = [
  ArrowLeft,
  ArrowRight,
  Collection,
  Notebook,
  Food,
  ColdDrink,
  Plus,
  Picture,
  ElementPlus,
  Basketball,
  Mic,
  Avatar
]

export function setupElementPlus(app: App): void {
  components.forEach((component: Component) => {
    app.component(component.name!, component)
  })
}
