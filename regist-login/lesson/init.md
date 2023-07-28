## Login & Regist Component / Init App

### 1. Bắt đầu làm App

**1 Khởi tạo App**

- Chọn ổ cứng và thư mục để lưu trữ App, Sử dụng Terminal gõ lệnh `npx create-react-app regist-login`. Trong đó `regist-login` là tên thư mục App

**2 Làm việc với file index.js**

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
  ```
  <Router>
    <App />
  </Router>
  ```
**2 Làm việc với file App.js**

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
