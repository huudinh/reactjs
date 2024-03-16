![Create-HTML-1](images/fetch.webp) 

# RS92 Fetch khi thay đổi (onChange)

Một trường hợp sử dụng phổ biến khác của `fetch` là tải dữ liệu khi người dùng chọn một giá trị từ danh sách thả xuống.

Nhớ rằng bạn phải đóng gói `console.log(currency)` bằng `useEffect` với phụ thuộc là `currency`. Điều này cho phép ta chạy một đoạn code mỗi khi giá trị của `currency` thay đổi.

```
import {useState, useEffect} from "react";

function CurrencySelector() {
    const [currency, setCurrency] = useState("");

    useEffect(() => {
        console.log(currency);
    }, [currency]);

    function handleCurrencyChange(event) {
        setCurrency(event.target.value);
    }

    return <>
        <h3>Select currency</h3>
        <select onChange={handleCurrencyChange}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
        </select>
        <h1>{currency}</h1>
    </>;
}
```

Giả sử bạn muốn tải một số dữ liệu dựa trên loại tiền tệ được chọn; bạn không nên làm điều đó bên trong `handleCurrencyChange` vì vào thời điểm đó, giá trị `currency` chưa được cập nhật thành giá trị mới nhất (trạng thái).

Thay vào đó, cuộc gọi `fetch` nên nằm bên trong:

```
useEffect(() => {
    console.log(currency);
    // fetch call here
}, [currency]);
```

### Tóm lại

- Nếu bạn cần thực hiện một cuộc gọi `fetch` dựa trên một giá trị trạng thái có thể thay đổi thì tốt nhất là nên chạy yêu cầu `fetch` bên trong `useEffect` với phụ thuộc là biến trạng thái đó.


*Bài tiếp theo [RS93 Fetch với async/await](/lesson/session/session_093_fetch_async.md)*