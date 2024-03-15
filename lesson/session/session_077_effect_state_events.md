![Create-HTML-1](images/effect.webp) 

# RS77 Effect, State & Events

Khi sử dụng hiệu ứng, trạng thái và sự kiện cùng lúc, chúng ta có thể bị nhầm lẫn hoặc gặp khó khăn trong việc quản lý các tương tác giữa chúng.

Hãy xem xét component App dưới đây:

```
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    function handleButtonClick() {
        setCount(prevCount => prevCount + 1);
        console.log(count);
    }

    return <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Add 1</button>
    </>;
}
```

Component này hiển thị giá trị hiện tại của biến count, bắt đầu từ 0.

Khi bạn nhấp vào nút Add 1, React sẽ tăng giá trị của `count` lên 1 và sau đó gọi `console.log(count)`.

Tuy nhiên, khi bạn gọi `console.log(count)` sau đó, nó sẽ hiển thị giá trị cũ của count. Lý do là vì cách cập nhật trạng thái của React có tính chất không đồng bộ. Điều này có nghĩa là nhiều trạng thái có thể được gộp lại và bạn không thể dựa vào giá trị của trạng thái để được cập nhật ngay sau khi gọi `setState`.

Điều đó cũng liên quan đến thiết kế của `Hook`; bạn chỉ nhận được giá trị mới của `count` khi hàm App được gọi lại, điều này sẽ gọi `const [count, setCount] = useState(0);` và cung cấp giá trị mới của `count` đã được cập nhật.

Việc này nghe có vẻ mâu thuẫn với logic thông thường, nhưng cách thiết kế này giúp cải thiện đáng kể hiệu suất của ứng dụng.

### Cách khắc phục

Nếu bạn cần ghi log hoặc sử dụng giá trị được cập nhật, bạn chỉ cần sử dụng một hiệu ứng với phụ thuộc là biến trạng thái đó.

Điều đó sẽ làm cho hiệu ứng chạy mỗi khi biến trạng thái thay đổi. Vì vậy, dưới đây là cách chúng ta sửa đoạn code trên:

```
import {useState, useEffect} from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count)
    }, [count]);

    function handleButtonClick() {
        setCount(prevCount => prevCount + 1)
    }

    return <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Click me</button>
    </>;
}
```

Hiệu ứng:

```
useEffect(() => {

}, [count]);
```

sẽ cho phép bạn chạy một đoạn code (ví dụ: `console.log(count)`) mỗi khi trạng thái count có giá trị mới!

### Lưu ý 

Sự thay đổi trên sẽ dẫn đến việc in ra 0 trên console khi component được hiển thị lần đầu tiên. Hành vi này không xảy ra trong đoạn code trước đó.

Nếu bạn không muốn ghi log giá trị khởi tạo khi component được hiển thị lần đầu tiên, bạn có thể đóng gói console.log trong một điều kiện if:

```
useEffect(() => {
    if (count > 0) {
        console.log(count);
    }
}, [count]);
```

### Tóm lại

- Việc cập nhật trạng thái của React được thực hiện không đồng bộ.
- Nếu bạn cần giá trị cập nhật mới nhất của một trạng thái sau khi nó thay đổi trong một sự kiện, bạn cần di chuyển logic vào hiệu ứng.

*Bài tiếp theo [RS78 Effect Performance](/lesson/session/session_078_effect_performance.md)*