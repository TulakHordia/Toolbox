const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  runPowerShell: (script) => ipcRenderer.invoke('run-powershell', script)
});