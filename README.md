# ngchat.seasalt.ai html

## Node 版本 ##
12.18.3 以上

## Script
### Project setup
``` shell
npm i
```

### Compiles and hot-reloads for development
``` shell
npm start
```

### Compiles and minifies for production
``` shell
npm run build
```

## 開發工具 ##
Visual Studio Code

## Visual Studio Code 安裝擴充功能  ##
+ ESLint
+ Prettier
+ stylelint

## 專案結構
+ src 資料夾 - 原始程式碼
+ src/assets/images 資料夾 - 放置 scss 內使用到的圖片
+ src/assets/scss 資料夾 - 放置 scss 檔案
+ static 資料夾 - 放置網頁與網頁上使用到的靜態檔案(圖片、js、css…等)
+ build 資料夾 - 執行 npm run build 打包後，檔案輸出的資料夾

## 檔案使用方式
1. 執行 npm run build 後會產生，/css/app.css、/css/app.css.map、/js/app.js、/js/app.js.map 為主要的樣式與 js。
2. 上述的 app.js 包含 jquery 、 bootstrap 與 /src/index.js 內的程式，若使用 app.js 不需再載入 jquery 與 bootstrap 之 js。
3. 上述的 app.css 包含 bootstrap 樣式。
4. 建立新頁面時，可於 static 建立新的 html，參照目前 static/index.html 內的設定，可自行調整要載入的 css 與 js。
