import { createApp } from 'vue'
import './styles/index.less'
import App from './App.vue'

import { setupElementPlus } from './plugins/element-plus'

import router from './router'

const app = createApp(App)

// 手动注册element-plus组件
setupElementPlus(app)

app.use(router)
// router ready
router.isReady().then(() => app.mount('#app'))
