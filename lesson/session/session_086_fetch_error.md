![Create-HTML-1](images/fetch.webp) 

# RS86 Fetch Error

### Cannot read property X of undefined

Cannot read property X of undefined (Không thể đọc trường thuộc tính X của undefined) là một trong những lỗi phổ biến nhất mà bạn gặp phải khi làm việc với `Fetch` API trong React.

Dưới đây là một ví dụ về code lỗi:

```
import {useState, useEffect} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUsers(data);
        });
    }, []);
    
    // ❌ This will throw an error
    return <h1>There are {users.length} users</h1>
}
```

Code trên sẽ đưa ra thông báo lỗi: Cannot read property 'length' of undefined.

Điều này có nghĩa là trong biểu thức `users.length`, `users` có giá trị là `undefined`, vì vậy chúng ta không thể truy cập `.length` trên nó vì điều đó tương đương với việc chạy `undefined.length`.

### Tại sao code gặp lỗi?

Code gặp lỗi vì vào lần hiển thị đầu tiên của component, giá trị của `users` là `undefined` do khai báo `useState` như sau: `const [users, setUsers] = useState();`.

Bạn phải nhớ rằng `setUsers(data)` được gọi bên trong `.then()` sẽ thực thi vào một thời điểm trong tương lai.

Vì vậy, ở lần hiển thị đầu tiên của component App, `users` là `undefined` và việc cố gắng truy cập `users.length` sẽ gây ra lỗi. Khi `fetch` hoàn thành và chúng ta nhận được dữ liệu và gọi `setUsers(data)`, `users.length` mới trở thành giá trị hợp lệ. Tuy nhiên, component đã bị lỗi trước đó.

### Cách khắc phục vấn đề

Có nhiều cách để giải quyết vấn đề này, tùy thuộc vào nhiệm vụ của component.

Chúng ta kiểm tra if (!users) (hoặc if (users === undefined)) và trả về null hoặc thông báo như Loading...:

```
import {useState, useEffect} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUsers(data);
        });
    }, []);
    
    if (!users) {
        return null;
    }

    return <h1>There are {users.length} users</h1>
}
```

### Tóm lại

- Cố gắng truy cập vào một đối tượng/mảng được trả về từ API fetch trước khi fetch hoàn thành là một lỗi phổ biến khi sử dụng fetch.
- Để tránh gặp lỗi này, bạn có thể thêm một điều kiện if và trả về JSX khác (kết xuất có điều kiện).


*Bài tiếp theo [RS87 Tránh gây lỗi cho component khi Fetch API với &&](/lesson/session/session_087_fetch_and.md)*