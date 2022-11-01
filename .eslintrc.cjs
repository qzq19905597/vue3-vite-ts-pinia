module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser', // Specifies the ESLint parser
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            // Allows for the parsing of JSX
            jsx: true
        }
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended', 
        'plugin:prettier/recommended'
    ],
    rules: {
        // 关闭vue组件名称必须双字母提示
        "vue/multi-word-component-names": "off",
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        // 关闭函数名称 针对驼峰的错误提示，修改为连字符的要求
        'vue/v-on-event-hyphenation': 'off',
        // 关闭v-html使用警告
        'vue/no-v-html': 'off',
        // 关闭Prop 'data' requires default value to be set.警告
        'vue/require-default-prop': 'off',
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    "{}": false,
                    Function: false,
                },
                extendDefaults: true,
            },
        ],
    }
}
