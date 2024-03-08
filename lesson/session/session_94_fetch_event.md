![Create-HTML-1](images/fetch.webp) 

# RS94 Fetch, event và async/await

Việc sử dụng `async/await` trong sự kiện dễ dàng hơn so với việc sử dụng `useEffect`.

Bạn chỉ cần thêm `async` vào trước hàm là có thể sử dụng từ khóa `await`. Ví dụ:

```
function App() {
    async function handleButtonClick() {
        // use fetch with await here
    }

    return <button onClick={handleButtonClick}>Load data</button>;
}
```

### Xử lý lỗi

Khi sử dụng `promise`, chúng ta thường sử dụng `.catch` để xử lý lỗi. Với `async/await`, bạn cần đóng gói đoạn code sử dụng `await` bằng khối `try...catch`.

```
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json();
            setIsLoading(false)
            setUsers(data);
          } catch (error) {
              console.log(error)
              setIsLoading(false);
          } 
        })()
    }, []);

    return null
}
```

Để ý đoạn code trên dừng trình tải sau khi gọi `response.json()` trong khối `try` và trong trường hợp xảy ra lỗi, chúng ta xử lý lỗi đó trong khối `catch`.

Bạn cũng có thể sử dụng từ khóa `finally` để tái cấu trúc các câu lệnh chung giữa khối `try` và `catch`:

```
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json();
            setUsers(data);
          } catch (error) {
              console.log(error)
          } finally {
            setIsLoading(false)
          }
        })()
    }, []);

    return null
}
```

Khối `finally` sẽ được thực thi trong cả hai trường hợp, cho dù cuộc gọi try có thành công hay không.

### Tóm lại

- Đối với sự kiện, bạn chỉ cần thêm `async` vào trước hàm là có thể sử dụng từ khóa `await`.
- Để xử lý lỗi, bạn cần đóng gói code trong khối try...catch.

*Bài tiếp theo [RS95 Fetch POST](/lesson/session/session_95_fetch_post.md)*