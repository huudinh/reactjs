![Create-HTML-1](images/fetch.webp) 

# RS88 Các loại lỗi khi Fetch API

### Xử lý lỗi HTTP

Khi làm việc với API fetch, chúng ta có thể gặp một số vấn đề liên quan đến yêu cầu fetch.

Hai loại lỗi phổ biến nhất là: lỗi HTTP và lỗi mạng.

Trong bài học này, chúng ta sẽ tìm hiểu về lỗi HTTP.

### Mã trạng thái HTTP

Khi bạn gửi một yêu cầu fetch, bạn nhận được một phản hồi với một mã trạng thái.

Mã trạng thái 200 (hoặc bất kỳ số nào từ 200 đến 299, thường được viết là 2xx) được coi là yêu cầu thành công.

Bạn có thể tham khảo thông tin chi tiết về mã trạng thái HTTP trên MDN.

Tuy nhiên, các phản hồi trong khoảng từ 400 đến 499 (4xx) và từ 500 đến 599 (5xx) cho biết rằng yêu cầu fetch không được hoàn thành thành công.

4xx đề cập đến các vấn đề liên quan đến máy khách, tức là từ phía bạn. Điều này thường có nghĩa là bạn đã gọi yêu cầu fetch không đúng cách (ví dụ: không tuân thủ các quy tắc xác thực, không cung cấp đầy đủ thông tin hoặc không tìm thấy điểm cuối).

Mặt khác, lỗi 5xx liên quan đến máy chủ, có nghĩa là sự cố đến từ máy chủ (ví dụ: máy chủ không thể xử lý yêu cầu do quá tải hoặc có lỗi trong chương trình của máy chủ)

Bài học này sẽ hướng dẫn bạn cách xử lý lỗi 4xx và 5xx khi làm việc với fetch.

Giả sử bạn gửi yêu cầu fetch đến một điểm cuối không tồn tại, sau đây là code mẫu:

```
fetch("https://jsonplaceholder.typicode.com/users/id")
.then(response => response.json())
.then(data => {
    console.log(data); // null
});
```

Thay vì nhận được data trả về, chúng ta không nhận được bất cứ cái gì. Trong một số API, bạn có thể nhận được một đối tượng JSON chứa thông báo lỗi và có thể là một mã lỗi. Không có phương pháp tiêu chuẩn cho việc xử lý lỗi và nhận thông tin lỗi từ các API khác nhau bởi điều đó phụ thuộc vào API bạn đang sử dụng.

Tuy nhiên, theo quy tắc chung, thực hành tốt nhất là luôn kiểm tra dữ liệu bạn nhận được trước khi gọi `setState`. Bạn có thể làm điều đó bằng cách đóng gói nó trong một câu lệnh if.

Không có phương pháp chung nào có thể áp dụng cho mọi trường hợp. Điều này phụ thuộc vào API vì mỗi API có cách xử lý lỗi khác nhau, điều này thường được đề cập trong tài liệu API.

Dưới đây là một ví dụ minh họa cách tránh thiết lập trạng thái trên một đối tượng lỗi, giả định rằng API luôn trả về một đối tượng error khi có vấn đề xảy ra:

```
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        // this fetch request is designed to always fail
        fetch("https://jsonplaceholder.typicode.com/users/id", {
            method: "post"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // only set the users when there's no error
            if (data && !data.error) {
                setUsers(data);
            }
        });

    }, []);
}
```

### Xử lý lỗi liên quan đến mạng

Lỗi mạng xảy ra khi kết nối bị gián đoạn hoặc khi người dùng không kết nối mạng. Trong trường hợp này, cuộc gọi fetch sẽ đưa ra ngoại lệ thay vì trả về giá trị đã được xử lý. Điều này có nghĩa là bạn có thể bắt được lỗi này bằng cách thêm một khối `.catch()`, dưới đây là một ví dụ:

```
fetch("https://jsonplaceholder.typicode.com/users/")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error); // or console.error(error)
});
```

Đoạn code trên đã thêm một khối `.catch`. Nếu kết nối internet bị gián đoạn trong khi yêu cầu này đang được gửi hoặc nếu người dùng không kết nối mạng thì `.then()` sẽ không chạy mà `.catch` sẽ được chạy, in thông báo lỗi ra console.

Sau đó, bạn có thể hiển thị một thông báo cho người dùng biết có lỗi xảy ra và cung cấp tùy chọn thử lại yêu cầu.

### Tóm lại

- Tùy thuộc vào API mà bạn đang làm việc, bạn có thể cần đóng gói cuộc gọi `setState` bằng một điều kiện `if` để tránh gọi `setState` trên một đối tượng lỗi.
- `.catch` cho phép bạn xử lý lỗi mạng trong các yêu cầu `fetch`.


*Bài tiếp theo [RS89 Xử lý Loading khi Fetch API](/lesson/session/session_089_fetch_loader.md)*