import React, { useEffect, useRef, useState } from "react"
import { clicked, GlobalObj, globalObj, inputs } from ".";
import { ColorInputs } from "./ColorInputs";
import { ColorSlider } from "./ColorSlider";
import { getRandomColor } from "./getRandomColor";
import './styled.css';
import Svg from "./Svg";
import { getDefaultsvgData } from "./svgData";

const Find = ({ SvgElement }) => {
    const colorInputRef1 = useRef()
    // const colorInputRef2 = useRef()
    const [color, setColor] = useState();


    const ShapeRef = useRef()
    let obj = {}

    useEffect(() => {
        ShapeRef.current.addEventListener('click', handleClick)
    }, [ShapeRef.current])
    let m
    let anun;

    const handleClick = (e) => {
        obj = {}
        anun = e.target
        clicked(ShapeRef)
        let globalInfo = GlobalObj()
        setColor(globalInfo)
        // ColorInputs()
    }

    return (
        <div>
            {/* <input ref={colorInputRef1} onChange={(e) => FIndCasses(e, colorInputRef1)} type="color" /> */}
            <SvgElement ShapeRef={ShapeRef} />
            {color && <ColorInputs globalInfo={color} /> 

            }

            {/* <ColorInputs m={m} /> */}
            {/* {objectArray} */}
            {/* {objectArray && objectArray.map(() =>
                <ColorSlider />
            )} */}
        </div>
    )
}

export default Find
