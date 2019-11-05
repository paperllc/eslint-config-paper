module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'react',
    ],
    rules: {

        // Possible Errors
        // ----------------------------------------------------

        'no-async-promise-executor': 'warn',
        'no-compare-neg-zero': 'warn',
        'no-console': [
            'warn',
            {
                allow: [
                    'warn',
                    'error',
                ],
            },
        ],
        'no-control-regex': 'error',
        'no-empty': 'warn',
        'no-empty-character-class': 'error',
        'no-extra-boolean-cast': 'warn',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-irregular-whitespace': 'error',
        'no-misleading-character-class': 'error',
        'no-prototype-builtins': 'warn',
        'no-regex-spaces': 'warn',
        'no-unsafe-negation': 'warn',
        'require-atomic-updates': 'warn',

        // Best Practices
        // ----------------------------------------------------

        'default-param-last': 'warn',
        'no-alert': 'error',
        'no-case-declarations': 'error',
        'no-else-return': [
            'warn',
            {
                allowElseIf: false,
            },
        ],
        'no-empty-function': [
            'warn',
            {
                allow: [
                    'arrowFunctions',
                    'functions',
                    'methods',
                ],
            },
        ],
        'no-empty-pattern': 'warn',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-floating-decimal': 'warn',
        'no-global-assign': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-loop-func': 'warn',
        'no-new-func': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-return-await': 'warn',
        'no-script-url': 'error',
        'no-self-compare': 'warn',
        'no-throw-literal': 'error',
        'no-useless-escape': 'warn',
        'no-with': 'error',
        'prefer-promise-reject-errors': [
            'error',
            {
                allowEmptyReject: true,
            },
        ],
        'wrap-iife': [
            'warn',
            'inside',
            {
                functionPrototypeMethods: true,
            },
        ],
        yoda: 'warn',

        // Strict Mode
        // ----------------------------------------------------

        strict: ['warn', 'never'],

        // Variables
        // ----------------------------------------------------

        'no-label-var': 'error',
        'no-undef-init': 'warn',
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],

        // Node.js and CommonJS
        // ----------------------------------------------------

        'no-path-concat': 'error',

        // Stylistic Issues
        // ----------------------------------------------------

        camelcase: [
            'error',
            {
                properties: 'never',
                ignoreDestructuring: false,
            },
        ],
        'eol-last': 'error',
        'jsx-quotes': ['warn', 'prefer-double'],
        quotes: ['warn', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
        'quote-props': ['warn', 'as-needed'],
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true,
            },
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'new-cap': [
            'warn',
            {
                newIsCap: true,
                capIsNew: false,
            },
        ],
        'no-array-constructor': 'error',
        'no-bitwise': [
            'error',
            {
                allow: [
                    '~',
                ],
            },
        ],
        'no-lonely-if': 'warn',
        'no-multi-assign': 'error',
        'nonblock-statement-body-position': [
            'warn',
            'below',
        ],
        'one-var': ['warn', 'never'],
        'unicode-bom': 'error',

        // ECMAScript 6
        // ----------------------------------------------------

        'arrow-parens': 'warn',
        'object-shorthand': [
            'warn',
            'always',
            {
                avoidQuotes: true,
            },
        ],
        'prefer-const': [
            'warn',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'warn',
        'symbol-description': 'error',
    },
}
