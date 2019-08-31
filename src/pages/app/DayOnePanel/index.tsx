import React from 'react'

import s from './index.scss'

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

const DayOnePanel: React.SFC = () => {
  return (
    <div className={s.container}>
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
  )
}

export default DayOnePanel
