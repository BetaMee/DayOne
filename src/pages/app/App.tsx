import React from 'react'

import DayOneController from './DayOneController'
import DayOneEntry from './DayOneEntry'
import DayOnePanel from './DayOnePanel'
import DayOneViewer from './DayOneViewer'

import s from './app.scss'
import '../../assets/styles/global.scss'

import {
  StyleStoreProvider
} from '../../store/useGlobalStyleStore'

const DayOneApp: React.SFC = () => {
  return (
    <StyleStoreProvider>
      <div className={s.container}>
        <DayOneController />
        <div className={s.main}>
          <DayOnePanel />
          <DayOneEntry />
          <DayOneViewer />
        </div>
      </div>
    </StyleStoreProvider>
  )
}

export default DayOneApp
