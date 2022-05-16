import { getRandomColor } from "./getRandomColor"

let groupedElementsByClassName = {}
let groupedElementsByIds = {}
let groupGradientElements = {}
let elementsWithPath = []
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
    //*[@id="Layer_1"]/rect[2]
    //*[@id="Layer_1"]/polygon[1]
    //*[@id="Layer_1"]/circle[15]
    //*[@id="eV1DkAIjJXa2-fill-3"]
    //*[@id="eV1DkAIjJXa1"]/polygon
    //*[@id="Layer_1"]/g[2]/path[1]
    else if (node.id) {
        groupedElementsByIds[node.id] = [node]
    }
    else if (node.getAttribute('fill')) {
        if (node.getAttribute('fill').includes('url')) {
            if (node.getAttribute('fill').includes('img')) {
                return
            }
            if (node.getAttribute('fill').includes('#')) {
                const gradientId = node.getAttribute('fill').substring(
                    node.getAttribute('fill').indexOf("(") + 2,
                    node.getAttribute('fill').lastIndexOf(")")
                );
                ForCaseGradient(gradientId)
            }
        }
        else {
            node.setAttribute("fill", getRandomColor())
        }
        if (node.parentNode) {
            res = ''
            findPath(node)
        }
        //  node.parentNode
        elementsWithPath.push(node)
    }

}

const gradientFind = () => {
    return "Gradient"
}
let res = '';
const findPath = (node) => {
    if (node.parentNode.getAttribute("id")) {
        const id = node.parentNode.getAttribute("id")
        const a = Array.from(shape.querySelectorAll(node.tagName))
        let index = a.indexOf(node);
        console.log(node);
        // console.log(node.parentNode.children);
        console.log(node.tagName);
        if (!/^(?!0*(\.0+)?$)(\d+|\d*\.\d+)$/.test(index)) {
            index = ''
        } else {
            index = '[' + index + ']'
        }
        res = '[@id="' + id + '"]/' + node.tagName + index
    }
    if (res) {
        res += '/' + node.tagName + index
    } else {
        res +=
            findPath(node.parentNode)
    }
    console.log(res);
}
const ForCaseGradient = (gradientId) => {

    const children = Array.from(shape.getElementById(gradientId).children);
    // groupGradientElements 
    children.forEach((child) => {
        if (gradientId in groupGradientElements) {
            groupGradientElements[gradientId].push(child)
        } else {
            groupGradientElements[gradientId] = [child]
        }
    })
    if (gradientId in groupGradientElements) {
        groupGradientElements[gradientId].forEach(element => {
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
        const color = getRandomColor()
        group[list].forEach((el) => {
            el.setAttribute("style", "fill:" + `${color}`)
        })
    }
}

let shape;

export const clicked = (node) => {
    shape = node.current;
    groupedElementsByClassName = {}
    findEachChild(node.current)
    changeStyle(groupedElementsByClassName)
    changeStyle(groupedElementsByIds)
    // if (elementsWithPath) {
    //     console.log(elementsWithPath);
    // }
}

// const getPath = (arr) => {
//     const children = Array.from(node.children)
//     if (children.length) {
//         children.forEach((child) => {
//             findEachChild(child)
//         })
//     } else {
//         getStyleType(node)
//     }
// }