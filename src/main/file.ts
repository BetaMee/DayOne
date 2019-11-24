import { ipcMain } from 'electron'
import { promises as fs } from 'fs'
import {
  LOAD_ALL_ENTRIES_FROM_DIST
} from '../config/const'

import {
  IDayOneSourceObject
} from '@interfaces/IStore'

const path = '/Users/gongxq/Library/Mobile\ Documents/com\~apple\~CloudDocs/DayOne/test.json'

const dayOnePath = '/Users/gongxq/Library/Mobile\ Documents/com\~apple\~CloudDocs/DayOne/'

function startFileServer() {
  // 监听取出所有文件数据事件
  ipcMain.handle(LOAD_ALL_ENTRIES_FROM_DIST, async (event, arg) => {
    try {
      // 读取文件夹下面的所有文件
      const dir = await fs.readdir(dayOnePath, {
        withFileTypes: true
      })
      const allEntriesPromise =  dir
        .filter(dirent => dirent.isFile() && /.json$/.test(dirent.name))
        .map(async (dirent) => {
            try {
              const data = await fs.readFile(`${dayOnePath}${dirent.name}`, 'utf8')
              return JSON.parse(data)
            } catch (e) {
              return new Error('load DayOne Files error')
            }
        })
      // 最终获取的所有实体数据组合
      const allEntries: Array<IDayOneSourceObject> = await Promise.all(allEntriesPromise)

      return allEntries
    } catch (e) {
      return new Error('lead DayOne dirs error')
    }
  })
  // 监听取出对应文件数据事件
  // ipcMain.handle()
}

export default startFileServer
