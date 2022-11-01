import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend' // 可以自定义组件name https://zhuanlan.zhihu.com/p/481640259
import path from 'path'
import postCssPxToRem from 'postcss-pxtorem'
import legacy from '@vitejs/plugin-legacy'
// import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      // 分析打包资源大小，上线前注释
      // visualizer({
      //   open: true,
      //   emitFile: true,
      //   filename: 'stats.html',
      // }),
      VueSetupExtend(),
      legacy({
        targets: ['Chrome > 50'],
      }),
    ],
    server: {
      port: 80,
      host: '0.0.0.0',
      proxy: {
        '/demo': {
          target: 'http://localhost:3001/demo',
          changeOrigin: true,
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 108, // （设计稿/10）1rem的大小
            propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          }),
        ],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})

// less支持
// px-vw支持 postcss-px-to-viewport
// 引入axios 封装请求方法
// 多环境编译部署命令
// pina管理全局状态
// commit校验ts gitHooks
// 目录规范

// 自定义曝光指令
// 代码打包体积优化
// 图片懒加载
// 语法编译polyfill @vitejs/plugin-legacy
