![Create-HTML-1](images/jsx.jpg) 

# RS14 Children trong JSX

### Phần tử con

Trong những bài học trước, chúng ta chỉ làm việc với các phần tử JSX không có phần tử con, ví dụ như div hoặc h1.

Tuy nhiên, trong thực tế, giao diện người dùng sẽ các nhiều phần tử phức tạp hơn, ví dụ như HTML sau:

```
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

Trong JSX, để biểu diễn danh sách như trên, chúng ta sử dụng cú pháp như sau

```
const list = <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>;
```

Đoạn code trên khi được chuyển đổi thành `React.createElement(...)` ngày càng trở nên phức tạp và khó đọc hơn:

```
const list = React.createElement("ul", null, 
    React.createElement("li", null, "First item"),
    React.createElement("li", null, "Second item"),
    React.createElement("li", null, "Third item")
);
```

Đoạn code hoạt động vì `React.createElement` lấy tất cả các đối số được truyền sau đối số thứ hai và coi chúng là các phần tử con.

Vì vậy, trong trường hợp này, danh sách là `React.createElement("ul", null, child1, child2, child3)`.

Trong đó, `child1` là mục `li` đầu tiên, `child2` là mục `li` thứ hai, v.v.

Bạn không cần phải tự viết code `React.createElement(...)` nhưng nên hiểu cách nó hoạt động.

### Một số điểm lưu ý

Sau này, bạn có thể sử dụng Prettier để định dạng code hoặc tự định dạng code, và khi bạn bắt đầu làm việc với các UI phức tạp hơn, bạn có thể có xu hướng viết return trên một dòng riêng và phần còn lại của code JSX trên các dòng khác, như sau:

```
function getList() {
    return 
        <ul>
            <li>First Item</li>
            <li>Second Item</li>
        </ul>;
}
```

Nhưng điều này sẽ làm cho chương trình gặp lỗi do một khái niệm JavaScript gọi là Automatic Semi-colon Insertion (ASI - tự động chèn dấu chấm phẩy).

Điều xảy ra ở đây là JavaScript tự động chèn một dấu chấm phẩy sau từ khóa return khi code được chuyển đổi từ JSX sang JavaScript, vì vậy đoạn code trở thành:

```
function getList() {
    return;
    React.createElement("ul", null,
        React.createElement("li", null, "First Item"),
        React.createElement("li", null, "Second Item")
    );
}
```

Để ý `;` được thêm ngay sau từ khóa `return`, điều này có nghĩa là hàm không bao giờ tiếp thi đến `React.createElement("ul", ...)`. Đây là hành vi chính xác của JavaScript vì trình biên dịch yêu cầu tự động chèn một dấu chấm phẩy (nếu chưa có) sau một số từ khóa (đọc thêm chi tiết trên MDN).

Để tránh vấn đề này, hãy luôn luôn sử dụng cú pháp `return ()` và viết các phần tử JSX bên trong cặp dấu ngoặc đơn. Vì vậy, đoạn code trên trở thành:

```
const getList = () => {
    return (
        <ul>
            <li>First Item</li>
            <li>Second Item</li>
        </ul>
    );
}
```

Bằng cách viết dấu ngoặc mở, không có dấu chấm phẩy tự động được chèn sau return cho đến khi gặp dấu ngoặc đóng và bạn tránh được các lỗi không mong muốn.

### Tóm lại

- JSX cho phép định nghĩa các phần tử con bên trong phần tử cha

- Luôn đóng gói các phần tử JSX bằng () khi viết JSX sau một lệnh return.

### Bài tập

**Câu 1:** Phần tử con trong JSX là gì? Chúng ta có thường làm việc với nó trong các dự án React hay không?

**Câu 2:** Tại sao khi trả về phần tử JSX chúng ta nên để các phần tử trong dấu ()

*Bài tiếp theo [RS15 Cú pháp thẻ tự đóng](/lesson/session/session_015_jsx_self_closing_tag.md)*
