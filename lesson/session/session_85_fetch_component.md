![Create-HTML-1](images/fetch.webp) 

# RS85 Fetch trong Component

Chúng ta đã học cách sử dụng fetch để lấy dữ liệu JSON từ backend/API. Chúng ta sẽ sử dụng fetch API bên trong component React và tạo một biến trạng thái từ dữ liệu nhận lại từ backend/API.

### Bạn nên gọi fetch ở đâu?

Gọi `fetch` bên trong component được coi là một hiệu ứng phụ vì `fetch` thực hiện các kết nối mạng (bên ngoài component), vì vậy fetch cần được đặt bên trong một hiệu ứng.

Câu hỏi tiếp theo là, bạn nên gọi hiệu ứng đó bao nhiêu lần? Câu trả lời là phụ thuộc vào trường hợp cụ thể, nhưng trong hầu hết các trường hợp, bạn chỉ cần gọi một lần khi component được gắn kết. Điều này có nghĩa là chúng ta cần có `useEffect` như sau:

```
useEffect(() => {
    // call fetch here
}, []);
```

### Lấy dữ liệu

Bây giờ bạn đã biết nơi gọi `fetch` API bên trong component, bạn chỉ cần sử dụng code `fetch` từ chương trước và đặt nó bên trong `useEffect`. Cụ thể:

```
import {useEffect} from "react";

function App() {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }, []);
}
```

Đoạn code này sẽ chạy cuộc gọi fetch một lần bên trong component.

### Liên kết fetch với state

Để lưu trữ phản hồi từ `fetch` API vào biến trạng thái, bạn có thể làm theo 2 bước sau:

1. Tạo một biến trạng thái. Ví dụ: `const [users, setUsers] = useState()`.
2. Gọi hàm `setState` bên trong `.then(data => {})`. Ví dụ: `.then(data => { setUsers(data) })`.

Dưới đây là chương trình đầy đủ:

```
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data); // keep it for debugging
            setUsers(data);
        });
    }, []);
}
```

Điều quan trọng cần nhớ là `setUsers(data)` chỉ có thể được gọi bên trong `.then(data => {})` thay vì gọi trước hoặc sau, nếu không, biến data sẽ không được định nghĩa.

### Tránh vòng lặp vô hạn

```
import {useState, useEffect} from "react";

function App() {
  const [state, setState] = useState(Math.random());
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setState(data); // !!! ❌ this creates an infinite loop in this example !!!
    });
  }); // !!! because the effect runs on every re-render !!!
}
```

Ví dụ trên tạo ra một vòng lặp vô hạn; dưới đây là lý do:

1. Component được hiển thị
2. `useEffect` chạy. Gọi `fetch` API.
3. Phản hồi từ máy chủ đến và được chuyển đổi thành JSON. Chúng ta gọi `setState(data)`.
4. `setState` sẽ kích hoạt việc hiển thị lại component `<App />`. React chạy lại hàm.
5. Cùng `useEffect` sẽ chạy lại. Gọi `fetch` API. Và cứ tiếp tục như vậy.

Code sẽ tiếp tục chạy `effect`, gọi `setState`, dẫn đến việc gọi lại `effect`.

Vấn đề này có thể được giải quyết bằng cách chỉ định `[]` làm phụ thuộc của `useEffect`.

### Tóm lại

- Gọi `fetch` bên trong component React là một hiệu ứng phụ.
- Trong hầu hết các trường hợp, `fetch` sẽ được gọi một lần sau khi component được gắn kết. Vì vậy, phụ thuộc của `useEffect` sẽ là `[]`
- Liên kết `fetch` với `state`: gọi hàm `setState` bên trong `.then(data => {})`.
-  Nếu bạn quên chỉ định phụ thuộc của `effect` và có một cuộc gọi `setState` bên trong `effect`, bạn sẽ gặp phải vòng lặp vô hạn.



*Bài tiếp theo [RS86 Fetch Error](/lesson/session/session_86_fetch_error.md)*