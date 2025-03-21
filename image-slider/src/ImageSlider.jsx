import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3); // Giá trị mặc định

  // Cập nhật số lượng slide hiển thị theo kích thước màn hình
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 900) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow(); // Gọi ngay khi component mount

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Thay đổi theo kích thước màn hình
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true, // Cho phép kéo mượt
    variableWidth: true, // Hiển thị theo vị trí kéo
    // centerMode: true, // Giữ slide giữa trung tâm
    beforeChange: () => setIsDragging(false),
  };

  const images = [
    "https://benhvienthammykangnam.com.vn/cp/hub/media/images/page3-p1.jpg",
    "https://benhvienthammykangnam.com.vn/cp/hub/media/images/page3-p2.jpg",
    "https://benhvienthammykangnam.com.vn/cp/hub/media/images/page3-p3.jpg",
    "https://benhvienthammykangnam.com.vn/cp/hub/media/images/page3-p4.jpg",
    "https://benhvienthammykangnam.com.vn/cp/hub/media/images/page3-p5.jpg",
  ];

  const handleMouseDown = () => setIsDragging(false);
  const handleMouseMove = () => setIsDragging(true);
  const handleMouseUp = () => setTimeout(() => setIsDragging(false), 100);
  const handleClick = (e) => { if (isDragging) e.preventDefault(); };

  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Slick Slider</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
            style={{
              cursor: isDragging ? "grabbing" : "pointer",
              width: "300px", // Định nghĩa kích thước ảnh thay đổi
              padding: "5px",
            }}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
