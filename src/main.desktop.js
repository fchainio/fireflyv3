
'use strict';

const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain, ipcRenderer} = electron;

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
}


app.on('ready', createMainWnd);

app.on('window-all-closed', () => {
    app.quit();
});