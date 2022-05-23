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
    filterdFill.map((className, i) => {
      console.log(globalInfo[type].fill[className].color)
    })
  }

  // const filterdStopColor = []

  // const objInput = []
  // for (const groupName in globalInfo) {
  //   for (const group in globalInfo[groupName]) {
  //     let color
  //     const groupedElements = globalInfo[groupName][group]
  //     if (groupedElements[0].getAttribute(STOP_COLOR)) {
  //       groupedElements.map((element, i) => {
  //         color = element.getAttribute(STOP_COLOR)
  //         objInput.push({
  //           [element.parentNode.id]: { color: color, element: element },
  //         })
  //         // filterdStopColor.push({
  //         //   [element.parentNode.id]: { color: color, element: element },
  //         // })
  //       })
  //     } else if (
  //       groupedElements[0].getAttribute(FILL) ||
  //       groupedElements[0].getAttribute(STROKE)
  //     ) {
  //       const stroke = groupedElements[0].getAttribute(STROKE)
  //       const fill = groupedElements[0].getAttribute(FILL)
  //       if (fill) {
  //         color = fill
  //         objInput.push({
  //           [FILL]: { color: color, element: groupedElements },
  //         })
  //       } else if (stroke) {
  //         color = stroke
  //         objInput.push({
  //           [STROKE]: { color: color, element: groupedElements },
  //         })
  //       }
  //       // inputObj.push({
  //       //   [groupName]: { color: color, element: [groupedElements[0]] },
  //       // })
  //     } else {
  //       const stroke = window.getComputedStyle(groupedElements[0]).stroke
  //       const fill = window.getComputedStyle(groupedElements[0]).fill
  //       if (fill && fill !== "none") {
  //         color = rgb2hex(fill)
  //         objInput.push({
  //           [FILL]: { color: color, element: groupedElements },
  //         })
  //       } else if (stroke && stroke !== "none") {
  //         color = rgb2hex(stroke)
  //         objInput.push({
  //           [STROKE]: { color: color, element: groupedElements },
  //         })
  //       }
  //       // inputObj.push({
  //       //   [groupName]: { color: color, element: groupedElements },
  //       // })
  //     }
  //   }
  // }

  // objInput.map((data, i) => {
  //   if (Object.keys(objInput[i])[0] === FILL) {
  //     filterdFill.push(objInput[i])
  //   }
  //   if (Object.keys(objInput[i])[0] === STROKE) {
  //     filterdStroke.push(objInput[i])
  //   }

  //   if (Object.keys(objInput[i])[0] === STOP_COLOR) {
  //     console.log(objInput[i])
  //     filterdStopColor.push(objInput[i])
  //   }
  // })

  return (
    <div>
      <div>
        {filterdFill &&
          filterdFill.map((className, i) => (
            <ColorSlider
              value={globalInfo[type].fill[className].color}
              elements={globalInfo[type].fill[className].element}
              type={"fill"}
            />
          ))}
      </div>
      <div>
        {filterdStroke &&
          filterdStroke.map((className, i) => (
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
