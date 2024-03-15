![Create-HTML-1](images/state.png) 

# RS32 Update State

Chúng ta sẽ tìm hiểu cách cập nhật trạng thái và cách React & ReactDOM tự động cập nhật lại Component và hiển thị các cập nhật trên trình duyệt.

### Giới thiệu nhanh về Sự kiện

Sự kiện cơ bản nhất mà bạn có thể thực hiện trong React để cập nhật trạng thái khi người dùng nhấp chuột vào nút `<button>`.

Để thêm một sự kiện nhấp vào `<button>`, chúng ta phải thêm thuộc tính `onClick` (viết hoa chữ cái đầu) và gán nó cho hàm mũi tên: `() =>`

```
function Welcome() {
    return <button onClick={() => console.log("button was clicked")}>Click me</button>
}
```

Đoạn lệnh trên sẽ in ra button was clicked mỗi khi bạn nhấp chuột vào nút.

Hãy phân tích cú pháp onClick={() => console.log("button was clicked")}:

- `onClick={}` thuộc tính JSX với một biểu thức động.
- `onClick` thêm một trình lắng nghe sự kiện
- `() => console.log("button was clicked")` là một arrow function. Vì phần thân của arrow function chỉ có 1 dòng, chúng ta có thể bỏ qua `{}`. Bạn cũng có thể viết: `() => {console.log("button was clicked")}`

### Thay đổi trạng thái

Trạng thái là một biến mà chúng ta có thể cập nhật vào thời điểm nào đó trong tương lai.

Ví dụ, khi người dùng nhấp vào nút hoặc khi bạn nhận dữ liệu từ API.

Để cập nhật trạng thái, bạn luôn phải sử dụng hàm `'set'` nhận được từ `useState`.

Vì vậy nếu ta tạo một trạng thái gọi là `seconds` thì ta sẽ sử dụng hàm `setSeconds(newValue)` đã được destructure. Hãy sử dụng Component `Stopwatch` giống như trước đây:

```
import {useState} from "react";

function Stopwatch() {
    // hooks have to be at the top
    const [seconds, setSeconds] = useState(0);

    return (<>
        <h2>{seconds}</h2>
        {/* increment seconds state by 1, when you click on the button*/}
        <button onClick={() => setSeconds(seconds + 1)}>Click to add 1</button>
    </>);
}
```

Đoạn code cập nhật trạng thái bằng cách gọi `setSeconds()` và truyền vào đó giá trị mới của trạng thái.

Giá trị mới của trạng thái là `seconds + 1`, tương đương với: giá trị hiện tại + 1.

Điều đó xảy ra là vì `seconds` lưu giữ giá trị hiện tại của trạng thái, vì vậy `seconds + 1` sẽ tăng giá trị đó lên 1.

Có một cách hiệu quả hơn để cập nhật trạng thái đó là cập nhật trạng thái bằng hàm.

### Tóm lại

- `onClick={() => console.log("Hello World")}` là một sự kiện nhấp hoạt động trên `<button>` và in ra `"Hello World"`
- Bạn luôn phải sử dụng hàm `'setState'` nhận được từ `useState` (ví dụ: `setSeconds`, `setCount`)

*Bài tiếp theo [Counter](/lesson/session/session_033_state_counter.md)*