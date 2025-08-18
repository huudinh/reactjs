![Create-HTML-1](images/effect.webp) 

# RS73 Hiểu rõ vòng đời Component qua useEffect

Hook useEffect trong React cho phép bạn xử lý các hiệu ứng phụ (side effects) như gọi API, tương tác với DOM, hoặc đăng ký sự kiện. Nó hoạt động tương tự như các phương thức vòng đời trong component dạng class, nhưng được sử dụng trong component hàm.

- Sau lần đầu tiên component được gắn kết (thêm vào DOM)
- Sau mỗi lần component được hiển thị lại
- Sau khi component bị hủy gắn kết (xóa khỏi DOM)
- Sau mỗi lần hiển thị lại, khi một biến trạng thái thay đổi

### Chạy một lần sau khi component được gắn kết (mounted)

Để chạy một hiệu ứng một lần sau khi component được gắn kết (thêm vào DOM), bạn cần gọi `useEffect` với mảng rỗng làm danh sách phụ thuộc.

```jsx
import {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log("Once after component mounted")
    }, []);
}
```

Tương đương với componentDidMount trong class component.

Thường dùng để khởi tạo plugin phụ thuộc vào DOM (ví dụ: bản đồ, thư viện UI).

### Chạy một lần sau khi gắn kết + một lần trước khi hủy gắn kết (unmounted)

Bạn sẽ thực hiện tương tự như trên nhưng bổ sung thêm hàm dọn dẹp. Vì vậy, chúng ta sẽ trả về một hàm từ `useEffect`:

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component đã gắn kết");

    return () => {
      console.log("Component chuẩn bị bị hủy gắn kết");
    };
  }, []);
}
```

Tương đương với `componentDidMount` và `componentWillUnmount`.

Dùng để khởi tạo và dọn dẹp các plugin hoặc hiệu ứng phụ như `setTimeout`, `setInterval`, hoặc đăng ký sự kiện.

### Chạy sau mỗi lần render

Bạn có thể chạy hiệu ứng sau mỗi lần hiển thị lại cũng như sau lần hiển thị đầu tiên (khi component được gắn kết):

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Chạy sau mỗi lần render");
  });
}
```

Tương đương với `componentDidUpdate` + `componentDidMount`.

Dùng để cập nhật giao diện hoặc thực hiện các hành động sau mỗi lần `render`.

### Chạy khi giá trị cụ thể thay đổi

Đôi khi bạn muốn chạy hiệu ứng chỉ khi một biến trạng thái cụ thể hoặc props thay đổi (hoặc cả hai). Điều này có thể được thực hiện bằng cách truyền giá trị đó vào danh sách phụ thuộc:

```jsx
import { useEffect, useState } from "react";

function App(props) {
  const [first, setFirst] = useState(0);

  useEffect(() => {
    console.log("Chạy khi first hoặc props.user thay đổi");
  }, [first, props.user]);
}

```

Đoạn code trên sẽ yêu cầu React chỉ gọi hiệu ứng này lại khi ít nhất một trong hai giá trị thay đổi: `first` hoặc `props.user`.

Lưu ý rằng hiệu ứng cũng sẽ chạy lần đầu tiên sau khi component được hiển thị.

Nếu bạn đã học về lớp trong React, điều này tương tự như `componentDidUpdate` nhưng thêm một điều kiện if để kiểm tra giá trị trước đó của trạng thái `first` và `prop user`.

### Sử dụng nhiều hiệu ứng trong một component

Bạn có thể có nhiều hiệu ứng trong cùng một component và mỗi hiệu ứng có thể có phụ thuộc khác nhau. Chỉ cần nhớ tuân thủ các quy tắc sử dụng hook và đặt tất cả hook ở đầu hàm và không bao giờ đóng gói chúng bằng điều kiện if.

```jsx
useEffect(() => {
  console.log("Chạy khi A thay đổi");
}, [A]);

useEffect(() => {
  console.log("Chạy khi B thay đổi");
}, [B]);
```

### Lưu ý về việc sử dụng useEffect

Theo tài liệu chính thức: Hook là các hàm cho phép bạn "kết nối vào" trạng thái và các tính năng vòng đời của React từ các component hàm.

Hook `useEffect` "kết nối vào" vòng đời của component (khi nó được gắn kết, hủy gắn kết, v.v.).

Hook `useState` kết nối vào các tính năng state của React và cho phép bạn thiết lập state.

Kể từ React 18, hook `useEffect` chỉ được coi là phương án cuối cùng mà bạn có thể xem xét. Bạn không nên lạm dụng nó quá mức. Ngoài ra, hook này chủ yếu được sử dụng để đồng bộ với API bên ngoài. Vì vậy, bạn không nên sử dụng `useEffect` thường xuyên.

### Tóm lại

Bạn có thể chạy hiệu ứng:
- Một lần sau khi component được gắn kết
- Một lần sau khi component được gắn kết + một lần trước khi hủy gắn kết
- Sau mỗi lần hiển thị lại
- Trên các lần hiển thị lại cụ thể

*Bài tiếp theo [RS74 Update State trong effect](/lesson/session/session_074_effect_state.md)*