require("../../@babel/runtime/helpers/Arrayincludes");
var e, t, i = require("../../@babel/runtime/helpers/regeneratorRuntime");
System.register("chunks:///_virtual/pop-skin", ["./PopSkin.ts", "./skinItem.ts"], (function() {
  return {
    setters: [null, null],
    execute: function() {}
  }
})), System.register("chunks:///_virtual/PopSkin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseView.ts", "./Global.ts", "./GameApp.ts", "./List.ts"], (function(e) {
  var t, i, n, s, a, o, r, c, u, l, p, h;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, s = e.assertThisInitialized
    }, function(e) {
      a = e.cclegacy, o = e._decorator, r = e.Node
    }, function(e) {
      c = e.default
    }, function(e) {
      u = e.default
    }, function(e) {
      l = e.MaxSkinType, p = e.MaxBgType
    }, function(e) {
      h = e.default
    }],
    execute: function() {
      var k, m, f, g, v, d, y, B, b, S, T, L, I;
      a._RF.push({}, "98125/bq7tEHbT1TZ7L9CiJ", "PopSkin", void 0);
      var w = e("PageType", function(e) {
          return e[e.LINE = 0] = "LINE", e[e.BG = 1] = "BG", e
        }({})),
        E = o.ccclass,
        _ = o.property;
      e("PopSkin", (k = E("PopSkin"), m = _(r), f = _(r), g = _(r), v = _(r), d = _(r), k((b = t((B = function(e) {
        function t() {
          for (var t, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
          return t = e.call.apply(e, [this].concat(a)) || this, n(t, "backBtn", b, s(t)), n(t, "titleL", S, s(t)), n(t, "titleB", T, s(t)), n(t, "lineSkin", L, s(t)), n(t, "bgSkin", I, s(t)), t.pageType = w.LINE, t
        }
        i(t, e);
        var a = t.prototype;
        return a.onLoad = function() {}, a.onShow = function(e) {
          this.updateView(), u.platform.showInterstitialAd()
        }, a.onHide = function(e) {
          return e
        }, a.onClickBackBtn = function() {
          this.pageType == w.LINE ? this.pageType = w.BG : this.pageType == w.BG && (this.pageType = w.LINE), this.updateView()
        }, a.changeType = function() {}, a.updateView = function() {
          if (this.pageType == w.LINE) {
            this.backBtn.x = -60, this.titleL.active = !0, this.titleB.active = !1, this.lineSkin.active = !0, this.bgSkin.active = !1;
            for (var e = [], t = 0; t < l; t++)
              if (4 != t && 6 != t) {
                var i = {
                  id: t,
                  itemType: w.LINE
                };
                e.push(i)
              } this.lineSkin.getComponent(h).setData(e)
          } else if (this.pageType == w.BG) {
            this.backBtn.x = 60, this.titleL.active = !1, this.titleB.active = !0, this.lineSkin.active = !1, this.bgSkin.active = !0;
            for (var n = [], s = 0; s < p; s++) {
              var a = {
                id: s,
                itemType: w.BG
              };
              n.push(a)
            }
            this.bgSkin.getComponent(h).setData(n)
          }
        }, t
      }(c)).prototype, "backBtn", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), S = t(B.prototype, "titleL", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), T = t(B.prototype, "titleB", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), L = t(B.prototype, "lineSkin", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), I = t(B.prototype, "bgSkin", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), y = B)) || y)), a._RF.pop()
    }
  }
})), System.register("chunks:///_virtual/skinItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./app.ts", "./Global.ts", "./BaseView.ts", "./PopSkin.ts"], (function(e) {
  var t, n, s, a, o, r, c, u, l, p, h, k;
  return {
    setters: [function(e) {
      t = e.inheritsLoose, n = e.asyncToGenerator
    }, function(e) {
      s = e.cclegacy, a = e._decorator, o = e.Node, r = e.SpriteFrame, c = e.Sprite, u = e.find
    }, function(e) {
      l = e.app
    }, function(e) {
      p = e.default
    }, function(e) {
      h = e.default
    }, function(e) {
      k = e.PageType
    }],
    execute: function() {
      var m;
      s._RF.push({}, "3b19dLfmsJCHJXA4YxbrIf4", "skinItem", void 0);
      var f = a.ccclass;
      a.property, e("skinItem", f("skinItem")(m = function(e) {
        function s() {
          for (var t, i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
          return (t = e.call.apply(e, [this].concat(n)) || this).skinId = 0, t.useBtn = null, t.usedBtn = null, t.unLockBtn = null, t.bg = null, t.icon = null, t.mask = null, t.itemType = void 0, t
        }
        t(s, e);
        var a = s.prototype;
        return a.updateView = function() {
          var e = n(i().mark((function e(t) {
            var n;
            return i().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  n = this, this.skinId = t.id, this.useBtn = u("useBtn", this.node), this.usedBtn = u("usedBtn", this.node), this.unLockBtn = u("unLockBtn", this.node), this.bg = u("bg", this.node), this.mask = u("mask", this.node), this.icon = u("icon", this.node).getComponent(c), this.useBtn.on(o.EventType.TOUCH_END, this.onSelect, this), this.unLockBtn.on(o.EventType.TOUCH_END, this.onUnLock, this), this.itemType = t.itemType, t.itemType == k.BG && (this.icon.node.active = !1), this.scheduleOnce((function() {
                    n.initUI()
                  })), l.manager.event.on(l.config.eventname.changeSkin, this.initUI, this);
                case 2:
                case "end":
                  return e.stop()
              }
            }), e, this)
          })));
          return function(t) {
            return e.apply(this, arguments)
          }
        }(), a.onDisable = function() {
          this.useBtn.off(o.EventType.TOUCH_END, this.onSelect, this), this.unLockBtn.off(o.EventType.TOUCH_END, this.onUnLock, this)
        }, a.initUI = function() {
          var e = this,
            t = l.store.game.getSkinId(),
            i = l.store.game.getAllUnLockSkin(),
            n = i.includes(this.skinId);
          this.itemType == k.BG && (t = l.store.game.getBgSkinId(), n = (i = l.store.game.getAllUnLockBgSkin()).includes(this.skinId));
          var s = "sp/lk" + this.skinId + "/spriteFrame";
          this.itemType == k.BG ? (s = "sp/sy_bj" + this.skinId + "/spriteFrame", this.loadRes(s, r, (function(t) {
            e.bg.getComponent(c).spriteFrame = t
          }))) : this.itemType == k.LINE && this.loadRes(s, r, (function(t) {
            e.icon.spriteFrame = t
          })), t == this.skinId ? (this.usedBtn.active = !0, this.useBtn.active = !1, this.unLockBtn.active = !1, this.mask.active = !1) : (this.usedBtn.active = !1, n ? (this.unLockBtn.active = !1, this.useBtn.active = !0, this.mask.active = !1) : (this.useBtn.active = !1, this.unLockBtn.active = !0, this.mask.active = !0))
        }, a.onUnLock = function() {
          var e = this;
          p.platform.watchAd((function(t, i, n) {
            l.manager.sound.playMusic({
              name: "music/bgm",
              volume: .5,
              force: !0
            }), t ? e.itemType == k.LINE ? (l.store.game.setUnLockSkin(e.skinId), l.manager.event.emit(l.config.eventname.changeSkin)) : e.itemType == k.BG && (l.store.game.setUnLockBgSkin(e.skinId), l.manager.event.emit(l.config.eventname.changeSkin)) : l.manager.ui.showToast("观看完激励视频才能获得奖励！")
          }))
        }, a.onSelect = function() {
          this.itemType == k.LINE ? (l.store.game.setSkinId(this.skinId), l.manager.event.emit(l.config.eventname.changeSkin)) : this.itemType == k.BG && (l.store.game.setBgSkinId(this.skinId), l.manager.event.emit(l.config.eventname.changeSkin), l.manager.event.emit(l.config.eventname.changeBgSkin))
        }, s
      }(h)) || m), s._RF.pop()
    }
  }
})), e = "virtual:///prerequisite-imports/pop-skin", t = "chunks:///_virtual/pop-skin", System.register(e, [t], (function(e, t) {
  return {
    setters: [function(t) {
      var i = {};
      for (var n in t) "default" !== n && "__esModule" !== n && (i[n] = t[n]);
      e(i)
    }],
    execute: function() {}
  }
}));