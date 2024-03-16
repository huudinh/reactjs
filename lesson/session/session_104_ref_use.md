![Create-HTML-1](images/ref.png) 

# RS104 Sử dụng Refs

### Các bước tạo Refs

Trong bài học trước, chúng ta đã sử dụng ref để focus vào phần tử `<input />` khi component App được hiển thị. Dưới đây là đoạn code từ bài học trước:

```
import {useRef, useEffect} from "react";

function App() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} type="text" />;
}
```

3 bước tạo ref là:

- Thêm hook `useRef` (named export) từ gói react. `import {useRef} from "react";`
- Tạo một `ref` mới ở đầu component (theo quy tắc làm việc với hook). Ví dụ: `const inputRef = useRef();`
- Gán `ref` mới tạo cho phần tử JSX đang hiển thị bằng cách sử dụng thuộc tính `ref`. Ví dụ: `<input ref={inputRef} />`.

### Luôn kết thúc tên biến ref bằng từ Ref

- `inputRef` khi tham chiếu đến `input`
- `buttonRef` khi tham chiếu đến `button`
- `carouselRef` khi tham chiếu đến `carousel` (một plugin)

### Đối tượng được tạo ra bởi useRef

Khi bạn gọi useRef(), React sẽ tạo ra một đối tượng chứa khóa current. Vì vậy, việc gọi const inputRef = useRef(); sẽ trả về một đối tượng có cấu trúc sau:

```
{
    current: undefined
}
```

Sau đó, khi bạn gán ref cho phần tử JSX, React sẽ gán khóa current cho phần tử DOM đã được hiển thị. Ví dụ:

```
{
    current: <input type="text" />
}
```

Điều này có nghĩa là mỗi khi bạn muốn truy cập vào phần tử đang tham chiếu, bạn phải sử dụng khóa .current. Đây là lý do tại sao trong ví dụ ở trên, chúng ta phải gọi inputRef.current.focus(). Đó là vì inputRef.current sẽ cho phép bạn truy cập vào phần tử DOM được tham chiếu.

Bạn phải nhớ rằng inputRef.current chỉ trả về phần tử DOM sau khi component đã được hiển thị trên DOM.

Đây là lý do tại sao bạn chỉ nên sử dụng ref bên trong trình lý sự kiện hoặc cuộc gọi useEffect. Nguyên nhân là vì cả hai phương thức này đều chạy sau khi component đã được hiển thị trên DOM.

### Khi nào sử dụng ref?

Bạn có thể cảm thấy muốn sử dụng refs trong mọi component, nhưng thực tế là refs không phổ biến. Dưới đây là một số trường hợp cần sử dụng ref:

- Tập trung vào một phần tử.
- Phát video (videoElement.play()), tạm dừng video, v.v.
- Chọn văn bản từ DOM.
- Khởi tạo thư viện DOM.

Nhìn chung, các trường hợp sử dụng ref có thể được phân thành hai danh mục:

- Các thao tác DOM mệnh lệnh. Khi bạn nhận thấy cách duy nhất để thực hiện một tác vụ trên DOM là gọi một phương thức DOM cụ thể. Ví dụ: .play() hoặc .focus().

- Khởi tạo thư viện DOM. Ví dụ, MapBox hoặc plugin carousel.

### Tóm lại

- Khi bạn tạo một ref, React sẽ tạo ra một đối tượng có dạng: `{current: undefined}`.
- Khi gán ref cho một phần tử JSX, bạn sẽ có thể truy cập vào phần tử đã được hiển thị bằng ref.current.
- Phần tử DOM chỉ có thể được truy cập và sử dụng trong trình xử lý sự kiện hoặc useEffect vì bạn phải chờ cho component được hiển thị trước khi phần tử được tạo ra.
- Các trường hợp sử dụng ref là:
    - Thao tác DOM mệnh lệnh.
    - Khởi tạo thư viện DOM.

*Bài tiếp theo [RS105 Giới thiệu về Context](/lesson/session/session_105_context.md)*