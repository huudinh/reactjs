import { useState } from "react";

const ProgressContentSelect = (props) => {
    const { title, note, anser } = props.data;
    const [active, setActive] = useState(undefined);
    
    const handleActive = (e) => {
        setActive(e.target.innerHTML);
        // console.log(event.target.innerHTML);
    };

    const handleClick = () => {
        if (active !== undefined) {

            // Gửi lại thông tin câu hỏi và lựa chọn
            props.onClick({
                question: title,
                anser: active
            });
            
            setActive(undefined);
        } 
        else {
            alert('Please select one!');
        } 
    }

    return (
        <div className="progressContentBox">
            <div className="progressContentCol">
                <div className="progressContentTitle">{title}</div>
                <div className="progressContentNote">{note}</div>
            </div>
            <div className="progressContentCol">
                <ul className="progressContentSelect">
                    {anser.map((item, index) => (
                        <li 
                            key={item}
                            className={active === item ? 'active' : undefined}
                            onClick={handleActive}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="progressContentColButton">
                    <button className="progressBarButton" onClick={handleClick}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProgressContentSelect;
