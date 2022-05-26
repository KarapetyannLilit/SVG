import React, { useEffect, useState } from "react"
import { ColorSlider } from "./ColorSlider"
import { newInputs } from "./CommonFunctions"
import { MergeColors } from "./MergeColors"
export const ColorInputs = ({ ShapeRef, globalInfo }) => {
  const [filterdFill, setfilterdFill] = useState([])
  const [filterdStroke, setfilterdStroke] = useState([])

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
          filterdFill.map((className) => (
            <ColorSlider
              value={
                globalInfo.groupedElementsByClassName.fill[className].color
              }
              elements={
                globalInfo.groupedElementsByClassName.fill[className].element
              }
              type={"fill"}
              shapeRef={ShapeRef}
            />
          ))}
      </div>
      <div>
        {filterdStroke &&
          filterdStroke.map((className) => (
            <ColorSlider
              value={
                globalInfo.groupedElementsByClassName.stroke[className].color
              }
              elements={
                globalInfo.groupedElementsByClassName.stroke[className].element
              }
              type={"stroke"}
              shapeRef={ShapeRef}
            />
          ))}
      </div>
      <div>
        <MergeColors
          setfilterdFill={setfilterdFill}
          setfilterdStroke={setfilterdStroke}
          globalInfo={globalInfo}
          ShapeRef={ShapeRef}
        />
      </div>
    </div>
  )
}
