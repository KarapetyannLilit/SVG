import './styled.css';

const Polygon = ({ ShapeRef }) => {
    return (
        <svg ref={ShapeRef} xmlns="http://www.w3.org/2000/svg"  id="eV1DkAIjJXa1" viewBox="0 0 640 480" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
            <defs>
                <filter id="eV1DkAIjJXa2-filter" x="-150%" width="400%" y="-150%" height="400%">
                    <feGaussianBlur id="eV1DkAIjJXa2-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="0,0" />
                    <feOffset id="eV1DkAIjJXa2-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp" />
                    <feFlood id="eV1DkAIjJXa2-filter-drop-shadow-0-flood" floodColor="#252424" />
                    <feComposite id="eV1DkAIjJXa2-filter-drop-shadow-0-composite" operator="in" in2="tmp" />
                    <feMerge id="eV1DkAIjJXa2-filter-drop-shadow-0-merge">
                        <feMergeNode id="eV1DkAIjJXa2-filter-drop-shadow-0-merge-node-1" />
                        <feMergeNode id="eV1DkAIjJXa2-filter-drop-shadow-0-merge-node-2" in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="eV1DkAIjJXa2-fill" x1="0" y1="0.5" x2="1" y2="0.5" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
                    <stop id="eV1DkAIjJXa2-fill-0" offset="0%" stopColor="#988c38" />
                    <stop id="eV1DkAIjJXa2-fill-1" offset="22%" stopColor="#01d7e8" />
                    <stop id="eV1DkAIjJXa2-fill-2" offset="54%" stopColor="#7e857d" />
                    <stop id="eV1DkAIjJXa2-fill-3" offset="81%" stopColor="#cc146d" />
                    <stop id="eV1DkAIjJXa2-fill-4" offset="100%" stopColor="#6773c7" />
                </linearGradient>
                <linearGradient id="eV1DkAIjJXa2-stroke" x1="0" y1="0.5" x2="1" y2="0.5" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
                    <stop id="eV1DkAIjJXa2-stroke-0" offset="19%" stopColor="#876161" />
                    <stop id="eV1DkAIjJXa2-stroke-1" offset="55%" stopColor="#1a67d3" />
                    <stop id="eV1DkAIjJXa2-stroke-2" offset="84%" stopColor="#d71313" />
                    <stop id="eV1DkAIjJXa2-stroke-3" offset="100%" stopColor="#fff" />
                </linearGradient>
            </defs>
            <polygon points="37.604614,-64 117.798388,-24.387547 137.604614,64.620826 82.108801,135.999999 -6.899573,135.999999 -62.395386,64.620826 -42.58916,-24.387547 37.604614,-64" transform="translate(300 200)" filter="url(#eV1DkAIjJXa2-filter)" fill="url(#eV1DkAIjJXa2-fill)" stroke="url(#eV1DkAIjJXa2-stroke)" strokeWidth="7" strokeDashoffset="6" />
        </svg>
    )
}

export default Polygon
