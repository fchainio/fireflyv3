
'use strict';
const path = require('path');
const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain, ipcRenderer, nativeImage, Tray} = electron;

const winURL = process.env.NODE_ENV === 'development'
? `http://localhost:3000`
: `file://${__dirname}/index.html`

const isDevelopment = process.env.NODE_ENV === 'development';
var mainWnd = null;

function createMainWnd() {
  if (process.platform === 'darwin') {
    const template = [
      {
        label: "Application",
        submenu: [
          { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
        ]
      }, 
      {
        label: "Edit",
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          { role: 'pasteandmatchstyle' },
          { role: 'delete' },
          { role: 'selectall' }
        ]
      }
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  } else {
    Menu.setApplicationMenu(null);
  }
    mainWnd = new BrowserWindow({
      height: 768,
      useContentSize: true,
      width: 1024,
      fullscreen: false,
      fullscreenable: true,
      backgroundColor: '#212122',
      show: true
    });

    if (isDevelopment) {
        mainWnd.webContents.openDevTools();
    }

    mainWnd.loadURL(winURL);

    mainWnd.on('closed', () => {
       mainWnd = null;
    });
    // createTray();
}
// let tray;
// function createTray(){
//   // tray = new Tray('./icon.png');//系统托盘图标
//    // tray = new Tray(path.join(__dirname, '../build/icons/icon.png'))
//    let image = nativeImage.createFromPath(path.join(__static, 'tray.png'))
//    tray = new Tray(image);
//      const contextMenu = Menu.buildFromTemplate([ // 菜单项
//        {label: 'Show', type: 'radio', click: () => {mainWnd.show()}},
//        {label: 'Hide', type: 'radio', click: () => {mainWnd.hide()}},
//        {label: 'Exit', type: 'normal', click: () => {app.quit()}},
//      ])
//      tray.setToolTip('value network in hand') // 鼠标放上时候的提示
//      tray.setContextMenu(contextMenu) // 应用菜单项
//  }

app.on('ready', createMainWnd);

app.on('window-all-closed', () => {
    app.quit()
});
//小化
ipcMain.on('hide-window', () => {
  mainWnd.minimize();
});
//最大化
ipcMain.on('show-window', () => {
  mainWnd.maximize();
});
//还原
ipcMain.on('orignal-window', () => {
  mainWnd.unmaximize();
});