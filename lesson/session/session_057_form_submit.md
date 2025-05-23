
![Create-HTML-1](images/components.jpg) 

# RS57 Form Submit

Trong các dự án thực tế, `form` có thể có nhiều hơn một trường dữ liệu và chúng ta thường gặp các phần tử `<select />` hoặc `<textarea />`.

Quá trình làm cho những phần tử đó trở thành controlled component tương tự như với `<input />`.

### Select

```
import {useState} from "react";

function App() {
    const [country, setCountry] = useState("");

    return <select value={country} onChange={e => setCountry(e.target.value)}>
        <option>Country</option>
        <option value="netherlands">Netherlands</option>
        <option value="belgium">Belgium</option>
        <option value="france">France</option>
    </select>
}
```

`event` được đổi tên thành `e` để cho ngắn gọn.

### Textarea

```
import {useState} from "react";

function App() {
    const [comment, setComment] = useState("");

    return <textarea value={comment} onChange={e => setComment(e.target.value)} />
}
```

### Nhiều giá trị đầu vào

Khi làm việc với nhiều giá trị đầu vào và giả sử không có quá trình kiểm tra tính hợp lệ của dữ liệu đầu vào (chúng ta chưa học về chủ đề này), bạn nên sử dụng hàm nội tuyến vì mục đích của `onChange` chỉ là thiết lập `state`.

Chúng ta sử dụng một biến `state` khác nhau cho mỗi trường nhập liệu:

```
import {useState} from "react";

function Form() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    return <form>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} />
    </form>
}
```

### Gửi Form

Phần tử Form trong React hoạt động tương tự như trong các ứng dụng không sử dụng React, tức là khi bạn `submit` form, nó sẽ gửi dữ liệu đến trang hiện tại và dẫn đến việc tải lại trang.

Cách thực hiện cũng tương tự trong React, chúng ta cần gọi `event.preventDefault()` trong sự kiện `submit`:

```
function App() {

    function handleFormSubmit(event) {
        event.preventDefault();
    }

    return <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" />
        <input type="submit" value="Add" />
    </form>;
}
```

### Tóm lại

- Bạn có thể làm cho `<select />` và `<textarea />` trở thành controlled component giống như bạn làm với `<input />`.
- Mỗi `input` cần một biến `state` riêng của nó.
- Bạn có thể ngăn chặn việc gửi biểu mẫu bằng cách sử dụng trình xử lý `onSubmit` trên `<form />`, sau đó gọi `event.preventDefault()`.

### Bài tập

**Câu 1:** Mô tả cách Select lấy dữ liệu từ người dùng

**Câu 2:**  Khi có nhiều Input trong form để quản lý sự thay đổi của UI chúng ta cần làm gì

**Câu 3:**  Submit form là gì, đua ra cách hoạt động của nó

*Bài tiếp theo [RS58 Accessibility (Khả năng tiếp cận)](/lesson/session/session_058_accessibility.md)*