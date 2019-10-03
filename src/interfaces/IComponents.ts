import React from 'react'

export interface IResizeHandlerProp {
  eleRef: React.MutableRefObject<HTMLDivElement>,
  initWidth: number,
  handleControlWidthChange: (w: number) => void,
  handleControlWidthChangeCb?: (c: number) => void
}

export interface IDayOnePanelProp {}
