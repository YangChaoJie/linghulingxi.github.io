(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{430:function(s,a,n){s.exports=n.p+"assets/img/1.5beda1c5.gif"},684:function(s,a,n){"use strict";n.r(a);var t=n(29),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"typescript-学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript-学习"}},[s._v("#")]),s._v(" TypeScript 学习")]),s._v(" "),t("h4",{attrs:{id:"typescript-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript-介绍"}},[s._v("#")]),s._v(" TypeScript 介绍")]),s._v(" "),t("p",[s._v("TypeScript = Type + Script（标准JS）。我们从TS的官方网站上就能看到定义：TypeScript is a typed superset of JavaScript that compiles to plain JavaScript。TypeScript是一个编译到纯JS的有类型定义的JS超集。\n!")]),s._v(" "),t("p",[t("a",{attrs:{href:"./venn.png"}},[s._v("avatar")])]),s._v(" "),t("h4",{attrs:{id:"typescript-优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript-优势"}},[s._v("#")]),s._v(" TypeScript 优势")]),s._v(" "),t("p",[s._v("目标：生命周期较长（常常持续几年）的复杂SPA应用，保障开发效率的同时提升代码的可维护性和线上运行时质量。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("从开发效率上看，虽然需要多写一些类型定义代码，但TS在VSCode、WebStorm等IDE下可以做到智能提示，智能感知bug，同时我们项目常用的一些第三方类库框架都有TS类型声明，我们也可以给那些没有TS类型声明的稳定模块写声明文件。")])]),s._v(" "),t("li",[t("p",[s._v("从可维护性上看，长期迭代维护的项目开发和维护的成员会有很多，团队成员水平会有差异，而软件具有熵的特质，长期迭代维护的项目总会遇到可维护性逐渐降低的问题，有了强类型约束和静态检查，以及智能IDE的帮助下，可以降低软件腐化的速度，提升可维护性，且在重构时，强类型和静态类型检查会帮上大忙，甚至有了类型定义，会不经意间增加重构的频率（更安全、放心）。")])]),s._v(" "),t("li",[t("p",[s._v("从线上运行时质量上看，我们现在的SPA项目的很多bug都是由于一些调用方和被调用方（如组件模块间的协作、接口或函数的调用）的数据格式不匹配引起的，由于TS有编译期的静态检查，让我们的bug尽可能消灭在编译器，加上IDE有智能纠错，编码时就能提前感知bug的存在，我们的线上运行时质量会更为稳定可控。")])]),s._v(" "),t("li",[t("p",[s._v("类型已经被证明能够提高代码质量和可理解性。大型团队(谷歌、微软、Facebook)不断得出这样的结论。具体地说:\n类型增加了重构时的敏捷性。让编译器捕获错误要比让事情在运行时失败好。\n类型是最好的文档形式之一。函数签名是一个定理，函数体是证明。")])]),s._v(" "),t("li",[t("p",[s._v("以前总感觉 JS 一复杂，就感觉质量难以保证，线上运行也有点虚，说不定什么时候就爆出一个 's' is undefined, 'b' is not a function 之类的错误。现在有了静态检查，心里更有底了。")])]),s._v(" "),t("li",[t("p",[s._v("静态类型检查最明显的好处是可以尽早的检查出程序中的错误。错误被尽早的检查出来可以使它得到快速的修复，而不是潜伏在代码中，在中期甚至部署上线后才被发现。而且，错误在编译期可以被更精确的定位出来，而在运行时，错误产生的影响在程序出现问题前可能是不容易被发现的")])]),s._v(" "),t("li",[t("p",[s._v("在最近几年，随着V8平台、各大现代浏览器的起来，JS的运行平台再不断完善，但，JS对于大型应用的开发是非常困难的，JS语言设计出来的目的不是为了大型应用，他是一门脚本语言，他没有静态类型校验，但更重要的是，他没有提供大型应用必须的classes、modules/namespaces、interfaces等结构化的装置，中间也出来过GWT等为了其他语言开发者开发大型JS应用的项目，这些项目可以让你利用Java等面向对象语言开发大型Web应用，也可以利用到Eclipse等好用的IDE，但这些项目不是用JS写代码，所以如果你想用JS里的一些东西，你可能要比较费劲的在其他语言里把它给实现出来，所以我们考虑如何增强JS语言，提供如静态类型检查、classes、modules/namespaces、interfaces等大型应用装置，这就是TS语言：*"),t("em",[s._v("TS是一种开发大型JS应用的语言，更详细一点来说，TS是有类型的编译到纯JS的JS超集。")])])]),s._v(" "),t("li",[t("p",[s._v("最新的 vue 三方库 都开始更新 vue3 + ts")])])]),s._v(" "),t("h5",{attrs:{id:"很多人-用完后····"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#很多人-用完后····"}},[s._v("#")]),s._v(" 很多人 用完后····")]),s._v(" "),t("p",[t("img",{attrs:{src:n(430),alt:"avatar"}})]),s._v(" "),t("h5",{attrs:{id:"ts-vs-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ts-vs-flow"}},[s._v("#")]),s._v(" ts vs flow")]),s._v(" "),t("p",[s._v("https://github.com/niieani/typescript-vs-flowtype")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 类型推断和提示\n// let a = '1'\n// a = 5 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("类型是结构化的")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("interface Point2D {\n    x: number;\n    y: number;\n}\n\ninterface Point3D {\n    x: number;\n    y: number;\n    z: number;\n}\nvar point2D: Point2D = { x: 0, y: 10 }\nvar point3D: Point3D = { x: 0, y: 10, z: 20 }\nfunction iTakePoint2D(point: Point2D) { /* do something */ }\n\niTakePoint2D(point2D); // exact match okay\niTakePoint2D(point3D); // extra information okay\niTakePoint2D({ x: 0 }); // Error: missing information `y`类型是结构化的\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("model")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("export default class CheckBill {\n  id: Nullable<string>\n  shop: Nullable<string>\n  number: Nullable<string>\n  created: Nullable<Date>\n  creator: Nullable<string>\n  createMethod: Nullable<string>\n  profitQty: number = 0\n  costAmount: number = 0\n  saleAmount: number = 0\n  remark: Nullable<string>\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"vue-2使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-2使用"}},[s._v("#")]),s._v(" vue 2使用")]),s._v(" "),t("p",[s._v("在 Vue2.x 使用过 TypeScript 的掘友肯定知道引入 TypeScript 不是一件简单的事情：")]),s._v(" "),t("p",[s._v("要用 vue-class-component 强化 vue 组件，让 Script 支持 TypeScript 装饰器\n用 vue-property-decorator 来增加更多结合 Vue 特性的装饰器\n引入 ts-loader 让 webpack 识别 .ts .tsx 文件\nhttps://github.com/vuejs/vue-class-component/issues")]),s._v(" "),t("h4",{attrs:{id:"ts-使用成本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ts-使用成本"}},[s._v("#")]),s._v(" ts 使用成本")]),s._v(" "),t("h4",{attrs:{id:"重点语法介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重点语法介绍"}},[s._v("#")]),s._v(" 重点语法介绍")]),s._v(" "),t("ol",[t("li",[s._v("接口声明")]),s._v(" "),t("li",[s._v("可选与默认参数")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('function buildName(firstName: string, lastName?: string) { //lastName为可选参数\n  if (lastName)\n      return firstName + " " + lastName;\n  else\n      return firstName;\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("3.可选属性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("interface SquareConfig { //定义了两个可选属性\n  color?: string;  \n  width?: number;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("4.枚举")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("enum Color {Red = 1, Green = 2, Blue = 4}\nlet c: Color = Color.Green;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("抽象类")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("abstract class Animal {\n  eat (food: string): void {\n    console.log(`呼噜呼噜的吃: ${food}`)\n  }\n\n  abstract run (distance: number): void\n}\n\nclass Dog extends Animal {\n  run(distance: number): void {\n    console.log('四脚爬行', distance)\n  }\n}\n\nconst d = new Dog()\nd.eat('嗯西马')\nd.run(100)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("装饰器\nJavascript规范里的装饰器目前处在 建议征集的第二阶段，也就意味着不能在原生代码中直接使用，浏览器暂不支持。")]),s._v(" "),t("li",[s._v("函数")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 返回类型注解\nfunction foo(sample: Foo): Foo {\nreturn sample;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("可选参数和默认参数")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function foo(bar: number, bas?: string, cc: number = 5): void {\n// ..\n}\n\nfoo(123);\nfoo(123, 'hello');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("函数重载")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" function padding(all: number);\n function padding(topAndBottom: number, leftAndRight: number);\n function padding(top: number, right: number, bottom: number, left: number);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"tsconfig-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json"}},[s._v("#")]),s._v(" tsconfig.json")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "compilerOptions": {\n\n    /* 基本选项 */\n    "target": "es5",                       // 指定 ECMAScript 目标版本: \'ES3\' (default), \'ES5\', \'ES6\'/\'ES2015\', \'ES2016\', \'ES2017\', or \'ESNEXT\'\n    "module": "commonjs",                  // 指定使用模块: \'commonjs\', \'amd\', \'system\', \'umd\' or \'es2015\'\n    "lib": [],                             // 指定要包含在编译中的库文件\n    "allowJs": true,                       // 允许编译 javascript 文件\n    "checkJs": true,                       // 报告 javascript 文件中的错误\n    "jsx": "preserve",                     // 指定 jsx 代码的生成: \'preserve\', \'react-native\', or \'react\'\n    "declaration": true,                   // 生成相应的 \'.d.ts\' 文件\n    "sourceMap": true,                     // 生成相应的 \'.map\' 文件\n    "outFile": "./",                       // 将输出文件合并为一个文件\n    "outDir": "./",                        // 指定输出目录\n    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.\n    "removeComments": true,                // 删除编译后的所有的注释\n    "noEmit": true,                        // 不生成输出文件\n    "importHelpers": true,                 // 从 tslib 导入辅助工具函数\n    "isolatedModules": true,               // 将每个文件作为单独的模块 （与 \'ts.transpileModule\' 类似）.\n\n    /* 严格的类型检查选项 */\n    "strict": true,                        // 启用所有严格类型检查选项\n    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错\n    "strictNullChecks": true,              // 启用严格的 null 检查\n    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误\n    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 \'use strict\'\n\n    /* 额外的检查 */\n    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误\n    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误\n    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误\n    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）\n\n    /* 模块解析选项 */\n    "moduleResolution": "node",            // 选择模块解析策略： \'node\' (Node.js) or \'classic\' (TypeScript pre-1.6)\n    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录\n    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表\n    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容\n    "typeRoots": [],                       // 包含类型声明的文件列表\n    "types": [],                           // 需要包含的类型声明文件名列表\n    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。\n\n    /* Source Map Options */\n    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置\n    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置\n    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件\n    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性\n\n    /* 其他选项 */\n    "experimentalDecorators": true,        // 启用装饰器\n    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br")])]),t("h5",{attrs:{id:"d-ts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#d-ts"}},[s._v("#")]),s._v(" d.ts")]),s._v(" "),t("p",[s._v("用 ts 写的模块在发布的时候仍然是用 js 发布，这就导致一个问题：ts 那么多类型数据都没了，所以需要一个 d.ts 文件来标记某个 js 库里面对象的类型\n然后 typings 就是一个网络上的 d.ts 数据库")]),s._v(" "),t("h5",{attrs:{id:"lib-d-ts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lib-d-ts"}},[s._v("#")]),s._v(" lib.d.ts")]),s._v(" "),t("p",[s._v("当你安装 TypeScript 时，会顺带安装一个 lib.d.ts 声明文件。这个文件包含 JavaScript 运行时以及 DOM 中存在各种常见的环境声明。")]),s._v(" "),t("ul",[t("li",[s._v("它自动包含在 TypeScript 项目的编译上下文中；")]),s._v(" "),t("li",[s._v("它能让你快速开始书写经过类型检查的 JavaScript 代码。")])]),s._v(" "),t("h5",{attrs:{id:"从js-迁移-ts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从js-迁移-ts"}},[s._v("#")]),s._v(" 从js 迁移 ts")]),s._v(" "),t("ul",[t("li",[s._v("添加一个 tsconfig.json 文件；")]),s._v(" "),t("li",[s._v("把文件扩展名从 .js 改成 .ts，开始使用 any 来减少错误；")]),s._v(" "),t("li",[s._v("开始在 TypeScript 中写代码，尽可能的减少 any 的使用；")]),s._v(" "),t("li",[s._v("回到旧代码，开始添加类型注解，并修复已识别的错误；")]),s._v(" "),t("li",[s._v("为第三方 JavaScript 代码定义环境声明。")])]),s._v(" "),t("h5",{attrs:{id:"老项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#老项目"}},[s._v("#")]),s._v(" 老项目")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("对于老项目，由于TS兼容ES规范，所以可以比较方便的升级现有的JS（这里指ES6及以上）代码，逐渐的加类型注解，渐进式增强代码健壮性。迁移过程：")])]),s._v(" "),t("li",[t("p",[s._v("npm全局安装typescript包，并在工程根目录运行tsc --init，自动产生tsconfig.json文件。\n默认的3个配置项：更多配置项说明")])])]),s._v(" "),t("p",[s._v('"target":"es5": 编译后代码的ES版本，还有es3，es2105等选项。\n"module":"commonjs":编译后代码的模块化组织方式，还有amd，umd，es2015等选项。\n"strict":true:严格校验，包含不能有没意义的any，null校验等选项。')]),s._v(" "),t("ul",[t("li",[t("p",[s._v('初始化得到的tsconfig.json无需修改，增加"allowJs": true选项。')])]),s._v(" "),t("li",[t("p",[s._v('配置webpack配置，增加ts的loader，如awesome-typescript-loader。(如果是基于atool-build来构建的项目，则它内置了ts编译，这步省略)\nloaders: [\n{ test: /.tsx?$/, loader: "awesome-typescript-loader" }\n]')])]),s._v(" "),t("li",[t("p",[s._v("此时你可以写文件名为ts和tsx（React）后缀的代码了，它可以和现有的ES6代码共存，VSCode会自动校验这部分代码，webpack打包也没问题了。")])]),s._v(" "),t("li",[t("p",[s._v("逐渐的，开始打算重构以前的ES6代码为TS代码，只需将文件后缀改成ts(x)就行，就可以享受TS及IDE智能感知/纠错带来的好处。")])])]),s._v(" "),t("h5",{attrs:{id:"新项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新项目"}},[s._v("#")]),s._v(" 新项目")]),s._v(" "),t("p",[s._v("vue 项目可以通过 vite 创建 vue 的ts项目")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" yarn create @vitejs/app\n # yarn\n yarn create @vitejs/app my-vue-app --template vue\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[s._v("https://juejin.cn/post/6844903497205448711\nhttps://www.typescriptlang.org/docs/handbook/decorators.html#decorators\nhttps://jkchao.github.io/typescript-book-chinese/")])])}),[],!1,null,null,null);a.default=e.exports}}]);