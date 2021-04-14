import React from 'react'

import s from './index.scss'

import {
  IListViewModeProp
} from '@interfaces/IComponents'

import {
  TEntryData
} from '@interfaces/IStore'


// mock
const mockimg = require('../../../../mock/floyd.jpg')

const week = [
  '周日',
	'周一',
	'周二',
	'周三',
	'周四',
	'周五',
	'周六'
]

// 格式：周 日
const convertWDFormat = (dateString: string) => {
  const date = new Date(dateString)
  return {
    day: date.getDate(),
    week: week[date.getDay()]
  }
}

const convertListViewData = (listViewData: TEntryData) => {
  const dateArr = listViewData
    .map(data => {
      const ydDate = data.creationDate.split(' ')[0].split('-')
      return `${ydDate[0]}-${ydDate[1]}`
    })
  const dateSet = [...new Set(dateArr)]

  return dateSet
    // 降序
    .sort((dateStrA, dateStrB) => {
      const [ yearA, mouthA ] = dateStrA.split('-')
      const [ yearB, mouthB ] = dateStrB.split('-')
      if (parseInt(yearA) > parseInt(yearB)) {
        return -1
      }
      if (parseInt(yearA) === parseInt(yearB)) {
        if (parseInt(mouthA) === parseInt(mouthB)) {
          return -1
        } else {
          return 1
        }
      }
      return 1
    })
    .map(dateStr => {
      const reg = new RegExp(`\^${dateStr}`)
      const filteredViewData = listViewData
        .filter(data => reg.test(data.creationDate))
        .map(data => {
          data.formatedDateObj = convertWDFormat(data.creationDate)
          return data
        })
      const dateArr = dateStr.split('-')
      return {
        displayDate: `${dateArr[0]}年${dateArr[1]}月`,
        viewData: filteredViewData
      }
    })
}

const ListViewMode: React.SFC<IListViewModeProp> = React.memo(({
  listViewData,
  selectDayOneEntryById
}) => {
  const convertedViewData = convertListViewData(listViewData)

  return (
    <div className={s.container}>
      {convertedViewData.map((item, index) => {
        return (
          <div key={index} className={s.listitem}>
            <div className={s.listdate}>
              {item.displayDate}
            </div>
            <div className={s.listentry}>
            {
              item.viewData.map(data => (
                <div
                  key={data.uuid}
                  className={s.entryitem}
                  style={{
                    color: data.isSelected ? data.metadata.color: ''
                  }}
                  // tslint:disable-next-line: jsx-no-lambda
                  onClick={() => selectDayOneEntryById(data.uuid)}
                >
                  <div className={s.entrydate}>
                    <div className={s.date}>
                      <span className={s.dateweek}>
                        {data.formatedDateObj.week}
                      </span>
                      <span className={s.dateday}>
                        {data.formatedDateObj.day}
                      </span>
                    </div>
                  </div>
                  <div className={s.entrycontent}>
                    <div className={s.contentpreview}>{data.text}</div>
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
              ))
            }
            </div>
          </div>
        )
      })}
    </div>
  )
})

export default ListViewMode
