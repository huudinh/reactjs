![Create-HTML-1](images/effect.webp) 

# Dependencies

Tất cả các cuộc gọi `useEffect` mà chúng ta đã thấy cho đến nay đều chạy sau lần hiển thị đầu tiên của component và sau mỗi lần component hiển thị lại. Nhưng đôi khi bạn không muốn `useEffect` hiển thị lại mỗi lần (đôi khi điều này sẽ tạo ra vòng lặp vô hạn). Đó là lý do tại sao hàm `useEffect` có đối số thứ hai.

```
useEffect(effectCallback, dependencies)
```

Hàm `effectCallback` là hàm được truyền vào làm đối số đầu tiên và đối số `dependencies` sẽ được giải thích trong chương này. Giá trị mặc định của nó là null. Vì vậy trong các chương trước, chúng ta không bao giờ truyền tham số đó; do đó, nó mặc định là null.

### Dependencies trong useEffect

`dependencies` trong `useEffect` là một mảng quyết định khi nào hiệu ứng sẽ được chạy lại. Dưới đây là cách nó hoạt động:

```
import {useState, useEffect} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("effect is running");
    }, [counter]);

    return <button onClick={() => setCounter(prev => prev + 1)}>Click me</button>;
}
```

Chúng ta đã truyền vào `useEffect` đối số thứ hai của `[counter]`. Đó là mảng các phụ thuộc (`dependencies`).

Điều này cho React biết nó chỉ nên gọi lại `useEffect` khi giá trị của `counter` thay đổi. Điều này có nghĩa là nó sẽ gọi lại sau lần đầu tiên component hiển thị và mỗi lần giá trị `counter` thay đổi.

Vì vậy trong ví dụ này, [`counter`] bắt đầu là [`0`] (vì trạng thái counter bắt đầu từ 0).

React sẽ lưu trữ `[0]` và sau đó khi người dùng nhấp vào nút. Giá trị mới của `[counter]` trở thành `[1]`.

Dependency là một mảng vì bạn có thể cung cấp nhiều giá trị trong mảng đó (từ state hoặc props của component). Chúng ta sẽ xem những ví dụ này sau trong khóa học.

Điều này cho phép bạn tối ưu hóa code và chỉ chạy khi cần thiết.

### Hiệu ứng chỉ chạy một lần

Ta cũng có thể truyền mảng rỗng làm phụ thuộc: `[]` và trên thực tế, thực hành này khá phổ biến trong lập trình React.

Khi bạn truyền một mảng rỗng, so sánh giữa lần hiển thị trước và lần hiển thị tiếp theo luôn trả về kết quả giống nhau (vì React so sánh cùng một thực thể của `[]`, không có giá trị nào trong mảng đó có thể thay đổi). Điều này có nghĩa là việc truyền `[]` sẽ chỉ chạy hiệu ứng một lần sau lần hiển thị đầu tiên.

Vì vậy nếu bạn muốn chỉ chạy hiệu ứng một lần duy nhất sau khi component đã được gắn kết, bạn nên truyền một mảng rỗng. Điều này thường hữu ích khi làm việc với các thư viện bên ngoài hoặc gửi cuộc gọi phân tích trong component.

Hãy xem một ví dụ vẽ bản đồ bằng cách sử dụng thư viện bên ngoài.

Trong JavaScript, bạn cần khởi tạo thư viện map một lần bằng cách gọi giả mã dưới đây:

```
const map = new mapboxgl.Map({
    container: "#map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [10, 20],
    zoom: 13
});
```

Nhưng bạn không cần chạy lại mã lệnh trên mỗi khi trạng thái của component thay đổi! Bạn chỉ cần chạy nó một lần. Đó là lý do tại sao trong React, bạn cần chạy nó bên trong useEffect và sử dụng mảng rỗng làm phụ thuộc. Dưới đây là giả mã:

```
useEffect(() => {
    const map = new mapboxgl.Map({
        container: "#map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [10, 20],
        zoom: 13
    });

    // no need to clean up as the map is destroyed when the DOM element is removed 
}, []);
```

### Tóm lại

- Cách gọi `useEffect` là: `useEffect(effectCallback, dependencies)`
- Theo mặc định, đối số `dependencies` có giá trị là `null`, điều này có nghĩa là nó sẽ chạy lại trên mỗi cập nhật.
- Tham số `dependencies` nhận một mảng giá trị mà React sẽ so sánh giữa lần hiển thị trước và lần hiển thị tiếp theo. Chỉ khi những giá trị này thay đổi thì React mới gọi lại hiệu ứng.
- Nếu bạn truyền một mảng rỗng `[]` làm phụ thuộc thì hiệu ứng sẽ chỉ được gọi một lần.

*Bài tiếp theo [Vòng đời của Component](/lesson/session/session_73_lifecycle.md)*