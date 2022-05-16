import React, { useEffect, useRef } from "react"
import './styled.css';

const Svg = ({ShapeRef}) => {
    return (


        <svg ref={ShapeRef} xmlns="https://www.svgrepo.com/show/416376/artificial-bot-intelligence.svg" width="100px" height="100px" viewBox="0 0 100 100" data-name="Layer 1" className="Layer_1" id="Layer_1">
            {/* <g> */}
            <path className="glux cls-1" d="M26,27H12A11,11,0,0,1,12,5H26A11,11,0,0,1,37,16" />
            <path className="glux cls-1" d="M26,23H12A7,7,0,0,1,12,9H26a7,7,0,0,1,7,7" />
            <ellipse className="glux cls-2" cx="27.20455" cy="15.22653" rx="1.29545" ry="1.61932" />
            <ellipse className="glux cls-2" cx="10.79545" cy="15.22653" rx="1.29545" ry="1.61932" />
            <path className="glux cls-1" d="M14.68182,16.17885a5.49719,5.49719,0,0,0,8.63636,0" />
            {/* </g> */}
            <circle className="marmin cls-3" cx="37.99999" cy="26.87923" r="8.99897" transform="translate(6.37931 61.03512) rotate(-82.48087)" />
            <line className="marmin cls-1" x1="33.33333" x2="30" y1="34.66667" y2="40.66667" />
            <line className="marmin cls-1" x1="19" x2="19" y1="1" y2="5" />

            <path className="marmin cls-1" d="M6,40H27.302a3.63357,3.63357,0,0,1,3.69309,3.31178A3.50017,3.50017,0,0,1,27.5,47H6a5,5,0,0,1-5-5V32a5,5,0,0,1,5-5H16" />

            <rect className="marmin cls-1" height="4" width="8" x="8" y="31" />
            <line className="marmin cls-1" x1="24" x2="24" y1="40" y2="47" />
        </svg>

    )
}

export default Svg
