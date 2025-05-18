import { app, BrowserWindow } from 'electron';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const isMac = process.platform === 'darwin';

const isDev = process.env.NODE_ENV !== 'production'

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'PER Grader',
        width: isDev ? 1000 : 500,
        height: 800,

        // The lines below solved the issue
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    // open dev tools if in dev
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'))
}

app.whenReady().then(() => {
    createMainWindow();

    // Open a window if none are open (macOS)
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (!isMac) app.quit();
});
