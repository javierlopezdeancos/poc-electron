const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

const openWindow = (filename) => {
  mainWindow.loadURL(
    url.format({
      pathname: path.join( __dirname, `${filename}.html`),
      protocol: 'file',
      slashes: true,
    })
  );

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
};

const initApp = () => {
  app.on('ready', () => {
    mainWindow = new BrowserWindow({
      show: false,
    });

    mainWindow.on('ready-to-show', () => {
      mainWindow.show();
    });

    openWindow('index');
  })

  app.on('window-all-closed', () => {
    app.quit();
  })
}

initApp();

module.exports = {
  openWindow,
}