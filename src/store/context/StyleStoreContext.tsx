import React from 'react'

import {
  useLocalStore
} from 'mobx-react-lite'

enum ViewMode {
  List = 0,
  Block = 1,
  Map = 2,
  Calendar = 3
}

// 右边视图宽度
const viewerWidth = 200

// 创建全局样式相关的 store
const createStyleStore = () => ({
  // 控制拖拽
  cachedleftControlWidth: 190,
  leftControlWidth: 190, // 左区控制长度px
  mindControlWidth: 250, // 中区控制长度px
  setLeftControlWidth(width: number) {
    const innerWidth =  window.innerWidth
    // 不能无限大
    if (width + this.mindControlWidth + 10 + viewerWidth < innerWidth) {
      this.leftControlWidth = width
      this.cachedleftControlWidth = width
    }
  },
  setMiddleControlWidth(width: number) {
    const innerWidth =  window.innerWidth
    if (this.leftControlWidth + 10 + width + viewerWidth < innerWidth) {
      this.mindControlWidth = width >= 240 ? width : 240
    }
  },
  switchLeftControlWidth() {
    if (this.leftControlWidth > 0) {
      this.leftControlWidth = 0
    } else {
      this.leftControlWidth = this.cachedleftControlWidth > 0 ? this.cachedleftControlWidth : 190
    }
  },
  // 控制 DayOneEntry 视图
  entryViewMode: ViewMode.List, // 0 1 2 3
  switchEntryViewMode(mode: number) {
    this.entryViewMode = mode
  }
})
// 类型
type TStyleStore = ReturnType<typeof createStyleStore>

// 创建 context
const StyleStoreContext = React.createContext<TStyleStore | null>(null)

// 创建 provider， 通过 React.Context 注入
const StyleStoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore<TStyleStore>(createStyleStore)
  return (
    <StyleStoreContext.Provider value={store}>
      {children}
    </StyleStoreContext.Provider>
  )
}

export {
  StyleStoreProvider,
  StyleStoreContext,
  ViewMode
}
