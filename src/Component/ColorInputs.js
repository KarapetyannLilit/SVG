import React, { useEffect, useRef, useState } from "react"
import { ColorSlider } from "./ColorSlider"
import { newInputs } from "./CommonFunctions"
export const ColorInputs = ({ ShapeRef, globalInfo }) => {
  const [filterdFill, setfilterdFill] = useState([])
  const [filterdStroke, setfilterdStroke] = useState([])
  const mergeButton = useRef()
  // const [elms, setElms] = useState([])
  const elms = []
  const checks = []
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
          (<div className="inputs" >
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
                ShapeRef={ShapeRef}
                name={className}
                mergeRef={mergeButton}
                setfilterdFill={setfilterdFill}
                setfilterdStroke={setfilterdStroke}
                elms={elms}
                checks={checks} />
            ))
            }
          </div>)
        }

        {filterdStrokeGradient.length > 0 &&
          (<div className="inputs" >
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
                ShapeRef={ShapeRef}
                name={className}
                mergeRef={mergeButton}
                setfilterdFill={setfilterdFill}
                setfilterdStroke={setfilterdStroke}
                elms={elms}
                checks={checks} />
            ))}
          </div>)
        }

        {filterdFillNoGradient.length > 0 &&
          (<div className="inputs" >
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
                ShapeRef={ShapeRef}
                name={className}
                mergeRef={mergeButton}
                setfilterdFill={setfilterdFill}
                setfilterdStroke={setfilterdStroke}
                elms={elms}
                checks={checks}
              />
            ))

            }
          </div>)
        }

        {filterdStrokeNoGradient.length > 0 &&
          (<div className="inputs">
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
                ShapeRef={ShapeRef}
                name={className}
                mergeRef={mergeButton}
                setfilterdFill={setfilterdFill}
                setfilterdStroke={setfilterdStroke}
                elms={elms}
                checks={checks} />
            ))}
          </div>)
        }
      </div>
      <div>
        <button ref={mergeButton}>Merge Colors</button>
      </div>
    </div>
  )
}
