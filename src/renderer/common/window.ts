import { remote, BrowserWindow } from 'electron'

const remoteBrowserWindow = remote.BrowserWindow

// 设置窗口句柄
let settingWin: BrowserWindow | null

export const openSettingWindow = () => {
  if (settingWin) {
    return
  }
  settingWin = new remoteBrowserWindow({
    width: 500,
    height: 350,
    titleBarStyle: 'hidden',
    resizable: false,
    alwaysOnTop: true
  })

  settingWin.on('close', () => {
    settingWin = null
  })
  settingWin.webContents.openDevTools()
  settingWin.loadURL(SETTING_WINDOW_WEBPACK_ENTRY)
  settingWin.show()
}
