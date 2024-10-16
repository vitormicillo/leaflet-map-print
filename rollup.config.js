import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'leaflet-map-print',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    }),
    terser()  // Call terser as a function
  ]
};