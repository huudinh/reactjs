
![Create-HTML-1](images/components.jpg) 

# RS65 Cải thiện hiệu suất của ứng dụng

### Hiệu suất khi sử dụng React

Cập nhật state trong React là hành vi bất đồng bộ, tức là state không nhất thiết phải được cập nhật ngay lập tức.

Hành vi này được thiết kế như vậy nhằm giúp cải thiện hiệu suất của ứng dụng React.

Khi bạn cập nhật trạng thái trong React, điều này yêu cầu phải hiển thị lại component (và có thể cả các component khác), đó có thể là một hoạt động tốn kém. Đó là lý do tại sao React gom nhóm nhiều cập nhật trạng thái lại với nhau và kết hợp chúng thành một lần render để làm cho ứng dụng phản hồi nhanh hơn và giảm công việc mà trình duyệt phải thực hiện.

### Gom nhóm các cập nhật trạng thái

```
import React, {useState} from "react";

function App() {    
    const [date, setDate] = useState(new Date());
    const [counter, setCounter] = useState(0);

    console.log("rendered"); //allows us to visualize re-renders

    function handleButtonClick() {
        setDate(new Date());
        setCounter(counter + 1);
    }

    return <button onClick={handleButtonClick}>Click me</button>
}
```

Hàm `setDate()` thiết lập ngày hiện tại bằng cách gọi `new Date()`.

Bây giờ hãy trả lời những câu hỏi sau:
1. Có bao nhiêu cập nhật trạng thái xảy ra khi nhấp vào nút?
2. Component này sẽ được hiển thị lại bao nhiêu lần khi nhấp vào nút?

Câu trả lời:

Câu trả lời cho câu hỏi đầu tiên là: có hai cập nhật trạng thái. Tuy nhiên, component chỉ hiển thị lại một lần.

Điều này là do React gom nhóm (kết hợp) hai thay đổi trạng thái này và thực hiện chúng cùng một lúc. Điều này giúp ứng dụng phản hồi nhanh hơn đối với tương tác của người dùng.

Bạn không cần phải biết cụ thể về cách/khi nào gom nhóm xảy ra vì đó là một tính năng của React. Tuy nhiên, hành vi này có thể tạo ra một số vấn đề trong ứng dụng khi quá trình cập nhật trở nên phức tạp hơn. 

Kể từ React 18, React hiện gom nhóm các cập nhật trạng thái ngay cả khi chúng nằm trong một trình xử lý sự kiện hoặc callback của promise.

### Tóm lại

- Cập nhật trạng thái trong React là hành vi bất đồng bộ.
- Một số thay đổi trạng thái xảy ra liên tiếp có thể được gom nhóm nhằm cải thiện hiệu suất.

*Bài tiếp theo [RS66 Update State bằng Function](/lesson/session/session_066_update_state_function.md)*