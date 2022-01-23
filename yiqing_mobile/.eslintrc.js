module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'object-shorthand': ['error', 'always'], // 对象之中必须使用简洁的表达方式,既同名时只写一个
    'arrow-spacing': 'error', // 箭头函数前后需各有一个空格
    'block-spacing': 'error', // 花括号如果在同一行的话中间需要有一个空格
    'brace-style': [ // 代码块的第一个花括号直接跟在同一行,不得换行
      'error',
      '1tbs',
      {
        'allowSingleLine': true,
      },
    ],
    'camelcase': [ // 定义变量需使用驼峰命名法
      'error',
      {
        'properties': 'always',
      },
    ],
    'comma-dangle': ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }], // 对象或数组中多行时,每一行的最后都要加上逗号,哪怕是最后一个成员,如果只有一行则不需要
    'comma-spacing': [ // 逗号的后面必须得有一个空格
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['error', 'last'], // 逗号不可作为一行的开头
    'curly': ['error', 'multi-line'], // 多行代码块不得省略花阔行,单行可以省略
    'dot-location': ['error', 'property'], // 对象的连缀如果需要换行的话,需把.符号一起换行
    'eqeqeq': ['error', 'always', { null: 'ignore' }], // 除了null以外的判断语句需使用===或!==
    'generator-star-spacing': [ // Generator函数声明时*紧跟着function并与函数名之间空一格
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'indent': [ // 换行缩进需为2个空格
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'], // JSX中需使用单引号
    'key-spacing': [ // 对象键值对间的冒号前方不使用空格,后方需有一个空格
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [ // 关键字的前后需要有空格
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'new-cap': [ // 构造函数命名首字母需使用大写
      'error',
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'new-parens': 'error', // 调用构造函数时即使没有参数也必须跟上括号
    'no-array-constructor': 'error', // 不可以使用Array构造函数来生成数组
    'no-caller': 'error', // 不允许使用'arguments.caller'或'arguments.callee'
    'no-alert': 'error', // 不允许使用`alert`, `confirm`, 和 `prompt`
    'no-eval': 'error', // 不允许使用evel()
    'no-extend-native': 'error', // 不允许修改原生对象构造函数的原型方法和属性
    'no-extra-bind': 'error', // 不允许无意义地调用.bind()
    'no-floating-decimal': 'error', // 小数点前后地数字不可以省略
    'no-implied-eval': 'error', // setTimeout() 和 setInterval()传入字符串的话会有跟eval()一样的效果,不允许使用这种方式
    'no-iterator': 'error', // 不允许使用和修改 __iterator__ 属性
    'no-labels': 'error', // 不允许使用标签语句
    'no-lone-blocks': 'error', // 不允许使用无意义的嵌套块
    'no-multi-spaces': 'error', // 不允许使用多个空格
    'no-multi-str': 'error', // 不允许使用多行字符串,但是模板字符串可以多行
    'no-multiple-empty-lines': [ // 不允许连续出现1行以上的空行
      'error',
      {
        max: 1,
      },
    ],
    'no-debugger': 'error', // 不允许出现debugger
    'no-native-reassign': 'error', // 不允许修改只读全局变量
    'no-negated-in-lhs': 'error', // 不允许在in表达式中对左侧的变量取反
    'no-new-object': 'error', //  不允许使用构造函数创建对象
    'no-new-require': 'error', // 不允许使用new require()
    'no-new-symbol': 'error', // 不允许使用new symbol()
    'no-new-wrappers': 'error', // 不允许使用构造函数创建 String, Number, Boolean
    'no-proto': 'error', // 不允许对__proto__进行任何操作,要想更改应使用Object.setPrototypeOf
    'no-return-assign': 'error', // 不允许在return语句中使用赋值语句,除非他们在括号中
    'no-self-compare': 'error', // 不允许自己比较自己
    'no-spaced-func': 'error', // 函数调用时不允许出现空格和换行
    'no-throw-literal': 'error', // 不允许将文本作为异常抛出
    'no-trailing-spaces': 'error', // 行尾不允许出现空格
    'no-undef-init': 'error', // 变量定义时不允许赋值成undefined
    'no-unmodified-loop-condition': 'error', // 不允许出现不变的循环条件
    'no-unneeded-ternary': 'error', // 不允许出现无意义的三元表达式
    'no-useless-call': 'error', // 不允许不必要地调用.call()和.apply()
    'no-useless-computed-key': 'error', // 对象中不允许不必要地使用计算属性键
    'no-useless-constructor': 'error', // 不允许定义无意义地构造函数
    'no-whitespace-before-property': 'error', // 不允许在属性连缀中间使用空格
    'operator-linebreak': 'error', // 除了?和:以外地运算符的前方不允许有换行符,?和:则是后方不许有
    'padded-blocks': ['error', 'never'], // 语句块的第一行不可以是空行
    'quotes': [ // 字符串需要使用单引号或者模板字符串
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'semi': 'error', // 行末必须使用分号
    'semi-spacing': [ //分号前面不能有空格,后面必须得有一个空格
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': ['error', 'always'], // 非新启一行的花括号前面需要有个空格
    'space-before-function-paren': [2, 'never'], // 函数定义时括号的前面不许有空格
    'space-in-parens': ['error', 'never'], // 括号中间不可以有多余的空格
    'space-infix-ops': 'error', // 运算符周围需要有空格
    'space-unary-ops': [ // 关键字后面必须有空格,如:new, delete, typeof, void, yield;一元运算符后面不能有空格,如:-, +, --, ++, !, !!
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': ['error','always'], // //或/*后面必须至少有一个空格
    'template-curly-spacing': 'error', // 模板字符串中变量引用时不可出现空格
    'wrap-iife': ['error', 'any'], // 需要在立即执行函数周围加括号
    'yield-star-spacing': ['error', 'after'], // yield的*号后面需要空格,前面不可以有空格
    'yoda': ['error', 'never'], // 判断语句中,变量必须在左边
    'prefer-const': 'error', // 对于声明后从未重新分配的变量，需要const声明
    'no-var': 'error', // 申明变量不可使用var,必须使用let或const
    'object-curly-spacing': 'error', // 对象申明中不可有多余的空格
    'array-bracket-spacing': 'error', // 数组方括号中间不可有多余的空格
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
