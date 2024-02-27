# Rendering theo điều kiện 2

![Create-HTML-1](images/ss17.jpg) 

Có nhiều cách để kết xuất có điều kiện, chúng chủ yếu là các tính năng của JavaScript mà bạn có thể sử dụng trong React.

Bạn không bắt buộc phải sử dụng những phương pháp này, vì vậy phần thực hành sẽ không kiểm tra việc sử dụng các phương pháp một cách rõ ràng. Tuy nhiên, bạn có thể bắt gặp kỹ thuật này trong code của lập trình viên khác, vì vậy bạn cần nắm rõ cách thức hoạt động của các phương pháp.

### Lưu trữ các phần tử trong biến

Kỹ thuật này đã được đề cập trong bài JSX, do đó bài này sẽ nhắc lại một chút.

Vì phần tử JSX như `<h1 className="title">Hello</h1>` chỉ là một cuộc gọi đến `React.createElement(...)` trả về một đối tượng, do đó, bạn có thể lưu trữ nó trong biến.

Việc lưu trữ phần tử JSX vào biến cho phép bạn tái sử dụng biến này nếu nó được lặp lại nhiều lần trong một mẫu hoặc bạn cần trả về nó theo điều kiện. Ví dụ:

```
function App(props) {
    const loginButton = <button>Login</button>;
    const signupButton = <button>Signup</button>;
    if (props.existingUser) {
        return <div className="app-container">{loginButton}</div>;
    }
    return <div className="app-container">{signupButton}</div>;
}
```

### Toán tử ba ngôi

Toán tử ba ngôi là cú pháp JavaScript cho phép bạn thay thế điều kiện `if/else` bằng `? :.` Hãy xem một ví dụ:

```
function getWelcomeMessage(type) {
    if (type === "admin") {
        return "Welcome admin";
    } else {
        return "Welcome user";
    }
}
```

Có thể được viết lại như sau:

```
function getWelcomeMessage(type) {
    return (type === "admin") ? "Welcome admin" : "Welcome user";
}
```

`? :` là toán tử ba ngôi, trong đó biểu thức sau `?` sẽ được thực hiện khi điều kiện (`type === "admin"`) là `true` và biểu thức sau `:` sẽ được thực hiện khi điều kiện là `false`.

Theo kinh nghiệm của những lập trình viên lâu năm, bạn không nên cố gắng sử dụng toán tử ba ngôi ở mọi nơi.

Quan trọng là viết code dễ đọc, không nhất thiết phải là viết ít code.

Trong ví dụ này, toàn bộ biểu thức viết vừa đủ trên một dòng và vẫn dễ đọc, vì vậy việc sử dụng toán tử ba ngôi là chấp nhận được. Bạn có thể giữ nguyên điều kiện `if/else` nếu code dễ đọc.

Vì vậy, bạn không nên lạm dụng những kỹ thuật này, viết code dễ đọc mới là nhiệm vụ hàng đầu của các lập trình viên.

### Tóm lại

- Các phần tử JSX có thể được lưu trữ trong biến

- Bạn có thể sử dụng toán tử ba ngôi để rút gọn điều kiện if trong JSX

- Hãy cố gắng viết code dễ đọc thay vì viết code ngắn nhất có thể.

*Bài tiếp theo [Toán tử logic &&](/lesson/session/session_42_logical_operators.md)*