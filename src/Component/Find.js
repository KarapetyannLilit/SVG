import React, { useEffect, useRef, useState } from "react"
import { clicked, GlobalObj } from "."
import { ColorInputs } from "./ColorInputs"
import "./styled.css"

const Find = ({ SvgElement }) => {
  const [globalObjRefactor, setGlobalObjRefactor] = useState()
  const ShapeRef = useRef()

  useEffect(() => {
    ShapeRef.current.addEventListener("click", handleClick)
    return () => {
      ShapeRef.current.removeEventListener("click", handleClick)
    }
  }, [])

  const handleClick = () => {
    clicked(ShapeRef)
    setGlobalObjRefactor(GlobalObj())
  }

  return (
    <div>
      <SvgElement ShapeRef={ShapeRef} />
      {globalObjRefactor && (
        <ColorInputs ShapeRef={ShapeRef} globalInfo={globalObjRefactor} />
      )}
    </div>
  )
}

export default Find
