import React , { useRef } from 'react'

import {
  useLocalStore
} from 'mobx-react-lite'

// 创建全局样式相关的 store
const createStyleStore = () => ({
  leftControlWidth: 190, // 左区控制长度px
  mindControlWidth: 300, // 中区控制长度px
  rightControlWidth: 500, // 右区控制长度px
  setLeftControlWidth(width: number) {
    const diffWidth = width - this.leftControlWidth
    // 更新
    this.rightControlWidth += -diffWidth
    this.leftControlWidth = width
  },
  setMiddleControlWidth(width: number) {
    const diffWidth = width - this.mindControlWidth
    this.rightControlWidth += -diffWidth
    this.leftControlWidth = this.leftControlWidth
    this.mindControlWidth = width
  }
})
// 类型
type TStyleStore = ReturnType<typeof createStyleStore>

// 创建 context
const StyleStoreContext = React.createContext<TStyleStore | null>(null)

// 创建 provider， 通过 React.Context 注入
const StyleStoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStyleStore)
  return (
    <StyleStoreContext.Provider value={store}>
      {children}
    </StyleStoreContext.Provider>
  )
}

export {
  StyleStoreProvider,
  StyleStoreContext
}
