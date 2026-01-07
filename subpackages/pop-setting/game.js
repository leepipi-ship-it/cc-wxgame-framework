var e, t;
System.register("chunks:///_virtual/pop-setting", ["./PopSetting.ts"], (function() {
  return {
    setters: [null],
    execute: function() {}
  }
})), System.register("chunks:///_virtual/PopSetting.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseView.ts", "./app.ts", "./Global.ts"], (function(e) {
  var t, i, n, r, a, o, u, s, l, c, b, f, g, p, h, m, d, v;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function(e) {
      a = e.cclegacy, o = e._decorator, u = e.Node, s = e.Sprite, l = e.SpriteFrame, c = e.UITransform
    }, function(e) {
      m = e.default
    }, function(e) {
      d = e.app
    }, function(e) {
      v = e.default
    }],
    execute: function() {
      var w, y, k, B, M, z, C, F, S, _, P, T, x, H, L, R, V, A, E, D, N, I, W, G, Q, j, q, J, U, X, K, O, Y;
      a._RF.push({}, "c5afaktXMpD3as2HIQE73Vy", "PopSetting", void 0);
      var Z = o.ccclass,
        $ = o.property;
      e("PopSetting", (w = Z("PopSetting"), y = $(u), k = $(u), B = $(u), M = $(u), z = $(u), C = $(u), F = $(s), S = $(u), _ = $(u), P = $(u), T = $(u), x = $(u), H = $(u), L = $(l), R = $(l), w((E = t((A = function(e) {
        function t() {
          for (var t, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
          return t = e.call.apply(e, [this].concat(a)) || this, n(t, "effect", E, r(t)), n(t, "music", D, r(t)), n(t, "vibrate", N, r(t)), t.feedbackBtn = void 0, t
        }
        i(t, e);
        var a = t.prototype;
        return a.onLoad = function() {}, a.onShow = function(e) {
          this.setBtn(this.effect, d.manager.sound.isEffectMute), this.setBtn(this.vibrate, d.manager.vibrate.isVibrateMute), this.setBtn(this.music, d.manager.sound.isMusicMute)
        }, a.setBtn = function(e, t) {}, a.onHide = function(e) {
          return this.feedbackBtn && this.feedbackBtn.destroy(), e
        }, a.effect_click = function() {
          d.manager.sound.isEffectMute ? d.manager.sound.setEffectMute(!1, !0) : d.manager.sound.setEffectMute(!0, !0), this.setBtn(this.effect, d.manager.sound.isEffectMute)
        }, a.music_click = function() {
          d.manager.sound.isMusicMute ? d.manager.sound.setMusicMute(!1, !0) : d.manager.sound.setMusicMute(!0, !0), this.setBtn(this.music, d.manager.sound.isMusicMute)
        }, a.vibrate_click = function() {
          d.manager.vibrate.isVibrateMute ? (d.manager.vibrate.setVibrateMute(!1), d.manager.vibrate.playVibrate()) : d.manager.vibrate.setVibrateMute(!0), this.setBtn(this.vibrate, d.manager.vibrate.isVibrateMute)
        }, a.onClose = function() {
          this.hide()
        }, t
      }(m)).prototype, "effect", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), D = t(A.prototype, "music", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), N = t(A.prototype, "vibrate", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), V = A)) || V)), a._RF.pop()
    }
  }
})), e = "virtual:///prerequisite-imports/pop-setting", t = "chunks:///_virtual/pop-setting", System.register(e, [t], (function(e, t) {
  return {
    setters: [function(t) {
      var i = {};
      for (var n in t) "default" !== n && "__esModule" !== n && (i[n] = t[n]);
      e(i)
    }],
    execute: function() {}
  }
}));