import { CLASSNAME, FILL, STROKE } from "./Constants"
import { rgb2hex } from "./getRandomColor"

const globalObj = {
  groupedElementsByClassName: {
    fill: {},
    stroke: {},
  },
}
const getStyleType = (node) => {
  const nodeClassList = Array.from(node.classList)
  if (nodeClassList.length) {
    nodeClassList.forEach((className) => {
      const { fill, stroke, strokeColor, fillColor } = filterObject(
        CLASSNAME,
        node
      )
      if (fill) {
        setDefaultStyle(node)
        setObj(className, fill, node, fillColor)
      }
      if (stroke) {
        setDefaultStyle(node)
        setObj(className, stroke, node, strokeColor)
      }
    })
  }
}

let num = 0

const addClassName = (node) => {
  if (!(node.tagName === "STYLE")) {
    if (!node.classList.value) {
      if (node.id) {
        const fill = window.getComputedStyle(node).fill
        const stroke = window.getComputedStyle(node).stroke
        const stopColor = window.getComputedStyle(node).stopColor
        let style = document.createElement("style")
        style.type = "text/css"
        style.innerHTML = `.${node.id}  { fill: ${fill}; stroke:${stroke}; stop-color:${stopColor}; }`
        ShapeRef.current.appendChild(style)
        node.classList.value = node.id
      } else {
        const fill = window.getComputedStyle(node).fill
        const stroke = window.getComputedStyle(node).stroke
        let style = document.createElement("style")
        style.type = "text/css"
        style.innerHTML = `.${
          "class" + num
        } { fill: ${fill}; stroke:${stroke} ; }`
        ShapeRef.current.appendChild(style)
        node.classList.value = "class" + num
      }
    }
    num++
  }
}

const findEachChild = (node) => {
  const children = Array.from(node.children)
  if (children.length) {
    children.forEach((child) => {
      findEachChild(child)
    })
    // addClassName(node)
    // getStyleType(node)
  } else {
    addClassName(node)
    getStyleType(node)
  }
}

const filterObject = (type, element) => {
  let filteredType = { fill: "", stroke: "", fillColor: "", strokeColor: "" }
  switch (type) {
    case CLASSNAME: {
      const stroke = window.getComputedStyle(element).stroke
      const fill = window.getComputedStyle(element).fill
      if (fill && fill !== "none") {
        filteredType.fillColor = rgb2hex(fill)
        filteredType.fill = "fill"
      }
      if (stroke && stroke !== "none") {
        filteredType.strokeColor = rgb2hex(stroke)
        filteredType.stroke = "stroke"
      }
      if (element.id.includes("stroke") && element.getAttribute("stop-color")) {
        filteredType.strokeColor = element.getAttribute("stop-color")
        filteredType.stroke = "stroke"
      }
      if (element.id.includes("fill") && element.getAttribute("stop-color")) {
        filteredType.strokeColor = element.getAttribute("stop-color")
        filteredType.stroke = "fill"
      }
      return filteredType
    }
    default: {
      return null
    }
  }
}
const setObj = (className, type, node, color) => {
  if (
    type in globalObj.groupedElementsByClassName &&
    className in globalObj.groupedElementsByClassName[type]
  ) {
    globalObj.groupedElementsByClassName[type][className]["element"].push(node)
    globalObj.groupedElementsByClassName[type][className]["color"] = [color]
    node.removeAttribute(type)
  } else {
    if (node.getAttribute(type) && node.getAttribute(type).includes("url(#")) {
      return
    }
    if (node.tagName.includes("Gradient")) {
      return
    }
    globalObj.groupedElementsByClassName[type][className] = { element: [node] }
    globalObj.groupedElementsByClassName[type][className]["color"] = [color]
    node.removeAttribute(type)
  }
}
const setDefaultStyle = (node) => {
  const style = node.classList.value
  node.dataset.currentStyle = style
}
let ShapeRef
export const clicked = (node) => {
  ShapeRef = node
  globalObj.groupedElementsByClassName.fill = {}
  globalObj.groupedElementsByClassName.stroke = {}
  findEachChild(node.current)
}

export const GlobalObj = () => globalObj
