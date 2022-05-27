import { useEffect, useState } from "react"
import { newInputs } from "./CommonFunctions"
import { clicked } from "."

export const MergeColors = ({
  setfilterdFill,
  setfilterdStroke,
  globalInfo,
  ShapeRef,
}) => {
  const [elms, setElms] = useState([])
  const [val, setval] = useState("")
  const checkShiftPressed = (e) => {
    if (e.shiftKey) {
      if (!val) {
        setval(e.target.classList.value)
      }
      setElms(() => {
        const newElms = [...elms]
        newElms.push(e.target)
        return newElms
      })
      e.target.style.filter = "drop-shadow(0px 2px 2px rgb(0 0 0 / 0.8))"
    }
  }

  useEffect(() => {
    ShapeRef.current.addEventListener("click", checkShiftPressed)
    return () => {
      ShapeRef.current.removeEventListener("click", checkShiftPressed)
    }
  })

  const merge = () => {
    elms.map((el) => {
      el.classList.value = val
      console.log(window.getComputedStyle(el).fill.includes("url"));
      if (window.getComputedStyle(el).fill != "none" && !window.getComputedStyle(el).fill.includes("url")) {
        el.style.fill = globalInfo.groupedElementsByClassName.fill[val].color
      }
      if (window.getComputedStyle(el).stroke != "none" && !window.getComputedStyle(el).stroke.includes("url")) {
        el.style.stroke = globalInfo.groupedElementsByClassName.stroke[val].color
      }
      el.style.filter = ""
    })
    clicked(ShapeRef)
    newInputs(setfilterdFill, setfilterdStroke, globalInfo)
    setval("")
    setElms([])
  }
  return <button onClick={merge}>Merge Colors</button>
}
