
![Create-HTML-1](images/components.jpg) 

# RS37 Event & State

Sau khi đã hiểu về event và closures, chúng ta có thể tiếp tục làm việc với state bên trong các component.

Hãy chuyển từ trình xử lý sự kiện trực tiếp sang trình xử lý sự kiện có tên:

### Xử lý sự kiện trực tiếp

```
import {useState} from "react";

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);

    return (<>
        <h2>{seconds}</h2>
        <button onClick={() => setSeconds(seconds + 1)}>Click to add 1</button>
    </>);
}
```

### Xử lý sự kiện có tên

```
import {useState} from "react";

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);

    function handleIncrementClick() {
        setSeconds(seconds + 1);
    }

    return (<>
        <h2>{seconds}</h2>
        <button onClick={handleIncrementClick}>Click to add 1</button>
    </>);
}
```

Để ý `handleIncrementClick` được định nghĩa bên trong hàm `Stopwatch`.

Bởi vì chúng ta có một `closure` ở đây nên `handleIncrementClick` có thể truy cập biến `seconds` vì nó nằm trong phạm vi của `Stopwatch`.

Đó là lý do tại sao hàm `handleIncrementClick` nên được định nghĩa bên trong Component `Stopwatch`, nếu không, hàm sẽ không thể truy cập vào phạm vi của `Stopwatch` (bao gồm các biến/hàm như `seconds` và `setSeconds`).

### Tóm lại

- Khi trình xử lý sự kiện được định nghĩa bên trong component, chúng có thể sử dụng các state nhờ có `closures`.

*Bài tiếp theo [RS38 Thay đổi State có điều kiện](/lesson/session/session_038_state_conditions.md)*