
![Create-HTML-1](images/components.jpg) 

# RS43 Quy tắc gọi Hooks

Để hook hoạt động chính xác, bạn phải tuân theo hai quy tắc sau:

### Quy tắc 1: Chỉ gọi Hook từ các hàm React

Đây là quy tắc mà chúng ta vẫn làm theo trước đó trong khóa học này, do đó bạn đã hiểu rõ quy tắc này.

Tất cả những gì bạn cần biết hiện tại là bạn chỉ nên gọi hook trong các component.

### Quy tắc 2: Chỉ gọi Hook ở Cấp độ trên cùng

- Không bao giờ gọi hook trong vòng lặp, điều kiện hoặc các hàm lồng nhau.

- Chúng ta cần phải giữ cùng một thứ tự của các hook trong mỗi lần gọi hàm. Ví dụ:

```
import {useState} from "react";

function App() {
    const [count, setCount] = useState(5);
    const [lives, setLives] = useState(3);

    return <button onClick={() => setCount(count - 1)}>Click me</button>;
}
```

Vào lần đầu tiên hàm được gọi, thứ tự mà hook được gọi như sau:

```
useState(5);
useState(3);
```

Điều này sẽ cho phép React tạo ra hai biến trạng thái riêng biệt, biến đầu tiên mặc định là 5 và biến thứ hai mặc định là 3.

Vào lần tiếp theo Component được gọi, ví dụ như khi người dùng nhấp vào nút, thứ tự các hook sẽ giữ nguyên:

```
useState(5);
useState(3);
```

Tuy nhiên, biến trạng thái đầu tiên bây giờ sẽ là 4 vì chúng ta giảm giá trị của nó do sự kiện nhấp chuột vào nút. Ngược lại, biến trạng thái thứ hai vẫn là 3 vì chúng ta chưa thay đổi giá trị của nó.

Việc giữ nguyên thứ tự cho phép React theo dõi hai biến trạng thái này một cách riêng biệt và đảm bảo cập nhật giá trị trạng thái chính xác khi nó thay đổi.

### React phụ thuộc vào thứ tự các hook được gọi

React phụ thuộc vào thứ tự các hook được gọi để hoạt động một cách chính xác.

Đây là lý do tại sao bạn không được phép đóng gói các hook bằng điều kiện if, vòng lặp hoặc hàm lồng nhau.

```
import {useState} from "react";

function App(props) {
    // this will NOT work
    if (some_condition){
        const [count, useCount] = useState(0);
    }
}
```

Đoạn code này SẼ KHÔNG hoạt động vì chúng ta không thể đảm bảo rằng mọi cuộc gọi đến component App sẽ có cùng thứ tự (và cùng số lượng) các cuộc gọi trạng thái.

Đây là lý do tại sao React yêu cầu bạn đặt tất cả các cuộc gọi hook ở đầu hàm. Điều này giúp bạn dễ dàng ghi nhớ rằng hook không nên được đóng gói bằng vòng lặp, điều kiện if và các hàm lồng nhau.

### Tóm lại

- Để hook hoạt động chính xác, bạn phải tuân theo hai quy tắc bên trên.
    - Quy tắc số 1: Chỉ gọi Hook từ các hàm React
    - Quy tắc số 2: Chỉ gọi Hook ở Cấp độ trên cùng và không bao giờ gọi hook trong vòng lặp, điều kiện if hoặc các hàm lồng nhau.
- React phụ thuộc vào thứ tự các hook được gọi để hoạt động một cách chính xác.


*Bài tiếp theo [RS44 Array và Object trong React](/lesson/session/session_044_react_array_object.md)*