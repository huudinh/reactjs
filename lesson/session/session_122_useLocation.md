![Create-HTML-1](images/react-router.png) 

# RS122 useLocation

Nếu bạn muốn chạy một đoạn code mỗi khi React Router điều hướng đến một URL mới thì bạn sẽ làm như thế nào?

Bạn có thể làm điều đó bằng cách sử dụng hook useLocation.

Trước tiên, hãy xem xét một số trường hợp sử dụng của hook useLocation. Trường hợp sử dụng dụng phổ biến nhất là gửi sự kiện pageview đến dịch vụ phân tích, chẳng hạn như Google Analytics. Lưu ý rằng từ Google Analytics 4, tính năng này sẽ được tự động triển khai bởi Google Analytics. Tuy nhiên, chúng ta vẫn sẽ học về hook useLocation vì bạn có thể cần sử dụng nó cho mục đích khác.

Ví dụ: tích hợp với các thư viện và dịch vụ phân tích khác, chạy logic có điều kiện cho một số route, v.v

### Hook useLocation

Hook useLocation trả về thông tin liên quan đến route hiện đang hoạt động.

Dưới đây là cách bạn sử dụng hook useLocation:

```
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import {createRoot} from "react-dom/client";

function App() {
    const location = useLocation();
    console.log(location.pathname);

    return <Routes>
        {/* routes here... */}
    </Routes>
}

createRoot(document.querySelector("#react-root")).render(<BrowserRouter><App /></BrowserRouter>);
```

Biến location sẽ là một đối tượng chứa pathname.

Sau đó, bạn có thể sử dụng location.pathname để biết route hiện tại mà người dùng đang duyệt. Ví dụ: / hoặc /about, v.v., tùy thuộc vào các route hiện có.

Giống như hook useNavigate, bạn cần đảm bảo rằng code được chạy trong một component được đóng gói bởi `<BrowserRouter />`, nếu không, hook sẽ không hoạt động.

### Thay đổi vị trí

Bằng cách sử dụng useLocation và cách lấy pathname hiện tại, bạn có thể chạy một đoạn code mỗi khi React Router điều hướng đến một URL mới bằng cách đóng gói code bằng useEffect với một phụ thuộc trên location. Cách triển khai như sau:

```
import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import {createRoot} from "react-dom/client";

function App() {
    const location = useLocation();

    // run a piece of code on location change
    useEffect(() => {
        console.log(location.pathname);
        // send it to analytic, or do some conditional logic here
    }, [location]);

    return <Routes>
        {/* routes here... */}
    </Routes>
}

createRoot(document.querySelector("#react-root")).render(<BrowserRouter><App /></BrowserRouter>);
```

Code trong hook useEffect sẽ chạy mỗi khi đối tượng location thay đổi, điều này xảy ra mỗi khi người dùng điều hướng đến một route mới.

### Tóm lại

- Hook useLocation() trả về thông tin liên quan đến route hiện đang hoạt động.

- Hook useLocation() trả về pathname của route.

- Bằng cách kết hợp useLocation() với useEffect(), bạn có thể chạy một đoạn code mỗi khi người dùng điều hướng đến một route mới.

*Bài tiếp theo [RS123 useLocation](/lesson/session/session_123_useLocation.md)*