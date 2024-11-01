![Create-HTML-1](images/state.png) 

# RS33 Áp dụng State

### Phân tích component Counter

```
import {useState} from "react";
import {createRoot} from "react-dom/client";

function Counter() {
    const [count, setCount] = useState(0);
    console.log("value of count is: ", count);

    return (<>
        <div>{count} times clicked!</div>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
    </>);
}

createRoot(document.querySelector("#root")).render(<Counter />);
```

Lần đầu tiên Component này hiển thị, chúng ta nhận được console log sau:

```
console.log("value of count is: ", count); // value of count is: 0
```

Sau đó, khi người dùng nhấp chuột vào nút, chúng ta đặt giá trị mới của count thành count + 1, vì vậy 0 + 1 = 1

Vì chúng ta đã gọi `setCount`, React biết rằng trạng thái của Component này đã thay đổi, điều đó có nghĩa là nó cần phải hiển thị lại, vì vậy toàn bộ hàm Counter được gọi lại, nhưng lần này trạng thái seconds đã được tạo nên nó sẽ không được đặt thành 0 nữa.

React sẽ KHÔNG sử dụng lại giá trị khởi tạo vì trạng thái đã tồn tại.

Vì vậy lần này, const [count, setCount] = useState(0); sẽ cung cấp trạng thái count có giá trị là 1.

Tại sao? Bởi vì chúng ta đã gọi setCount(1) trước đó.

Vì vậy đây là console log được in ra khi React hiển thị lại Component này:

```
console.log("value of count is: ", count); // value of count is: 1
```

Sau đó, khi người dùng nhấp chuột vào nút, chúng ta đặt giá trị mới của count thành count + 1, vì vậy 1 + 1 = 2

### SetState

Tại sao chúng ta cần sử dụng một phương thức riêng biệt để cập nhật trạng thái?

Nói ngắn gọn, React không thể biết khi nào bạn thay đổi giá trị của `count`, vì vậy chúng ta cần sử dụng phương thức được cung cấp là `setCount`.

Phương thức này kết nối vào nội bộ của React và thông báo rằng chúng ta đang thay đổi giá trị của một trạng thái đó là lý do tại sao useState được coi là hook.

Điều này thường có nghĩa là Component phải hiển thị lại, tức là nó phải được vẽ lại trên màn hình, quá trình này được xử lý bởi ReactDOM.

### Lợi ích đem lại

Đôi khi chúng ta gặp khó khăn trong việc hình dung ra ý nghĩa tổng quan của một vấn đề, vì vậy hãy dừng lại một chút và xem lại lý do tại sao chúng ta lựa chọn sử dụng React và những lợi ích mà nó mang lại.

Lợi ích của việc sử dụng React ở đây là chúng ta return `<div>{count} times clicked!</div>` và chúng ta KHÔNG cần phải lo lắng về việc cập nhật.

Chúng ta gọi `setCount()` và React sẽ quan tâm đến giá trị `{count}` trong `<div>{count} times clicked!</div>`.

Thông thường, với Vanilla JavaScript (JavaScript không sử dụng bất kỳ thư viện nào), bạn phải cập nhật thủ công DOM mỗi khi một biến thay đổi và code có thể trở nên lộn xộn khi yêu cầu trở nên phức tạp hơn.

### Tóm lại

- Khi bạn thay đổi State, React sẽ gọi lại Component để hiển thị lại
- Giá trị khởi tạo được truyền vào `useState(initialValue)` chỉ được sử dụng vào lần đầu tiên mà Component hiển thị.
- useState là một Hook trong React kết nối vào nội bộ của React và thông báo rằng một biến trạng thái đã thay đổi.

### Bài tập

**Câu 1:** Nguyên tắc hoạt động của component Counter

**Câu 2:** Lợi ích khi áp dụng state trong reactjs so với js

*Bài tiếp theo [RS34 Closures trong JavaScript](/lesson/session/session_034_closures.md)*