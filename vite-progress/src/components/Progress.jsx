import { useState } from 'react';
import ProgressBar from './ProgressBar';
import ProgressContent from "./ProgressContent";


const Progress = (props) => {
    const {data} = props;

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