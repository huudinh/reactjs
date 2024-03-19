![Create-HTML-1](images/context.jpg) 

# RS110 Ký hiệu dấu chấm

### Một đối tượng có thể chứa nhiều component

Vì JSX luôn chuyển đổi `<Component />` thành cuộc gọi `React.createElement(Component, {})`, do đó một đối tượng có thể chứa nhiều component, ví dụ:

```
const Buttons = {
    Default: function(props) {
        return <button className="btn-default">{props.children}</button>;
    },
    Outline: function(props) {
        return <button className="btn-outline">{props.children}</button>;
    }
}
```

Sau đó, bạn có thể sử dụng các component trên như sau:

```
<Buttons.Default>Login</Buttons.Default>
<Buttons.Outline>Register</Buttons.Outline>
```

Lý do tại sao điều này hoạt động là vì chúng sẽ được chuyển đổi thành các cuộc gọi React.createElement như sau:

```
React.createElement(Buttons.Default, {}, "Login");
React.createElement(Buttons.Outline, {}, "Register");
```

### Sử dụng cú pháp

Chúng ta đã sử dụng `ThemeContext.Provider` trong các chương về `Context`:

```
return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
```

Cú pháp cũng được sử dụng trong các Thư viện Giao diện người dùng, trong đó thư viện sẽ xuất tất cả các nút trong một đối tượng duy nhất tên là Buttons, và sau đó bạn có thể chọn loại nút bằng cách sử dụng `Buttons.Default` hoặc `Buttons.Outline`.

Cú pháp tương tự cũng được áp dụng cho `<React.StrictMode />`.

### Tóm lại

- <Buttons.Default /> được chuyển đổi thành React.createElement(Buttons.Default, {})


*Bài tiếp theo [RS111 dangerouslySetInnerHTML](/lesson/session/session_111_dangerouslySetInnerHTML.md)*