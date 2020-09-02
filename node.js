module.exports = {
    extends: [
        './index',
    ].map(require.resolve),
    env: {
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: false,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint'
    ],
}
