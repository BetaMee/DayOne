import React, { useRef } from 'react'
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
} from '../../../store/useGlobalStyleStore'

import s from './index.scss'

const mockData = [
  {
    year:  2017, // 年
    month: 3, // 月
    entryList: [
      {
        week: 0, // 周日
        time: '12:09', // 时间
        content: 'Test Content' // 内容
      },
      {
        week: 1, // 周一
        time: '15:09', // 时间
        content: 'Test 范德萨发生进度付款了' // 内容
      }
    ] // 数据列表
  },
  {
    year:  2017, // 年
    month: 4, // 月
    entryList: [
      {
        week: 0, // 周日
        time: '15:09', // 时间
        content: '荒野大求生' // 内容
      }
    ] // 数据列表
  },
  {
    year:  2018, // 年
    month: 1, // 月
    week: 0, // 周日
    time: '12:09', // 时间
    entryList: [
      {
        week: 3, // 周日
        time: '15:09', // 时间
        content: 'dsaf' // 内容
      }
    ] // 数据列表
  }
]

const DayOneEntry:React.SFC = observer(() => {
  const {
    mindControlWidth,
    setMiddleControlWidth,
    entryViewMode
  } = useGlobalStyleStore()
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
            <ListViewMode />
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
