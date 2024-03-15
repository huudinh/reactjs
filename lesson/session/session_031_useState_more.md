![Create-HTML-1](images/state.png) 

# RS31 Khởi tạo State

Bây giờ bạn đã biết cách thêm hàm useState, hãy tạo biến trạng thái đầu tiên.

Để làm điều đó, chúng ta cần gọi hàm `useState` với cú pháp `useState(initial_value)`.

initial_value là giá trị khởi tạo ban đầu của trạng thái.

Ví dụ, để tạo component `<Stopwatch />`, chúng ta cần một biến trạng thái `seconds` và biến trạng thái đó sẽ bắt đầu từ 0.

Điều đó có nghĩa là giá trị khởi tạo là 0.

Vì vậy, bạn tạo trạng thái bằng cú pháp sau: `useState(0)`.

### useState trả về cái gì?

`useState` trả về một mảng gồm 2 phần tử:

1. phần tử đầu tiên là giá trị hiện tại của trạng thái
2. phần tử thứ hai là một hàm cập nhật trạng thái 

Vì vậy, thay vì viết:

```
const result = useState(0)
const seconds = result[0];
const setSeconds = result[1];
```

Chúng ta sẽ sử dụng cú pháp array destructuring:

```
const [seconds, setSeconds] = useState(0);
```

`seconds` hiện tại là một số có giá trị 0 và `setSeconds` là một hàm cập nhật trạng thái `seconds`.

Điều quan trọng là đặt tên các thuộc tính được destructure như sau:

1. Phần tử đầu tiên nên lấy tên của trạng thái (trong ví dụ này là seconds)
2. Phần tử thứ hai có phần đầu là `set` và theo sau là tên trạng thái viết hoa chữ cái đầu (trong ví dụ này là `setSeconds`)

Điều này quan trọng vì khi các component trở nên phức tạp hơn, chúng ta cần biết rằng `seconds` là trạng thái và `setSeconds` là hàm cập nhật trạng thái của seconds.

### Ví dụ đầy đủ

Hãy xem một ví dụ sử dụng trạng thái đầy đủ:

```
import {useState} from "react";

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);

    return <div>{seconds}</div>
}
```

Để ý đoạn code gọi useState(0) bên trong component Stopwatch.

Các điểm quan trọng cần lưu ý:

1. Bạn chỉ nên gọi `useState` bên trong component, không phải bên ngoài.
2. `useState` nên là thành phần đầu tiên được gọi bên trong hàm (xem phần giải thích bên dưới)

Lưu ý, vì trạng thái `seconds` là một biến, bạn có thể sử dụng nó như một biểu thức trong JSX: `<div>{seconds}</div>`.

seconds sẽ bằng 0 vì đó là giá trị khởi tạo mà ta đã truyền vào.

### Tóm lại

- Hàm `useState()` nhận `initial_value` là đối số duy nhất.
- Hàm `useState()` trả về một mảng gồm 2 phần tử
- Luôn destructure `useState` thành `state` và `setState`, trong đó `state` là tên của trạng thái
- Giá trị mặc định của biến trạng thái được trả về bởi `useState` sẽ giống với `initial_value` truyền vào `useState()`.

*Bài tiếp theo [RS32 Update State](/lesson/session/session_032_update_state.md)*