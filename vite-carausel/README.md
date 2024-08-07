# React Carausel Basic

### Các bước thực hiện

Lên cấu trúc dự án sử dụng Vite để tối ưu tốc độ

Cài đặt thư viện SASS để dễ dàng style ứng dụng

Xây dựng Component GlobalStyle để nhúng các css thư viện hỗ trợ việc css

Xây dựng file data lưu trữ dữ liệu các ảnh

Xây dựng components Carausel hoàn thành dự án

### Cấu trúc Project

Dựa vào cấu trúc có sãn của Vite ta sẽ xây dựng thêm 2 thư mục

- Thư mục api: chứa file data lưu trữ dữ liệu các hình ảnh của carausel

- Thư mục components: chứa 2 components GlobalStye và Carausel

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
```

### Câu hỏi cuối bài

Chúc mừng bạn đã hoàn thành code slide cơ bản siêu dễ, bạn có thể chạy ứng dụng `npm run dev` để trải nghiệm sản phẩm của mình. 

Sau đây là các câu hỏi liên quan lến phần kỹ thuật xây dựng component Carausel.

#### Làm sao để slide có thể chuyển động được ?

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

#### Làm sao để biết khi nào click hết ảnh ?

Biểu thức `slideIndex < totalSlides - itemsToShow` trả về giá trị `false` thì ảnh đã được duyệt hết

Trong đó 

- slideIndex là state lưu trữ index của ảnh, khi ứng dụng được load thì giá trị của slideIndex là 0, mỗi lần click vào mũi tên thì ta tăng slideIndex lên 1

- totalSlides là state lưu trữ số lượng ảnh trong slide

- itemsToshow là biến lưu trữ số lượng ảnh trên màn hình 

```
const itemsToShow = window.innerWidth >= 600 ? 3 : 1;
```

Nếu màn hình lớn hơn hoặc bằng 600px thì hiển thị 3 ảnh, nếu màn hình nhỏ hơn 600 thì hiển thị 1 ảnh

#### Làm sao để thay đổi màu của mũi tên khi click hết ảnh ?

Ta cần khai báo state `const [nextBtnDisable, setNextBtnDisable] = useState(false);` để lưu trữ trạng thái hết ảnh, khi ứng dụng được khởi tạo thì `nextBtnDisable` có giá trị là `false`

```
 <div 
    className={nextBtnDisable ? 'carausel__next disable' : 'carausel__next'} 
    onClick={nextSlide}                        
>
    ❯
</div>
```

Kiểm tra trạng thái của state `nextBtnDisable` nếu có giá trị `true` thì gắn thêm class `disable` class này sẽ thay đổi màu sắc của button ngược lại thì không cho hiển thị 

Khi click đến ảnh cuối cùng thì ta update state nextBtnDisable `setNextBtnDisable(true);` trong sự kiện xử lý nextSlide  

Để có thể cho màu sắc trở lại button Next thì ta update state nextBtnDisable `setNextBtnDisable(false);` trong sự kiện xử lý prevSlide 

#### Làm sao để vào mobile chỉ hiển thị duy nhất 1 ảnh ?

Để vào Mobile chỉ hiển thị duy nhất 1 ảnh ta lấy kích thước của ảnh gán bằng kích thước hiển thị của slide

```
<img 
    ref={imgRef} 
    src={item.src} 
    alt={item.tag} 
    style={{width: checkMobile && mobileWidth}}
    width="223" 
    height="150" 
/>
```

Biểu thức `width: checkMobile && mobileWidth` sẽ check nếu `checkMoblie` mang giá trị `true` thì sẽ trả về giá trị `mobileWidth`

Trong đó `mobileWidth` là state sẽ nhận giá trị của `slide` qua biểu thức `setMobileWidth(slideRef.current.clientWidth);`

Trong đó `slideRef.current.clientWidth` là độ rộng của slide
