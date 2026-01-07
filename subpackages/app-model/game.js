var e, t;

System.register("chunks:///_virtual/app-model", ["./config.eventname.ts", "./config.localkey.ts", "./store.game.ts"], (function() {
  return {
    setters: [null, null, null],
    execute: function() {}
  }
})),

System.register("chunks:///_virtual/config.eventname.ts", ["cc"], (function(e) {
  var t;
  return {
    setters: [function(e) {
      t = e.cclegacy
    }],
    execute: function() {
      t._RF.push({}, "7a75bdyG+dGMpk+BUFCOoZi", "config.eventname", void 0), 
      e("default", (function() {
        this.gameHeartJian = "gameHeartJian",
        this.restart = "restart"
      })), 
      t._RF.pop()
    }
  }
})),

System.register("chunks:///_virtual/config.localkey.ts", ["cc"], (function(e) {
  var t;
  return {
    setters: [function(e) {
      t = e.cclegacy
    }],
    execute: function() {
      t._RF.push({}, "781564rgaNJFILiUBEB4Mir", "config.localkey", void 0), 
      e("default", (function() {
        this.LAST_RECOVERY_TIMESTAMP_KEY = "LAST_RECOVERY_TIMESTAMP_KEY"
      })), 
      t._RF.pop()
    }
  }
})),

System.register("chunks:///_virtual/store.game.ts", ["cc", "./app.ts", "./cc-store.ts", "./index2.ts"], (function(e) {
  var t, i, n;
  return {
    setters: [function(e) {
      t = e.cclegacy
    }, function(e) {
      i = e.app
    }, null, function(e) {
      n = e.createStore
    }],
    execute: function() {
      t._RF.push({}, "cb64ajj/+pMrbVCIevQ8ilL", "store.game", void 0), 
      e("default", function() {
        function e() {
          return this.lastRecoveryTimestamp = 0, // 关键字：最后恢复时间戳
          n(this)
        }
        var t = e.prototype;
        return 
        t.setLastRecoveryTimestamp = function(e) {
          // 设置最后恢复时间戳
          this.lastRecoveryTimestamp = e,
          i.lib.storage.set(i.config.localkey.LAST_RECOVERY_TIMESTAMP_KEY, e)
        }, 
        t.getLastRecoveryTimestamp = function() {
          // 获取最后恢复时间戳
          return this.lastRecoveryTimestamp
        }, e
      }()), 
      t._RF.pop()
    }
  }
})),

e = "virtual:///prerequisite-imports/app-model", t = "chunks:///_virtual/app-model", 
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
