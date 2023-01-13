import { createApp } from 'vue' // Vue 3.x 引入 vue 的形式
import App from './app.vue' // 引入 APP 页面组建
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App) // 通过 createApp 初始化 app
// app.use(ElementUI)
app.use(ElementPlus)
app.mount('#root') // 将页面挂载到 root 节点
