# Biểu thức thuộc tính

![Create-HTML-1](images/ss8.jpg) 

Khi một trong các thuộc tính có một phần giá trị là động (thay đổi theo ngữ cảnh), bạn sẽ phải xem xét toàn bộ thuộc tính đó như là một giá trị hoàn toàn động. Ví dụ:

```
<li id="item-1"></li>
<li id="item-2"></li>
<li id="item-3"></li>
```

Giả sử bạn cần tạo các mục danh sách bằng JSX, id là item- và sau đó là một giá trị.

Giá trị là động, còn item- là không đổi.

Tuy nhiên, bạn phải xử lý thuộc tính id như một giá trị hoàn toàn động, nghĩa là giá trị của thuộc tính phải được đóng gói trong dấu ngoặc nhọn {}.

Có nhiều cách để tạo phần tử bằng JSX (giả sử có một biến tên là `count`):

1. Sử dụng nối chuỗi:

```
<li id={"item-" + count}></li>
```

2. hoặc cách tốt hơn là sử dụng template strings:

```
<li id={`item-${count}`}></li>
```

Bạn có thể sử dụng bất kỳ cách nào bạn muốn, nhưng đừng quên đóng gói thuộc tính trong dấu ngoặc nhọn {}.

### Nhiều class

Một ứng dụng phổ biến khác là làm việc với nhiều tên lớp, ví dụ:

```
const clickable = "clickable";
const active = "active";

const button = <button className={clickable + " " + active}>Click me</button>;
```

Cách làm khác là sử dụng template strings:

```
const button = <button className={`${clickable} ${active}`}>Click me</button>;
```

### Tóm lại

- Khi một trong các thuộc tính có một phần giá trị là động (thay đổi theo ngữ cảnh), bạn sẽ phải xem xét toàn bộ thuộc tính đó như là một giá trị hoàn toàn động

- Bạn có thể sử dụng template string (với nội suy) hoặc nối chuỗi.

*Bài tiếp theo [JSX Elements](/lesson/session/session_14_jsx_elements.md)*