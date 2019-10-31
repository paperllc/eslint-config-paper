module.exports = {
    extends: [
        './index',
    ].map(require.resolve),
    env: {
        node: true,
    },
    rules: {
        'no-console': 'off'
    }
}
