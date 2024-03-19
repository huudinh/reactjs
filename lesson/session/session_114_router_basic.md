![Create-HTML-1](images/react-router.png) 

# RS114 Điều hướng cơ bản

### BrowserRouter

Component `<BrowserRouter />` là một router sử dụng HTML5 history API (chủ yếu là phương thức pushState cho phép thay đổi URL của trang mà không kích hoạt hành vi làm mới trình duyệt).

BrowserRouter giữ giao diện người dùng đồng bộ với URL, điều đó có nghĩa là URL sẽ luôn phản ánh đúng route hiện đang được hiển thị.

Có nhiều loại Router khác nhau nhưng bạn sẽ chủ yếu sử dụng BrowserRouter.

Để BrowserRouter hoạt động, bạn cần đóng gói toàn bộ ứng dụng trong component đó:

```
import {BrowserRouter} from "react-router-dom";

function App() {
    return <BrowserRouter>
        <div>The rest of your app goes here</div>
    </BrowserRouter>;
}
```

Việc có component `<BrowserRouter />` đóng gói toàn bộ ứng dụng là rất quan trọng. Trong các phần tiếp theo, bạn sẽ thấy rằng <Routes />, <Route /> và <Link /> sẽ được đặt bên trong <BrowserRouter></BrowserRouter>.

### Route

Component `<Route />` sẽ hiển thị một component khi trường thuộc tính path khớp với URL hiện tại trong trình duyệt.

Dưới đây là ví dụ về component `<Route />`:

```
<Route path="/about" element={<About />}></Route>
```

Component `<About />`, được cung cấp cho Route thông qua trường thuộc tính element, chỉ được hiển thị khi URL của trình duyệt khớp với đường dẫn /about.

Hãy xem ví dụ đầy đủ:

```
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return <BrowserRouter>
        <div>The rest of your app goes here</div>

        {/*We still need to wrap these two Route components with a <Routes />. Keep reading for now.*/}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
    </BrowserRouter>;
}
```

Khi người dùng điều hướng đến `/`, component `<Home />` sẽ được hiển thị.

Tương tự, khi người dùng điều hướng đến `/about`, component `<About />` sẽ được hiển thị.

Vì vậy, URL trình duyệt sẽ được so sánh với trường thuộc tính path của mỗi component `<Route />`. Dựa trên kết quả so khớp này, các route tương ứng sẽ được xác định và chỉ các component liên quan sẽ được hiển thị.

### Routes

Component `<Routes />` sẽ đóng gói nhiều component <Route /> và chỉ hiển thị <Route /> khớp với URL hiện tại trong trình duyệt.

```
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return <BrowserRouter>
        <div>The rest of your app goes here</div>

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </BrowserRouter>;
}
```

Điều quan trọng là phần tử `<Routes />` trực tiếp đóng gói các phần tử `<Route />`, tức là `<Route />` phải nằm trực tiếp bên trong trực tiếp` <Routes />`. Điều đó có nghĩa là bạn không nên có thành phần trung gian như `<div>` hoặc các phần tử khác ở giữa` <Routes />` và` <Route />`; nếu không, việc điều hướng có thể không hoạt động chính xác.

### Điều hướng một cách rõ ràng

```
<Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
</Routes>
```

nói đến việc React Router cho phép bạn định nghĩa các route một cách rõ ràng. Không có điều kiện if.

Bạn định nghĩa các route trong ứng dụng và cung cấp một path cho mỗi route. Và React Router sẽ biết route nào cần hiển thị.

### Tóm lại

- Component `<BrowserRouter />` là một router sử dụng HTML5 history API (sử dụng phương thức pushState).
- Bạn phải đóng gói toàn bộ ứng dụng trong component `<BrowserRouter />`.
- Component `<Route />` sẽ hiển thị một component khi trường thuộc tính path khớp với URL hiện tại trên trình duyệt.
- Component `<Routes />` sẽ đóng gói nhiều component `<Route />` và chỉ hiển thị `<Route />` đầu tiên khớp với URL hiện tại trên trình duyệt.
- Component `<Routes />` phải trực tiếp đóng gói các component `<Route />`.
- Điều hướng một cách rõ ràng có nghĩa là định nghĩa các `route` mà không có điều kiện `if`. Bằng cách cung cấp đường path, React Router sẽ biết route nào cần hiển thị.

*Bài tiếp theo [RS115 Liên kết điều hướng (Route link)](/lesson/session/session_115_router_link.md)*