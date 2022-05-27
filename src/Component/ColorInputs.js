import React, { useEffect, useRef, useState } from "react"
import { ColorSlider } from "./ColorSlider"
import { newInputs } from "./CommonFunctions"
export const ColorInputs = ({ ShapeRef, globalInfo }) => {
  const [filterdFill, setfilterdFill] = useState([])
  const [filterdStroke, setfilterdStroke] = useState([])
  const mergeButton = useRef()
  // const [elms, setElms] = useState([])
  const elms=[]
  const checks=[]
  useEffect(() => {
    ShapeRef.current.addEventListener("click", function ankap() {
      newInputs(setfilterdFill, setfilterdStroke, globalInfo)
      ShapeRef.current.removeEventListener("click", ankap)
    })
  }, [])

  return (
    <div>
      <div>
        {filterdFill &&
          filterdFill.map((className, i) => {
            return (
              <ColorSlider
                value={
                  globalInfo.groupedElementsByClassName.fill[className].color
                }
                elements={
                  globalInfo.groupedElementsByClassName.fill[className].element
                }
                type={"fill"}
                ShapeRef={ShapeRef}
                name={className}
                mergeRef={mergeButton}
                setfilterdFill={setfilterdFill}
                setfilterdStroke={setfilterdStroke}
                elms={elms}
                checks={checks}
              />
            )
          })}
      </div>
      <div>
        {filterdStroke &&
          filterdStroke.map((className, i) => {
            return (
              <ColorSlider
                value={
                  globalInfo.groupedElementsByClassName.stroke[className].color
                }
                elements={
                  globalInfo.groupedElementsByClassName.stroke[className]
                    .element
                }
                type={"stroke"}
                shapeRef={ShapeRef}
                name={className}
              />
            )
          })}
      </div>
      <div>
        <button ref={mergeButton}>Merge Colors</button>
      </div>
    </div>
  )
}
