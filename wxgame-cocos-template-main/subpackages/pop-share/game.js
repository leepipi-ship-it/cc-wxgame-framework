var e, t;
System.register("chunks:///_virtual/pop-share", ["./PopShare.ts"], (function() {
  return {
    setters: [null],
    execute: function() {}
  }
})), System.register("chunks:///_virtual/PopShare.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseView.ts", "./app.ts", "./Global.ts"], (function(e) {
  var t, r, o, i, a, n, s, u, c, p, l, h;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, r = e.inheritsLoose, o = e.initializerDefineProperty, i = e.assertThisInitialized
    }, function(e) {
      a = e.cclegacy, n = e._decorator, s = e.Node, u = e.tween, c = e.Tween
    }, function(e) {
      p = e.default
    }, function(e) {
      l = e.app
    }, function(e) {
      h = e.default
    }],
    execute: function() {
      var f, g, m, v, d;
      a._RF.push({}, "573c7VBiFpB3rw1oDWliaQR", "PopShare", void 0);
      var y = n.ccclass,
        b = n.property;
      e("PopShare", (f = y("PopShare"), g = b(s), f((d = t((v = function(e) {
        function t() {
          for (var t, r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
          return t = e.call.apply(e, [this].concat(a)) || this, o(t, "backLight", d, i(t)), t
        }
        r(t, e);
        var a = t.prototype;
        return a.onLoad = function() {}, a.onShow = function(e) {
          for (var t = 0; t < this.backLight.length; t++) u().target(this.backLight[t]).by(2, {
            angle: 360
          }).repeatForever().start();
          h.platform.showInterstitialAd()
        }, a.onHide = function(e) {
          for (var t = 0; t < this.backLight.length; t++) c.stopAllByTarget(this.backLight[t]);
          return e
        }, a.onClickShare = function() {
          h.platform.share((function(e) {
            e ? (l.store.game.setTiLi(l.store.game.getTiLi() + 1), l.store.game.setPropsTipNum(l.store.game.getPropsTipNum() + 1), l.store.game.setPropsHammerNum(l.store.game.getPropsHammerNum() + 1)) : l.manager.ui.showToast("分享完成才能获得奖励！")
          }))
        }, t
      }(p)).prototype, "backLight", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return []
        }
      }), m = v)) || m)), a._RF.pop()
    }
  }
})), e = "virtual:///prerequisite-imports/pop-share", t = "chunks:///_virtual/pop-share", System.register(e, [t], (function(e, t) {
  return {
    setters: [function(t) {
      var r = {};
      for (var o in t) "default" !== o && "__esModule" !== o && (r[o] = t[o]);
      e(r)
    }],
    execute: function() {}
  }
}));