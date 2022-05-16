import './styled.css';

const Laptop = ({ ShapeRef }) => {
    return (
        <svg ref={ShapeRef} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" >
            <rect className="cls-1" x="26.67" y="26.78" width="138.22" height="102.67" rx="3" />
            <path className="cls-2" d="M38.81,117V40.64a2.93,2.93,0,0,1,2.85-3H150.19a2.93,2.93,0,0,1,2.85,3V117" />
            <path className="cls-1" d="M13.89,142.56H178.11a3,3,0,0,1,3,3v0a19.67,19.67,0,0,1-19.67,19.67H30.56a19.67,19.67,0,0,1-19.67-19.67v0a3,3,0,0,1,3-3Z" />
            <line className="cls-2" x1="64.11" y1="153.89" x2="127.89" y2="153.89" />
        </svg>
    )
}

export default Laptop