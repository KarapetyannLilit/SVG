import { CLASSNAME, FILL, STOP_COLOR, STROKE } from "./Constants"
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
      const fill = window.getComputedStyle(node).fill
      const stroke = window.getComputedStyle(node).stroke
      let style = document.createElement("style")
      style.type = "text/css"
      if (node.id) {
        const stopColor = window.getComputedStyle(node).stopColor
        style.innerHTML = `.${node.id}  { fill: ${fill}; stroke:${stroke}; stop-color:${stopColor}; }`
        ShapeRef.current.appendChild(style)
        node.classList.value = node.id
      } else {
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
        filteredType.fill = FILL
      }
      if (stroke && stroke !== "none") {
        filteredType.strokeColor = rgb2hex(stroke)
        filteredType.stroke = STROKE
      }
      if (element.id.includes(STROKE) && element.getAttribute(STOP_COLOR)) {
        filteredType.strokeColor = element.getAttribute(STOP_COLOR)
        filteredType.stroke = STROKE
      }
      if (element.id.includes(FILL) && element.getAttribute(STOP_COLOR)) {
        filteredType.strokeColor = element.getAttribute(STOP_COLOR)
        filteredType.stroke = FILL
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
