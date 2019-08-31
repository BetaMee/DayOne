import React from 'react'
import '../../assets/styles/global.scss'

import DayOneController from './DayOneController'
import DayOneEntry from './DayOneEntry'
import DayOnePanel from './DayOnePanel'
import DayOneViewer from './DayOneViewer'

import s from './app.scss'

const DayOneApp: React.SFC = () => {
  return (
    <div className={s.container}>
      <DayOneController />
      <div className={s.main}>
        <DayOnePanel />
        <DayOneEntry />
        <DayOneViewer />
      </div>
    </div>
  )
}

export default DayOneApp
