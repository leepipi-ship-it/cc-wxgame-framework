var e, t, i = require("../../@babel/runtime/helpers/regeneratorRuntime");


System.register("chunks:///_virtual/pop-result", ["./PopResult.ts"], (function() {
  return {
    setters: [null],
    execute: function() {}
  }
})),


System.register("chunks:///_virtual/PopResult.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseView.ts", "./app.ts"], (function(e) {
  var t, i, n, o, a, r, l, s, u, c, p;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized
    }, function(e) {
      a = e.cclegacy, r = e._decorator, l = e.Node
    }, function(e) {
      s = e.default
    }, function(e) {
      u = e.app
    }],
    execute: function() {
      var m, g, h, f, d, b, v, y, D, C, T, k, N, w, S;
      a._RF.push({}, "77c6bD2eqxG1ros8FIDKCWl", "PopResult", void 0);
      var R = r.ccclass,
        L = r.property;
      
      e("PopResult", (m = R("PopResult"), m((C = t((D = function(e) {
        function t() {
          return t = e.call.apply(e, arguments) || this, t
        }
        i(t, e);
        var a = t.prototype;
        return a.onLoad = function() {
          u.manager.event.on("ShowRestartDialog", this.showRestart, this)
        }, a.showRestart = function(e) {
          // 简化的重启对话框显示逻辑
        }, t
      }(s)).prototype, "noTimeNode", [], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), y = D)) || y)), a._RF.pop()
    }
  }
})),

e = "virtual:///prerequisite-imports/pop-result", t = "chunks:///_virtual/pop-result", 
System.register(e, [t], (function(e, t) {
  return {
    setters: [function(t) {
      var i = {};
      for (var n in t) "default" !== n && "__esModule" !== n && (i[n] = t[n]);
      e(i)
    }],
    execute: function() {}
  }
}));
