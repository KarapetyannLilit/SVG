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

  const filterdFillGradient = filterdFill.filter(className => className.includes("fill"))
  const filterdFillNoGradient = filterdFill.filter(className => !className.includes("fill"))

  const filterdStrokeGradient = filterdStroke.filter(className => className.includes("stroke"))
  const filterdStrokeNoGradient = filterdStroke.filter(className => !className.includes("stroke"))
  return (
    <div>
      <div>
        {filterdFillGradient.length > 0 &&
          (<div>
            Gradient Fill
            {filterdFillGradient.map((className) => (
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
            ))
            }
          </div>)
        }

        {filterdStrokeGradient.length > 0 &&
          (<div>
            Gradient Stroke
            {filterdStrokeGradient.map((className) => (
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
          </div>)
        }

        {filterdFillNoGradient.length > 0 &&
          (<div>
            Fill
            {filterdFillNoGradient.map((className) => (
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
            ))

            }
          </div>)
        }

        {filterdStrokeNoGradient.length > 0 &&
          (<div>
            Stroke
            {filterdStrokeNoGradient.map((className) => (
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
          </div>)
        }
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
