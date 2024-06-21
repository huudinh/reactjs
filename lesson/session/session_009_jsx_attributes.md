![Create-HTML-1](images/jsx.jpg) 

# RS9 Attributes trong JSX

### Thiết lập thuộc tính cho các phần tử trong JSX.

```
const title = <h1 id="brand-title">Supermarket</h1>;
```

Code trên tương đương với đoạn code JavaScript sau:

```
const title = React.createElement("h1", {id: "brand-title"}, "Supermarket");
```

### Cách thiết lập class

Bạn còn nhớ cách thiết lập lớp bằng React.createElement không?

Cách thiết lập lớp trong JSX cũng tương tự như khi sử dụng React.createElement:

```
const title = <h1 id="brand-title" className="primary-color">Supermarket</h1>;
```

Để thiết lập thuộc tính `class`; chúng ta phải sử dụng `className` thay vì `class` để tránh xung đột với từ khóa `class` của JavaScript.

Đây là lý do tại sao JSX KHÔNG PHẢI là HTML.

Trong HTML, chúng ta viết: `<h1 id="brand-title" class="primary-color">Supermarket</h1>` nhưng đây không phải là code JSX hợp lệ.

Vì vậy, đừng quên rằng JSX sẽ tự động chuyển đổi code thành `React.createElement(...)`.

Đừng quên đóng gói chuỗi trong dấu ngoặc kép.

### Tóm lại

- Thuộc tính trong JSX được truyền làm đối số thứ hai của `React.createElement(...)`

- `<div className="active"></div>` là cách bạn gán lớp active cho phần tử này.

- Code JSX bạn viết được chuyển đổi thành React.createElement

- Khi thiết lập giá trị cho thuộc tính là chuỗi, chúng ta cần đóng gói giá trị đó trong dấu ngoặc kép.

### Bài tập

Câu 1: Các thuộc tính Attributes trong JSX và HTML giống và khác nhau thế nào? Hãy giải thích.


*Bài tiếp theo [RS10 Làm việc với JSX](/lesson/session/session_010_jsx_more.md)*
