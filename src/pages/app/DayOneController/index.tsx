import React from 'react'
import {
  observer
} from 'mobx-react-lite'

import useGlobalStyleStore, {
  ViewMode
} from '../../../store/useGlobalStyleStore'

import s from './index.scss'

const DayOneController: React.SFC = observer(() => {
   // 引入全局样式
   const {
    entryViewMode,
    switchEntryViewMode,
    switchLeftControlWidth
  } = useGlobalStyleStore()
  // 改变 entrymode
  const handleViewModeChange = (mode: number) => {
    switchEntryViewMode(mode)
  }
  // 点击切换视图
  const handleSwitchPanelClick = () => {
    switchLeftControlWidth()
  }

  return (
    <React.Fragment>
      <div className={s.appDragTitle} />
      <div className={s.container}>
        <div className={s.control}>
          <div className={s.toolBar}>
            <span onClick={handleSwitchPanelClick}>
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
              onClick={handleViewModeChange.bind(null, ViewMode.List)}
              style={{
                backgroundColor: entryViewMode === ViewMode.List ? '#686868' : ''
              }}
            >
              <i
                className={entryViewMode === ViewMode.List ? s.iconDetailSelected : s.iconDetail}
              />
            </span>
            <span
              onClick={handleViewModeChange.bind(null, ViewMode.Block)}
              style={{
                backgroundColor: entryViewMode === ViewMode.Block ? '#686868' : ''
              }}
            >
              <i
                className={entryViewMode === ViewMode.Block ? s.iconBlockSelected : s.iconBlock}
              />
            </span>
            <span
              onClick={handleViewModeChange.bind(null, ViewMode.Map)}
              style={{
                backgroundColor: entryViewMode === ViewMode.Map ? '#686868' : ''
              }}
            >
              <i
                className={entryViewMode === ViewMode.Map ? s.iconMapSelected : s.iconMap}
              />
            </span>
            <span
              onClick={handleViewModeChange.bind(null, ViewMode.Calendar)}
              style={{
                backgroundColor: entryViewMode === ViewMode.Calendar ? '#686868' : ''
              }}
            >
              <i
                className={
                  entryViewMode === ViewMode.Calendar ? s.iconCanlendarSelected : s.iconCanlendar
                }
              />
            </span>
          </div>
        </div>
        <div className={s.addnew}>
            <span><i className={s.iconAdd}/></span>
        </div>
      </div>
    </React.Fragment>
  )
})

export default DayOneController
