import React, { useRef, useEffect } from 'react'
import {
  observer
} from 'mobx-react-lite'

import ResizeHandler from '../common/ResizeHandler'

import s from './index.scss'

import useGlobalStyleStore from '../../../store/useGlobalStyleStore'
import {
  IDayOnePanelProp
} from '../../../interfaces/IComponents'

const mockData = [
  {
    id: '1',
    name: '不必在乎我是谁',
    count: 15
  },
  {
    id: '2',
    name: '贝加尔湖畔',
    count: 35
  },
  {
    id: '3',
    name: 'Five Hundred Miles',
    count: 75
  }
]

const DayOnePanel: React.SFC<IDayOnePanelProp> = observer(() => {
  // 引入全局样式
  const {
    leftControlWidth,
    setLeftControlWidth
  } = useGlobalStyleStore()
  // 创建 ref
  const leftRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>
  // 动态样式
  const dynamicStyle = {
    width: `${leftControlWidth}px`
  }
  // 设置回调函数
  const handleControlWidthChangeCb = (currentX: number):void => {
    if (currentX < 150) {
      setLeftControlWidth(0)
    }
  }
  return (
    <React.Fragment>
      <div
        className={s.container}
        style={dynamicStyle}
        ref={leftRef}
      >
        <div className={s.entrylist}>
          <div className={s.entryitem}>全部条目</div>
          {mockData.map(item => (
            <div key={item.id} className={s.entryitem}>
              <span className={s.name}>{item.name}</span>
              <span className={s.count}>{item.count}</span>
            </div>
          ))}
        </div>
        <div className={s.control}>
          <span>New Journal +</span>
          <span>Settings</span>
        </div>
        <div className={s.status}>
          <span>checked</span>
        </div>
      </div>
      {/** 用于调整宽度 */}
      <ResizeHandler
         eleRef={leftRef}
         initWidth={leftControlWidth}
         handleControlWidthChange={setLeftControlWidth}
         handleControlWidthChangeCb={handleControlWidthChangeCb}
      />
    </React.Fragment>
  )
})

export default DayOnePanel
