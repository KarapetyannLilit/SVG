import React, { useEffect, useRef } from "react"
import { clicked } from ".";
import { getRandomColor } from "./getRandomColor";
import './styled.css';
import Svg from "./Svg";
import { getDefaultsvgData } from "./svgData";

const Find = ({ SvgElement }) => {
    // const colorInputRef1 = useRef()
    // const colorInputRef2 = useRef()

    const ShapeRef = useRef()
    let obj = {}

    useEffect(() => {
        ShapeRef.current.addEventListener('click', handleClick)
    }, [ShapeRef.current])

    let anun;
    
    const handleClick = (e) => {
        obj = {}
        anun = e.target
        clicked(ShapeRef)
    }


    return (
        <div>
            {/* <input ref={colorInputRef1} onChange={(e) => FIndCasses(e, colorInputRef1)} type="color" /> */}
            <SvgElement ShapeRef={ShapeRef} />
        </div>
    )
}

export default Find
