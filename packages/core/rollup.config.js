import dts from 'rollup-plugin-dts';

const config = [
    {
        input: 'build/src/index.d.ts',
        output: [{ file: "build/src/index.d.ts", "format": "es" }],
        plugins: [dts()]
    },
]

export default config;