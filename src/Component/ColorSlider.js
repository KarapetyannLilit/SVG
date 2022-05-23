import React, { memo, useRef, useEffect } from "react"
import { FILL, STOP_COLOR, STROKE } from "./Constants"

export const ColorSlider = ({ value, elements, type }) => {
  const colorInputRef = useRef()

  useEffect(() => {
    colorInputRef.current.value = value
  }, [value])
  console.log(elements, value)
  const changeColor = (e, colorRef) => {
    // if (elements.length >= 1) {

    elements.map((element) => {
      // const elFill = window.getComputedStyle(element).fill
      // const elStroke = window.getComputedStyle(element).stroke
      // if (elFill && elFill !== "none") {
      element.style[type] = e.target.value
      // }
      // if (elStroke && elStroke !== "none") {
      //   element.style.stroke = e.target.value
      // }
      // if (element.getAttribute(FILL)) {
      //   element.style.fill = e.target.value
      // }
      // if (element.getAttribute(STROKE)) {
      //   element.style.stroke = e.target.value
      // }
    })
    // } else {
    //   if (elements.getAttribute(STOP_COLOR)) {
    //     elements.setAttribute(STOP_COLOR, e.target.value)
    //   }
    // }
    colorRef.current.value = e.target.value
  }

  return (
    <input
      ref={colorInputRef}
      type="color"
      onChange={(e) => changeColor(e, colorInputRef)}
      // value={value}
    />
  )
}
