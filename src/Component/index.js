import { FILL, STOP_COLOR, STROKE } from "./Constants"
import { getRandomColor } from "./getRandomColor"
let groupedElementsByIds = {}
let groupXpathElements = {}
const globalObj = {
    groupedElementsByClassName: {},
    groupGradientElements: {},
    // groupXpathElements: {},
}
const getStyleType = (node) => {
    const nodeClassList = Array.from(node.classList)
    if (nodeClassList.length) {
        nodeClassList.forEach((className) => {
            if (className in globalObj.groupedElementsByClassName) {
                globalObj.groupedElementsByClassName[className].push(node)
            } else {
                globalObj.groupedElementsByClassName[className] = [node]
            }
        })
    }
    if (node.id) {
        groupedElementsByIds[node.id] = [node]
    }
    if (node.getAttribute(FILL)) {
        if (node.getAttribute(FILL).includes("url")) {
            if (node.getAttribute(FILL).includes("img")) {
                return
            }
            if (node.getAttribute(FILL).includes("#")) {
                const gradientId = node
                    .getAttribute(FILL)
                    .substring(
                        node.getAttribute(FILL).indexOf("(") + 2,
                        node.getAttribute(FILL).lastIndexOf(")")
                    )
                ForCaseGradient(gradientId)
            }
        } else {
            node.setAttribute(FILL, getRandomColor())
        }
        if (node.parentNode) {
            node.dataset.path = findPath(node)
groupXpathElements[node.dataset.path] = node
        }
    }
    if (node.getAttribute(STROKE)) {
        if (node.getAttribute(STROKE).includes("url")) {
            if (node.getAttribute(STROKE).includes("img")) {
                return
            }
            if (node.getAttribute(STROKE).includes("#")) {
                const gradientId = node
                    .getAttribute(STROKE)
                    .substring(
                        node.getAttribute(STROKE).indexOf("(") + 2,
                        node.getAttribute(STROKE).lastIndexOf(")")
                    )
                ForCaseGradient(gradientId)
            }
        } else {
            node.setAttribute(STROKE, getRandomColor())
        }
        if (node.parentNode) {
            node.dataset.path = findPath(node)
            groupXpathElements[node.dataset.path] = node
        }
    }
}
const findPath = (node) => {
    const id = node.parentNode.getAttribute("id")
    const parent = Array.from(node.parentNode.querySelectorAll(node.tagName))
    let index = parent.indexOf(node)
    if (parent.length === 1) {
        if (!/^(?!0*(\.0+)?$)(\d+|\d*\.\d+)$/.test(index)) {
            index = ""
        }
    } else if (parent.length > 1) {
        index += 1
        index = "[" + index + "]"
    }
    if (node.parentNode.getAttribute("id")) {
        return '[@id="' + id + '"]/' + node.tagName + index
    } else {
        return findPath(node.parentNode) + "/" + node.tagName + index
    }
}
const ForCaseGradient = (gradientId) => {
    const children = Array.from(document.getElementById(gradientId).children)
    children.forEach((child) => {
        if (gradientId in globalObj.groupGradientElements) {
            globalObj.groupGradientElements[gradientId].push(child)
        } else {
            globalObj.groupGradientElements[gradientId] = [child]
        }
    })
    
    if (gradientId in globalObj.groupGradientElements) {
        globalObj.groupGradientElements[gradientId].forEach((element) => {
            element.setAttribute(STOP_COLOR, getRandomColor())
        })
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
const changeStyle = (group) => {
    for (const list in group) {
        let colorStroke = getRandomColor()
        let colorFill = getRandomColor()
        if (group[list].length) {
            group[list].forEach((el) => {
                const elStyleFill = window.getComputedStyle(el).fill
                const elStyleStroke = window.getComputedStyle(el).stroke
                if (elStyleFill === "none" || !elStyleFill) {
                    colorFill = ""
                }
                if (elStyleStroke === "none" || !elStyleStroke) {
                    colorStroke = ""
                }
                el.setAttribute(
                    "style",
                    "stroke:" + `${colorStroke}; fill: ${colorFill}`
                )
            })
        } else {
            const el = group[list]
            const elStyleFill = window.getComputedStyle(el).fill
            const elStyleStroke = window.getComputedStyle(el).stroke
            if (elStyleFill === "none" || !elStyleFill) {
                colorFill = ""
            }
            if (elStyleStroke === "none" || !elStyleStroke) {
                colorStroke = ""
            }
            el.setAttribute("style", "stroke:" + `${colorStroke}; fill: ${colorFill}`)
        }
    }
}
export const clicked = (node) => {
    globalObj.groupedElementsByClassName = {}
    globalObj.groupGradientElements = {}
    globalObj.groupXpathElements = {}
    findEachChild(node.current)
    changeStyle(globalObj.groupedElementsByClassName)
    changeStyle(groupedElementsByIds)
    //   changeStyle(globalObj.groupXpathElements)
}
export const GlobalObj = () => globalObj