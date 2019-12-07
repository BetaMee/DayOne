import React from 'react'
import ReactDOM from 'react-dom'

import App from '../pages/app/App'

import {
  StyleStoreProvider
} from '@store/useGlobalStyleStore'

import {
  StateStoreProvider
} from '@store/useGlobalStateStore'

ReactDOM.render(
  (
    <StateStoreProvider>
      <StyleStoreProvider>
        <App />
      </StyleStoreProvider>
    </StateStoreProvider>
  ),
  document.getElementById('root') as HTMLElement
)
