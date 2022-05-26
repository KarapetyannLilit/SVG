import React, { useRef, useEffect, useState } from "react"
import { clicked, GlobalObj } from "."

export const ColorSlider = ({ value, elements, type, shapeRef }) => {
  const colorInputRef = useRef()


  useEffect(() => {
    colorInputRef.current.value = value
  }, [value])

  const changeColor = (e, colorRef) => {
    elements.map((element) => {
      element.style[type] = e.target.value
      if (element.tagName.includes("stop")) {
        element.setAttribute("stop-color", e.target.value)
      }
    })
    colorRef.current.value = e.target.value
  }


  const addShadow = () => {
    elements.map((element) => {
      element.style.filter = "drop-shadow(0px 2px 2px rgb(0 0 0 / 0.8))"
    })
  }
  const removeShadow = () => {
    elements.map((element) => {
      element.style.filter = ""
    })
  }
  return (
    <input
      ref={colorInputRef}
      type="color"
      onChange={(e) => changeColor(e, colorInputRef)}
      onMouseEnter={addShadow}
      onMouseLeave={removeShadow}
    />
  )
}
