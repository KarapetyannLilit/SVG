import './../styled.css';

const Star = ({ ShapeRef }) => {
    return (
        <svg ref={ShapeRef} xmlns="http://www.w3.org/2000/svg" id="eFqrAhkGCB81" viewBox="0 0 640 480" shapeRendering="geometricPrecision" textRendering="geometricPrecision" data-name="Layer 1" >
            <radialGradient className="gradient" id="eFqrAhkGCB83-fill" cx="0" cy="0" r="0.5" spreadMethod="reflect" gradientUnits="objectBoundingBox" gradientTransform="translate(0.5 0.5)">
                <stop id="eFqrAhkGCB83-fill-0" offset="0%" stopColor="#0000" />
                <stop id="eFqrAhkGCB83-fill-1" offset="100%" stopColor="#11111" />
            </radialGradient>
            <line className="cls-2" xmlns="http://www.w3.org/2000/svg" x1="-54.519092" y1="94.538425" x2="54.519092" y2="-94.538425" transform="translate(282.300629 225.61624)"   strokeWidth="15" />
            <polygon className="cls-2 gradient" xmlns="http://www.w3.org/2000/svg" points="0,-64 18.809128,-25.888544 60.867617,-19.777088 30.433809,9.888544 37.618256,51.777088 0,32 -37.618256,51.777088 -30.433809,9.888544 -60.867617,-19.777088 -18.809128,-25.888544 0,-64" transform="translate(331.019818 154.277428)" fill="url(#eFqrAhkGCB83-fill)" strokeWidth="7" stroke="#000" />
        </svg>
    )
}

export default Star
