![Create-HTML-1](images/effect.webp) 

# RS70 Cleanup Timer

### Dọn dẹp bộ đếm thời gian

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

## Các Câu Hỏi Thường Gặp Khi Phỏng Vấn (FAQ)

#### Câu 1: Tại sao cần dọn dẹp bộ đếm thời gian trong React useEffect?

Khi sử dụng setTimeout trong useEffect mà không dọn dẹp, bộ đếm thời gian có thể tiếp tục chạy ngay cả khi component đã bị hủy gắn kết (unmounted) hoặc hiển thị lại. Điều này có thể dẫn đến rò rỉ bộ nhớ, lỗi không mong muốn hoặc các hành vi khó dự đoán, đặc biệt khi component được cập nhật liên tục. Việc dọn dẹp đảm bảo rằng các tài nguyên như bộ đếm thời gian được giải phóng đúng cách khi không còn cần thiết, giúp duy trì hiệu suất và sự ổn định của ứng dụng.

#### Câu 2: Làm cách nào để dọn dẹp bộ đếm thời gian được tạo bằng setTimeout trong JavaScript thông thường?

Trong JavaScript thuần túy, hàm setTimeout trả về một timerId duy nhất. Bạn có thể lưu trữ timerId này vào một biến. Để hủy bỏ bộ đếm thời gian trước khi nó thực thi, bạn chỉ cần gọi hàm clearTimeout() và truyền timerId đó làm đối số. Ví dụ:

```js
const timerId = setTimeout(() => {

  console.log("Đây là thông báo không bao giờ xuất hiện");

}, 1000);

clearTimeout(timerId); // Điều này sẽ hủy bỏ bộ đếm thời gian
```

#### Câu 3: Tại sao React lại dọn dẹp hiệu ứng sau mỗi lần hiển thị lại (re-render)?

React được thiết kế để tự động dọn dẹp các hiệu ứng sau mỗi lần hiển thị lại (và khi component bị xóa khỏi DOM). Mặc dù thoạt nghe có vẻ không hiệu quả, nhưng kỹ thuật này giúp tránh rò rỉ bộ nhớ và các lỗi nhỏ khó phát hiện. Bằng cách luôn dọn dẹp và thiết lập lại các hiệu ứng, React đảm bảo rằng hiệu ứng luôn hoạt động với các props và state mới nhất, từ đó giảm thiểu các vấn đề về đồng bộ hóa và cạnh tranh dữ liệu.

#### Cầu 4: Sự khác biệt giữa hiệu ứng được dọn dẹp và không được dọn dẹp trong useEffect là gì?

Hiệu ứng không được dọn dẹp: Là những hiệu ứng mà callback của useEffect không trả về bất kỳ hàm nào. React sẽ không thực hiện bất kỳ hành động dọn dẹp tự động nào cho các hiệu ứng này.

Hiệu ứng được dọn dẹp: Là những hiệu ứng mà callback của useEffect trả về một hàm. React sẽ lưu trữ hàm này và gọi nó khi component sắp hiển thị lại hoặc bị hủy gắn kết, cho phép bạn thực hiện các tác vụ dọn dẹp cần thiết.


*Bài tiếp theo [Lắng nghe sự kiện](/lesson/session/session_071_effect_listeners.md)*