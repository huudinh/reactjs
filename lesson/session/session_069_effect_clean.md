![Create-HTML-1](images/effect.webp) 

# RS69 Clean Effect

### Dọn dẹp là gì?

Một số phương thức trong JavaScript yêu cầu việc dọn dẹp. Hãy cùng tìm hiểu lý do tại sao.

Khi bạn tạo một bộ đếm thời gian bằng cách sử dụng `setTimeout`, bạn đang trì hoãn việc chạy một đoạn code trong tương lai, ví dụ:

```
setTimeout(() => {
    console.log("This will run in 1 second");
}, 1000);
```

Nếu đoạn code này được đóng gói trong một hàm và hàm đó có thể được gọi nhiều lần, bạn có thể gặp phải tình trạng rò rỉ bộ nhớ. Điều này có nghĩa là bạn đang tăng dần bộ nhớ của ứng dụng vì bạn liên tục lên lịch cho một bộ đếm thời gian mới mỗi khi hàm được gọi.

Một ví dụ cụ thể hơn là khi bạn chạy code này bên trong một component React, ví dụ:

```
import {useEffect} from "react";

function App() {
    useEffect(() => {
        setTimeout(() => {
            console.log("This will run in 1 second");
        }, 1_000);
    });

    return <h1>App</h1>;
}
```

Mỗi khi component App được hiển thị lại, nó sẽ lên lịch cho việc tạo một bộ đếm thời gian mới mà không dọn dẹp bộ đếm thời gian trước đó.

Đây là một ví dụ về hiệu ứng yêu cầu dọn dẹp để tránh rò rỉ bộ nhớ.

Ví dụ này chỉ hiển thị một `setTimeout` nhưng hãy nghĩ đến trường hợp mà bạn đang thiết lập một kết nối tới API trò chuyện bằng cách sử dụng `WebSockets` mà không đóng kết nối trước đó. Đó là một ví dụ khác về rò rỉ bộ nhớ và cũng là một ví dụ về hiệu ứng yêu cầu dọn dẹp.

### Cách dọn dẹp hiệu ứng 

Để dọn dẹp một hiệu ứng, bạn phải trả về một hàm (dọn dẹp) từ bên trong cuộc gọi useEffect. Chúng ta sẽ bắt đầu với ví dụ đơn giản nhất:

```
import {useEffect, useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("effect running");
    return () => {
      console.log("effect cleaning up");
    }
  })

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Add</button>
    </>
  );
}
```

Vào lần đầu tiên component được hiển thị, chúng ta chỉ thấy `console.log: "effect running"`.

Sau đó, mỗi khi component được hiển thị lại vì trạng thái của nó thay đổi (khi ta nhấp vào nút), nó bắt đầu bằng cách dọn dẹp component (chúng ta thấy "effect cleaning up") và sau đó là "effect running".

Kết luận là `return () => { console.log("effect running"); }` sẽ chạy mỗi khi component bị xóa (còn gọi là hủy gắn kết).

Lưu ý rằng component được gỡ bỏ và sau đó được chèn lại vì nó đang được hiển thị lại do có thay đổi trạng thái.

### Chế độ nghiêm ngặt (Strict mode)

Khi chạy đoạn code trên trong chế độ nghiêm ngặt trên môi trường phát triển, bạn sẽ thấy thông báo sau trên bảng điều khiển:

```
effect running
effect cleaning up
effect running
```

Điều này là do React đang thêm component vào DOM, xóa nó, sau đó thêm lại. Điều này nghe có vẻ mâu thuẫn, nhưng nó giúp bạn phát hiện các lỗi rò rỉ bộ nhớ. Nếu bạn quên dọn dẹp hiệu ứng, bạn sẽ thấy một số hành vi bất thường trong ứng dụng (chỉ khi chạy ở chế độ nghiêm ngặt trên máy cục bộ).

Hành vi này cho phép giải thuật `reconciliation` của React dừng quá trình hiển thị ngay giữa chừng mà không làm hỏng giao diện người dùng. Điều này là nền tảng để triển khai các tính năng xử lý đồng thời trong React 18 (một trong số đó vẫn đang được phát triển).

Khi bạn chạy code trong môi trường sản xuất (sử dụng React sản xuất), các hiệu ứng chỉ chạy một lần và bạn sẽ không gặp phải hành vi này. Vì vậy, đây chỉ là một hành vi cục bộ nhằm giúp bạn tìm ra các lỗi. Tiếp theo chúng ta sẽ làm một bài tập trực quan để hiểu rõ hơn về điều này.

### Tóm lại

- Một số phương thức JavaScript yêu cầu dọn dẹp để tránh rò rỉ bộ nhớ (ví dụ: setTimeout, setInterval).
- Để dọn dẹp một hiệu ứng, bạn phải trả về một hàm từ bên trong cuộc gọi `useEffect`.
- React sẽ gọi hàm đó mỗi khi component được kích hoạt lại hoặc bị xóa khỏi DOM.
- Nếu bạn quên dọn dẹp hiệu ứng, bạn sẽ thấy một số hành vi bất thường trong ứng dụng (chỉ khi chạy ở chế độ nghiêm ngặt trên máy cục bộ).

*Bài tiếp theo [RS70 Dọn dẹp bộ đếm thời gian](/lesson/session/session_070_effect_clean_time.md)*