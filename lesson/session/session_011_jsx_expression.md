![Create-HTML-1](images/jsx.jpg) 

# RS11 Biểu thức trong JSX

### Biểu thức là gì?

Biểu thức là bất kỳ đoạn code JavaScript hợp lệ nào có thể được tính toán thành một giá trị.

Đó là bất kỳ code JavaScript nào mà khi thực thi sẽ trả về một giá trị cuối cùng, ví dụ:

- `3 + 4`

- `"Sam"`

- `new Date()`

- `2 * 4`

- `name` (giả định rằng biến `name` đã được khai báo).

- v.v.

Mỗi biểu thức trả về một giá trị, ví dụ:

- `3 + 4` trả về giá trị 7.

- `"Sam"` trả về chuỗi "Sam".

- `new Date()` trả về một đối tượng ngày.

- `2 * 4` trả về giá trị 8.

- `name` trả về giá trị của biến name, thường là một chuỗi.

### Biểu thức trong JSX

Bạn có thể sử dụng các biểu thức trên trong JSX bằng cách đóng gói trong dấu ngoặc nhọn {}.

#### Ví dụ cơ bản

```
const title = <h1>You have {2 + 3} notifications</h1>;
```

Câu lệnh này sẽ tạo một phần tử `h1` chứa văn bản: `You have 5 notifications`.

Hãy xem cách biểu thức `(2 + 3)` được thực thi và trả về `5`, sau đó được thay thế vào văn bản cuối cùng để trả về `You have 5 notifications`.

Để có thể hoạt động, biểu thức phải nằm trong dấu ngoặc nhọn.

#### Biến

Việc sử dụng biến trong biểu thức thường có nhiều ứng dụng hữu ích, ví dụ: hiển thị tên người dùng trong thanh điều hướng:

```
const user = {
    id: 1,
    name: "Sam"
};

const element = <p className="user-info">Welcome {user.name}!</p>
```

Đoạn code này sẽ tạo một phần tử p chứa văn bản: Welcome Sam!.

#### Gọi hàm

Bạn cũng có thể gọi hàm trong biểu thức, ví dụ:

```
function capitalise(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
const name = "brendan";

const element = <p className="user-info">Welcome {capitalise(name)}</p>
```

Đoạn code trên sẽ tạo một đoạn văn bản chứa nội dung: Welcome Brendan (lưu ý chữ B viết hoa).

### Tóm lại

- Biểu thức là bất kỳ đoạn code JavaScript hợp lệ nào có thể được tính toán thành một giá trị.

- Biểu thức trong JSX cần được đóng gói trong dấu ngoặc nhọn: `{expression}`

- `<h1 className="title">You have {2 + 3} notifications</h1>` là một ví dụ về JSX với một biểu thức.

*Bài tiếp theo [JSX Attribute Expression](/lesson/session/session_012_jsx_attribute_expression.md)*
