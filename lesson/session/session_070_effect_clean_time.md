![Create-HTML-1](images/effect.webp) 

# RS70 Dọn dẹp bộ đếm thời gian

Xem ví dụ sau:

```
import {useEffect} from "react";

function App() {
    useEffect(() => {
        setTimeout(() => {
            console.log("This will run in 1 second");
        }, 1000);
    });

    return <h1>App</h1>;
}
```

Chúng ta cần một cách để dọn dẹp bộ đếm thời gian. JavaScript cung cấp hàm `clearTimeout(timerId)` để làm điều này, trong đó `timerId` là tham số.

`timerId` có thể được lưu trữ bằng cách gán giá trị trả về của hàm `setTimeout` cho một biến.

Trong JavaScript thông thường, để tạo một bộ đếm thời gian và sau đó hủy bỏ nó ngay lập tức, bạn làm như sau:

```
const timerId = setTimeout(() => {
    console.log("this is supposed to run in 1 second");
}, 1000);

clearTimeout(timerId); // this cancels the timer
```

Đoạn code này sẽ hủy bỏ bộ đếm thời gian và chúng ta sẽ không nhìn thấy bất cứ thứ gì trên console.

Bây giờ chúng ta đã biết rằng nếu chúng ta cần React hủy bỏ bộ đếm thời gian khi component đang được hiển thị lại, chúng ta phải trả về một hàm từ `useEffect`. Hãy thử triển khai:

```
import {useEffect} from "react";

function App() {
    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log("This will run in 1 second");
        }, 1000);

        return () => {
           // when component gets unmounted, clear the timer
           clearTimeout(timerId);
        };
    });

    return <h1>App</h1>;
}
```

Mỗi khi component bị hủy gắn kết (hoặc hiển thị lại), React sẽ gọi hàm mà chúng ta trả về từ useEffect.

> Bạn không nên đặt return () => {...} bên trong setTimeout. Mục tiêu không phải là trả về từ setTimeout mà là từ useEffect.

#### Cách làm này nghe có vẻ không hiệu quả...

Bạn có thể tự hỏi tại sao React dọn dẹp hiệu ứng sau mỗi lần hiển thị lại. Kỹ thuật này nghe có vẻ không hiệu quả nhưng nó giúp bạn tránh rò rỉ bộ nhớ và những lỗi nhỏ khó phát hiện.

Việc dọn dẹp này cũng xảy ra khi component bị xóa khỏi DOM. 

#### Tùy chọn: đặt tên cho hàm dọn dẹp

Bạn cũng có thể đặt tên cho hàm dọn dẹp. Điều này hoàn toàn tùy chọn. Việc đặt tên sẽ nhắc nhở cho bạn rằng hàm này chỉ được gọi khi dọn dẹp. Tên đó cũng sẽ xuất hiện trong ngăn xếp cuộc gọi khi xảy ra lỗi - rất hữu ích cho việc gỡ lỗi. Bạn cũng có thể đặt tên mô tả chức năng, chẳng hạn như `cleanupTimer`, để biết hàm này sẽ dọn dẹp bộ đếm thời gian. Ví dụ:

```
useEffect(() => {
    const timerId = setTimeout(() => {
        console.log("This will run in 1 second");
    }, 1_000);
    return function cleanupTimer() {
        clearTimeout(timerId);
    };
});
```
Điều này hoàn toàn tùy chọn và bạn có thể quyết định việc có đặt tên cho các hàm hay không.

### Dọn dẹp so với không dọn dẹp

Sự khác biệt giữa hiệu ứng được dọn dẹp và hiệu ứng không được dọn dẹp chỉ là bạn có trả về một hàm dọn dẹp hay không.

Vì vậy, các hiệu ứng không trả về hàm là những hiệu ứng mà React sẽ không dọn dẹp.

Trong khi các hiệu ứng trả về hàm là những hiệu ứng mà React sẽ dọn dẹp khi hiển thị lại.

### Cách thức hoạt động

React sẽ lưu trữ định nghĩa hàm mà bạn trả về từ `useEffect` khi nó hiển thị component. Trong ví dụ trên, đó là:

```
() => {
    clearTimeout(timerId);
};
```

Giá trị của timerId có thể được truy cập bên trong hàm này vì nó là một closure bên trong hàm cha của nó.

Vì vậy, React lưu trữ định nghĩa hàm này nhưng không gọi nó ngay lập tức.

Nó chỉ gọi hàm này khi sắp diễn ra việc hiển thị lại (hoặc gỡ bỏ phần tử khỏi DOM).

### Quá trình dọn dẹp chạy sau mỗi lần hiển thị lại

Lý do tại sao hàm dọn dẹp được gọi sau mỗi lần hiển thị lại là để tránh các lỗi.

Đây là thiết kế của React nhằm giảm số lượng lỗi và tình trạng rò rỉ bộ nhớ.

Tuy nhiên, trong một số tình huống, bạn có thể cần chạy effect và hàm dọn dẹp trong những trường hợp cụ thể.

### Tóm lại

- `const timerId = setTimeout(() => {}, 1_000)` sẽ lưu trữ `timerId` cho phép bạn dọn dẹp sau này.
- `clearTimeout(timerId)` hủy bỏ bộ đếm thời gian được khởi tạo bởi `setTimeout`.
- Bạn có thể đặt tên tùy chọn cho hàm dọn dẹp.
- Các hiệu ứng KHÔNG trả về hàm là những hiệu ứng mà React sẽ không dọn dẹp.
- Các hiệu ứng trả về hàm là những hiệu ứng mà React sẽ dọn dẹp sau mỗi lần hiển thị lại.
- Hàm dọn dẹp chạy sau mỗi lần hiển thị lại. Bạn sẽ có thể ngăn nó chạy sau mỗi lần hiển thị lại.

*Bài tiếp theo [Lắng nghe sự kiện](/lesson/session/session_071_effect_listeners.md)*