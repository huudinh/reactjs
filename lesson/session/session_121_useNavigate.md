![Create-HTML-1](images/react-router.png) 

# RS121 useNavigate

### Điều hướng route

Trong một số tình huống, bạn có thể cần di chuyển giữa các trang trong ứng dụng React một cách tự động.

Ví dụ: bạn gửi một yêu cầu fetch và dựa trên kết quả đó, bạn muốn chuyển hướng người dùng đến một trang cụ thể.

- Chuyển hướng người dùng đến trang /login nếu họ chưa đăng nhập.
- Chuyển hướng người dùng đến trang /dashboard sau khi yêu cầu fetch() cho đăng nhập thành công.

Để làm điều đó, bạn cần sử dụng hook useNavigate(), nó trả về một phương thức mà bạn có thể gọi để điều hướng đến một route mới một cách tự động. Hãy xem ví dụ sau:

```
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function HelpPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = window.localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, []);

    return <h2>Help page</h2>;
}
```

Trong ví dụ này, chúng ta kiểm tra xem localStorage có chứa giá trị cho khóa isLoggedIn hay không. Nếu không, chúng ta điều hướng người dùng trở lại trang /login bằng cách gọi navigate("/login").

### Hook useNavigate chỉ hoạt động trong BrowserRouter

Bạn cần gọi hook useNavigate() trong một component được lồng trong `<BrowserRouter />`, nếu không, hook sẽ không hoạt động.

Do đó đoạn code dưới đây SẼ KHÔNG hoạt động:

```
import React from "react";
import {BrowserRouter, useNavigate} from "react-router-dom";

function App() {
    // ❌ This breaks because the component was not wrapped by BrowserRouter, but its children are.
    const history = useNavigate();

    return <BrowserRouter>
        {/* ... */}
    </BrowserRouter>;
}
```

Như bạn thấy, hook useNavigate() sẽ không hoạt động trong component App() vì nó không được đóng gói bởi `<BrowserRouter/>`. Tuy nhiên, tất cả các component con bên trong App sẽ được đóng gói bởi `<BrowserRouter />`, vì vậy bạn có thể sử dụng useNavigate() trong các component con đó.

Nếu bạn muốn sử dụng useNavigate() trong component `<App />`, bạn cần tạo một component cha đóng gói `<App />` và di chuyển `<BrowserRouter />` vào component cha đó.

### Khả năng tiếp cận

Tất cả các liên kết nên được tạo bằng cách sử dụng component `<Link />` vì chúng sẽ được hiển thị thành một thẻ `<a>`, giúp đảm bảo khả năng tiếp cận cho người dùng.

Không thay thế các component `<Link />` thông thường bằng phương thức .push() của useNavigate().

Bạn chỉ nên sử dụng phương thức .push() khi không thể sử dụng `<Link />`. Cụ thể là khi việc chuyển hướng phải dựa trên một số logic nào đó, chẳng hạn như kết quả của fetch().

### Tóm lại

- Chuyển hướng lập trình là phương pháp chuyển hướng dựa trên một số điều kiện kiểm tra, chẳng hạn như dựa trên kết quả của fetch() hoặc một biểu thức điều kiện.

- Bạn có thể thay đổi route hiện tại một cách tự động thông qua lập trình bằng cách sử dụng hook useNavigate() của React Router mà bạn có thể gọi với đường dẫn mà bạn muốn điều hướng đến.

- Để đảm bảo khả năng tiếp cận, hãy luôn ưu tiên sử dụng `<Link />`.

*Bài tiếp theo [RS122 useLocation](/lesson/session/session_122_useLocation.md)*