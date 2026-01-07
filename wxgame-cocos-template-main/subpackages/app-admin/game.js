var e, t;
System.register("chunks:///_virtual/app-admin", ["./executor.ts"], (function() {
  return {
    setters: [null],
    execute: function() {}
  }
})), System.register("chunks:///_virtual/executor.ts", ["cc", "./app.ts", "./config.eventname.ts", "./config.localkey.ts", "./store.game.ts"], (function() {
  var e, t, n, c, r, i, s;
  return {
    setters: [function(c) {
      e = c.cclegacy, t = c.director, n = c.Director
    }, function(e) {
      c = e.app
    }, function(e) {
      r = e.default
    }, function(e) {
      i = e.default
    }, function(e) {
      s = e.default
    }],
    execute: function() {
      function u() {
        Object.assign(c.config, {
          eventname: new r,
          localkey: new i
        }), Object.assign(c.data, {}), Object.assign(c.store, {
          game: new s
        }), Object.assign(c.Controller, {}), Object.assign(c.controller, {})
      }
      e._RF.push({}, "f187bY5C+FCHKyW84kaJgMh", "executor", void 0), t.on(n.EVENT_RESET, u), u(), e._RF.pop()
    }
  }
})), e = "virtual:///prerequisite-imports/app-admin", t = "chunks:///_virtual/app-admin", System.register(e, [t], (function(e, t) {
  return {
    setters: [function(t) {
      var n = {};
      for (var c in t) "default" !== c && "__esModule" !== c && (n[c] = t[c]);
      e(n)
    }],
    execute: function() {}
  }
}));