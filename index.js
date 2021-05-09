const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () =>{
    mainWindow = new BrowserWindow({
        width: 450,
        height: 250,
        resizable: false,

    });
    mainWindow.setMenuBarVisibility(false);
    

    mainWindow.loadURL(`file://${__dirname}/index.html`)
});