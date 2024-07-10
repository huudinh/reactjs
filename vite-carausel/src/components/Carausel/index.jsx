import { useEffect, useRef, useState } from "react";
import './Carausel.scss';
import { data } from "../../api/data.jsx"

const Carausel = () => {
    const imgRef = useRef();
    const slideRef = useRef();
    // console.log(data);

    // Lưu trữ số lượng Slide
    const totalSlides = data.length;

    // Kiểm tra màn hình lưu trữ số slide xuất hiện
    const itemsToShow = window.innerWidth >= 600 ? 3 : 1;

    // Tạo state Lưu trữ kích thước 1 ảnh cần hiển thị
    const [imgSize, setImgSize] = useState();
    
    useEffect(()=>{
        setImgSize(imgRef.current.clientWidth + 10)
    },[]);
    
    // Tạo state lưu trữ slide được index
    const [slideIndex, setSlideIndex] = useState(0);

    // Tạo sate moveSlide để xác định khoảng cách dịch chuyển
    const [moveSlide, setMoveSlide] = useState(0);

    useEffect(() => {
        console.log(moveSlide);
    })

    // Hàm xử lý Next Slide
    const nextSlide = () => {
        if (slideIndex < totalSlides - itemsToShow) {
            // Update Index
            setSlideIndex((prev) => {
                return prev + 1;
            });

            setMoveSlide((prev) => {
                console.log(prev);
                return  prev - imgSize;
            })

            // showSlides(moveSlide);
            // prevBtn.classList.remove('disable');
           
        } else {
            // nextBtn.classList.add('disable');
            alert('Bạn vui lòng chọn mũi tên quay lại');
        }
        // alert('next');
    }

    // Hàm xử lý Back Slide
    const prevSlide = () => {
        alert('back');
    }

    return (
        <div className='container'>
            <h1>Carausel</h1>
            <div className='carausel'>
                <div 
                    className='carausel__boxSlide' 
                    ref={slideRef}
                >
                    <div 
                        className='carausel__slide'
                        style={{
                            transform: `translateX(${moveSlide}px)`,
                            transition: 'transform 0.5s ease-in-out'
                        }}
                    >
                        {data.map((item, index) => {
                            return (
                                <div className="carausel__pic" key={index}>
                                    <img ref={imgRef} width="223" height="150" src={item.src} alt={item.tag} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="carausel__controls">
                    <div className="carausel__prev" onClick={prevSlide}>
                        ❮
                    </div>
                    <div className="carausel__next" onClick={nextSlide}>
                        ❯
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carausel;