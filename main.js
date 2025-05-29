const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

// Run PowerShell scripts
ipcMain.handle('run-powershell', async (event, script) => {
  return new Promise((resolve, reject) => {
    exec(`pwsh -Command "${script.replace(/"/g, '\\"')}"`, (error, stdout, stderr) => {
      if (error) {
        resolve(stderr || error.message);
      } else {
        resolve(stdout);
      }
    });
  });
});