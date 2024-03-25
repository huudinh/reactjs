![Create-HTML-1](images/react-router.png) 

# RS120 NavLink

### Nổi bật liên kết

Khi người dùng đang truy cập một route của ứng dụng, một tính năng phổ biến là làm nổi bật liên kết tương ứng trong menu để cho người dùng biết trang nào đang được xem.

Giả sử bạn có một menu điều hướng với hai liên kết:

- Home chuyển hướng người dùng đến /
- About chuyển hướng người dùng đến /about

Bạn có thể tự động làm nổi bật liên kết About với React Router khi người dùng đang truy cập route /about. Tương tự, bạn có thể làm nổi bật liên kết Home khi người dùng đang truy cập route /. Bạn có thể làm tất cả điều đó mà không cần viết các câu lệnh điều kiện và logic phức tạp. Dưới đây là cách thực hiện:

```
import {NavLink} from "react-router-dom";

function getClassName({isActive}) {
    if (isActive) {
        return "active"; // CSS class
    }
}

function App() {
    return <ul>
        <li>
            <NavLink to="/" className={getClassName}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={getClassName}>About</NavLink>
        </li>
    </ul>
}
```

Đoạn code trên yêu cầu viết một số code CSS cho lớp active. Hãy làm cho liên kết của trang hiện tại trong menu được làm nổi bật bằng chữ đậm:

```
.active {
    font-weight: bold;
}
```

Thuộc tính className của phần tử NavLink có thể nhận một hàm thay vì một chuỗi. Khi bạn định nghĩa một hàm cho thuộc tính className, hàm sẽ nhận một đối tượng làm tham số với trường thuộc tính isActive được đặt trên đối tượng. Chúng ta đã destructure đối tượng đó ngay trong tham số hàm, đó là lý do tại sao chúng ta có {isActive} trong tham số.

Sau đó, chúng ta kiểm tra xem isActive có giá trị truthy hay không. Trong trường hợp đó, chúng ta trả về tên lớp CSS là active.

isActive trả về giá trị boolean khi đường dẫn hiện tại của React Router khớp với thuộc tính to của NavLink.

Bây giờ, React Router sẽ tự động thêm lớp active vào `<NavLink />` tương ứng với route hiện tại.

### Phiên bản code ngắn gọn hơn

Nếu bạn sử dụng toán tử ba ngôi, đoạn code trên có thể được viết ngắn gọn hơn. 

Toán tử ba ngôi cho phép bạn thay thế câu lệnh if/else bằng cách sử dụng condition ? truthy expression : falsy expression.

Đoạn code JavaScript sau:

```
function getClassName({isActive}) {
    if (isActive) {
        return "active";
    } else {
        return "";
    }
}
```

có thể được thay bằng đoạn code sau:

```
function getClassName({isActive}) {
    return isActive ? "active" : "";
}
```

Bạn chỉ cần đảm bảo đặt từ khóa return bên ngoài toán tử ba ngôi. Khi isActive có giá trị truthy, biểu thức sau dấu ? sẽ được thực thi ("active"). Ngược lại, biểu thức sau dấu : sẽ được thực thi ("").

Với điều trên, chúng ta có thể hoàn toàn loại bỏ phần định nghĩa hàm riêng biệt getClassName và viết isActive ? "active" : "" bên trong một hàm mũi tên ({isActive}) => isActive ? "active" : "".

Nếu bạn cảm thấy khó hiểu, bạn có thể chọn cách thông thường là định nghĩa một hàm riêng biệt.

Kết quả cuối cùng như sau:

```
import {NavLink} from "react-router-dom";

function App() {
    return <ul>
        <li>
            <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
        </li>
    </ul>
}
```

### Link vs. NavLink

Bạn có thể nhận thấy là ở đây chúng ta đang sử dụng NavLink thay vì Link.

Điều này rất quan trọng vì component `<Link />` không hỗ trợ truyền một định nghĩa hàm vào trường thuộc tính className.

Một lỗi phổ biến là sử dụng ClassName với định nghĩa hàm trên component `<Link />`, nhưng điều đó sẽ làm code không hoạt động!

### Tóm lại

- Thuộc tính className, khi sử dụng trên NavLink, cho phép bạn định nghĩa một hàm để thiết lập lớp CSS dựa trên việc isActive là true khi route hiện tại khớp với prop to của NavLink.


*Bài tiếp theo [RS121 useNavigate](/lesson/session/session_121_useNavigate.md)*