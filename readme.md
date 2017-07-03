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

### 4. 网络请求

```
GET（SELECT）：从服务器取出资源（一项或多项）。
POST（CREATE）：在服务器新建一个资源。
PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
DELETE（DELETE）：从服务器删除资源。
```

### 5. 状态吗

```
200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。
201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
204 NO CONTENT - [DELETE]：用户删除数据成功。
400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。
401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功
```

### 6. 返回结果

> 示例

```
GET /collection：返回资源对象的列表（数组）
GET /collection/resource：返回单个资源对象
POST /collection：返回新生成的资源对象
PUT /collection/resource：返回完整的资源对象
PATCH /collection/resource：返回完整的资源对象
DELETE /collection/resource：返回一个空文档
```

```json
{
  error: 'invalid auth',
  message: '访问错误了',
  data: {}
}
```

>原则: 在`RESTful`架构中，每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的"集合"（collection），所以API中的名词也应该使用复数。