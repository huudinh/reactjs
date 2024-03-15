![Create-HTML-1](images/fetch.webp) 

# RS93 Fetch với async/await

Đây là một chương tùy chọn. Nếu bạn đã học về `async/await` và muốn sử dụng trong React, bạn có thể giải quyết các bài tập trong chương này bằng `async/await`.

async/await là cú pháp rút gọn cho promise, cho phép bạn biểu diễn logic của promise như một tập hợp các hoạt động chạy tuần tự theo từng dòng. Nhưng đừng quên rằng async/await vẫn chạy các promise thực tế và gọi .then() cho bạn.

Sử dụng promise truyền thống:

```
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        });
    }, []);
}
```

Để sử dụng `async/await`, chúng ta cần đặt tiền tố `async` trước khai báo hàm để có thể sử dụng từ khóa `await`. Tuy nhiên, hàm `async` là một hàm trả về `Promise`.

Điều này không phù hợp với cách `React` xử lý `useEffect`. `React` chỉ muốn bạn trả về một hàm `cleanup` (dọn dẹp).

Vì vậy, đoạn code dưới đây KHÔNG hoạt động:

```
useEffect(async () => {
    // this will break
});
```

Thay vào đó, chúng ta cần giữ `useEffect` như một hàm thông thường và tạo một hàm khác bên trong nó có thể được gọi ngay lập tức:

```
useEffect(() => {
    (() => {
        // this is a function that will execute immediately
    })();
});
```

Hãy phân tích hàm:

```
// 1) function definition:
() => {
    
}

// 2) wrap it with parentheses
(() => {

})

// 3) call this function with ()
(() => {

})();
```

Lý do ta thực hiện tất cả các bước trên là vì ta muốn biến hàm mới thành hàm `async` trả về một `promise`, mà không cần trả về bất cứ thứ gì từ hàm được truyền vào `useEffect`.

Bây giờ chúng ta cần làm cho hàm mới trở thành hàm `async` bằng cách thêm từ khóa `async` vào đầu hàm:

```
useEffect(() => {
    (async () => {
        // we can use await here ✅
    })();
});
```

Và cuối cùng, với mọi hàm trả về `promise` (ví dụ: `fetch` và `response.json()`), chúng ta có thể thêm từ khóa `await` vào trước và loại bỏ `.then()`.

```
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        (async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data);
        })();
    }, []);
}
```


### Tóm lại

- Để sử dụng `await`, chúng ta cần đặt nó bên trong hàm `async`.
- Bạn không thể biến một hàm được truyền vào `useEffect` thành hàm `async` vì điều đó sẽ khiến nó sẽ trả về một `Promise`, trong khi React mong đợi giá trị trả về là `undefined` hoặc một hàm dọn dẹp.
- Thay vào đó, chúng ta nên thêm một biểu thức hàm `async` được gọi ngay lập tức bên trong `useEffect`.

*Bài tiếp theo [RS94 Fetch, event và async/await](/lesson/session/session_094_fetch_event.md)*