import React from 'react'

import { useEventCallback } from 'rxjs-hooks'
import {
  fromEvent
} from 'rxjs'
import {
  map,
  switchMap,
  takeUntil,
  withLatestFrom
} from 'rxjs/operators'

import {
  IResizeHandlerProp
} from '../../../../interfaces/IComponents'

import s from './index.scss'

const ResizeHandler: React.SFC<IResizeHandlerProp> = ({
  eleRef,
  initWidth,
  handleControlWidthChange
}) => {

  const [onMouseDown, positionX] = useEventCallback<
    React.MouseEvent<HTMLDivElement>,
    number,
    React.MutableRefObject<HTMLDivElement>[]
  >(
    (event$, inputs$) => {
      return event$.pipe(
        withLatestFrom(
          inputs$.pipe(
            map(([eleRef]) => eleRef)
          )
        ),
        switchMap(([event, eleRef]) => {
          const leftStyle = window.getComputedStyle(eleRef.current)
          const width = parseFloat(leftStyle.getPropertyValue('width'))
          const startX = event.clientX
          return fromEvent<React.MouseEvent>(window, 'mousemove')
            .pipe(
              map(moveEvent => moveEvent.clientX - startX + width),
              takeUntil(fromEvent(window, 'mouseup')
            )
          );
        })
      )
    },
    initWidth,
    [eleRef] as React.MutableRefObject<HTMLDivElement>[] // 强制类型判定
  );
  // 更新宽度
  handleControlWidthChange(positionX)
  return (
    <div
      onMouseDown={onMouseDown}
      className={s.container}
    />
  )
}

export default ResizeHandler
