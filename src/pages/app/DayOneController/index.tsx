import React from 'react'
import {
  observer
} from 'mobx-react-lite'

import useGlobalStyleStore from '../../../store/useGlobalStyleStore'

import s from './index.scss'

const DayOneController: React.SFC = observer(() => {
   // 引入全局样式
   const {
    entryViewMode,
    switchEntryViewMode
  } = useGlobalStyleStore()

  return (
    <div className={s.container}>
      <div className={s.control}>
        <div className={s.toolBar}>
          <span>
            <i className={s.iconMenuSwitch}/>
          </span>
          <span>
            <i className={s.iconFilter}/>
          </span>
          <span>
            <i className={s.iconCheck}/>
          </span>
        </div>
        <div className={s.viewBar}>
          <span
            onClick={switchEntryViewMode.bind(null, 0)}
            style={{
              backgroundColor: entryViewMode === 0 ? '#686868' : ''
            }}
          >
            <i
              className={entryViewMode === 0 ? s.iconDetailSelected : s.iconDetail}
            />
          </span>
          <span
            onClick={switchEntryViewMode.bind(null, 1)}
            style={{
              backgroundColor: entryViewMode === 1 ? '#686868' : ''
            }}
          >
            <i
              className={entryViewMode === 1 ? s.iconBlockSelected : s.iconBlock}
            />
          </span>
          <span
            onClick={switchEntryViewMode.bind(null, 2)}
            style={{
              backgroundColor: entryViewMode === 2 ? '#686868' : ''
            }}
          >
            <i
              className={entryViewMode === 2 ? s.iconMapSelected : s.iconMap}
            />
          </span>
          <span
            onClick={switchEntryViewMode.bind(null, 3)}
            style={{
              backgroundColor: entryViewMode === 3 ? '#686868' : ''
            }}
          >
            <i
              className={
                entryViewMode === 3 ? s.iconCanlendarSelected : s.iconCanlendar
              }
            />
          </span>
        </div>
      </div>
      <div className={s.addnew}>
          <span><i className={s.iconAdd}/></span>
      </div>
    </div>
  )
})

export default DayOneController
