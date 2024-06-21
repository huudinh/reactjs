import { useState, useEffect, useRef } from "react";
const data = [
    "https://huudinh.github.io/examples/app_slide/images/1.jpg",
    "https://huudinh.github.io/examples/app_slide/images/2.jpg",
    "https://huudinh.github.io/examples/app_slide/images/3.jpg",
    "https://huudinh.github.io/examples/app_slide/images/4.jpg",
];

const Slider = () => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const slideTrack = useRef<HTMLDivElement>(null);
    const slides = data;
    const slideWidth = 250;
    console.log(slideTrack);
    
    
    

    useEffect(() => {
        animateSlider();
        console.log(currentPosition);
    },[]);

    const animateSlider = () => {
        setCurrentPosition((pre) => {
            return pre - 2;
        }); // Speed of the slider

        // Reset position if it reaches the end of the first set of slides
        if (currentPosition <= -slideWidth * (slides.length / 2) + slideWidth) {
            setCurrentPosition(0);
        }

        // slideTrack.current.style.transform = `translateX(${currentPosition}px)`;
        // requestAnimationFrame(animateSlider);
    };

    return (
        <div className="slide-track" ref={slideTrack}>
            {data.map((item, index) => (
                <div className="slide" key={index}>
                    <img src={item} />
                </div>
            ))}
        </div>
    );
};

export default Slider;
