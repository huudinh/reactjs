![Create-HTML-1](images/react-router.png) 

# RS119 useOutletContext

### Truyền dữ liệu từ component cha chứa Outlet

Chúng ta sẽ bắt đầu với một ví dụ cơ bản với biến data, chúng ta muốn truyền biến này cho các component con được hiển thị trong `<Outlet />`.

```
function About() {
    // we want to make this available to the <Outlet /> sub-components
    const data = {
        someValue: 123
    };

    return <>
        {/* Content always rendered when the URL starts with /about */}
        <h1>About</h1>
        <Link to="us">About us</Link> | 
        <Link to="team">About the team</Link>

        <Outlet />
    </>;
}
```

Để làm điều đó, chúng ta có thể sử dụng thuộc tính context trên component `<Outlet />`, nó sẽ tự động tạo ra context. Đây là một trường hợp sử dụng phổ biến, vì vậy nhóm React Router đã tích hợp tính năng này vào thư viện.

```
function About() {
    // we want to make this available to the <Outlet /> sub-components
    const data = {
        someValue: 123
    };

    return <>
        {/* Content always rendered when the URL starts with /about */}
        <h1>About</h1>
        <Link to="us">About us</Link> | 
        <Link to="team">About the team</Link>

        // pass it to Outlet as a context
        <Outlet context={data} />
    </>;
}
```

Thuộc tính context này chỉ có sẵn trong component` <Outlet />` của React Router. Chúng ta không cần phải tạo ngữ cảnh bằng cách thủ công bởi React Router đã tự động làm điều này và tạo một context có thể được truy cập và sử dụng bởi các component con của `<Outlet />`. 

### Hook useOutletContext

Đây là lúc hook useOutletContext trở nên hữu ích. Chúng ta có thể sử dụng nó trong bất kỳ component nào cần được hiển thị bên trong <Outlet />. Ví dụ, trong component AboutUs:

```
import {useOutletContext} from "react-router-dom";

function AboutUs() {
    const context = useOutletContext();
    console.log(context); // {someValue: 123}
    console.log(context.someValue); // 123

    // ...
}
```

### Xử lý lỗi 404

Đối với các dự án lớn, việc xử lý các route không tồn tại là rất quan trọng. Đôi khi chúng được gọi là “404 route” vì mã trạng thái HTTP 404 được trả về khi không tìm thấy tài liệu trên máy chủ. (Nếu bạn là người yêu thích mèo, có thể bạn sẽ thích trang http.cat)

Khi không có route nào khớp với URL hiện tại của trình duyệt, chúng ta sẽ tạo một route đại diện cho các trường hợp không khớp như sau:

```
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<p>Landing page here</p>}></Route>
            <Route path="/products" element={<p>Products page here</p>}></Route>
            <Route path="*" element={<p>404 page here</p>}></Route>
        </Routes>
    </BrowserRouter>
}
```

Bây giờ khi người dùng truy cập vào /, họ sẽ thấy Landing page here. Tương tự, khi họ truy cập vào /products, họ sẽ thấy Products page here. Và đối với tất cả các liên kết khác, họ sẽ thấy 404 page here.

Tại sao lại như vậy? Đó là vì `<Route>` mà chúng ta đã tạo cho trang 404 có trường thuộc tính path được đặt thành *. React Router sẽ kích hoạt route này chỉ khi không có route nào khớp với URL hiện tại.

Thứ tự của Route 404 không quan trọng. Bạn có thể đặt nó ở bất kỳ vị trí nào trong phần khai báo `<Routes>...</Routes>` như một component con trực tiếp.

### Tóm lại

- Chúng ta thường cần truyền dữ liệu cho `<Outlet>`. Dữ liệu này có thể truy cập được bởi các component con được hiển thị bên trong Outlet. React Router sẽ tự động tạo một Context khi bạn sử dụng thuộc tính context trên component `<Outlet />`.

- Để đọc dữ liệu từ context của Outlet, bạn phải sử dụng hook useOutletContext.

- Một route với path="*" chỉ được kích hoạt khi không tìm thấy route nào khác. Route này thường được sử dụng để tạo trang 404.


*Bài tiếp theo [RS120 NavLink](/lesson/session/session_120_NavLink.md)*