import React, { memo, useRef, useEffect } from "react"
import { ColorSlider } from "./ColorSlider"
import { STOP_COLOR } from "./Constants"
import { rgb2hex } from "./getRandomColor"

export const ColorInputs = ({ globalInfo }) => {
    const colors = []
    const el = []

    for (const key in globalInfo) {
        for (const key2 in globalInfo[key]) {
            let color
            const groupedElements = globalInfo[key][key2]
            if (groupedElements[0].getAttribute(STOP_COLOR)) {
                groupedElements.map(elms => {
                    color = elms.getAttribute(STOP_COLOR)
                    colors.push(color)
                    el.push(elms)
                })
            }
            else {
                if (groupedElements[0].style.fill) {
                    color = rgb2hex(groupedElements[0].style.fill)
                }
                else if (groupedElements[0].style.stroke) {
                    color = rgb2hex(groupedElements[0].style.stroke)
                }
                colors.push(color)
                el.push(groupedElements)
            }
            
        }

    }
console.log(globalInfo);
    return (
        colors.map((color, i) => {
            return (<ColorSlider value={color} elements={el[i]} />)
        })
      
    )
}