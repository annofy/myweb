##v3

        博客之前一直想要坐起来，一直没有好好做，不管是UI还是设计，还是模块选择都挺随意，
    不适合长期开发，以及功能扩展导致很多问题。从3.0.1版本开始，重新设计，然后选用长期可
    维护的模块进行个人网站开发。

### 1. 运行
    
    npm install
    npm start
    
### 2. 文件目录说明

    |- app  服务器目录
    |———— logs 日志记录
    |———— models 数据库模型
    |———— schemas 数据库文档
    |———— routes 服务器路由
    |———— views 渲染模板
    |———————— admin 管理员模板
    |—————————————— common 公共模板
    |———————— public 公共模板
    |—————————————— common 公共模板
    |———— utils 工具包
    |———— app.js 入口js文件
    |- config 配置文件
    |- static 静态资源
    |———————— html html网页
    |———————— images 图片
    |———————— scripts js脚本
    |———————— libs 导入前端库
    |———————— uploads 上传的图片目录
    |———————— styles 样式表目录
    
### 3. 选用模块基本介绍
    
> bower
    
    semantic-ui 全局的UI库
    
> npm 

```json
{
    "body-parser": "^1.17.2",
    "cheerio": "^1.0.0-rc.1",
    "config": "^1.26.1",
    "express": "^4.15.3",
    "formidable": "^1.1.1",
    "jquery": "^3.2.1",
    "marked": "^0.3.6",
    "moment": "^2.18.1",
    "mongoose": "^4.10.4",
    "morgan": "^1.8.2",
    "node-schedule": "^1.2.3",
    "nodemailer": "^4.0.1",
    "pug": "^2.0.0-rc.2",
    "qiniu": "^6.1.13",
    "quill": "^1.2.5",
    "request": "^2.81.0",
    "request-promise-native": "^1.0.4"
}  
```

```json
 {
    "css-loader": "^0.28.4",
    "file-loader": "^0.11.1",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "less": "^2.7.2",
    "less-loader": "^4.0.4",
    "mocha": "^3.4.2",
    "pm2": "^2.4.6",
    "pug-loader": "^2.3.0",
    "reload": "^1.1.5",
    "style-loader": "^0.18.1",
    "supervisor": "^0.12.0",
    "url-loader": "^0.5.8",
    "watch": "^1.0.2",
    "webpack": "^2.6.1",
    "webpack-dev-middleware": "^1.10.2",
    "webpack-hot-middleware": "^2.18.0",
    "webpack-visualizer-plugin": "^0.1.11"
}
```
    
