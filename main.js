import { app } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

app.use(ElementPlus, {
  size: 'small', // 设置全局默认尺寸
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}