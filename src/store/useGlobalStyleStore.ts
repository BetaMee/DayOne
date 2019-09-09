import {
  useContext
} from 'react'

import {
  StyleStoreContext,
  StyleStoreProvider
} from './context/StyleStoreContext'

// 创建 HOOK
const useGlobalStyleStore = () => {
  const store = useContext(StyleStoreContext)
  if (!store) {
    throw new Error('You have forgot to use StyleStoreProvider, shame on you!')
  }
  return store
}

export default useGlobalStyleStore

export {
  StyleStoreContext,
  StyleStoreProvider
}
