import React from 'react'
import {
  TEntryData
} from './IStore'

export interface IResizeHandlerProp {
  eleRef: React.MutableRefObject<HTMLDivElement>,
  initWidth: number,
  handleControlWidthChange: (w: number) => void,
  handleControlWidthChangeCb?: (c: number) => void
}

export interface IListViewModeProp {
  listViewData: TEntryData,
  selectDayOneEntryById: (id: string) => void
}
