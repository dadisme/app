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