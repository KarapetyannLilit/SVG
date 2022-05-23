import React from "react"
import { ColorSlider } from "./ColorSlider"
import { FILL, STOP_COLOR, STROKE } from "./Constants"
import { rgb2hex } from "./getRandomColor"

export const ColorInputs = ({ globalInfo }) => {
  let filterdFill = []
  let filterdStroke = []
  let type
  for (const obj in globalInfo) {
    type = obj
    filterdStroke = Array.from(Object.keys(globalInfo[obj].stroke))
    filterdFill = Array.from(Object.keys(globalInfo[obj].fill))
  }

  return (
    <div>
      <div>
        {filterdFill &&
          filterdFill.map((className) => (
            <ColorSlider
              value={globalInfo[type].fill[className].color}
              elements={globalInfo[type].fill[className].element}
              type={"fill"}
            />
          ))}
      </div>
      <div>
        {filterdStroke &&
          filterdStroke.map((className) => (
            <ColorSlider
              value={globalInfo[type].stroke[className].color}
              elements={globalInfo[type].stroke[className].element}
              type={"stroke"}
            />
          ))}
      </div>
    </div>
  )
}
