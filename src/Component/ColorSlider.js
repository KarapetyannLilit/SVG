import React, { memo, useRef, useEffect } from "react"

export const ColorSlider = ({ value, elements, type }) => {
  const colorInputRef = useRef()

  useEffect(() => {
    colorInputRef.current.value = value
  }, [value])

  const changeColor = (e, colorRef) => {
    elements.map((element) => {
      element.style[type] = e.target.value
    })
    colorRef.current.value = e.target.value
  }

  return (
    <input
      ref={colorInputRef}
      type="color"
      onChange={(e) => changeColor(e, colorInputRef)}
    />
  )
}
