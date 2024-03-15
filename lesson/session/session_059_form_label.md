
![Create-HTML-1](images/components.jpg) 

# RS59 Label trong React

Dưới đây là cách thêm `label` cho một `input` trong HTML (trong React sẽ khác một chút):

```
<form>
    <label for="login-email">Email: </label>
    <input type="email" id="login-email" placeholder="alex@email.com">

    <label for="login-password">Password: </label>
    <input type="password" id="login-password" placeholder="Password">

    <input type="submit" >
</form>
```

Phần tử `<label>` cần một thuộc tính `for` trỏ tới `id` của trường nhập liệu/hộp chọn/vùng văn bản mà nó liên kết đến.

Để ý đoạn code làm cho phần tử HTML hoạt động bằng cách thêm: `id="login-email"` và sau đó tham chiếu đến nó bằng `for="login-email"`. Và đối với trường mật khẩu: `id="login-password"` và sau đó tham chiếu đến nó bằng `for="login-password"`.

Đảm bảo rằng `id` là duy nhất vì `id` đó chỉ nên được sử dụng một lần trên mỗi trang HTML.

### Nhãn trong React

Trong React, cách sử dụng thẻ `label` có một số khác biệt nhỏ so với cách sử dụng thông thường, tương tự như việc sử dụng thuộc tính class trong React khác với cách sử dụng trong HTML thông thường.

Hãy nhớ rằng trong React, chúng ta phải sử dụng `className` thay vì `class`. React truyền tất cả những `props` này xuống DOM, DOM mong đợi `props` là các trường thuộc tính hợp lệ của một phần tử HTML.

Điều tương tự áp dụng cho thuộc tính `for`. Tên trường thuộc tính thực tế là `htmlFor`.

Vì vậy, đây là biểu mẫu tương tự nhưng được viết bằng JSX:

```
<form>
    <label htmlFor="login-email">Email: </label>
    <input type="email" id="login-email" placeholder="alex@email.com" />

    <label htmlFor="login-password">Password: </label>
    <input type="password" id="login-password" placeholder="Password" />

    <input type="submit" />
</form>
```

### Tóm lại

- `<label />` cần một trường thuộc tính `htmlFor` trỏ tới `id` của phần tử.


*Bài tiếp theo [RS60 Stateless và Stateful components](/lesson/session/session_060_stateless_stateful_components.md)*