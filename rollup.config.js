// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import image from 'rollup-plugin-image';
import uglify from 'rollup-plugin-uglify';

import pkg from './package.json';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      globals: {
        react: 'React'
      }
    },
    {
      file: pkg.module,
      format: 'es',
      globals: {
        react: 'React'
      }
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'content-shell',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    resolve(),
    image(),
    babel({
      exclude: 'node_modules/**'
    }),
    process.env.NODE_ENV === 'production' && uglify()
  ],
  external: ['react', 'styled-components']
};

export default config;
