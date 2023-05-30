import { nodeResolve } from '@rollup/plugin-node-resolve'
import { fileURLToPath } from 'node:url'
import pkg from './package.json' assert { type: 'json' }

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.cjs',
    format: 'cjs'
  },
  plugins: [nodeResolve()],
  external: [fileURLToPath(new URL('src/index.js', import.meta.url))],
  external: Object.keys(pkg.dependencies)
}
