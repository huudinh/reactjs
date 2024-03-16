![Create-HTML-1](images/fetch.webp) 

# RS91 Fetch API khi người dùng nhấp chuột vào nút

Một trường hợp sử dụng phổ biến của `fetch` là tải dữ liệu khi người dùng nhấp chuột vào nút.

Bạn có thể làm điều đó bằng cách viết code `fetch` bên trong hàm `handleButtonClick`, ví dụ:

```
function App() {
    const [isLoading, setIsLoading] = useState(false);

    function handleButtonClick() {
        setIsLoading(true);
        // fetch("...") as usual
    }

    return <button onClick={handleButtonClick}>Load data</button>;
}
```

Vì vậy, nếu bạn muốn thực hiện yêu cầu `fetch` trên sự kiện `onClick`, bạn cần đặt cuộc gọi `fetch` bên trong hàm `handleButtonClick` thay vì trong `useEffect`.

Lưu ý rằng chúng ta thiết lập giá trị mặc định của `isLoading` là `false` vì nó chỉ bắt đầu tải khi người dùng nhấp vào nút. Chúng ta bắt đầu hiển thị trình tải bên trong `handleButtonClick` bằng `setIsLoading(true)`.

### Vô hiệu hóa nút trong quá trình tải

Bạn có thể vô hiệu hóa nút trong quá trình tải bằng cách sử dụng biến trạng thái `isLoading`.

```
<button disabled={isLoading}>Click me</button>
```

Điều này giúp tránh việc người dùng liên tục nhấp vào nút một khi đã bắt đầu yêu cầu `fetch`.

### Tóm lại

- Bạn có thể tải dữ liệu khi nhấp vào nút bằng cách đặt cuộc gọi fetch trong hàm xử lý onClick.
- Bạn có thể vô hiệu hóa nút trong quá trình tải với `<button disabled={isLoading}>Nhấn vào đây</button>`.

*Bài tiếp theo [RS92 Fetch khi thay đổi (onChange)](/lesson/session/session_092_fetch_onchange.md)*