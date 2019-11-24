import {
  ipcRenderer
} from 'electron'

import {
  LOAD_ALL_ENTRIES_FROM_DIST,
  CREATE_NEW_FILE,
  UPDATE_FILE_BY_Id
} from '../../config/const'

import {
  IDayOneSourceObject
} from '@interfaces/IStore'

const loadAllEntries = async () => {
  try {
    const data: Array<IDayOneSourceObject> = await ipcRenderer.invoke(LOAD_ALL_ENTRIES_FROM_DIST)
    return data
  } catch (e) {
    return new Error('loadAllEntries error')
  }
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
