// 游戏主启动函数，负责初始化环境、加载资源、启动引擎和应用程序
function initGame() {
  globalThis.__wxRequire = require;
  require("./web-adapter");
  
  var firstScreen = require("./first-screen");
  
  require("src/polyfills.bundle.js");
  require("src/system.bundle.js");
  
  // 设备适配处理
  var systemInfo = wx.getSystemInfoSync();
  if (canvas) {
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    
    if (systemInfo.screenWidth < systemInfo.screenHeight) {
      if (canvas.width > canvas.height) {
        canvasWidth = canvas.height;
        canvasHeight = canvas.width;
      }
    } else {
      if (canvas.width < canvas.height) {
        canvasWidth = canvas.height;
        canvasHeight = canvas.width;
      }
    }
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    // 高分辨率设备处理
    if (window.devicePixelRatio >= 2) {
      canvas.width *= systemInfo.devicePixelRatio;
      canvas.height *= systemInfo.devicePixelRatio;
    }
  }
  
  var importMap = require("src/import-map.js").default;
  
  // 预热SystemJS模块加载器
  System.warmup({
    importMap: importMap,
    importMapUrl: "src/import-map.js",
    defaultHandler: function(modulePath) {
      require("." + modulePath);
    },
    handlers: {
      "plugin:": function(pluginPath) {
        requirePlugin(pluginPath);
      },
      "project:": function(projectPath) {
        require(projectPath);
      }
    }
  });
  
  // 启动游戏流程
  firstScreen.start("default", "false", "false")
    .then(() => System.import("./application.js"))
    .then(applicationModule => firstScreen.setProgress(0.2).then(() => applicationModule))
    .then(applicationModule => new(applicationModule.Application))
    .then(applicationInstance => firstScreen.setProgress(0.4).then(() => applicationInstance))
    .then(applicationInstance => {
      return System.import("cc")
        .then(ccModule => firstScreen.setProgress(0.6).then(() => ccModule))
        .then(ccModule => {
          require("./engine-adapter");
          return applicationInstance.init(ccModule);
        })
        .then(() => firstScreen.end().then(() => applicationInstance.start()));
    })
    .catch(error => {
      console.error("游戏启动失败:", error);
    });
}

// 根据平台选择启动方式
if ("android" === wx.getSystemInfoSync().platform.toLocaleLowerCase()) {
  GameGlobal.requestAnimationFrame(initGame);
} else {
  initGame();
}