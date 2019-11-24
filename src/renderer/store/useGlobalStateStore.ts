import {
  useContext
} from 'react'

import {
  StateStoreContext,
  StateStoreProvider
} from './context/StateStoreContext'

// 创建 HOOK
const useGlobalStateStore = () => {
  const store = useContext(StateStoreContext)
  if (!store) {
    throw new Error('You have forgot to use StateStoreProvider, shame on you!')
  }
  return store
}

export default useGlobalStateStore

export {
  StateStoreContext,
  StateStoreProvider
}
