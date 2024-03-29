![Create-HTML-1](images/state.png) 

# RS34 Closures trong JavaScript

### Vậy closures là gì?

Closure là một khái niệm trong JavaScript nghe có vẻ phức tạp, nhưng trên thực tế thì nó khá đơn giản. 

Closure là khi hàm bên trong có quyền truy cập vào các biến của hàm bên ngoài. Hãy xem ví dụ dưới đây:

```
function getUser() {
    const name = "Sam";

    function getWelcomeMessage() {
        return `Hello ${name}`;
    }

    return {
        name: name,
        message: getWelcomeMessage()
    }
}
```

Chúng ta có một closure ở đây vì chúng ta có hàm `getWelcomeMessage` bên trong hàm `getUser`.

Giải thích đoạn code:

- Hàm `getUser` định nghĩa biến `name` có giá trị là `"Sam"`.

- Bên trong hàm đó, chúng ta định nghĩa hàm `getWelcomeMessage` trả về `Hello ${name}`.

- Sau đó, chúng ta `return` một đối tượng chứa `name` và `message`, trong đó `message` là kết quả trả về bởi `getWelcomeMessage()`.

Như bạn thấy, biến name có thể được truy cập bởi hàm `getWelcomeMessage` vì `getWelcomeMessage` được định nghĩa bên trong `getUser`.

Vì vậy, vì `name` được định nghĩa trong `getUser`, nó có thể được truy cập bởi bất kỳ hàm nào được định nghĩa bên trong `getUser`, trong ví dụ này là `getWelcomeMessage`.

Vì `getWelcomeMessage` được định nghĩa trong `getUser`, bạn có thể sử dụng biến `name`.

Và đó chính là khái niệm `closure`!

Lưu ý rằng `closure` có thể áp dụng cho bất kỳ hàm nào, không nhất thiết phải là một hàm được nghĩa bên trong hàm khác, ví dụ:

```
const name = "Sam";

function getUser() {
    return name; // this works because the function has access to the outer scope.
}
```

Tuy nhiên đoạn code trên không nên được sử dụng trong các dự án thực tế trong react.

### Closure áp dụng cho Arrow Function

Closure cũng có thể áp dụng cho Arrow Function, vì vậy nếu bạn viết lại code:

```
const getUser = () => {
    const name = "Sam";

    const getWelcomeMessage = () => {
        return `Hello ${name}`;
    }

    return {
        name: name,
        message: getWelcomeMessage()
    }
}
```

Và chúng ta sẽ nhận được kết quả tương tự.

### Tại sao cần sử dụng closures?

Nhìn chung, closures được sử dụng khi chúng ta muốn định nghĩa một hàm mới trong khi vẫn có quyền truy cập vào các biến được định nghĩa trong hàm bên ngoài.

Nghe có vẻ như closures là một "tính năng" mà bạn quyết định sử dụng, nhưng thực tế, closures được tạo ra tự động khi bạn định nghĩa một hàm.

### Sử dụng tên biến duy nhất

Câu hỏi đặt ra là: Điều gì sẽ xảy ra nếu có một biến đã tồn tại với cùng tên trong ngữ cảnh hiện tại của hàm?

Câu trả lời là JavaScript sẽ bắt đầu tìm kiếm trong phạm vi hiện tại trước khi đi ra bên ngoài hàm. Nó tiếp tục tìm kiếm cho đến khi đạt đến phạm vi toàn cục, tức là đối tượng window.

Nói chung, bạn nên sử dụng tên biến duy nhất để tránh vấn đề này. Dưới đây là một ví dụ sử dụng cùng một tên biến:

```
let test = 1;

function doSomething() {
    return test;
}

doSomething(); // 1
```

Bây giờ, hãy định nghĩa biến test có giá trị là 2 bên trong hàm:

```
let test = 1;

function doSomething() {
    let test = 2;
    return test;
}

doSomething(); // 2
```

### Note

- Chúng ta cần tìm hiểu về closures vì khi làm việc với event và state, chúng ta cần có các trình xử lý sự kiện có thể truy cập vào trạng thái.

Nói một cách ngắn gọn, chúng ta cần có khả năng viết code như sau:

```
import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrementClick() {
        setCount(count + 1);
    }
    
    return (<>
        <div>{count} times clicked</div>
        <button onClick={handleIncrementClick}>Add 1</button>
    </>);
}
```

handleIncrementClick là một hàm được định nghĩa bên trong hàm Counter.

Và hàm handleIncrementClick có quyền truy cập vào biến count của state vì nó được định nghĩa bên trong Counter.

Đó là lý do tại sao chúng ta cần biết về closures.

Tóm gọn khái niệm Closures trong một câu:

Khi một hàm chứa hàm khác, hàm bên trong có quyền truy cập vào các biến của hàm bên ngoài.

### Tóm lại

- Closures là khi một hàm bên trong có quyền truy cập vào các biến của hàm bên ngoài.
- Hàm trong JavaScript có quyền truy cập vào ngữ cảnh bên ngoài của chúng. Đây được gọi là closures.
- Closures là điều bạn nhận được khi định nghĩa một hàm; không phải là điều mà bạn phải "kích hoạt" hoặc quyết định sử dụng.
- Các hàm được định nghĩa bên trong một hàm khác có thể sử dụng các biến được định nghĩa trong hàm bên ngoài.

*Bài tiếp theo [RS35 Event](/lesson/session/session_035_event.md)*