(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{648:function(e,s,t){"use strict";t.r(s);var n=t(29),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"flutter-redux-源码分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flutter-redux-源码分析"}},[e._v("#")]),e._v(" Flutter_Redux 源码分析")]),e._v(" "),t("p",[e._v("之前一篇文章有介绍 redux 的主要核心思想以及用法。本篇文章 主要研究一下 Flutter_Reduxd的源码编程，希望能够通过理解，熟悉一下Dart编程习惯。")]),e._v(" "),t("ul",[t("li",[e._v("typedef： 在Dart中，方法是一等对象。可以把方法当做参数调用另外一个方法， typedef 本质上为 一个方法签名提供了一个别名。\n比较常见是用于 定义一个回调接口\n"),t("a",{attrs:{href:"https://dart.dev/guides/language/effective-dart/design#avoid-defining-a-one-member-abstract-class-when-a-simple-function-will-do",target:"_blank",rel:"noopener noreferrer"}},[e._v("Effective Dart"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("typedef void LoggerOutputFunction(String msg);\n\nclass Logger {\n  LoggerOutputFunction out;\n  Logger() {\n    out = print;\n  }\n  void log(String msg) {\n    out(msg);\n  }\n}\nvoid timestampLoggerOutputFunction(String msg) {\n  String timeStamp = new Date.now().toString();\n  print('${timeStamp}: $msg');\n}\n\nvoid main() {\n  Logger l = new Logger();\n  l.log('Hello World');\n  l.out = timestampLoggerOutputFunction;\n  l.log('Hello World');\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br")])]),t("p",[e._v("flutter_Redux 是有 redux 文件夹 和 flutter_Redux.dart 文件。 其中 redux 包括 store.dart 和 uitls.")]),e._v(" "),t("p",[e._v("store.dart 包含 redux 主要逻辑.(包括声明 store reduce以及初始化)\nuitls 提供了 多个复杂 reduce 生成以及 支持 type，combineReducers\n这一点 官方注释非常详细，还有相应的 example.")]),e._v(" "),t("p",[e._v("flutter_Redux.dart 是将 Widget 与 Redux 链接在一块。")]),e._v(" "),t("h4",{attrs:{id:"rudex-store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rudex-store"}},[e._v("#")]),e._v(" Rudex store")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class Store<State> {\n  /// The [Reducer] for your Store. Allows you to get the current reducer or\n  /// replace it with a new one if need be.\n  Reducer<State> reducer;\n\n  final StreamController<State> _changeController;\n  State _state;\n  List<NextDispatcher> _dispatchers;\n\n  Store(\n    /// 初始化 所需要的 的reducer\n    this.reducer, {\n    State initialState,\n    List<Middleware<State>> middleware = const [],\n    bool syncStream: false,\n\n    /// If set to true, the Store will not emit onChange events if the new State\n    /// that is returned from your [reducer] in response to an Action is equal\n    /// to the previous state.\n    ///\n    /// Under the hood, it will use the `==` method from your State class to\n    /// determine whether or not the two States are equal.\n    bool distinct: false,\n    /// 生成一个 广播Stream\n  }) : _changeController = new StreamController.broadcast(sync: syncStream) {\n    _state = initialState;\n    _dispatchers = _createDispatchers(\n      middleware,\n      _createReduceAndNotify(distinct),\n    );\n  }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br")])]),t("p",[e._v("stream - 管道 提供入口和出口，可以异步处理数据。")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://www.didierboelens.com/2018/08/reactive-programming---streams---bloc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于Stream"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("_dispatchers 是一个闭包数组，他通过参数action,来时让reduce 处理 输出新的state")])]),e._v(" "),t("li",[t("p",[e._v("同时通过 _createDispatchers 把 middleware 放进去，然后将数组倒序，先执行 middleware .然后通过 next(action) 链式调用。")])]),e._v(" "),t("li",[t("p",[e._v("onChange, 是 _changeController 监听state 变化，每当 执行action,会调用  _changeController.add(state);通过 store.onChange.listen 可以获得当前state")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("typedef void NextDispatcher(dynamic action);\n\nList<NextDispatcher> _dispatchers;\n\n  NextDispatcher _createReduceAndNotify(bool distinct) {\n    return (dynamic action) {\n      /// 执行 reduce 输出 新的state\n      final state = reducer(_state, action);\n\n      if (distinct && state == _state) return;\n      _state = state;\n      /// 向广播 Stream 添加 监听器\n      _changeController.add(state);\n    };\n  }\n\n  List<NextDispatcher> _createDispatchers(\n    List<Middleware<State>> middleware,\n    NextDispatcher reduceAndNotify,\n  ) {\n    final dispatchers = <NextDispatcher>[]..add(reduceAndNotify);\n\n    // Convert each [Middleware] into a [NextDispatcher]\n    for (var nextMiddleware in middleware.reversed) {\n      final next = dispatchers.last;\n\n      dispatchers.add(\n        (dynamic action) => nextMiddleware(this, action, next),\n      );\n    }\n\n    // 确保 先执行 middleware数组。\n    return dispatchers.reversed.toList();\n  }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br")])]),t("p",[e._v("需要注意的是 需要在异步处理action 用到 Middleware，它执行与 dispatch 和 reducer 之间。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("typedef void Middleware<State>(\n  Store<State> store,\n  dynamic action,\n  NextDispatcher next,\n);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("最后通过 _dispatchers"),t("a",{attrs:{href:"action"}},[e._v("0")]),e._v(" 依次执行。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://hongruqi.github.io/2019/01/26/Flutter%20%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%20State/",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于 InheritedWidget"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);