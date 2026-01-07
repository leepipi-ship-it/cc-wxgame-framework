var e, t, i = require("../../@babel/runtime/helpers/regeneratorRuntime");


System.register("chunks:///_virtual/page-home", ["./PageHome.ts"], (function() {
  return {
    setters: [null],
    execute: function() {}
  }
})),


System.register("chunks:///_virtual/PageHome.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseView.ts", "./app.ts"], (function(e) {
  var t, i, n, r, o, a, l, s, u, c, p, h, g, m, f, b, d, v, S, y, w, C, L, A, T;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function(e) {
      o = e.cclegacy, a = e._decorator, l = e.Node
    }, function(e) {
      y = e.default
    }, function(e) {
      w = e.app
    }],
    execute: function() {
      var k, P, F, _, z, B, D, H, I, R, V, M, N, x, E, G, O, U, J, j, q, X, K, Q, Y, Z, W;
      o._RF.push({}, "3c964M12+1GMbfDio3xbSyK", "PageHome", void 0);
      var $ = e("LevelStarShowNum", 15),
        ee = a.ccclass,
        te = a.property;
      
      e("PageHome", (k = ee("PageHome"), P = te(l), B = te(l), D = te(l), j = te(l), q = te(l), k((G = t((E = function(e) {
        function t() {
          for (var t, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
          return t = e.call.apply(e, [this].concat(o)) || this, n(t, "btnStart", G, r(t)), n(t, "settingBtn", j, r(t)), n(t, "btnShare", q, r(t)), t
        }
        i(t, e);
        var o = t.prototype;
        return o.onLoad = function() {
          // 预加载弹窗资源
          w.manager.ui.preload("PopResult"),
          w.manager.ui.preload("PopSetting"),
          w.manager.ui.preload("PopShare"),
          w.manager.ui.preload("PopQuit"),
          w.manager.ui.preload("PopSkin"),
          w.manager.ui.preload("PopRank")
        }, o.onClickSetting = function() {
          // 显示设置弹窗
          w.manager.ui.show({
            name: "PopSetting",
            data: {
              isHome: !0
            }
          })
        }, o.onShow = function(e) {
          this.showMiniViews({
            views: this.miniViews
          }),
          // 绑定按钮事件
          this.btnStart.on(l.EventType.TOUCH_END, this.onClickStartEnd, this),
          this.settingBtn.on(l.EventType.TOUCH_END, this.onClickSetting, this),
          this.btnShare.on(l.EventType.TOUCH_END, this.onClickShare, this)
        }, o.onClickShare = function() {
          // 显示分享弹窗
          w.manager.ui.show({
            name: "PopShare"
          })
        }, o.onClickStartEnd = function() {
          // 跳转到主游戏界面
          w.manager.ui.show({
            name: "PageMain"
          })
        }, t
      }(y)).prototype, "btnStart", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), j = t(E.prototype, "settingBtn", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), q = t(E.prototype, "btnShare", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), x = E)) || x)), o._RF.pop()
    }
  }
})),

e = "virtual:///prerequisite-imports/page-home", t = "chunks:///_virtual/page-home", 
System.register(e, [t], (function(e, t) {
  return {
    setters: [function(t) {
      var n = {};
      for (var r in t) "default" !== r && "__esModule" !== r && (n[r] = t[r]);
      e(n)
    }],
    execute: function() {}
  }
}));
