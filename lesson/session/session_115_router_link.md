![Create-HTML-1](images/react-router.png) 

# RS115 Liên kết điều hướng (Route link)

### Component Link

Chúng ta thường sử dụng thẻ `anchor` để liên kết đến một trang mới. 


Ví dụ: `<a href="/about">About us</a>`. Tuy nhiên, liên kết này sẽ thực hiện điều hướng trang, điều đó có nghĩa là ứng dụng React sẽ phải khởi động lại. Điều này bởi vì trình duyệt nghĩ rằng chúng ta đang điều hướng đến một trang hoàn toàn mới, vì vậy nó thực hiện một yêu cầu HTTP tới `/about`, sau đó trình duyệt phải phân tích HTML và các đoạn mã script, v.v.

Ưu điểm của React Router là chúng ta có thể thực hiện điều hướng ngay tức thì. Đó là lý do tại sao chúng ta cần thay thế liên kết `<a>` bằng component `<Link />` do React Router cung cấp. Dưới đây là cách thực hiện:

```
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Routes and Route goes here*/}
    </BrowserRouter>
  );
}
```

Component `<Link />` nhận một prop `to`. Khi người dùng nhấp vào liên kết, React Router sẽ chuyển hướng đến đường dẫn được cung cấp bởi prop `to`.

Phần tử `<Link />` này sẽ hiển thị một phần tử `<a>` (vì lý do liên quan đến khả năng tiếp cận, sẽ được giải thích dưới đây), nhưng một số trình xử lý sự kiện sẽ chỉ định React Router thực hiện chuyển hướng ngay lập tức thay vì chuyển hướng trang. Vì vậy, React Router thực hiện `event.preventDefault()` để ngăn trang không chuyển hướng đến một trang mới. Bạn không cần phải làm điều đó; React Router đã xử lý việc này một cách tự động và khai báo!

### Khả năng tiếp cận

Khi chúng ta phụ thuộc nhiều vào JavaScript để xây dựng ứng dụng web, việc đảm bảo khả năng tiếp cận là rất quan trọng. Phần tử `<Link />` theo mặc định sẽ đảm bảo khả năng tiếp cận; điều đó là bởi vì nó cuối cùng sẽ hiển thị một thẻ anchor `<a>`.

Điều này cho phép người dùng sử dụng trình đọc màn hình biết rằng đây là một liên kết và họ có thể nhấp vào nó như một liên kết bình thường.

Bạn có thể nhận thấy rằng ở đây sử dụng các phần tử HTML5 `<nav></nav>` và `<main></main>`. Dưới đây là lý do:

Phần tử HTML `<nav>` đánh dấu một phần của trang có chức năng cung cấp các liên kết điều hướng, trong tài liệu hiện tại hoặc tới các tài liệu khác. Các ví dụ điển hình là menu, bảng mục lục và chỉ mục.

Bằng cách đặt các phần điều hướng của ứng dụng bên trong phần tử `<nav>`, bạn đang giúp người dùng sử dụng trình đọc màn hình và các phần mềm hỗ trợ tiếp cận khác dễ dàng tìm kiếm và sử dụng các liên kết trong trang web.

Phần tử HTML `<main>` đánh dấu phần nội dung quan trọng nhất của `<body>` trong tài liệu. Khu vực nội dung chính bao gồm nội dung liên quan trực tiếp hoặc nội dung mở rộng về chủ đề chính của tài liệu hoặc chức năng chính của ứng dụng.

Bằng cách đặt các component `<Routes />` và `<Route />` bên trong phần tử `<main></main>`, bạn đang thông báo cho trình duyệt, công cụ tìm kiếm, v.v. rằng đây là nơi chứa nội dung chính trên trang.

### Tóm lại

- Phần tử `<Link />` hiển thị một phần tử `<a>` (vì lý do liên quan đến khả năng tiếp cận), nhưng một số trình xử lý sự kiện sẽ chỉ định React Router thực hiện chuyển hướng tức thì thay vì chuyển hướng trang.
- Một thực hành tốt là đóng gói liên kết bằng phần tử `<nav>`.
- Một thực hành tốt khác là đóng gói các component `<Routes />` và` <Route />` bằng `<main>`.

*Bài tiếp theo [RS116 Tham số URL](/lesson/session/session_116_router_url_param.md)*