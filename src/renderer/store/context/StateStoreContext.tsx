import React from 'react'

import {
  useLocalStore
} from 'mobx-react-lite'

import request from '@common/request'

// 创建全局数据相关的 store
const createStateStore = () => ({
  viewstate: [],
  // 从外部磁盘文件中初始化数据
  async initDayOneFromDist() {
    try {
      const data =  await request.loadAllEntries()
      // TODO 进行转换
      this.viewstate = []
    } catch (e) {

    }
  },
  // 新增 DayOne Entry
  addDayOneEntry() {

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
// 类型
type TStateStore = ReturnType<typeof createStateStore>

// 创建 context
const StateStoreContext = React.createContext<TStateStore | null>(null)

// 创建 provider， 通过 React.Context 注入
const StateStoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore<TStateStore>(createStateStore)
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
