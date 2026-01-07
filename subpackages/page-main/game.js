var e, t;

System.register("chunks:///_virtual/page-main", ["./PageMain.ts", "./DaoJu.ts", "./gameHeartManager.ts"], (function() {
  return {
    setters: [null, null, null],
    execute: function() {}
  }
})),

System.register("chunks:///_virtual/DaoJu.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./app.ts"], (function(e) {
  var t, n, i, r, a, o, s, l, h, u, g;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function(e) {
      a = e.cclegacy, o = e._decorator, s = e.Node, l = e.Component
    }, function(e) {
      g = e.app
    }],
    execute: function() {
      var c, p, f, v, y, S, w, T, b, C, M, x;
      a._RF.push({}, "cc1daCWVuZDJ7pZcMh7YTWh", "DaoJu", void 0);
      var P = o.ccclass,
        _ = o.property;
      
      e("DaoJu", (c = P("DaoJu"), p = _(s), f = _(s), v = _(s), y = _(s), c((T = t((w = function(e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
          return t = e.call.apply(e, [this].concat(a)) || this, i(t, "DaoJuHammerNum", x, r(t)), t
        }
        n(t, e);
        return t
      }(l)).prototype, "DaoJuHammerNum", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), S = w)) || S)), a._RF.pop()
    }
  }
})),

System.register("chunks:///_virtual/gameHeartManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./app.ts"], (function(e) {
  var t, n, i, r, a, o, s, l, h;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function(e) {
      a = e.cclegacy, o = e._decorator, s = e.Node, l = e.Component
    }, function(e) {
      h = e.app
    }],
    execute: function() {
      var u, g, c, d, p, m, f;
      a._RF.push({}, "2840dLj6ORMEaDCgw7YNoTL", "gameHeartManager", void 0);
      var v = o.ccclass,
        y = o.property;
      
      e("gameHeartManager", (u = v("gameHeartManager"), g = y(s), u((m = t((p = function(e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
          return t = e.call.apply(e, [this].concat(a)) || this, i(t, "heartLayout", m, r(t)), t
        }
        n(t, e);
        var a = t.prototype;
        return 
        // 关键字函数：更新游戏心脏减少
        a.updateGameHeartJian = function() {}, t
      }(l)).prototype, "heartLayout", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), d = p)) || d)), a._RF.pop()
    }
  }
})),

System.register("chunks:///_virtual/PageMain.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseView.ts", "./app.ts", "./index2.ts"], (function(e) {
  var t, n, i, r, a, o, s, l, h, u, g, c, d, p, m;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function(e) {
      a = e.cclegacy, o = e._decorator, s = e.Node
    }, function(e) {
      c = e.default
    }, null, function(e) {
      d = e.app
    }, function(e) {
      m = e.bindStore
    }],
    execute: function() {
      var f, v, y, S, w, T, b, C, M, x, P, _, D, R, N, L;
      a._RF.push({}, "faa7cHg5dxMMrahjGX6seWS", "PageMain", void 0);
      var E = o.ccclass,
        O = o.property;
      
      e("PageMain", (f = E("PageMain"), v = O({
        type: s
      }), f((_ = t((P = function(e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
          return t = e.call.apply(e, [this].concat(a)) || this, i(t, "settingBtn", _, r(t)), t
        }
        n(t, e);
        return t
      }(c)).prototype, "settingBtn", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), x = P)) || x)), a._RF.pop()
    }
  }
})));
