## Login & Regist Component / Init App

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

- Chọn ổ cứng và thư mục để lưu trữ App, Sử dụng Terminal gõ lệnh `npx create-react-app regist-login`. Trong đó `regist-login` là tên thư mục App

<a name="index"></a>
**2. Làm việc với file index.js**

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

- Cài đặt `Router@6` để cấu hình đường dẫn đến các màn hình App

- Impornt thư viện của router để sử dụng ` import { BrowserRouter as Router } from 'react-router-dom';`

- Components của Router phải lồng bên ngoài của components App

<a name="app"></a>
**3 Làm việc với component App.js**

```
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Regist from './screens/Regist';
import Main from './screens/Main';
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

- Trong thư mục `screens` Tạo các components Home, Login, Regist, Main

- Import các screen tương tứng vào trong file App.js

<a name="global-style"></a>
**4. Làm việc với component GlobalStyles**

- Trong thư mục `components` tạo components GlobalStyles index.js và GlobalStyles.scss (components này sẽ chứa tất cả các css khai báo chung của app)

- index.js
  
  ```
  import './GlobalStyle.scss';
  
  function GlobalStyle({children}) {
      return children;
  }
  
  export default GlobalStyle;
  ```

- GlobalStyle.scss
  
  ```
  @import url('https://huudinh.github.io/assets/sass/lib.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;300&display=swap');
  @import url('https://huudinh.github.io/assets/sass/icon.min.css');
  @font-face {
      font-family: 'fontello';
      src: url(https://huudinh.github.io/assets/fonts/fontello.woff2) format("woff2"),
      url(https://huudinh.github.io/assets/fonts/fontello.woff) format("woff");
  }
  .form {
      margin: 20vh auto;
      max-width: 340px;
      width: 100%;
  
      &Title {
          text-align: center;
          margin: 30px 0;
      }
  
      &Link {
          padding: 12px;
          font-size: 12px;
          font-style: italic;
          cursor: pointer;
          text-align: center;
      }
  }
  a{
      color:blue;
      &:hover{
          text-decoration: underline;
      }
  }
  
  // Data table
  .dlink {
      text-decoration: none !important;
      color: #03a9f3 !important;
  }
  
  .data-table-extensions-filter {
      border: 1px solid lightgray;
      border-radius: 50px;
      padding: 3px 5px;
      width: 70%;
  }
  
  .first {
      padding-right: 10px !important;
  }
  
  .filter-text {
      border: none !important;
      width: 80%;
  }
  .data-table-extensions{width:290px}
  label.icon {
      margin: 1px 0 0 5px;
  }
  code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
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

*Bài tiếp theo [Màn hình Login](/regist-login/lesson/login.md)*
