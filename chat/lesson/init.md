## Chat / Init App

### Mục Lục

- [1. Khởi tạo App](#init)
- [2. Làm việc với file index.js](#index)
- [3. Làm việc với component App.js](#app)
- [4. Làm việc với component GlobalStyles](#global-style)
- [5. Làm việc với component Home](#home)
- [6. Làm việc với component DefaultLayout](#default-layout)

### Bắt đầu làm App

<a name="init"></a>
**1. Khởi tạo App**
- Cài đặt VSCode / NodeJS
- Chọn ổ cứng và thư mục để lưu trữ App
Sử dụng Terminal gõ lệnh `npx create-react-app chat`. 
Trong đó `chat` là tên thư mục App

- Chay ứng dụng (Gõ lệnh):
`cd chat` chuyển vào thư mục App
`npm start` chạy ứng dụng

<a name="index"></a>
**2. Làm việc với file `index.js`**

- Gõ lệnh `npm install react-router-dom@6`: để cấu hình đường dẫn đến các màn hình App

- `import { BrowserRouter as Router } from 'react-router-dom';` Khai báo vào đầu file index.js (Impornt thư viện của router để sử dụng)

- Components của Router phải lồng bên ngoài của components App

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
```





<a name="app"></a>
**3 Làm việc với component `App.js`**

- Tạo file 
  + src/components/GlobalStyles/index.js
  + src/screen/Login/index.js
  + src/screen/Regist/index.js
  + src/screen/Main/index.js
  + src/screen/Home/index.js

- Trong thư mục `screen` `components` Tạo các components Home, Login, Regist, Main, ...

- Import các screen tương tứng vào trong file App.js

```
import { Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import Login from './screen/Login';
import Regist from './screen/Regist';
import Main from './screen/Main';
import GlobalStyle from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyle>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/regist' element={<Regist />} />
          <Route path='/main' element={<Main />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </GlobalStyle>
  );
}

export default App;
```



<a name="global-style"></a>
**4. Làm việc với component GlobalStyles**
- Component này sẽ chứa tất cả các css khai báo chung của app

- Tạo file `src/components/GlobalStyles/GlobalStyles.scss`

- Gõ lệnh `npm i sass`: cài đặt trình biên dịch sass sang css 

- Viết code vào file `/src/components/GlobalStyles/index.js`
  
  ```
  import './GlobalStyle.scss';
  
  function GlobalStyle({children}) {
      return children;
  }
  
  export default GlobalStyle;
  ```
- Viết code vào file `/src/components/GlobalStyles/GlobalStyle.scss`

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
<a name="home"></a>
**5. Làm việc với component Home**
```
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

const Home = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate('/login');
    }, [navigate]);

    return (
        <DefaultLayout>
            <h1>Home</h1>
        </DefaultLayout>
    )
}

export default Home;
```

- Component `Home` nằm trong thự mục `screens/Home/index.js`, đây là thư mục đầu tiên khi bạn truy cập vào hệ thống

- Component `Home` sẽ nằm trong component `DefaultLayout`

- Khi truy cập vào Component Home thì ứng dụng sẽ tự động điều hướng sang companent Login

<a name="default-layout"></a>
**6. Làm việc với component DefaultLayout**

```
const DefaultLayout = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    );
}

export default DefaultLayout;
```

- Component `DefaultLayout` nằm trong thự mục `layout/DefaultLayout.js`

- Component `DefaultLayout` giúp chúng ta có thể mở rộng hệ thống, dễ dàng chia ứng dụng thành nhiều Layout gọi đến các component

*Bài tiếp theo [Màn hình Regist](/chat/lesson/regist.md)*
