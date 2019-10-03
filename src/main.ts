import {
  app,
  BrowserWindow
} from 'electron'

let mainWindow: BrowserWindow | null

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    height: 650,
    width: 1000,
    minWidth: 500,
    minHeight: 400,
    maxHeight: 750,
    maxWidth: 1200,
    titleBarStyle: 'hidden',
    title: 'DayOne',
    webPreferences: {
      nodeIntegration: true
    }
  })
  // 加载入口文件
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  // 打开调试工具
  mainWindow.webContents.openDevTools()
  // 当触发关闭事件，则将 mainWindow 置为 null
  mainWindow.on('closed', (): void => {
    mainWindow = null
  })
}

// 监听应用程序对象是否初始化完成，初始化完成之后即可创建浏览器窗口
app.on('ready', createWindow)

// 监听应用程序对象中的所有浏览器窗口对象是否全部被关闭，如果全部被关闭，则退出整个应用程序。该
app.on('window-all-closed', (): void => {
   // 判断当前操作系统是否是window系统，因为这个事件只作用在window系统中
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 监听应用程序图标被通过点或者没有任何浏览器窗口显示在桌面上，那我们应该重新创建并打开浏览器窗口，避免Mac OS X系统回收或者销毁浏览器窗口
app.on('activate', (): void => {
  if (mainWindow === null) {
    createWindow()
  }
})
