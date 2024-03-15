![Create-HTML-1](images/fetch.webp) 

# RS87 Toán tử logic &&

Đôi khi bạn không muốn hiển thị một JSX mới hoàn toàn mà chỉ muốn bỏ qua việc hiển thị một phần của JSX phụ thuộc vào data từ API. Ví dụ:

```
import {useState, useEffect} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        });
    }, []);
    
    // This will throw an ERROR
    return <>
        <h1>Users</h1>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
  </>
}
```

Chương trình sẽ đưa ra thông báo lỗi: `Cannot read property 'map' of undefined.`

Vậy nếu bạn muốn chặn thông báo lỗi mà không thay đổi phần hiển thị của component thì phải làm như thế nào? Giả sử trước khi `users` được tải, bạn chỉ muốn component hiển thị JSX sau:

```
<>
    <h1>Users</h1>
    <ul>
    </ul>
</>
```

Để ý là chúng ta bỏ qua `users.map(...)`.

Và sau đó, khi `users` đã được tải, `users.map(...)` sẽ được hiển thị.

Đây là một tình huống thường gặp và có thể được giải quyết dễ dàng bằng cách sử dụng toán tử `logic &&`.

Bạn có thể thêm tiền tố `users &&` trước `users.map()`, kết quả cuối cùng như sau:

```
import {useState, useEffect} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        });
    }, []);
    
    // this will work without breaking 👍
    return <>
        <h1>Users</h1>
        <ul>
            {users && users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
  </>
}
```

Đoạn code trên hoạt động là vì:

1. Trước khi 'users' được tải: biểu thức `users && users.map()` sẽ gặp xung đột tại `users`, có nghĩa là nó sẽ không tiếp tục thực thi sau `&&` vì `users` trả về `undefined`. Điều này sẽ ngăn chặn việc thực thi `users.map()`, tránh gây ra lỗi.

Vì vậy trước khi users được tải, component App sẽ hiển thị:

```
<>
    <h1>Users</h1>
    <ul>
    </ul>
</>
```

2. Sau khi 'users' được tải: biểu thức `users && users.map()` sẽ được thực thi toàn bộ vì `users` không trả về một giá trị `falsy` (như `undefined` hoặc `false`). Do đó, `users.map()` sẽ được gọi.

Vì vậy sau khi `users` được tải, component App sẽ hiển thị:

```
<>
    <h1>Users</h1>
    <ul>
        {users && users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
</>
```

### Tóm lại

- Toán tử logic && có thể được sử dụng để tránh hiển thị một phần cụ thể của JSX.
- Toán tử này giúp tránh gây lỗi cho component trước khi state được thiết lập sau khi fetch đã được xử lý.


*Bài tiếp theo [RS88 Xử lý lỗi Fetch](/lesson/session/session_088_fetch_error.md)*