export const ForCaseGradient = (shape, gradientId) => {
    const children = Array.from(shape.getElementById(gradientId).children)
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