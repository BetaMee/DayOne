import React, {
  useRef
  // useMemo
} from 'react'
import {
  observer
} from 'mobx-react-lite'

import ResizeHandler from '../common/ResizeHandler'
import ListViewMode from './ListViewMode'
import BlockViewMode from './BlockViewMode'
import MapViewMode from './MapViewMode'
import CalendarViewMode from './CalendarViewMode'

import useGlobalStyleStore, {
  ViewMode
} from '@store/useGlobalStyleStore'

import useGlobalStateStore from '@store/useGlobalStateStore'

import s from './index.scss'

const DayOneEntry:React.SFC = observer(() => {
  // context 中的数据源
  const {
    mindControlWidth,
    setMiddleControlWidth,
    entryViewMode
  } = useGlobalStyleStore()
  const {
    listViewData,
    selectDayOneEntryById
  } = useGlobalStateStore()
  // 创建 ref
  const rightRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>
  // 动态样式
  const dynamicStyle = {
    width: `${mindControlWidth}px`
  }
  return (
    <React.Fragment>
      <div
        className={s.container}
        style={dynamicStyle}
        ref={rightRef}
      >
        {
          entryViewMode === ViewMode.List && (
            <ListViewMode
              listViewData={listViewData}
              selectDayOneEntryById={selectDayOneEntryById}
            />
          )
        }
        {
          entryViewMode === ViewMode.Block && (
            <BlockViewMode />
          )
        }
        {
          entryViewMode === ViewMode.Map && (
            <MapViewMode />
          )
        }
        {
          entryViewMode === ViewMode.Calendar && (
            <CalendarViewMode />
          )
        }
      </div>
      {/** 用于调整宽度 */}
      <ResizeHandler
        eleRef={rightRef}
        initWidth={mindControlWidth}
        handleControlWidthChange={setMiddleControlWidth}
      />
    </React.Fragment>
  )
})

export default DayOneEntry
