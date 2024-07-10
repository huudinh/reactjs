# React Carausel Basic

### Các bước thực hiện

Lên cấu trúc dự án sử dụng Vite để tối ưu tốc độ

Cài đặt thư viện SASS để dễ dàng style ứng dụng

Xây dựng Component GlobalStyle để nhúng các css thư viện hỗ trợ việc css

Xây dựng file data lưu trữ dữ liệu các ảnh

Xây dựng components Carausel hoàn thành dự án

### Ý tưởng tiến hành component Carausel

Gồm có 2 mũi tên trái phải, và có 3 ảnh ở giữa 2 mũi tên

Sự kiện cho mũi tên phải:

- Khi click vào mũi tên phải thì ảnh chuyển động sang trái

- Khi click đến ảnh cuối cùng thì hiển thị thông báo, đồng thời thay đổi màu cho mũi tên để người dùng dễ nhận biết đã hết ảnh chạy

Sự kiện cho mũi tên trái:

- Khi click vào mũi tên trái thì ảnh chuyển động sang phải

- Khi click đến ảnh cuối cùng thì hiển thị thông báo, đồng thời thay đổi màu cho mũi tên để người dùng dễ nhận biết đã đến ảnh đầu tiên và không còn ảnh nữa

### Tiến hành dự án và tạo dự án với Vite

Để bắt đầu với Vite, bạn cần đảm bảo rằng NodeJS đã được cài đặt trên máy tính.

Sau đó, mở cửa sổ terminal và chạy lệnh sau:

```
npm create vite@latest
```

Chọn tên dự án `vite-carausel` và chọn loại `React/Javascript` 

Tiến hành cài đặt npm và chạy ứng dụng

```
cd vite-carausel
npm install     
npm run dev 
```

### Tạo file api/data.jsx

```
export const data = [
    { author: "The Lazy Artist Gallery", tag: "People", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/1.jpg?raw=true" },
    { author: "Daria Shevtsova", tag: "Food", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true" },
    { author: "Kasuma", tag: "Animals", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true" },
    { author: "Dominika Roseclay", tag: "Plants", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true" },
    { author: "Scott Webb", tag: "Plants", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true" },
    { author: "Jeffrey Czum", tag: "People", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true" },
    { author: "Dominika Roseclay", tag: "Food", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true" },
    { author: "Valeria Boltneva", tag: "Animals", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true" }
]
```

### Tạo Components GlobalStyle

Cài đặt thư viện sass

```
npm install sass
```

Tao file /components/GlobalStyle/GlobalStyle.scss

```
@import url('https://huudinh.github.io/assets/sass/lib.min.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;300&display=swap');
@import url('https://huudinh.github.io/assets/sass/icon.min.css');
@font-face {
    font-family: 'fontello';
    src: url(https://huudinh.github.io/assets/fonts/fontello.woff2) format("woff2"),
    url(https://huudinh.github.io/assets/fonts/fontello.woff) format("woff");
}
```

Tao file /components/GlobalStyle/index.jsx

```
import './GlobalStyle.scss';

function GlobalStyle({children}) {
    return children;
}

export default GlobalStyle;
```

### Sửa Component App

```
import Carausel from "./components/Carausel";
import GlobalStyle from "./components/GlobalStyles"

function App() {

  return (
    <GlobalStyle>
        <Carausel/>
    </GlobalStyle>
  )
}

export default App
```
Chú ý code trên sẽ chưa chạy luôn khi bạn gõ lệnh

```
npm run dev
```
Vì ta chưa xây dụng component Carausel


### Tạo component Carausel

Để làm component Carausel bạn cần 

- CSS UI giao diện
- Đọc dữ liệu từ file data hiển thị lên UI
- Tạo Function xử lý Next, Back slide
- Gán sự kiện xử lý Next, Back vào 2 nút mũi tên

Tạo file /components/Carausel/Carausel.scss

```
.carausel {
    margin: 40px 0;
    position: relative;
    max-width: 800px;

    &__title {
        color: #166734;
        font-weight: 600;
        font-size: 1.2rem;
        margin-bottom: 15px;
    }

    &__boxSlide {
        position: relative;
        overflow: hidden;
        margin: 10px 10px 10px 30px;
    }

    &__slide {
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
        scroll-snap-type: x mandatory;
        width: 100%;
    }

    &__pic {
        img {
            width: 245px;
            height: auto;
            border-radius: 5px;
        }
    }

    &__controls {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        width: 100%;
        position: absolute;
        top: 32%;
    }

    &__prev,
    &__next {
        cursor: pointer;
        font-size: 25px;
        color: #18b452;
        -moz-user-select: none !important;
        -webkit-touch-callout: none!important;
        -webkit-user-select: none!important;
        -khtml-user-select: none!important;
        -moz-user-select: none!important;
        -ms-user-select: none!important;
        user-select: none!important;
        &.disable{
            color:gray;
            cursor:auto;
        }
    }
    &__next{
        margin-right: -12px;
    }
    @media (max-width:600px) {
        &__boxSlide {
            margin: 10px 30px;
        }
        &__next{
            margin-right: 10px;
        }
    }
}
```

Tạo file /components/Carausel/index.jsx

```
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
```

### Câu hỏi cuối bài

Chúc mừng bạn đã hoàn thành code slide cơ bản siêu dễ, bạn có thể chạy ứng dụng `npm run dev` để trải nghiệm sản phẩm của mình. 

Sau đây là các câu hỏi liên quan lến phần kỹ thuật xây dựng component Carausel.

#### Làm sao để slide có thể chuyển động được

Slide chuyển động được là do code sau

```
<div 
    className='carausel__slide'
    style={{
        transform: `translateX(${moveSlide}px)`,
        transition: 'transform 0.5s ease-in-out'
    }}
>
```
Với việc sử dụng thuộc tính css transform đặt ở `div` cha của slide sẽ giúp cho anh được chạy sang trái hay sang phải phụ thuộc vào giá trị bên trong thuộc tính `translateX`

Sử dụng `transition` giúp chuyển động của slide có hiệu ứng mượt mà hơn
