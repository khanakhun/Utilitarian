const { contextBridge } = require("electron");

// Example of exposing a safe API to renderer process
contextBridge.exposeInMainWorld("electronAPI", {
    // Add any safe methods you want to expose from main process
    // For example:
    // someMethod: () => ipcRenderer.invoke('some-method')
});
