import React, { useRef, useEffect } from 'react'
import {
  observer
} from 'mobx-react-lite'

import ResizeHandler from '../common/ResizeHandler'

import s from './index.scss'

import useGlobalStyleStore from '@store/useGlobalStyleStore'
import useGlobalStateStore from '@store/useGlobalStateStore'

import {
  openSettingWindow
} from '@common/window'

const DayOnePanel: React.SFC = observer(() => {
  // 引入全局样式
  const {
    leftControlWidth,
    setLeftControlWidth
  } = useGlobalStyleStore()
  // 引入全局状态数据
  const {
    panelViewState,
    selectDayOneByMetaId
  } = useGlobalStateStore()
  console.log(panelViewState)
  // 创建 ref
  const leftRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>
  // 动态样式
  const dynamicStyle = {
    width: `${leftControlWidth}px`,
    display: `${leftControlWidth === 0 ? 'none': 'block'}`
  }
  // 设置回调函数
  const handleControlWidthChangeCb = (currentX: number):void => {
    if (currentX < 150) {
      setLeftControlWidth(0)
    }
  }
  // 设置点击日记事件
  const handleItemClick = (metaid: string) => {
    selectDayOneByMetaId(metaid)
  }
  // TODO 设置点击新建日记事件
  const handleNewJournal = () => {
  }
  const handleOpenSetting = () => {
    openSettingWindow()
  }
  return (
    <React.Fragment>
      <div
        className={s.container}
        style={dynamicStyle}
        ref={leftRef}
      >
        <div className={s.entrylist}>
          <div
            className={s.entryitem}
            onClick={handleItemClick.bind(null, '')}
          >
            全部条目
          </div>
          {panelViewState.map(item => (
            <div
              key={item.metaid}
              className={s.entryitem}
              onClick={handleItemClick.bind(null, item.metaid)}
              style={{
                color:  item.isSelected ? '#FFFFFF' : item.color,
                backgroundColor: item.isSelected ? item.color : ''
              }}
            >
              <span className={s.name}>{item.name}</span>
              <span className={s.count}>{item.count}</span>
            </div>
          ))}
        </div>
        <div className={s.control}>
          <span
            onClick={handleNewJournal}
          >
            New Journal +
          </span>
          <span
            onClick={handleOpenSetting}
          >
            Settings
          </span>
        </div>
        <div className={s.status}>
          <span>checked</span>
        </div>
      </div>
      {/** 用于调整宽度 */}
      {
        leftControlWidth !== 0 && (
          <ResizeHandler
            eleRef={leftRef}
            initWidth={leftControlWidth}
            handleControlWidthChange={setLeftControlWidth}
            handleControlWidthChangeCb={handleControlWidthChangeCb}
          />
        )
      }
    </React.Fragment>
  )
})

export default DayOnePanel
