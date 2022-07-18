import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import tsConfig from './tsconfig.json';

const config = [
    {
        input: "src/index.ts",
        output: [{ file: "build/src/index.js", sourcemap: true }],
        plugins: [
            typescript(
                {
                    sourceMap: tsConfig.compilerOptions.sourceMap,
                }
            )
        ]
    },
    {
        input: 'build/src/index.d.ts',
        output: [{ file: "build/src/index.d.ts", "format": "es" }],
        plugins: [
            dts(
                {
                    compilerOptions: {
                        baseUrl: tsConfig.compilerOptions.baseUrl
                    }
                }
            )
        ]
    },
]

export default config;