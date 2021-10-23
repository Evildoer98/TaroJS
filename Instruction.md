<!--
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-22 21:45:48
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-23 20:19:40
-->

1. 安装
    1. 使用 npm 安装 CLI
        npm install -g @tarojs/cli
    2. OR 使用 yarn 安装 CLI
        yarn global add @tarojs/cli
    3. OR 安装了 cnpm，使用 cnpm 安装 CLI
        cnpm install -g @tarojs/cli
2. 查看信息
    使用 npm info 查看 taro 版本信息
        npm info @tarojs/cli

3. 项目初始化
    1. 使用命令创建模版项目
        taro init myApp
        npm 5.2+ 也可在不全局安装等情况下使用 npx 创建模版项目
        npx @tarojs/cli init myApp

4. 编译运行
    1. taro 编译 分为 dev 和 build 模式
        1. dev 模式（增加 —— watch 参数）将会监听文件修改
        2. build 模式（去掉 —— watch 参数）将不会监听文件修改，并会对代码进行压缩打包
        3. dev 模式生成的文件较大，设置环境变量 NODE_ENV 为 production 可以开启压缩，方便预览，但编译速度会下降

# 微信小程序
1. 编译命令
    1. yarn
        yarn dev:weapp
        yarn build:weapp
    2. npm script
        npm run dev:weapp
        npm run build:weapp
    3. 仅限全局安装
        taro build --type weapp --watch
        taro build --type weapp
    4. npx 用户
        npx taro build --type weapp --watch
        npx taro build --type weapp
    5. watch 同时开启压缩
        set NODE_ENV=production && taro build --type weapp --watch  // Windows
        NODE_ENV=production taro build --type weapp --watch  // MAC
2. 小程序开发者工具
    * 注意：
        1. 需要设置关闭 ES6 转 ES 功能
        2. 需要设置上传代码时样式自动补全
        3. 需要设置关闭代码压缩上传
        