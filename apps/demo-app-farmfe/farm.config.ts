import path from 'node:path'
import { defineConfig } from '@farmfe/core'

export default defineConfig({
  plugins: ['@farmfe/plugin-react', '@farmfe/plugin-sass'],
  compilation: {
    input: {
      index: './apps/demo-app-farmfe/index.html',
    },
    output: {
      path: './dist/apps/demo-app-farmfe',
      // publicPath: '/',
    },
    resolve: {
      alias: {
        '@core/helpers': path.resolve(process.cwd(), 'libs/core/src/helpers/index.ts'),
        '@core/hooks': path.resolve(process.cwd(), 'libs/core/src/hooks/index.ts'),
        '@core/types': path.resolve(process.cwd(), 'libs/core/src/types/index.ts'),
        '@demo-app-core/components': path.resolve(process.cwd(), 'libs/demo-app-core/src/components/index.ts'),
        '@demo-app-core/navigation': path.resolve(process.cwd(), 'libs/demo-app-core/src/navigation/index.ts'),
        '@demo-app-core/redux': path.resolve(process.cwd(), 'libs/demo-app-core/src/redux/index.ts'),
        '@ui/components': path.resolve(process.cwd(), 'libs/ui/src/components/index.ts'),
        '@ui/images': path.resolve(process.cwd(), 'libs/ui/src/images/index.ts'),
        '@ui/layouts': path.resolve(process.cwd(), 'libs/ui/src/layouts/index.ts'),
      },
    },
  },
  server: {
    port: 9000,
  },
})
