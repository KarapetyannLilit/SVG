import React, { memo, useRef, useEffect } from "react"

export const ColorSlider = ({ value, elements }) => {
    const colorInputRef = useRef()
    const inputRef = useRef()

    useEffect(() => {
        colorInputRef.current.value = value
    }, [value])


    const changeColor = (e, colorRef) => {
        if (elements.length >= 1) {
            elements.map(element => {
                if (element.style.fill) {
                    element.style.fill = e.target.value
                }
                if (element.style.stroke) {
                    element.style.stroke = e.target.value
                }
            })
        } else {
            if (elements.getAttribute("stop-color")) {
                elements.setAttribute("stop-color", e.target.value)
            }
        }
        colorRef.current.value = e.target.value
    }

    return (
        <input
            ref={colorInputRef}
            type="color"
            onChange={(e) => changeColor(e, colorInputRef)}
        // value={value}
        />
    )
}