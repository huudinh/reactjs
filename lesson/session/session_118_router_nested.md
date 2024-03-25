![Create-HTML-1](images/react-router.png) 

# RS118 Nested routes

### Nested routes là gì?

Thông thường trên một số trang web, khi chọn trang about (giới thiệu), bạn sẽ được chuyển hướng đến route /about, sau đó trang sẽ hiển thị ảnh bìa, tiêu đề About, và bạn có thể chọn một trong hai trang con:

- Chọn About us (Về chúng tôi) sẽ chuyển hướng bạn đến /about/us/
- Chọn About the Team (Về Đội ngũ) sẽ chuyển hướng bạn đến /about/team/

Trang Về chúng tôi sẽ hiển thị nội dung giống như trang /about nhưng có thêm phần Về chúng tôi ở dưới nội dung hiện tại.

Tương tự, trang Về Đội ngũ sẽ hiển thị nội dung giống như trang /about nhưng có thêm phần Về Đội ngũ ở dưới nội dung hiện tại.

Đây là một ví dụ về các route lồng nhau (nested routes). Điều này là bởi vì trang /about/us đang hiển thị hai route cùng một lúc. Nó đang hiển thị nội dung từ route /about cũng như nội dung từ route /about/us.

### Quá trình làm việc với các route lồng nhau trong React Router

- Bắt đầu bằng cách nhúng các định nghĩa `<Route />` bên trong một phần tử `<Route />` đã tồn tại.
- Sau đó, bạn cần thêm và sử dụng một component `<Outlet />` trong route sẽ chứa các route lồng nhau.
- Cuối cùng, bạn cần có các liên kết `<Link />` trỏ đến những route này để xem/kiểm thử chúng.

Ví dụ có component <About /> được hiển thị trên /about:

```
import {BrowserRouter, Routes, Route} from "react-router-dom";

function About() {
  return <>
        <h1>About</h1>

    </>;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about/" element={<About />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
```

Chúng ta muốn làm cho component `<About />` hiển thị các route lồng nhau. Nghĩa là mỗi khi đường dẫn bắt đầu bằng /about, chúng ta muốn hiển thị component `<About />` cùng với một số component con. Điều này cho phép ta luôn hiển thị `<h1>About</h1>` trên các trang con như /about/us và /about/team.

### Khai báo các `<Route />` lồng nhau

Đầu tiên, chúng ta cần định nghĩa hai route lồng nhau nằm trong route cha /about. Đó là `<Route path="us" />` và `<Route path="team" />`. Chú ý rằng các đường dẫn là tương đối vì chúng ta sẽ nhúng chúng trong `<Route path="/about/" />`. Hai component `<Route />` này trở thành component con của `<Route path="/about" />` như sau:

```
<Route path="/about/" element={<About />}>
    {/* about/us */}
    <Route path="us" element={<h2>About us</h2>}>
    </Route>
    {/* about/team */}
    <Route path="team" element={<h2>About the Team</h2>}>
    </Route>
</Route>
```

Comment ở trên cho thấy rằng path="us" được lồng trong path="/about/" tạo thành đường dẫn cuối cùng của route đó là /about/us. Tương tự, path="team" trở thành /about/team.

Bạn không nên bắt đầu khai báo các route lồng nhau bằng ký tự /. Nếu không, bạn sẽ phải lặp lại đường dẫn /about. Vì vậy, cả path="us" và path="/about/us" là hợp lệ. 

### Sử dụng <Outlet />

Bây giờ, chúng ta cần chỉ định cho component `<About />` hiển thị các route lồng nhau. Để làm điều đó, chúng ta cần thêm component Outlet từ react-router-dom và sử dụng nó trong `<About />`. Điều này sẽ xác định vị trí mà các route lồng nhau sẽ hiển thị trong JSX:

```
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

function About() {
  return <>
        <h1>About</h1>

        {/* Render nested routes for /about/... here */}
        <Outlet />
    </>;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about/" element={<About />}>
                    {/* about/us */}
                    <Route path="us" element={<h2>About us</h2>}>
                    </Route>
                    {/* about/team */}
                    <Route path="team" element={<h2>About the Team</h2>}>
                </Route>
            </Route>
          </Routes>
        </BrowserRouter>
    );
}
```

Giả sử bạn đặt `<Outlet />` trước `<h1>About</h1>`. Trong trường hợp đó, nội dung của các route lồng nhau (`<h2>About us</h2>` hoặc `<h2>About the Team</h2>`) sẽ hiển thị trước h1.

### Thêm các phần tử <Link />

Cuối cùng, chúng ta cần thêm các phần tử `<Link />` để xem và kiểm thử các route lồng nhau:

```
import {BrowserRouter, Routes, Route, Outlet, Link} from "react-router-dom";

function About() {
  return <>
      {/* Content always rendered when the URL starts with /about */}
      <h1>About</h1>
      <Link to="us">About us</Link> | 
      <Link to="team">About the team</Link>

      <Outlet />
    </>;
}

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/about/" element={<About />}>
                {/* about/us */}
                <Route path="us" element={<h2>About us</h2>}>
                </Route>
                {/* about/team */}
                <Route path="team" element={<h2>About the Team</h2>}>
                </Route>
            </Route>
            </Route>
          </Routes>
        </BrowserRouter>
    );
}
```

### Tóm lại

- Các route lồng nhau cho phép bạn hiển thị nhiều route cùng một lúc. Ví dụ, /about/us sẽ hiển thị cả route /about và /about/us cùng một lúc.
- Quá trình làm việc với các route lồng nhau trong React Router bao gồm ba bước:
  - Khai báo các `<Route />` lồng nhau.
  - Sử dụng `<Outlet />` để xác định vị trí mà các route lồng nhau sẽ hiển thị trong component cha.
  - Thêm các phần tử `<Link />` để xem và kiểm thử các route lồng nhau.

*Bài tiếp theo [RS119 useOutletContext](/lesson/session/session_119_useOutletContext.md)*