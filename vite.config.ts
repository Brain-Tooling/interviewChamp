// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import ts from 'vite-plugin-ts'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins:[react({
//     include: '**/*.{tsx}',
//   }), ts()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')
  ],
})
