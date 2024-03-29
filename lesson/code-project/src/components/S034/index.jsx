// Process

import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      // Closure ở đây cho phép truy cập biến `time` 
      // từ scope bên ngoài
      
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(timerId);
  }, []); 
  
  // Mảng rỗng đảm bảo useEffect chỉ chạy một lần

  return <div>Thời gian: {time} giây</div>;
};

export default TimerComponent;

// Input

<TimerComponent />

// Output
{
    <>
        <div>Thời gian: 0 giây</div>
        {/* Thời gian bắt đầu từ 0 và tăng dần: 0, 1, 2, .... */}
    </>

}