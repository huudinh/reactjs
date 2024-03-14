![Create-HTML-1](images/ref.png) 

# RS103 Giới thiệu về refs

Hãy giả sử bạn có component sau và bạn muốn đặt trọng tâm vào trường nhập liệu khi component được hiển thị lần đầu tiên.

```
import {useEffect} from "react";

function App() {
    useEffect(() => {
        // how do you focus the input?
    }, []);

    return <input type="text" />;
}
```

Lưu ý: Phương thức `.focus()` trên các phần tử `<input>` là một phương thức đặt con trỏ của người dùng vào trường nhập liệu. Ví dụ, khi bạn mở https://google.com, ô tìm kiếm sẽ được tập trung và trỏ nhắm tự động được đặt trong ô đó.

Bạn có thể nghĩ đến việc sử dụng `document.querySelector()` để tìm `<input type="text" />` nhưng đây không phải là cách khuyên dùng vì một số lý do sau:

- Phương thức có thể không hoạt động (cụ thể là khi trường nhập liệu chưa được hiển thị, hãy nhớ rằng React tạo ra các phần tử React tạo thành DOM ảo và sau đó hiển thị chúng lên DOM thực của trình duyệt).

- Ngay cả khi phương thức hoạt động, bạn có thể nhận được kết quả không đồng nhất khi tiếp tục phát triển ứng dụng. Ví dụ: bạn sử dụng lại component đó nhiều lần trong ứng dụng.

Giải pháp cho vấn đề này là sử dụng `ref` của `React`. `Ref` cho phép bạn giữ một tham chiếu đến phần tử DOM đã được hiển thị. Sau khi tạo ra `ref` và gán nó cho một phần tử React trong JSX, bạn có thể gọi các phương thức mệnh lệnh trên phần tử DOM đã được hiển thị, chẳng hạn như `.focus()`.

### Note

React chỉ coi việc sử dụng `ref` như phương án cứu cánh (giải pháp cuối cùng mà bạn có thể nghĩ đến). Bạn có thể xây dựng một dự án hoàn chỉnh mà không sử dụng (hoặc chỉ sử dụng rất ít) `refs` và điều đó hoàn toàn không có vấn đề.

### Dưới đây là cách ref hoạt động:

```
import {useRef} from "react";

function App() {
    const inputRef = useRef();

    return <input ref={inputRef} type="text" />;
}
```

Đoạn code sẽ được giải thích từng bước trong bài học tiếp theo, hiện tại, chúng ta sẽ xem kết quả cuối cùng trước.

Sau khi gán `inputRef` cho `<input />` bằng `ref={inputRef}`, chúng ta có thể truy cập vào phần tử DOM đã được hiển thị với `inputRef.current`.

Sau đó, bất cứ khi nào bạn muốn tập trung vào phần tử `input`, bạn có thể gọi `inputRef.current.focus()`. Vì vậy, kết quả cuối cùng sẽ như sau:

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

### Tóm lại

- `document.querySelector()` không nên được sử dụng trong React vì nó có thể dẫn đến kết quả không mong đợi.
- Chỉ sử dụng `refs` như một biện pháp cuối cùng để tìm một phần tử cụ thể đã được hiển thị trên DOM bằng React và thực hiện các thao tác trên nó.

*Bài tiếp theo [RS104 Sử dụng refs](/lesson/session/session_104_ref_use.md)*