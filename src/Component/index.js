import { getRandomColor } from "./getRandomColor"
let groupedElementsByClassName = {}
let groupedElementsByIds = {}
let groupGradientElements = {}
let groupXpathElements = {}
export let globalObj = {}
const getStyleType = (node) => {
    const nodeClassList = Array.from(node.classList)
    if (nodeClassList.length) {
        nodeClassList.forEach((className) => {
            if (className in groupedElementsByClassName) {
                groupedElementsByClassName[className].push(node)
            } else {
                groupedElementsByClassName[className] = [node]
            }
        })
    }
    if (node.id) {
        groupedElementsByIds[node.id] = [node]
    }
    if (node.getAttribute("fill")) {
        if (node.getAttribute("fill").includes("url")) {
            if (node.getAttribute("fill").includes("img")) {
                return
            }
            if (node.getAttribute("fill").includes("#")) {
                const gradientId = node
                    .getAttribute("fill")
                    .substring(
                        node.getAttribute("fill").indexOf("(") + 2,
                        node.getAttribute("fill").lastIndexOf(")")
                    )
                ForCaseGradient(gradientId)
            }
        } else {
            node.setAttribute("fill", getRandomColor())
        }
        if (node.parentNode) {
            res = ""
            findPath(node)
            node.dataset.path = res
            groupXpathElements[res] = node
        }
    }
    if (node.getAttribute("stroke")) {
        if (node.getAttribute("stroke").includes("url")) {
            if (node.getAttribute("stroke").includes("img")) {
                return
            }
            if (node.getAttribute("stroke").includes("#")) {
                const gradientId = node
                    .getAttribute("stroke")
                    .substring(
                        node.getAttribute("stroke").indexOf("(") + 2,
                        node.getAttribute("stroke").lastIndexOf(")")
                    )
                ForCaseGradient(gradientId)
            }
        } else {
            node.setAttribute("stroke", getRandomColor())
        }
        if (node.parentNode) {
            res = ""
            findPath(node)
            node.dataset.path = res
        }
    }
}
let res = ""
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
        res = '[@id="' + id + '"]/' + node.tagName + index
    } else {
        while (!res) {
            if (node.parentNode) {
                findPath(node.parentNode)
            }
        }
        res += "/" + node.tagName + index
    }
}
const ForCaseGradient = (gradientId) => {
    const children = Array.from(shape.getElementById(gradientId).children)
    children.forEach((child) => {
        if (gradientId in groupGradientElements) {
            groupGradientElements[gradientId].push(child)
        } else {
            groupGradientElements[gradientId] = [child]
        }
    })
    if (gradientId in groupGradientElements) {
        groupGradientElements[gradientId].forEach((element) => {
            element.setAttribute("stop-color", getRandomColor())
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
        group[list].forEach((el) => {
            let elStyleFill = window.getComputedStyle(el).fill
            let elStyleStroke = window.getComputedStyle(el).stroke
            if (elStyleFill === "none" || !elStyleFill) {
                colorFill = ""
            }
            if (elStyleStroke === "none" || !elStyleStroke) {
                colorStroke = ""
            }
            el.setAttribute("style", "stroke:" + `${colorStroke}; fill: ${colorFill}`)
        })
    }
}
let shape
export const clicked = (node) => {
     globalObj = {}
    shape = node.current
    groupedElementsByClassName = {}
    groupGradientElements={}
    findEachChild(node.current)
    changeStyle(groupedElementsByClassName)
    changeStyle(groupedElementsByIds)
    setGlobalObj()
    GlobalObj()
}


const setGlobalObj = () => {
    globalObj['ClassName'] = groupedElementsByClassName
    globalObj['gradient'] = groupGradientElements
    // globalObj['XpathElements'] = groupXpathElements
}


export const GlobalObj = () => globalObj 