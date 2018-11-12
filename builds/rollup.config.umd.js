const babel = require('rollup-plugin-babel');

const banner =
`/*!
 * github:https://github.com/
 * API
 * Copyright All Rights Reserved
 * Licensed
 */
`;

// process.env='deverlopment'

export default {
  input: '',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'umddd',
    banner,
  },
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
  ],
};
