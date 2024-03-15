![Create-HTML-1](images/effect.webp) 

# RS75 Effect Time

Giả sử chúng ta muốn xây dựng component `<Clock />` hiển thị thời gian hiện tại.

Chúng ta sẽ bắt đầu bằng cách tạo một trạng thái tên là `date` và khởi tạo giá trị ban đầu là một thực thể mới của `Date`. Đó là `new Date()`.

Điều này sẽ tạo ra một đối tượng `date` mà ta có thể gọi `.toLocaleTimeString()` để nhận được chuỗi thời gian, ví dụ: `09:08:43` (định dạng hh:mm:ss).

Nếu bạn muốn xem thử code trong JavaScript trước khi chuyển sang React, hãy quan sát dưới đây:

```
const date = new Date();
console.log(date.toLocaleTimeString()); // 09:08:43 (depending on the time of the day)
```

Hãy tạo component React làm điều tương tự:

```
import {useState, useEffect} from "react";

function Clock() {
    const [date, setDate] = useState(new Date());

    return <h2>{date.toLocaleTimeString()}</h2>
}
```

Bây giờ, component này sẽ hiển thị ngày và giờ mà nó được hiển thị lần đầu và không cập nhật lại thời gian nữa.

Chúng ta cần cập nhật trạng thái `date` mỗi 1 giây với một thực thể mới của `Date`.

Vì vậy trong JavaScript:

```
let date = new Date();
console.log(date.toLocaleTimeString());
setInterval(() => {
    date = new Date(); // get a new instance of date every second
    console.log(date.toLocaleTimeString()); // shows the time every second
}, 1000);
```

Lưu ý: `setInterval` cho phép bạn gọi một hàm sau mỗi X mili giây. Trong ví dụ này, chúng ta đặt là 1000 mili giây để `setInterval` gọi hàm sau mỗi 1 giây.

Tuy nhiên, setInterval không đảm bảo hoạt động chính xác 100%; nếu trình duyệt đang bận với các tác vụ khác thì việc gọi hàm có thể bị trễ hơn 1000 mili giây. Vì vậy, đồng hồ sẽ không hoàn toàn chính xác.

Bây giờ với React, chúng ta sẽ làm cho component gọi useEffect để khởi tạo interval:

```
useEffect(() => {
    setInterval(() => {
        // set a new instance of date every second
        setDate(new Date()); 
    }, 1000);
    // TODO: still need to cleanup the side effect
}, []);
```

Chúng ta sử dụng `useEffect` để thiết lập hiệu ứng chỉ chạy một lần bằng cách cung cấp `[]` (mảng rỗng) làm tham số thứ hai cho `useEffect`.

Bạn có thể hiểu đoạn code trên như sau:

1. React hiển thị nội dung trong thẻ `<h2></h2>` cùng với thời gian.
2. Sau khi hiển thị lần đầu tiên, `useEffect` chỉ chạy hàm bên trong nó một lần duy nhất.
3. Hàm đó gọi `setInterval` để lên lịch gọi hàm `setDate(new Date())` mỗi giây một lần.
4. Mỗi lần gọi `setDate()`, component sẽ được hiển thị lại, hiển thị thời gian được cập nhật trên màn hình.

### Dọn dẹp hiệu ứng

Đoạn code trên gây ra lỗi rò rỉ bộ nhớ vì chúng ta chưa xóa `interval` được tạo với `setInterval`. Dưới đây là cách giải quyết vấn đề trong JavaScript:

```
let date = new Date();
console.log(date.toLocaleTimeString());
// save intervalId in a variable so we can clear it later on
const intervalId = setInterval(() => {
    date = new Date();
    console.log(date.toLocaleTimeString());
}, 1000);

// when you want to clear the interval:  
clearInterval(intervalId);
```

### Tóm lại

- `const date = new Date();` tạo ra một thực thể mới của Date.
- `date.toLocaleTimeString()` hiển thị thời gian hiện tại theo định dạng hh:mm:ss (có thể khác nhau tùy thuộc vào cấu hình ngôn ngữ/vùng địa lý trên máy của bạn).
- `setInterval` lên lịch gọi một hàm sau mỗi X mili giây.
- `clearInterval(intervalId)` cho phép bạn xóa một `interval` được tạo ra bằng `setInterval`.

*Bài tiếp theo [RS76 Effect Control](/lesson/session/session_076_effect_control.md)*