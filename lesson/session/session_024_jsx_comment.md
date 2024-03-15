![Create-HTML-1](images/components.jpg) 

# RS24 Comment trong JSX

Để viết comment trong JSX, bạn phải đóng gói nó trong một biểu thức và sau đó sử dụng cú pháp comment nhiều dòng trong JavaScript.

Dưới đây là cú pháp comment nhiều dòng trong JavaScript:

```
/* This is a comment */
/* Which can
also be written
on multiple lines */
```

Trong JSX, bạn cần đóng gói nó bằng dấu ngoặc nhọn vì nó phải nằm trong biểu thức:

```
function Navbar() {
    return <div>{/*this is a comment - the comment won't render*/}hi</div>;
}
```

Component này đang trả về <div>hi</div> vì phần còn lại là comment.

### Kết xuất có điều kiện

Vì JSX là đối tượng đại diện cho các thành phần giao diện người dùng, chúng ta có thể sử dụng điều kiện if để làm cho các component linh hoạt hơn.

Ví dụ, chúng ta có thể trả về các phần tử React khác nhau từ component dựa trên props!

```
function Navbar(props) {
    if (!props.loggedIn) {
        return <p>Register</p>
    }
    return <p>Welcome back!</p> 
}

const element1 = <Navbar loggedIn={true} />
const element2 = <Navbar loggedIn={false} />
```

### Tóm lại

- Cú pháp viết comment trong JSX : `{ /* comment */ }`

- Kết xuất có điều kiện cho phép trả về các component khác nhau dựa trên props (hoặc điều kiện khác).

*Bài tiếp theo [RS25 Thư viện clsx](/lesson/session/session_025_clsx.md)*
