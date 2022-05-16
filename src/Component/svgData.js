const REFERENCE = "reference";
const CLASSNAME = "className";
let color;
let path;


const SvgData = (type, color, xpath) => {
    return {
        type: type,
        colors: [color],
        path: null | xpath
    }
}

export const getDefaultsvgData = (type) => {
    switch (type) {
        case REFERENCE: {
            return SvgData(REFERENCE, color, path)
        }
        case CLASSNAME: {
            return SvgData(CLASSNAME, color, path)
        }
        default: {
            return null
        }
    }
}