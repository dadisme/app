# app
about management for circle

## 建立一个vue-cli的模板，用vant组件完成app
npm install --global vue-cli
vue init webpack '项目名称'
cd '项目名称'
npm install
npm i vant -S
npm run dev

### 引入scss
npm install stylus -D 
npm install sass-loader@7.3.1 --save-dev
npm install node-sass --sava-dev
lang = 'scss'


## 建立基本的导航路由tab在component文件中，引入app.vue中

## 各页面传递参数到url
this.$route.push({name:'哪个页面',params:{传的参数内容 key:value}})
接收参数:this.$router里面查看

## 使用express
npm install -g express-generator  相当于脚手架
npm install -g express 
express server 生成一个express的目录结构：
bin: 用于应用启动，/public: 静态资源目录，/routes：可以认为是controller（控制器）目录，/views: jade模板目录，可以认为是view(视图)目录，app.js 程序main文件
启动：npm start

## 连接数据库mysql
引入mysql： npm install mysql --save
在server/db/connect.js引入mysql

## 引入vuex
npm install vuex --save
新建store文件夹，里面新建index.js：引入vue和vuex，使用vuex，导出store
在main.js引用store
使用state存储数据，this.$store.state来获取

## 设置拦截器http.js
npm install --save axios进行安装
在想要用的地方引入axios
统一设置了post和get的格式
设置环境的切换：axios.defaults.baseURL = 'http://localhost:3000';
统一设置status为200的状态下走resolve和非200的状态走reject

## 过滤器util.js
username，userpwd，useremail，usertele，useraddress的规定格式等

## 在api里面引用post和get的http.js
放入了各后端的接口地址
