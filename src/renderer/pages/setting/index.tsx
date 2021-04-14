import React from 'react'

import s from './index.scss'
import '../../assets/styles/global.scss'

const Setting:React.SFC = () => {
  return (
    <div className={s.container}>
      <div className={s.appDragTitle} />
      <div className={s.pannel}>
        <div className={s.item} >
          <div className={s.icon}>
            <i className={s.iconSetting} />
          </div>
          <div className={s.txt}>常规</div>
        </div>
        <div className={s.item} >
          <div className={s.icon}>
            <i className={s.iconSetting} />
          </div>
          <div className={s.txt}>同步</div>
        </div>
        <div className={s.item} >
          <div className={s.icon}>
            <i className={s.iconSetting} />
          </div>
          <div className={s.txt}>日记</div>
        </div>
        <div className={s.item} >
          <div className={s.icon}>
            <i className={s.iconSetting} />
          </div>
          <div className={s.txt}>外观</div>
        </div>
      </div>
    </div>
  )
}

export default Setting
