import React from 'react'
import {
  observer
} from 'mobx-react-lite'

import s from './index.scss'

const DayOneViewer:React.SFC = observer(() => {

  return (
    <div
      className={s.container}
    >
      Hello
    </div>
  )
})

export default DayOneViewer
