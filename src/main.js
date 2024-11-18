
import { pinia } from './utils/http'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)


import 'bootstrap/dist/css/bootstrap.min.css'//bootstrap-css
import AllIcon from 'vue-ionicons/dist/ionicons.js'//ionicons
import('vue-ionicons/ionicons.css')//ionicons-css

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
// 自定义样式一定要在最后加载
import './assets/main.css'

app.use(AllIcon)

app.use(ElementPlus, { 
    locale: zhCn
})

Object.keys(ElementPlusIconsVue).forEach(key => {
    app.component(key, ElementPlusIconsVue[key])
})

// import en from './locales/en.json'
import zh from './locales/zh.json'

const i18n = createI18n({
    locale: 'zh', // 默认语言
    messages: {
        // en,
        zh
    }
})
app.use(i18n)

app.use(router)
app.use(pinia)

app.mount('#app')