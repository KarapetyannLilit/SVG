import React, { useEffect, useRef, useState } from "react"
import { clicked, GlobalObj } from ".";
import { ColorInputs } from "./ColorInputs";
import './styled.css';

const Find = ({ SvgElement }) => {
    const [color, setColor] = useState();
    const ShapeRef = useRef()

    useEffect(() => {
        ShapeRef.current.addEventListener('click', handleClick)
    }, [ShapeRef.current])

    const handleClick = (e) => {
        clicked(ShapeRef)
        setColor(GlobalObj())
    }

    return (
        <div>
            <SvgElement ShapeRef={ShapeRef} />
            {color && <ColorInputs globalInfo={color} /> }
        </div>
    )
}

export default Find
