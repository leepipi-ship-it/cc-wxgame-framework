var typeofHelper = require("./@babel/runtime/helpers/typeof");

System.register([], (function(_export, _context) {
  var ccModule;

  function getType(t) {
    return (getType = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? 
      function(t) {
        return typeof t;
      } : 
      function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 
          "symbol" : typeof t;
      })(t);
  }

  function defineProperties(e, n) {
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      r.enumerable = r.enumerable || false;
      r.configurable = true;
      if ("value" in r) {
        r.writable = true;
      }
      
      var s = r.key;
      var u;
      u = function(t, e) {
        if ("object" !== getType(t) || null === t) {
          return t;
        }
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var i = n.call(t, e || "default");
          if ("object" !== getType(i)) {
            return i;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }(s, "string");
      
      Object.defineProperty(e, "symbol" === typeofHelper(u) ? u : String(u), r);
    }
  }

  return {
    setters: [],
    execute: function() {
      // 导出 Application 类，游戏应用的主控制器，管理引擎的初始化和运行
      _export("Application", function() {
        function Application() {
          if (!(this instanceof Application)) {
            throw new TypeError("Cannot call a class as a function");
          }
          
          this.settingsPath = "src/settings.json"; // 引擎配置文件路径
          this.showFPS = false; // 是否显示 FPS
        }

        var StaticMembers, InstanceMembers, ClassDescriptor;
        
        InstanceMembers = [
          {
            key: "init",
            value: function(cc) {
              // 初始化应用程序，添加引擎初始化完成后的回调
              ccModule = cc;
              cc.game.onPostBaseInitDelegate.add(this.onPostInitBase.bind(this));
              cc.game.onPostSubsystemInitDelegate.add(this.onPostSystemInit.bind(this));
            }
          },
          {
            key: "onPostInitBase",
            value: function() {
              // 基础初始化完成后回调
            }
          },
          {
            key: "onPostSystemInit",
            value: function() {
              // 子系统初始化完成后回调
            }
          },
          {
            key: "start",
            value: function() {
              // 启动应用程序，初始化引擎并运行游戏
              return ccModule.game.init({
                debugMode: ccModule.DebugMode.ERROR,
                settingsPath: this.settingsPath,
                overrideSettings: {
                  profiling: {
                    showFPS: this.showFPS
                  }
                }
              }).then(function() {
                return ccModule.game.run();
              });
            }
          }
        ];
        
        if (InstanceMembers) {
          defineProperties(Application.prototype, InstanceMembers);
        }
        
        if (ClassDescriptor) {
          defineProperties(Application, ClassDescriptor);
        }
        
        // 防止原型被意外修改
        Object.defineProperty(Application, "prototype", {
          writable: false
        });
        
        return Application;
      }());
    }
  };
}));
