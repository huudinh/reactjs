![Create-HTML-1](images/fetch.webp) 

# RS89 Xử lý tải dữ liệu bằng fetch

Khi tải dữ liệu từ mạng bằng Fetch API, việc hiển thị trình tải (loader) là một phần quan trọng trong giao diện người dùng, đó là một chỉ báo hình ảnh cho người dùng biết rằng dữ liệu đang được tìm nạp từ mạng và họ nên đợi một chút.

Không phải tất cả các trường hợp đều cần sử dụng trình tải. Tuy nhiên, một quy tắc chung là khi nội dung chính mà người dùng muốn xem đang được tải thì ta nên sử dụng trình tải. 

Hãy nhớ rằng khi phát triển ứng dụng trên máy tính của bạn, bạn có thể có kết nối nhanh. Tuy nhiên, người dùng có thể có kết nối chậm hơn hoặc duyệt ứng dụng trên điện thoại. Kết nối di động thường chậm hơn so với Wi-Fi ở nhà hoặc nơi làm việc.

### Làm thế nào để hiển thị trình tải?

Chúng ta cần biết khi nào yêu cầu `fetch` bắt đầu và kết thúc để hiển thị trình tải. Chúng ta cần một biến trạng thái để theo dõi điều này.

Vì vậy, chúng ta bắt đầu bằng cách định nghĩa một biến trạng thái cho biết yêu cầu `fetch` có đang tải hay không; chúng ta sẽ gọi biến là `isLoading` và đặt giá trị mặc định là `false`:

```
// inside a React component
const [isLoading, setIsLoading] = useState(false);
```

### Bắt đầu tải

Chúng ta cần gọi s`etIsLoading(true)` ngay khi yêu cầu fetch bắt đầu, ví dụ:

```
import {useEffect, useState} from "react";

function App() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true); // start the loader
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }, []);
}
```

Trong trường hợp này, vì component sẽ thực hiện yêu cầu `fetch` càng sớm càng tốt, bạn có thể thay đổi `useState(false)` thành `useState(true)`, khi đó bạn không cần bắt đầu trình tải trước cuộc gọi `fetch`. Dưới đây là cách triển khai:

```
import {useEffect, useState} from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true); // create and start the loader

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }, []);
}
```

### Dừng tải

Đoạn code trên sẽ thiết lập `isLoading` thành `true` và không bao giờ dừng trình tải. Đây là lý do tại sao chúng ta cần dừng trình tải khi nhận được phản hồi.

Tuy nhiên, chúng ta cũng nên dừng trình tải trong trường hợp yêu cầu `fetch` bị lỗi, vì vậy chúng ta cần gọi `setIsLoading(false)` trong `.then() `và .`catch()`.

```
import {useEffect, useState} from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true); // create and start the loader

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setIsLoading(false); // stop the loader
            console.log(data);
        })
        .catch(error => {
            setIsLoading(false); // stop the loader
            console.error(error);
        });
    }, []);
}
```

### Tóm lại

- Một quy tắc chung là khi nội dung chính mà người dùng muốn xem đang được tải thì ta nên sử dụng trình tải.
- Trình tải là một thành phần quan trọng đối với người dùng có kết nối chậm và sử dụng kết nối di động.
- Để hiển thị trình tải, chúng ta cần có một biến trạng thái để theo dõi xem yêu cầu có đang tải hay không. Ví dụ: một biến trạng thái tên là `isLoading`.
- Để bắt đầu trình tải, chúng ta cần gọi `setIsLoading(true)` khi yêu cầu `fetch` bắt đầu.
- Để dừng trình tải, chúng ta cần gọi `setIsLoading(false)` khi yêu cầu `fetch` hoàn thành thành công hoặc gặp lỗi.


*Bài tiếp theo [RS90 Promise finally](/lesson/session/session_090_fetch_finally.md)*