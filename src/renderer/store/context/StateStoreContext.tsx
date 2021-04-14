import React from 'react'
import {
  useLocalStore
} from 'mobx-react-lite'

import {
  IStateStore,
  IDayOneSourceObject,
  TEntryData
} from '@interfaces/IStore'

import request from '@common/request'

// 创建全局数据相关的 store
const createStateStore = (): IStateStore => ({
  // 全局数据
  viewstate: [],
  // 当前的 metaid
  currentMetaId: '',
  // 当前的 entryid
  selectedEntryId: '',
  // Panel 数据
  get panelViewState() {
    return this.viewstate.map(state => {
      return {
        name: state.metadata.name,
        count: state.metadata.count,
        metaid: state.metadata.metaid,
        color: state.metadata.color,
        isSelected: state.metadata.metaid === this.currentMetaId
      }
    })
  },
  // listmode 数据
  get listViewData() {
    let listEntries: TEntryData

    if (this.currentMetaId === '') {
      listEntries = this.viewstate.map(state => {
        return state.entries.map(entry => {
          entry.metadata = state.metadata
          return entry
        })
      }).reduce((total, entry) => total.concat(entry), [])
    } else {
      const currentState = this.viewstate
      .find(state => state.metadata.metaid === this.currentMetaId)
      if (currentState) {
        listEntries = currentState.entries.map(entry => {
          entry.metadata = currentState.metadata
          return entry
        })
      } else {
        listEntries = []
      }
    }

    return listEntries.map(entry => {
      if (entry.uuid === this.selectedEntryId) {
        entry.isSelected = true
      } else {
        entry.isSelected = false
      }
      return entry
    })
  },
  // 点击选择某一个日记本
  selectDayOneByMetaId(metaid: string) {
    this.currentMetaId = metaid
  },
  selectDayOneEntryById(entryId: string) {
    this.selectedEntryId = entryId
  },
  // 从外部磁盘文件中初始化数据
  async initDayOneFromDist() {
    try {
      this.viewstate = await request.loadAllEntries()
    } catch (e) {

    }
  },
  // 新增 DayOne Entry
  addDayOneEntry() {

  },
  addDayOneEntrySave() {

  },
  // 删除 DayOne Entry
  removeDayOneEntryById() {

  },
  // 更新一个 DayOne Entry
  editDayOneEntryById() {

  },
  // 查找一个 DayOne Entry
  findDayOneEntryById() {

  },
  // 新增 DayOne Journal
  addDayOneJournal() {

  },
  // 删除一个 DayOne Journal
  removeDayOneJournalById() {

  },
  // 更新一个 DayOne Journal
  editDayOneJournalById() {

  },
  // 查找一个 DayOne Journal
  findDayOneJournalById() {

  }
})

// 创建 context
const StateStoreContext = React.createContext<IStateStore | null>(null)

// 创建 provider， 通过 React.Context 注入
const StateStoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore<IStateStore>(createStateStore)
  return (
    <StateStoreContext.Provider value={store}>
      {children}
    </StateStoreContext.Provider>
  )
}

export {
  StateStoreProvider,
  StateStoreContext
}
