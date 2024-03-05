![Create-HTML-1](images/effect.webp) 

# RS73 Vòng đời của Component

Với `useEffect` và phụ thuộc của nó, bạn có thể gọi các phương thức tại các vòng đời khác nhau của component. Điều này có nghĩa là bạn có thể gọi các phương thức ở các giai đoạn khác nhau của component. Ví dụ:

- Sau lần đầu tiên component được gắn kết (thêm vào DOM)
- Sau mỗi lần component được hiển thị lại
- Sau khi component bị hủy gắn kết (xóa khỏi DOM)
- Sau mỗi lần hiển thị lại, khi một biến trạng thái thay đổi

### Chạy hiệu ứng sau khi component được gắn kết

Để chạy một hiệu ứng một lần sau khi component được gắn kết (thêm vào DOM), bạn cần gọi `useEffect` với mảng rỗng làm danh sách phụ thuộc.

```
import {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log("Once after component mounted")
    }, []);
}
```

Nếu bạn đã học về lớp trong React, điều này tương đương với componentDidMount.

Hiệu ứng như vậy thường được dùng để khởi tạo các plugin phụ thuộc vào DOM (như plugin bản đồ).

### Chạy hiệu ứng một lần sau khi component được gắn kết + một lần trước khi hủy gắn kết

Bạn sẽ thực hiện tương tự như trên nhưng bổ sung thêm hàm dọn dẹp. Vì vậy, chúng ta sẽ trả về một hàm từ `useEffect`:

```
import React, {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log("Once after component mounted")

        return () => {
            console.log("Once before component unmounted");
        }
    }, []);
}
```

Nếu bạn đã học về lớp trong React, bạn sẽ thấy hàm được trả về tương đương với `componentWillUnmount`. Vì vậy, chúng ta đang thấy cách thực hiện `componentDidMount` và `componentWillUnmount`.

Hiệu ứng này được dùng cho cho một số thư viện/plugin yêu cầu dọn dẹp (như thư viện trò chuyện) cũng như các hàm có hiệu ứng phụ như `setTimeout` và `setInterval`.

### Chạy hiệu ứng sau mỗi lần hiển thị lại

Bạn có thể chạy hiệu ứng sau mỗi lần hiển thị lại cũng như sau lần hiển thị đầu tiên (khi component được gắn kết):

```
import {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log("After it mounted the first time and after every re-render");
    });
}
```

Nếu bạn đã học về lớp trong React, điều này tương tự như việc kết hợp `componentDidUpdate` và `componentDidMount`.

Hiệu ứng này được dùng để cập nhật `document.title` bằng cách sử dụng một biến `state` cụ thể trong component đó.

### Chạy hiệu ứng trên các lần hiển thị lại cụ thể

Đôi khi bạn muốn chạy hiệu ứng chỉ khi một biến trạng thái cụ thể hoặc props thay đổi (hoặc cả hai). Điều này có thể được thực hiện bằng cách truyền giá trị đó vào danh sách phụ thuộc:

```
import {useEffect, useState} from "react";

function App(props) {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        console.log("Only when first and/or props.user change.")
    }, [first, props.user]);
}
```

Đoạn code trên sẽ yêu cầu React chỉ gọi hiệu ứng này lại khi ít nhất một trong hai giá trị thay đổi: `first` hoặc `props.user`.

Lưu ý rằng hiệu ứng cũng sẽ chạy lần đầu tiên sau khi component được hiển thị.

Nếu bạn đã học về lớp trong React, điều này tương tự như `componentDidUpdate` nhưng thêm một điều kiện if để kiểm tra giá trị trước đó của trạng thái `first` và `prop user`.

### Nhiều hiệu ứng trong một component

Bạn có thể có nhiều hiệu ứng trong cùng một component và mỗi hiệu ứng có thể có phụ thuộc khác nhau. Chỉ cần nhớ tuân thủ các quy tắc sử dụng hook và đặt tất cả hook ở đầu hàm và không bao giờ đóng gói chúng bằng điều kiện if.

### hook 

Theo tài liệu chính thức: Hook là các hàm cho phép bạn "kết nối vào" trạng thái và các tính năng vòng đời của React từ các component hàm.

Ví dụ: `useEffect` "kết nối vào" vòng đời của component (khi nó được gắn kết, hủy gắn kết, v.v.).

Hook `useState` kết nối vào các tính năng state của React và cho phép bạn thiết lập state.

### useEffect chỉ là phương án cứu cánh

Kể từ React 18, hook `useEffect` chỉ được coi là phương án cuối cùng mà bạn có thể xem xét. Bạn không nên lạm dụng nó quá mức. Ngoài ra, hook này chủ yếu được sử dụng để đồng bộ với API bên ngoài. Vì vậy, bạn không nên sử dụng `useEffect` thường xuyên.

### Tóm lại

Bạn có thể chạy hiệu ứng:
- Một lần sau khi component được gắn kết
- Một lần sau khi component được gắn kết + một lần trước khi hủy gắn kết
- Sau mỗi lần hiển thị lại
- Trên các lần hiển thị lại cụ thể

*Bài tiếp theo [RS74 State trong effect](/lesson/session/session_74_effect_state.md)*