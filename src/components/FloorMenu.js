import react, {useState} from "react";

function FloorMenu({onSelectFloor}) {
    const [activeFloor, setActiveFloor] = useState('first');

    const handleClick = (floor) => {
        setActiveFloor(floor);
        onSelectFloor(floor);
    };
    return(
        <div>
            <ul>
                <li>
                    <button
                        className={activeFloor === 'first' ? 'active' : ''}
                        onClick={() => handleClick('first')}
                    >1F</button>
                </li>
                <li>
                    <button
                        className={activeFloor === 'second' ? 'active' : ''}
                        onClick={() => handleClick('second')}
                    >2F</button>
                </li>
                <li>
                    <button
                        className={activeFloor === 'third' ? 'active' : ''}
                        onClick={() => handleClick('third')}
                    >3F</button>
                </li>
            </ul>
        </div>
    );
}

export default FloorMenu;