# React Carausel Basic

### Tạo dự án với Vite

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