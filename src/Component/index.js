import { ForCaseXPath } from "./CommonFunctions"
import { CLASSNAME, FILL, STROKE } from "./Constants"
import { rgb2hex } from "./getRandomColor"

const globalObj = {
  groupedElementsByClassName: {
    fill: {},
    stroke: {},
  },
  // groupGradientElements: {},
  // groupXpathElements: {},
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
        setObj(className, fill, node, fillColor)
      }

      if (stroke) {
        setObj(className, stroke, node, strokeColor)
      }
    })
  }
  // if (node.id) {
  //   groupedElementsByIds[node.id] = [node]
  // }
  // ForCaseXPath(FILL, node, globalObj, findPath)
  // ForCaseXPath(STROKE, node, globalObj, findPath)
}

const findPath = (node) => {
  const id = node.parentNode.getAttribute("id")
  const siblings = node.parentNode.children
  const siblingsWithSameTagName = Array.from(siblings).filter((sibling) => {
    if (sibling.tagName === node.tagName) {
      return sibling
    }
  })
  let index = siblingsWithSameTagName.indexOf(node)
  if (siblingsWithSameTagName.length === 1) {
    if (!/^(?!0*(\.0+)?$)(\d+|\d*\.\d+)$/.test(index)) {
      index = ""
    }
  } else if (siblingsWithSameTagName.length > 1) {
    index += 1
    index = "[" + index + "]"
  }
  if (node.parentNode.getAttribute("id")) {
    return '[@id="' + id + '"]/' + node.tagName + index
  } else {
    return findPath(node.parentNode) + "/" + node.tagName + index
  }
}

const findEachChild = (node) => {
  const children = Array.from(node.children)
  if (children.length) {
    children.forEach((child) => {
      findEachChild(child)
    })
  } else {
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
    globalObj.groupedElementsByClassName[type][className]["color"] = color
  } else {
    globalObj.groupedElementsByClassName[type][className] = { element: [node] }
    globalObj.groupedElementsByClassName[type][className]["color"] = color
  }
}
export const clicked = (node) => {
  globalObj.groupedElementsByClassName.fill = {}
  globalObj.groupedElementsByClassName.stroke = {}
  // globalObj.groupGradientElements = {}
  // globalObj.groupXpathElements = {}
  findEachChild(node.current)
  console.log(globalObj)
}
export const GlobalObj = () => globalObj
