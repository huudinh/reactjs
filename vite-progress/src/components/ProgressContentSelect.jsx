import { useState } from "react";
import { useSearchParams } from 'react-router-dom'

const ProgressContentSelect = (props) => {
    const { title, note, anser } = props.data;
    const [active, setActive] = useState(undefined);

    // Kiểm tra ngôn ngữ
    const [searchParams] = useSearchParams();
    const lang = searchParams.get("lang");
    
    const handleActive = (e) => {
        setActive(e.target.innerText);
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
            lang === 'en' ? alert('Please select one!') : alert('Xin hãy lựa chọn câu hỏi!');
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
                    {anser.map((item) => (
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
                        {lang === 'en' ? 'Next' : 'Tiếp'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProgressContentSelect;
