import React, { useRef, useEffect } from "react"
import { clicked, GlobalObj } from "."
import { newInputs } from "./CommonFunctions"
export const ColorSlider = ({
  value,
  elements,
  type,
  mergeRef,
  ShapeRef,
  setfilterdFill,
  setfilterdStroke,
  checks,
  elms,
  name,
}) => {
  const colorInputRef = useRef()
  const checkboxRef = useRef()
  const globalInfo = GlobalObj()
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

  const checkCheckbox = () => {
    if (!checkboxRef.current.checked) {
      elements.forEach((elm) => elms.splice(elms.indexOf(elm), 1))
      checks.splice(checks.indexOf(checkboxRef), 1)
      elements.map((element) => {
        element.style.filter = ""
      })
    } else {
      elements.forEach((el) => {
        elms.push(el)
      })
      checks.push(checkboxRef)
      elements.map((element) => {
        element.style.filter = "drop-shadow(0px 2px 2px rgb(0 0 0 / 0.8))"
      })
      console.log("b")
    }
  }
  useEffect(() => {
    checkboxRef.current &&
      checkboxRef.current.addEventListener("click", checkCheckbox)
    return () => {
      checkboxRef.current &&
        checkboxRef.current.removeEventListener("click", checkCheckbox)
    }
  })
  const merge = () => {
    elms.map((el) => {
      const val = elms[0].classList.value
      el.classList.value = val
      if (window.getComputedStyle(el).fill != "none" && !window.getComputedStyle(el).fill.includes("url")) {
        el.style.fill = globalInfo.groupedElementsByClassName.fill[val].color
        el.style.filter = ""
      }
      if (window.getComputedStyle(el).stroke != "none" && !window.getComputedStyle(el).stroke.includes("url")) {
        el.style.stroke = globalInfo.groupedElementsByClassName.stroke[val].color
        el.style.filter = ""
      }
    })
    checks.forEach((check) => {
      check.current.checked = !check.current.checked
    })
    clicked(ShapeRef)
    newInputs(setfilterdFill, setfilterdStroke, globalInfo)
    elms = []
  }


  useEffect(() => {
    mergeRef && mergeRef.current.addEventListener("click", merge)
    return () => {
      mergeRef && mergeRef.current.removeEventListener("click", merge)
    }
  })
  const addShadow = () => {
    const children = Array.from(ShapeRef.current.children)
    for (const elem of children) {
      console.log(name, elem.classList);
      if (elem.classList.value !== name) {
        elem.style.visibility = "hidden"
      }
    }
  }
  const removeShadow = () => {
    const children = Array.from(ShapeRef.current.children)
    for (const elem of children) {
      if (elem.classList.value !== name) {
        elem.style.visibility = "visible"
      }
    }
  }
  return (
    <div className="input-checkbox">
      <input ref={checkboxRef} type="checkbox" />
      <input
        ref={colorInputRef}
        type="color"
        onChange={(e) => changeColor(e, colorInputRef)}
        onMouseEnter={addShadow}
        onMouseLeave={removeShadow}
      />
    </div>
  )
}
