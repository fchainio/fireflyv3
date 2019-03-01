## 部署说明

项目依赖于`react-native` `react-native-web` `react-native-electron` `native-base` `redux` `react-navigation` `electron`等

1. nodejs，从[nodejs官方网站](https://www.nodejs.org)下载相应的LTS版进行安装
2. 可以使用默认的npm，也可以使用[yarn](https://yarnpkg.com)
3. 安装react-native-cli
```javascript
npm install -g react-native-cli
或
yarn global react-native-cli
```
4. 克隆当前项目[fireflyv3](https://github.com/fchainio/fireflyv3)
```
git clone https://github.com/fchainio/fireflyv3.git
```
5. 在fireflyv3目录中执行依赖安装
```
npm install
或
yarn
```
6. 执行相应的命令
```
yarn web 或 npm run web #运行web环境，即脱离electron的桌面端,暂时没有用处
yarn desktop 或 npm run desktop #运行桌面环境，采用electron
yarn android 或 npm run android #运行android
yarn ios 或 npm run ios #运行ios
yarn desktop:win64 或 npm run desktop:win64 #打包win64的可运行程序
```
