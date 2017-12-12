/**
 * Created by willchen on 2017/11/17.
 */


module.exports = {
    root: true,
    // parser: 'babel-eslint',
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
        },
        "sourceType": "module"
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    "rules": {
        // 可以自动修复的
        // es6 相关
        "arrow-spacing": 1, // 强制箭头函数的箭头前后使用一致的空格
        "arrow-parens": [1, "as-needed"], //要求箭头函数的参数使用圆括号，单个参数不使用
        "arrow-body-style": [1, "as-needed"], // 当大括号是可以省略的，强制不使用它们 (默认)
        "no-confusing-arrow": [1, {"allowParens": true}],  // 阻止有可能造成“表达误解”的箭头符号
        "no-useless-computed-key": 1, // 不允许不必要的计算属性
        "no-var": 1, // 不允许var,用let const 代替
        "prefer-spread": 1, // 要求使用扩展运算符而非 .apply()
        "rest-spread-spacing": [1, "never"], //   扩展运算符和变量间不允许空格存在
        "indent": [1, 4], // 4个空格的缩进
        // "semi-style": 1, //强制分号的位置
        "no-extra-semi": 1, // 禁止不必要的分号
        "curly": 1, // 强制所有控制语句使用一致的括号风格
        "no-floating-decimal": 1, // 禁止数字字面量中使用前导和末尾小数点
        "no-multi-spaces": 1,   // 禁止使用多个空格
        "wrap-iife": 1, // 要求 IIFE自执行函数 使用括号括起来
        "block-spacing": 1, // 强制在单行代码块中使用一致的空格
        "brace-style": 1, // 强制在代码块中使用一致的大括号风格
        "comma-spacing": 1,  // 逗号前后使用一致的空格
        "func-call-spacing": 1,   // 函数调用 括号与函数名之间不允许存在 空格
        "key-spacing": [1, {    // 强制在对象字面量的属性中键和值之间使用一致的间距
            "multiLine": {
                "beforeColon": false,  // 多行，冒号前不能有空格
                "afterColon": true,     // 多行，冒号后需要空格
                "align": "colon",                      // 对齐，根据冒号对齐
            },
            "singleLine": {
                "beforeColon": false,
                "afterColon": true
            },
        }],
        // "lines-around-comment": 1,   // 要求在块级注释之前有一空行
        "new-parens": 1, // 要求调用无参构造函数时有圆括号
        "no-unneeded-ternary": 1,   // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        "no-whitespace-before-property": 1, // 禁止属性前有空白
        "object-curly-spacing": 1, //  强制在大括号中使用一致的空格
        "quotes": [1, "double"], // 尽可能使用双引号
        "semi-spacing": [1, {"before": false, "after": true}], // 分号前无需空格，分号后需要一个空格
        "space-before-blocks": 1, // 块级代码前加空格
        "space-before-function-paren": [1, "never"],  // 强制在 function的左括号之前不使用空格
        "space-in-parens": [1, "never"], // 强制在圆括号不使用空格
        "space-infix-ops": 1, // 要求操作符( +-*/ 等)周围有空格
        "spaced-comment": [1, "always"], // 强制在注释中 // 或 /* 使用一致的空格
        "linebreak-style": [1, "windows"],  // 换行风格
        "semi": [1, "always"],  // 分号
    }
}