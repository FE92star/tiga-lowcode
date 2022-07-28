import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.less'
import App from './App.vue'

import router from './router'

const app = createApp(App)
app.use(ElementPlus)

app.use(router)
// router ready
router.isReady().then(() => app.mount('#app'))
