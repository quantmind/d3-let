import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
    input: 'index.js',
    output: {
        format: 'umd',
        name: 'd3',
        file: 'build/d3-let.js',
        extend: true
    },
    plugins: [
        json(),
        babel({
            babelrc: false,
            plugins: ['external-helpers'],
            presets: ['es2015-rollup'],
            externalHelpers: true
        })
    ]
};
