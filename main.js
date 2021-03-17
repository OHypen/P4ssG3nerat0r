const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () =>{
    mainWindow = new BrowserWindow({width: 800, height: 400, resizable: false, icon: __dirname + "/icon.png"});

    mainWindow.setMenuBarVisibility(false);

    mainWindow.loadURL(`file://${__dirname}/index.html`)
});