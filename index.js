module.exports = {
    rules: {

        // Change for typescript/react-app
        // ----------------------------------------------------

        'import/no-webpack-loader-syntax': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "@typescript-eslint/no-empty-function": "off",
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        "react/no-unescaped-entities": "off",
        'no-use-before-define': 'off',
        'no-unused-vars': 'off',
        'no-redeclare': 'off',
        'default-case': 'off',

        // These react rules take too much time
        "react/display-name": "off",
        "react/no-direct-mutation-state":"off",
        "react/require-render-return": "off",
        "react/no-unknown-property":"off",
        "react/no-string-refs":"off",

        // Possible Errors
        // ----------------------------------------------------

        'no-async-promise-executor': 'warn',
        'no-compare-neg-zero': 'warn',
        'no-console': 'off',
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
        'no-constant-binary-expression': 'off',
        'no-constructor-return': 'error',
        'no-dupe-else-if': 'error',
        'no-loss-of-precision': 'error',
        'no-new-native-nonconstructor': 'off',
        'no-promise-executor-return': 'error',
        'no-setter-return': 'error',
        'no-unreachable-loop': 'off', // Covered by WebStorm
        'no-unsafe-optional-chaining': 'error',
        'no-unused-private-class-members': 'off', // Covered by WebStorm
        'no-useless-backreference': 'error',

        // Best Practices
        // ----------------------------------------------------

        'default-param-last': 'off',
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

        strict: 'off',

        // Variables
        // ----------------------------------------------------

        'no-label-var': 'error',
        'no-undef-init': 'warn',

        // Node.js and CommonJS
        // ----------------------------------------------------

        'no-path-concat': 'error',

        // Stylistic Issues
        // ----------------------------------------------------

        camelcase: 'off',
        'eol-last': 'error',
        'jsx-quotes': ['warn', 'prefer-double'],
        quotes: ['warn', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
        'quote-props': ['warn', 'as-needed'],
        'func-style': 'off',
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

        // ----------------------------------------------------

        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        // ----------------------------------------------------

        'no-restricted-globals': 'off',
        'no-undef': 'off'
    },
}
