var t, e;
System.register("chunks:///_virtual/pop-quit", ["./PopQuit.ts"], (function() {
  return {
    setters: [null],
    execute: function() {}
  }
})), System.register("chunks:///_virtual/PopQuit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseView.ts", "./app.ts"], (function(t) {
  var e, n, i, o, u;
  return {
    setters: [function(t) {
      e = t.inheritsLoose
    }, function(t) {
      n = t.cclegacy, i = t._decorator
    }, function(t) {
      o = t.default
    }, function(t) {
      u = t.app
    }],
    execute: function() {
      var r;
      n._RF.push({}, "b6e53cKai5C8Y/UZereztb/", "PopQuit", void 0);
      var s = i.ccclass;
      i.property, t("PopQuit", s("PopQuit")(r = function(t) {
        function n() {
          return t.apply(this, arguments) || this
        }
        e(n, t);
        var i = n.prototype;
        return i.onLoad = function() {}, i.onShow = function(t) {}, i.onHide = function(t) {
          return t
        }, i.onClose = function() {
          u.manager.event.emit(u.config.eventname.startGameDaoJiShi), this.hide()
        }, i.onClickBack = function() {
          u.manager.ui.show({
            name: "PageHome"
          }), this.hide()
        }, n
      }(o)) || r), n._RF.pop()
    }
  }
})), t = "virtual:///prerequisite-imports/pop-quit", e = "chunks:///_virtual/pop-quit", System.register(t, [e], (function(t, e) {
  return {
    setters: [function(e) {
      var n = {};
      for (var i in e) "default" !== i && "__esModule" !== i && (n[i] = e[i]);
      t(n)
    }],
    execute: function() {}
  }
}));