/**
 * 模块导入映射配置文件
 * 用于 SystemJS 模块加载器，定义模块的导入路径映射
 * 支持动态模块加载和模块化开发
 */

// 导出模块配置，标记为 ES Module 格式
Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

// 模块导入映射配置
// 定义了模块名称到实际文件路径的映射关系
exports.default = {
  imports: {
    // Cocos 引擎模块映射
    // 当代码中使用 `import * as cc from 'cc'` 时，会加载指定路径的 cc.js 文件
    cc: "./../cocos-js/cc.js"
  }
};