import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"

import * as path from "path";

const resolve = (dir:string) => path.resolve(__dirname,dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      
    })
  ],
  optimizeDeps:{
    include:[
    ]
  },
  resolve:{
    alias:[
      { find: '@/style', replacement: resolve('src/style') },
      { find: '@/utils', replacement: resolve('src/utils') },
    ]
  }
})
