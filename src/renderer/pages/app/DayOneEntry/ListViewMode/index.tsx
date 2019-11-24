import React from 'react'

import s from './index.scss'

import {
  IListViewModeProp
} from '@interfaces/IComponents'

// mock
const mockimg = require('../../../../mock/floyd.jpg')

const ListViewMode: React.SFC<IListViewModeProp> = React.memo(({
  viewstate
}) => {
  return (
    <div className={s.container}>
      {viewstate.map(item => {
        return (
          <div key={item.id} className={s.listitem}>
            <div className={s.listdate}>
              {item.year}年{item.month}月
            </div>
            <div className={s.listentry}>
              {
                item.entryList.map(entry => {
                  return (
                    <div key={entry.entryId} className={s.entryitem}>
                      <div className={s.entrydate}>
                        <div className={s.date}>
                          <span className={s.dateweek}>周一</span>
                          <span className={s.dateday}>11</span>
                        </div>
                      </div>
                      <div className={s.entrycontent}>
                        <div className={s.contentpreview}>{entry.content}</div>
                        <div className={s.contentquota}>
                          <span>贝加尔湖畔,</span>
                          GMT 8:00
                        </div>
                      </div>
                      {
                        true && (
                          <div className={s.entryimgview}>
                            <img src={mockimg} alt='dd'/>
                          </div>
                        )
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      })}
    </div>
  )
})

export default ListViewMode
