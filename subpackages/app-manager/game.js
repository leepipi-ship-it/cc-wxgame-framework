var e, t, n = require("../../@babel/runtime/helpers/regeneratorRuntime");

System.register("chunks:///_virtual/app-manager", ["./GlobaldataManager.ts", "./VibrateManager.ts"], (function() {
  return {
    setters: [null, null],
    execute: function() {}
  }
})),



System.register("chunks:///_virtual/GlobaldataManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseManager.ts", "./app.ts"], (function(e) {
  var t, r, i, a, o, s, u, c, l, f, g, p, h, d, m, v;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, r = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.extends, s = e.asyncToGenerator
    }, function(e) {
      u = e.cclegacy, c = e._decorator, l = e.Prefab
    }, function(e) {
      m = e.default
    }, function(e) {
      v = e.app
    }],
    execute: function() {
      var y, b, M, w, C;
      u._RF.push({}, "f8619vmGBJNz7UCJHuO/1m9", "GlobaldataManager", void 0);
      var T = c.ccclass,
        L = c.property;
      
      e("GlobaldataManager", (y = T("GlobaldataManager"), y((C = t((w = function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return t = e.call.apply(e, [this].concat(r)) || this, t.recommendPageManager = null, t
        }
        r(t, e);
        var u = t.prototype;
        return u.onLoad = function() {
          // 初始化本地存储数据
          this.needGuideOne = v.lib.storage.get(v.config.localkey.NeedGuideOne) ?? !0;
          this.needGuideTwo = v.lib.storage.get(v.config.localkey.NeedGuideTwo) ?? !0;
          this.newUser = v.lib.storage.get(v.config.localkey.NewUser) ?? !0;
        }, 
        // 关键字函数：加载推荐页面管理器
        u.loadRecommend = function() {
          var e = s(n().mark((function e() {
            return n().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  // 创建并加载推荐页面管理器
                  if (typeof wx !== 'undefined' && wx.createPageManager) {
                    this.recommendPageManager = wx.createPageManager();
                    e.next = 4;
                    break;
                  }
                  e.next = 5;
                  break;
                case 4:
                  this.recommendPageManager.load({
                    openlink: ""
                  });
                case 5:
                case "end":
                  return e.stop();
              }
            }), e, this)
          })));
          return function() {
            return e.apply(this, arguments);
          };
        }(), 
        // 关键字函数：显示推荐内容
        u.showRecommend = function() {
          var e = s(n().mark((function e() {
            var t;
            return n().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (this.recommendPageManager) {
                    e.next = 4;
                    break;
                  }
                  e.next = 4;
                  break;
                case 4:
                  t = this.recommendPageManager;
                  if (t) {
                    e.next = 7;
                    break;
                  }
                  e.next = 8;
                  break;
                case 7:
                  t.show();
                case 8:
                case "end":
                  return e.stop();
              }
            }), e, this)
          })));
          return function() {
            return e.apply(this, arguments);
          };
        }(), t
      }(m)).prototype, "", [], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null;
        }
      }), M = w)) || M)), u._RF.pop()
    }
  }
})),


System.register("chunks:///_virtual/VibrateManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseManager.ts", "./storage.ts", "./cc-minisdk.ts", "./MiniSDK.ts"], (function(e) {
  var t, n, r, i, a, o, s;
  return {
    setters: [function(e) {
      t = e.inheritsLoose, n = e.createClass
    }, function(e) {
      r = e.cclegacy, i = e._decorator
    }, function(e) {
      a = e.default
    }, function(e) {
      o = e.default
    }, null, function(e) {
      s = e.miniSDK
    }],
    execute: function() {
      var u;
      r._RF.push({}, "fdb70mj771EDZQF7DC5yASp", "VibrateManager", void 0);
      var c = i.ccclass;
      i.property, e("VibrateManager", c("VibrateManager")(u = function(e) {
        function r() {
          for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
          return (t = e.call.apply(e, [this].concat(r)) || this).VibrateMuteCacheKey = "VibrateMute", t.vibrateMute = !1, t.lastVibrateTime = 0, t
        }
        t(r, e);
        var i = r.prototype;
        return i.onLoad = function() {}, 
      i.onInited = function() {
          // 从本地存储获取震动静音设置
          var e = !0 === o.get(this.VibrateMuteCacheKey);
          this.vibrateMute = e
        }, 
      i.setVibrateMute = function(e) {
          // 设置震动静音状态
          this.vibrateMute = e,
          o.set(this.VibrateMuteCacheKey, this.vibrateMute)
        }, 
      i.playVibrate = function() {
          // 播放普通长震动
          this.vibrateMute || s.vibrateLong()
        }, 
      i.playVibrateHeavy = function() {
          // 播放强烈长震动
          this.vibrateMute || s.vibrateLong({
            type: "heavy"
          })
        }, 
      i.playVibrateShort = function() {
          // 播放轻微短震动
          this.vibrateMute || s.vibrateShort({
            type: "light"
          })
        }, 
      i.init = function(t) {
          // 初始化方法
          e.prototype.init.call(this, t)
        }, 
      n(r, [{
        key: "isVibrateMute",
        get: function() {
          return this.vibrateMute
        }
      }]), r
      }(a)) || u), r._RF.pop()
    }
  }
})),

e = "virtual:///prerequisite-imports/app-manager", t = "chunks:///_virtual/app-manager", 
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
