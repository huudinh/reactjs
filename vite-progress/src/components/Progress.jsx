import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import ProgressContent from "./ProgressContent";

const data = [
    {
        type: "select",
        title: "Are you an existing customer?",
        note: "Please select one.",
        anser: ["No, I want to open a new shop", "Yes I already have a shop"],
    },
    {
        type: "select",
        title: "Which do you want to start with us?",
        note: "Please select one.",
        anser: ["ETFPOS for now", "POS and ETFPOS"],
    },
    {
        type: "form",
        title: "Please provide your details",
        note: "",
        anser: [],
    },
    {
        type: "thanks",
        title: "Thank you",
        note: "We will contact you shortly",
        anser: [],
    },
];

const Progress = () => {
    const [formValue, setFormValue] = useState([]);

    // Khai báo số bước nhảy
    const step = 100 / data.length;

    // Khởi tạo progress
    const [progress, setProgress] = useState(step);

    // Tạo biến đếm để nhận dữ liệu cho ProgressContent
    const [count, setCount] = useState(0);

    const handleClick = (info) => {
        if (progress < 100) {
            setProgress((prevProgress) => prevProgress + step);
        }
        if (count < data.length - 1) {
            setCount(count + 1);
        }
        // setFormValue([...formValue, info]);
        setFormValue((prev) => [...prev, info]);
    };

    // useEffect(() => {
    //     console.log(formValue);
    // })

    return (
        <div className="progressBar">
            <ProgressBar progress={progress} />
            <span className="progressBarTitle">PROGRESS</span>
            <ProgressContent 
                onHandleClick={handleClick} 
                data={data} 
                count={count} 
                question={formValue}
            />
        </div>
    );
}

export default Progress;