![Create-HTML-1](images/custom-hooks.png) 

# RS97 Custom Hooks useEffect

Hãy xem một ví dụ xây dựng hook tùy chỉnh bằng `useEffect`:

```
import {useEffect} from "react";

function useHelloWorld() {
    useEffect(() => {
        console.log("Hello World!");
    });
}
```

Chúng ta sử dụng hook tùy chỉnh này theo cách tương tự như đã làm trong bài học trước.

Đoạn code này sẽ in `Hello World!` ra console sau mỗi lần component hiển thị lại (vì `console.log` được đóng gói trong `useEffect`).

Bạn cũng có thể chỉ cho hook chạy một lần duy nhất khi component được hiển thị lần đầu tiên; để làm điều đó, bạn phải chỉ định phụ thuộc của `useEffect` là một mảng rỗng:

```
import {useEffect} from "react";

function useHelloWorld() {
    useEffect(() => {
        console.log("Hello World!");
    }, []);
}
```

### Khi nào nên áp dụng trường hợp trên?

Việc sử dụng hook tùy chỉnh với phụ thuộc là một mảng rỗng có thể hữu ích trong một số tình huống, chẳng hạn như gửi một sự kiện phân tích (ví dụ: sử dụng Google Analytics).

Giả sử bạn đã cài đặt Google Analytics trong dự án, bạn có thể tạo hook tùy chỉnh để gửi một sự kiện khi component hiển thị, ví dụ:

```
import {useEffect} from "react";

function useAnalyticsEvent() {
    useEffect(() => {
        gtag("event", "component_rendered");
    }, []);
}
```

Hàm `gtag` được cung cấp bởi thư viện Google Analytics (giả định rằng bạn đã thêm thư viện vào dự án). Ví dụ này cho thấy rằng bạn có thể gửi sự kiện phân tích chỉ một lần duy nhất sau khi component được hiển thị lần đầu tiên. Điều này bởi vì ta đang sử dụng `useEffect(..., [])`.

Bạn có thể làm rất nhiều việc khác nhau khi sử dụng hook tùy chỉnh, chẳng hạn như nhận tham số, trả về các phần tử, gọi `useState`, v.v.

### Tóm lại

- Hook tùy chỉnh có thể gọi `useEffect` miễn là `useEffect` đã được thêm vào file JavaScript.
- Mọi thứ bạn đã học về useEffect vẫn áp dụng cho hook tùy chỉnh (ví dụ: mảng phụ thuộc).

*Bài tiếp theo [RS98 Di chuyển hooks vào file riêng](/lesson/session/session_98_custom_hooks_file.md)*