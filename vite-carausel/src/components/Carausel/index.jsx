import { useEffect, useRef, useState } from "react";
import './Carausel.scss';
import { data } from "../../api/data.jsx"

const Carausel = () => {
    // Khai báo Ref cho slide và ảnh
    const slideRef = useRef();
    const imgRef = useRef();

    // Lưu trữ số lượng Slide
    const totalSlides = data.length;

    // Kiểm tra màn hình lưu trữ số slide xuất hiện
    const itemsToShow = window.innerWidth >= 600 ? 3 : 1;

    // Tạo state Lưu trữ kích thước 1 ảnh cần hiển thị
    const [imgSize, setImgSize] = useState();
       
    // Tạo state lưu trữ slide được index
    const [slideIndex, setSlideIndex] = useState(0);

    // Tạo state moveSlide để xác định khoảng cách dịch chuyển
    const [moveSlide, setMoveSlide] = useState(0);

    // Tạo state nextBtnDisable lưu trang thái hết ảnh
    const [nextBtnDisable, setNextBtnDisable] = useState(false);

    // Tạo state prevBtnDisable lưu trang thái về ảnh đầu
    const [prevBtnDisable, setPrevBtnDisable] = useState(false);

    // Tạo state checkMobile
    const [checkMobile, setCheckMobile] = useState(false);
    const [mobileWidth, setMobileWidth] = useState();

    // Gọi hàm check Responsive khi load và Resize ứng dụng
    useEffect(()=>{    
        screenCheck();
        window.addEventListener("resize", function () {
            screenCheck();
        });
    },[imgSize]);

    // Tạo hàm kiểm tra Mobile & PC
    const screenCheck = () => {
        setImgSize(imgRef.current.clientWidth + 10);
        setMobileWidth(slideRef.current.clientWidth);

        // Reset slideIndex, moveSlide về 0 khi resize trình duyệt hoặc load lại ứng dụng
        setMoveSlide(0);
        setSlideIndex(0);
        setNextBtnDisable(false);

        // Kiểm tra trạng thái mobile
        if(window.innerWidth < 600){
            setCheckMobile(true);
        } else {
            setCheckMobile(false);
        }
    }

    // Hàm xử lý Next Slide
    const nextSlide = () => {
        if (slideIndex < totalSlides - itemsToShow) {
            // Update Index
            setSlideIndex((prev) => {
                return prev + 1;
            });
            
            setMoveSlide((prev) => {
                return  prev - imgSize;
            });

            setPrevBtnDisable(false);
           
        } else {
            setNextBtnDisable(true);
            alert('Bạn vui lòng chọn mũi tên quay lại');
        }
    }

    // Hàm xử lý Back Slide
    const prevSlide = () => {
        if (slideIndex > 0) {
            // Update Index
            setSlideIndex((prev) => {
                return prev - 1;
            });
            
            setMoveSlide((prev) => {
                return  prev + imgSize;
            })

            setNextBtnDisable(false);
           
        } else {
            setPrevBtnDisable(true);
            alert('Bạn vui lòng chọn mũi tên xem tiếp');
        }
    }

    return (
        <div className='container'>
            <h1>Carausel</h1>
            <div className='carausel'>
                <div className='carausel__boxSlide'>
                    <div 
                        className='carausel__slide'
                        style={{
                            transform: `translateX(${moveSlide}px)`,
                            transition: 'transform 0.5s ease-in-out'
                        }}
                        ref={slideRef}
                    >
                        {data.map((item, index) => {
                            return (
                                <div className="carausel__pic" key={index}>
                                    <img 
                                        ref={imgRef} 
                                        src={item.src} 
                                        alt={item.tag} 
                                        style={{width: checkMobile && mobileWidth}}
                                        width="223" 
                                        height="150" 
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="carausel__controls">
                    <div 
                        className={prevBtnDisable ? 'carausel__prev disable' : 'carausel__prev'}
                        onClick={prevSlide}
                    >
                        ❮
                    </div>
                    <div 
                        className={nextBtnDisable ? 'carausel__next disable' : 'carausel__next'} 
                        onClick={nextSlide}                        
                    >
                        ❯
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carausel;