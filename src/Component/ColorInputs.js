import React, { memo, useRef, useEffect } from "react"
import { ColorSlider } from "./ColorSlider"
import { rgb2hex } from "./getRandomColor"

export const ColorInputs = ({ globalInfo }) => {
    const colors = []
    const el = []
// debugger
    for (const key in globalInfo) {
        for (const key2 in globalInfo[key]) {
            console.log(globalInfo[key][key2][0]);
            let color
            if (globalInfo[key][key2][0].getAttribute("stop-color")) {
                globalInfo[key][key2].map(elms => {
                    color = elms.getAttribute("stop-color")
                    colors.push(color)
                    el.push(elms)
                })
            }
            else {
                // debugger
                if (globalInfo[key][key2][0].style.fill) {
                    color = rgb2hex(globalInfo[key][key2][0].style.fill)
                }
                else if (globalInfo[key][key2][0].style.stroke) {
                    color = rgb2hex(globalInfo[key][key2][0].style.stroke)
                }
                colors.push(color)
                const elements = globalInfo[key][key2]
                el.push(elements)
            }

        }
        console.log(globalInfo);

    }

    return (
        colors.map((color, i) => {
            return (<ColorSlider value={color} elements={el[i]} />)
            // return (<ColorSlider value={color} el ements={el} />)

        })
      
    )
}