export const findPath = (node) => {
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
