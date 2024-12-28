
![Create-HTML-1](images/components.jpg) 

# RS38 Update State theo điều kiện

Thay đổi trạng thái có điều kiện không phải là một khái niệm đặc thù của React mà thực tế là một yêu cầu cần thiết trong nhiều dự án.

### Ví dụ

Khi chúng ta xây dựng component `Countdown`, bộ đếm giảm từ 10 xuống 9 khi nhấp vào nút `Countdown`.

Sau đó là từ 9 xuống 8, cứ thế cho đến khi giá trị giảm xuống dưới 0, điều này không hợp lý từ quan điểm người dùng cuối; nó nên dừng lại ở 0.

Đây là lúc khái niệm về thay đổi trạng thái có điều kiện trở nên hữu ích.

Đó là khi bạn chỉ cập nhật trạng thái dựa trên một điều kiện cụ thể.

Hãy xem một ví dụ mà nút `Add second` chỉ cộng thêm giây cho đến khi đạt đến giây thứ 59.

```
import {useState} from "react";

function Clock() {
    const [seconds, setSeconds] = useState(0);

    function handleIncrementClick() {
        if (seconds < 59) {
            setSeconds(seconds + 1);
        }
    }

    return (<>
        <h1>{seconds} seconds</h1>
        <button onClick={handleIncrementClick}>Add</button>
    </>);
}
```

Đoạn code đã thực hiện thay đổi trạng thái có điều kiện dựa trên trạng thái hiện tại:

```
if (seconds < 59) {
    setSeconds(seconds + 1);
}
```

Chúng ta chỉ tăng giây nếu `seconds < 59` trả về true.

Điều này có nghĩa là lần cuối cùng tăng giá trị là khi `seconds` là 58, sau đó `seconds` trở thành 59 và sau đó điều kiện if sẽ không chạy nữa.

### Lưu ý

Không đóng gói useState bằng điều kiện if

Chúng ta đóng gói `setSeconds` bằng điều kiện `if`, nhưng hook `useState` không nên được đóng gói bằng điều kiện if.

### Lý do

- React không cho phép đóng gói hook bằng điều kiện if.

- Bản thân trạng thái không có điều kiện. Chúng ta luôn muốn lấy trạng thái `seconds`; sự thay đổi chỉ xảy ra khi cuộc gọi `setSeconds` được thực hiện dưới điều kiện. Dù cho không gọi `setSeconds`, chúng ta vẫn sử dụng cú pháp `destructure` để lấy giá trị từ `useState`.


### Tóm lại

- Thay đổi trạng thái có điều kiện là khi bạn đóng gói hàm setState bằng một điều kiện if để đáp ứng một số logic của dự án.

- KHÔNG đóng gói `useState` bằng điều kiện if.

### Bài tập

**Câu 1:** Tại sao cần thay đổi State theo điều kiện
**Câu 2:** Tại sao KHÔNG đóng gói useState bằng điều kiện if

*Bài tiếp theo [RS39 Thay đổi State với Props](/lesson/session/session_039_state_props.md)*