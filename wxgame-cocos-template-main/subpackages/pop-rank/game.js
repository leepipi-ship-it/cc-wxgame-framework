var e, t;
System.register("chunks:///_virtual/pop-rank", ["./PopRank.ts"], (function() {
  return {
    setters: [null],
    execute: function() {}
  }
})), System.register("chunks:///_virtual/PopRank.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseView.ts", "./app.ts", "./Global.ts"], (function(e) {
  var t, n, a, i, r, o, s, l, u, c, p;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
    }, function(e) {
      r = e.cclegacy, o = e._decorator, s = e.Node, l = e.sys
    }, function(e) {
      u = e.default
    }, function(e) {
      c = e.app
    }, function(e) {
      p = e.default
    }],
    execute: function() {
      var f, k, v, y, d, b, R, h, D, g, F;
      r._RF.push({}, "a2c02iCLLlHbpPSwVOCpaOI", "PopRank", void 0);
      var m = e("RankType", function(e) {
          return e[e.WORLD = 0] = "WORLD", e[e.FRIEND = 1] = "FRIEND", e
        }({})),
        w = o.ccclass,
        L = o.property;
      e("PopRank", (f = w("PopRank"), k = L(s), v = L(s), y = L(s), d = L(s), f((h = t((R = function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return t = e.call.apply(e, [this].concat(r)) || this, a(t, "backBtn", h, i(t)), a(t, "titleW", D, i(t)), a(t, "titleF", g, i(t)), a(t, "subNode", F, i(t)), t.rankType = m.WORLD, t.rankData = void 0, t.isFristF = !0, t
        }
        n(t, e);
        var r = t.prototype;
        return r.onLoad = function() {}, r.onShow = function(e) {
          var t = this;
          p.platform.getRankInfo(1, (function(e) {
            t.rankData = e, t.updateView()
          })), p.platform.showInterstitialAd()
        }, r.onHide = function(e) {
          return e
        }, r.onClickBackBtn = function() {
          this.rankType == m.WORLD ? this.rankType = m.FRIEND : this.rankType == m.FRIEND && (this.rankType = m.WORLD), this.updateView()
        }, r.updateView = function() {
          var e = this;
          this.subNode.active = !1, this.scheduleOnce((function() {
            var t;
            if (e.subNode.active = !0, l.platform == l.Platform.WECHAT_GAME && (t = wx.getOpenDataContext()), e.rankType == m.WORLD) e.backBtn.x = -90, e.titleW.active = !0, e.titleF.active = !1, t.postMessage({
              type: "event",
              event: "allRank",
              data: e.rankData
            });
            else if (e.rankType == m.FRIEND) {
              if (e.backBtn.x = 90, e.titleW.active = !1, e.titleF.active = !0, e.isFristF) {
                var n = c.store.game.getLevel();
                t.postMessage({
                  type: "event",
                  event: "setScore",
                  data: {
                    key: "classic",
                    value: n + ""
                  }
                })
              }
              e.isFristF = !1, t.postMessage({
                type: "event",
                event: "friendRank",
                data: p.platform.openID
              })
            }
          }), .5)
        }, t
      }(u)).prototype, "backBtn", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), D = t(R.prototype, "titleW", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), g = t(R.prototype, "titleF", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), F = t(R.prototype, "subNode", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), b = R)) || b)), r._RF.pop()
    }
  }
})), e = "virtual:///prerequisite-imports/pop-rank", t = "chunks:///_virtual/pop-rank", System.register(e, [t], (function(e, t) {
  return {
    setters: [function(t) {
      var n = {};
      for (var a in t) "default" !== a && "__esModule" !== a && (n[a] = t[a]);
      e(n)
    }],
    execute: function() {}
  }
}));