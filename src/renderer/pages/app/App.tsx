import React, { useEffect } from 'react'

import DayOneController from './DayOneController'
import DayOneEntry from './DayOneEntry'
import DayOnePanel from './DayOnePanel'
import DayOneViewer from './DayOneViewer'

import s from './app.scss'
import '../../assets/styles/global.scss'

import useGlobalStateStore from '@store/useGlobalStateStore'

import {
  observer
} from 'mobx-react-lite'

const DayOneApp: React.SFC = observer(() => {
  const {
    initDayOneFromDist
  } = useGlobalStateStore()

  useEffect(() => {
    initDayOneFromDist()
  }, [])

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
})

export default DayOneApp
