// import { useEffect, useState } from "react"
// import { newInputs } from "./CommonFunctions"
// import { clicked } from "."

// export const MergeColors = ({
//   setfilterdFill,
//   setfilterdStroke,
//   globalInfo,
//   ShapeRef,
//   arrFill,
//   arrStroke,
// }) => {
//   const [elms, setElms] = useState([])
//   const [val, setval] = useState("")

//   const checkShiftPressed = (e) => {
//     if (e.shiftKey) {
//       if (!val) {
//         setval(e.target.classList.value)
//       }
//       setElms(() => {
//         const newElms = [...elms]
//         newElms.push(e.target)
//         return newElms
//       })
//       e.target.style.filter = "drop-shadow(0px 2px 2px rgb(0 0 0 / 0.8))"
//     }
//   }

//   useEffect(() => {
//     ShapeRef.current.addEventListener("click", checkShiftPressed)
//     return () => {
//       ShapeRef.current.removeEventListener("click", checkShiftPressed)
//     }
//   })
//   useEffect(() => {
//     arrFill.forEach((el) => el.current.addEventListener("click", check))
//   })
//   const check = (e) => {
//     console.log( e.target.getAttribute("data-el"));
//     // if (e.shiftKey) {
//     //   if (!val) {
//     //     setval(name)
//     //   }
//     //   setElms(() => {
//     //     const newElms = [...elms]
//     //     elements.forEach((el) => {
//     //       newElms.push(el)
//     //     })
//     //     return newElms
//     //   })
//     //   elements.map((element) => {
//     //     element.style.filter = "drop-shadow(0px 2px 2px rgb(0 0 0 / 0.8))"
//     //   })
//     // }
//   }
//   const merge = () => {
//     elms.map((el) => {
//       el.classList.value = val
//       el.style.fill = globalInfo.groupedElementsByClassName.fill[val].color
//       el.style.filter = ""
//     })
//     clicked(ShapeRef)
//     newInputs(setfilterdFill, setfilterdStroke, globalInfo)
//     setval("")
//     setElms([])
//   }
//   return <button onClick={merge}>Merge Colors</button>
// }
