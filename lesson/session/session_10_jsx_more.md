![Create-HTML-1](images/jsx.jpg) 

# SS10 - Làm việc với JSX

Vì JSX được chuyển đổi thành `React.createElement(...)` trả về một đối tượng, bạn có thể coi phần tử JSX như một đối tượng.

Vì vậy, bạn có thể coi `<h1 className="title">Supermarket</h1>` như một đối tượng với các thuộc tính sau (được đơn giản hóa):

```
{
  type: 'h1',
  props: {
    className: "title",
    children: "Supermarket"
  }
}
```

Đối tượng này là dạng biểu diễn cho một phần của giao diện người dùng mà React duy trì trong DOM ảo.

Điều này giúp React xác định những thay đổi một cách hiệu quả và sau đó hiển thị lại bằng cách sử dụng ReactDOM.

Vì `<h1 className="title">Supermarket</h1>` là một đối tượng, bạn có thể xem nó như một đối tượng thông thường.

Vì vậy, bạn có thể:

1. Gán đối tượng cho biến:

```
const title = <h1 className="title">Supermarket</h1>;
```

2. Trả về đối tượng từ hàm

```
function getTitle() {
    return <h1 className="title">Supermarket</h1>
}
```

3. Trả về các phần tử khác nhau theo điều kiện:

```
function getTitle(is_open) {
    if (is_open) {
        return <h1 className="title">Supermarket</h1>
    } else {
        return <h1 className="title">Supermarket (closed)</h1> 
    }
}
```

4. Thực hiện các thao tác thông thường khác trên đối tượng. Khi bạn sử dụng JSX, nó sẽ được chuyển đổi thành một cuộc gọi đến `React.createElement(...)`.

Điều này có thể dễ hiểu đối với một số người, nhưng bạn nên dành một chút thời gian để tìm hiểu vì bạn cần làm quen với cú pháp JSX trước.

Để giúp bạn hiểu rõ hơn, ví dụ thứ ba có thể (getTitle) được chuyển đổi thành đoạn code sau:

```
function getTitle(is_open) {
  if (is_open) {
    return React.createElement("h1", {
      className: "title"
    }, "Supermarket");
  } else {
    return React.createElement("h1", {
      className: "title"
    }, "Supermarket (closed)");
  }
};
```

Bạn có thể nhận thấy có rất nhiều code trùng lặp trong khối `if` và `else`.

### Tóm lại

- Phần tử JSX là một đối tượng.

- Bạn có thể xem phần tử JSX như một đối tượng.

- Bạn có thể gán phần tử JSX cho biến.

- Bạn có thể trả về phần tử JSX từ hàm.

*Bài tiếp theo [JSX Expression](/lesson/session/session_11_jsx_expression.md)*
