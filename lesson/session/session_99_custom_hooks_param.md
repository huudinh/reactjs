![Create-HTML-1](images/custom-hooks.png) 

# RS99 Custom hooks với tham số

Vì hook tùy chỉnh là hàm nên chúng có thể nhận `parameter`. Bạn có thể cung cấp một hoặc nhiều tham số, thuộc bất kỳ kiểu dữ liệu nào, giống như các hàm thông thường.

Chúng ta sẽ bắt đầu với một ví dụ cơ bản chỉ cung cấp một tham số có kiểu string.

Hãy xem ví dụ sau:

```
function useWelcomeGreeting(name) {
    useEffect(() => {
        console.log(`Welcome ${name} to my app`);
    }, []);
}
```

Hook này nhận tham số `name`, cho phép bạn chỉ định tên của người dùng khi gọi `hook` (khi gọi hàm `useWelcomeGreeting`). Sau đây là cách sử dụng hàm:

```
// assuming you imported that function (and it was exported)

function App() {
    useWelcomeGreeting("Sam");
}
```

Khi component App hiển thị lần đầu, chương trình sẽ in ra `"Welcome Sam to my app"`. 

### Quy tắc làm việc với hook

#### Quy tắc số 1: Chỉ gọi Hook từ các hàm React

Trước đây, chúng ta đã đơn giản hóa quy tắc đó và nói rằng bạn chỉ nên gọi hook bên trong component. Ngoài ra, bạn cũng có thể gọi Hook từ hook tùy chỉnh của riêng bạn

Ví dụ, bạn có thể gọi useEffect trong hook tùy chỉnh của riêng bạn.

Vì vậy, quy tắc số 1 là: Chỉ gọi Hook từ các hàm React, ví dụ như component hoặc hook tùy chỉnh. Bạn không nên gọi hook React trong bất kỳ hàm hoặc nơi nào khác.

#### Quy tắc số 2: Chỉ gọi Hook ở cấp độ trên cùng

Hãy đảm bảo bạn không gọi nó bên trong vòng lặp, điều kiện hoặc các hàm lồng nhau vì thứ tự của các hook phải được giữ nguyên giữa các lần hiển thị lại.

### useDocumentTitle

```
// You also need to import useDocumentTitle.

function App() {
    useDocumentTitle("Welcome to the online store")
}
```

Khi component App hiển thị, nó sẽ thay đổi `document.title` thành Welcome to the online store.

```
import {useState} from "react";
// You also need to import useDocumentTitle...

function App() {
    const [count, setCount] = useState(0);
    useDocumentTitle(`${count} products in your shopping list`);

    function handleButtonClick() {
        setCount(prevCount => prevCount + 1);
    }

    return <button onClick={handleButtonClick}>Add item</button>
}
```

Nếu bạn để ý cách viết hook tùy chỉnh `useDocumentTitle` thì mỗi khi bạn nhấp vào nút, chương trình sẽ hiển thị tiêu đề được cập nhật (với số đếm mới).

### Tóm lại

- Vì hook tùy chỉnh là hàm nên chúng có thể nhận tham số. Bạn có thể cung cấp một hoặc nhiều tham số, thuộc bất kỳ kiểu dữ liệu nào, giống như các hàm thông thường.

- Các quy tắc làm việc với hook vẫn áp dụng cho hook tùy chỉnh.
    - Quy tắc số 1: Chỉ gọi Hook từ các hàm React (component hoặc hook tùy chỉnh).
    - Quy tắc số 2: Chỉ gọi Hook ở cấp độ trên cùng

*Bài tiếp theo [RS100 Custom hooks với state](/lesson/session/session_100_custom_hooks_state.md)*