import React, { useEffect, useRef } from "react"
import './styled.css';
import Svg from "./Svg";

const ComplexSvgs = ({ SvgElement }) => {
    const colorInputRef1 = useRef()
    const colorInputRef2 = useRef()
    const colorInputRef3 = useRef()
    const colorInputRef4 = useRef()



    const ShapeRef = useRef()

    const invertColor = (hex) => {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        // invert color components
        var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
            g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
            b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
        // pad each with zeros and return
        return '#' + padZero(r) + padZero(g) + padZero(b);
    }

    const padZero = (str, len) => {
        len = len || 2;
        const zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
    }

    // const changeColor = (e, colorRef) => {
    //     colorRef.current.value = e.target.value
    //     if (ShapeRef.current) {
    //         const contentDocument = ShapeRef.current
    //         if (!contentDocument) {
    //             return
    //         }
    //         const elements = Array.from(contentDocument.children);
    //         elements.map(element => {
    //             // contentDocument.style.backgroundColor = invertColor(e.target.value)
    //             element.style.stroke = e.target.value

    //             element.style.fill = invertColor(e.target.value)
    //         })
    //     }
    // }


    useEffect(() => {
        ShapeRef.current.addEventListener('click', anunI)
    }, [ShapeRef.current])

    const changeColor = (e, colorRef, cl1) => {
        colorRef.current.value = e.target.value
        if (ShapeRef.current) {
            const contentDocument = ShapeRef.current
            if (!contentDocument) {
                return
            }
            const elements = Array.from(contentDocument.children);
            elements.map(element => {
                if (element.classList.value === cl1) {
                    element.style.fill = e.target.value
                    // anun.style.fill = e.target.value
                    element.style.stroke = invertColor(e.target.value)
                }
            })
        }
    }

    let anun;
    const anunI = (e) => {
        anun = e.target
    }

    return (
        <div>
            <input ref={colorInputRef1} onChange={(e) => changeColor(e, colorInputRef1, 'cls-2')} type="color" />
            <input ref={colorInputRef2} onChange={(e) => changeColor(e, colorInputRef2, 'cls-4')} type="color" />
            <input ref={colorInputRef3} onChange={(e) => changeColor(e, colorInputRef3, 'cls-5')} type="color" />
            <input ref={colorInputRef4} onChange={(e) => changeColor(e, colorInputRef4, 'cls-3')} type="color" />

            <SvgElement ShapeRef={ShapeRef} />
        </div>
    )
}

export default ComplexSvgs
