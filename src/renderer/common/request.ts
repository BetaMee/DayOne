import {
  ipcRenderer
} from 'electron'
import path from 'path'
import os from 'os'
import FileDataBase from '@gongxq/fdb'

import {
  LOAD_ALL_ENTRIES_FROM_DIST,
  CREATE_NEW_FILE,
  UPDATE_FILE_BY_Id
} from '../../config/const'

import {
  IDayOneSourceObject
} from '@interfaces/IStore'

const dbpath = path.resolve(`${os.homedir()}/Library/Mobile\ Documents/com\~apple\~CloudDocs/DayOne`)

const fileDataBase = new FileDataBase(dbpath)
// 初始化
fileDataBase.initSync()

const loadAllEntries = async () => {
  const allFileData = await fileDataBase.all<IDayOneSourceObject>()

  return allFileData.map(data => {
      if (data) {
        return data._fmData
      }
  }) as IDayOneSourceObject[]
}

const createNewFile = async (fileName: string) => {

}

const updateFileById = async (fileId: string) => {

}

export default {
  loadAllEntries,
  createNewFile,
  updateFileById
}
