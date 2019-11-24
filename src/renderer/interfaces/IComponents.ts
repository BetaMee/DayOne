import React from 'react'
import {
  IViewEntryItem
} from './IStore'

export interface IResizeHandlerProp {
  eleRef: React.MutableRefObject<HTMLDivElement>,
  initWidth: number,
  handleControlWidthChange: (w: number) => void,
  handleControlWidthChangeCb?: (c: number) => void
}

export interface IListViewModeProp {
  viewstate: Array<IViewEntryItem>
}

export interface IDayOnePanelProp {}
