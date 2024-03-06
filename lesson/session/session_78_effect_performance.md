![Create-HTML-1](images/effect.webp) 

# RS78 Effect Performance

Chúng ta đã sử dụng `useEffect` khá nhiều nhưng chưa thực sự tìm hiểu về ảnh hưởng của nó đến hiệu suất.

Hiệu ứng mà bạn lên lịch với `useEffect` sẽ chạy sau khi component được hiển thị trên DOM, đây là một quyết định thiết kế của nhóm React vì lý do hiệu suất. 

### Ví dụ về localStorage

localStorage (hoặc window.localStorage) là một API của trình duyệt cho phép chúng ta lưu trữ dữ liệu dưới dạng các cặp khóa và giá trị.

Vấn đề với localStorage là nó là một API đồng bộ, tức là:

```
console.log("A");
localStorage.setItem("key", "value");
console.log("B");
```

Trong đoạn code trên, chúng ta sẽ thấy `console.log("A")` được in ra trước, sau đó, nếu `localStorage.setItem()` mất 200 mili giây để hoàn thành thì `console.log("B")` sẽ phải đợi `localStorage.setItem()` hoàn thành trước khi nó được gọi.

Hành vi này không tốt vì nó có thể làm chậm ứng dụng ngay lập tức.

Nếu bạn chỉ cần lưu trữ một vài mục thì việc sử dụng `localStorage` là chấp nhận được, nhưng nói chung, bạn không nên sử dụng quá thường xuyên do nó sẽ làm chậm đáng kể hiệu suất của ứng dụng.

### localStorage trong component 

Giả sử bạn muốn gọi `localStorage` trong một component React; bạn nên làm điều đó bên trong `useEffect` vì hai lý do sau:

1. Đó là hiệu ứng phụ (nó thay đổi cái gì đó bên ngoài component React)
2. Hiệu suất của ứng dụng (được minh họa bên dưới).

Để minh họa lý do tại sao việc sử dụng localStorage có thể làm chậm hiệu suất, bạn tạo một mảng đối tượng lớn trong data.js, sau đó chúng ta sẽ thêm và lưu mảng này vào localStorage trong một component React. Chương trình như sau:

```
import {useState} from "react";
import data from "./data.js";

function App() {
    const [random, setRandom] = useState(Math.random());

    // THIS IS BAD FOR PERFORMANCE
    localStorage.setItem("data", JSON.stringify(data));

    return <>
        <h1>{random}</h1>
        <button>Re-render</button>
    </>
}
```

Vấn đề với đoạn code trên là nếu `localStorage.setItem()` mất 200ms để hoàn thành, điều này sẽ làm chậm việc hiển thị cập nhật các trên màn hình của người dùng, dẫn đến hiệu suất không tốt.

Để minh họa rõ hơn ảnh hưởng của việc sử dụng `localStorage` đối với hiệu suất, chúng ta sẽ tăng số lượng lên thành 200 cuộc gọi `localStorage.setItem()` và `localStorage.getItem()`.

Sau đó, ta tạo một phiên bản tối ưu hóa bằng cách đặt 200 cuộc gọi localStorage bên trong một useEffect như sau:

```
import {useState, useEffect} from "react";
import data from "./data.js";

function App() {
    const [random, setRandom] = useState(Math.random());

    // this is BETTER for performance
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    });

    return <>
        <h1>{random}</h1>
        <button>Re-render</button>
    </>
}
```

Bằng cách đóng gói các cuộc gọi `localStorage` bằng `useEffect`, chúng ta cho phép component được hiển thị trên màn hình trước và thực hiện các cuộc gọi `localStorage` sau khi component đã được hiển thị.

Dưới đây là phiên bản tăng cường (bạn thường gặp vấn đề liên quan đến hiệu suất khi có một số lượng lớn component, vì vậy chúng ta có thể mô phỏng tình huống đó bằng cách tăng số lượng cuộc gọi `localStorage`).

### Lưu ý 

`useEffect` không phải là một giải pháp tuyệt đối hoàn hảo; nếu code bên trong `useEffect` thực sự chạy chậm thì hiệu suất vẫn có thể bị ảnh hưởng.

Bây giờ chúng ta đã biết rằng `localStorage` chỉ nên được sử dụng cho việc đọc/ghi dữ liệu có kích thước nhỏ và nó nên được đóng gói bằng `useEffect`

### Tóm lại

- Hiệu ứng mà bạn lên lịch với `useEffect` sẽ chạy sau khi component được hiển thị trên DOM.


*Bài tiếp theo [RS79 localStorage](/lesson/session/session_79_localStorage.md)*