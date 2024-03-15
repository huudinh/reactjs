![Create-HTML-1](images/fetch.webp) 

# RS90 Promise.finally

Bạn có thể nhận thấy có một số câu lệnh trùng lặp trong các ví dụ trước khi chúng ta gọi `setIsLoading(false)` ở 2 nơi:

1. trong phần .then()
2. trong phần .catch()

Một phương án hiệu quả hơn là sử dụng .finally(). Đây là một tính năng JavaScript cho Promise, dưới đây là một ví dụ:

```
functionThatReturnsPromise().then(() => {
    console.log("success");
})
.catch(() => {
    console.log("error");
})
.finally(() => {
    console.log("done");
});
```

Khi `functionThatReturnsPromise` thực thi thành công, `console` sẽ in ra: `success` và `done`.

Khi `promise` bị từ chối với một lỗi, `console` sẽ in ra: `error` và `done`.

Để ý `callback` được truyền vào `.finally` sẽ chạy trong cả hai trường hợp.

Chúng ta có thể tận dụng điều đó và gọi `setIsLoading(false)` trong `.finally`.

```
import {useEffect, useState} from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true); // create and start the loader

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false); // stop the loader
        });
    }, []);
}
```

Lưu ý: chúng ta vẫn cần đặt trì khối `.catch` ngay cả khi sử dụng `.finally`:

```
.catch(error => {
    console.log(error);
})
```

bởi vì nếu yêu cầu fetch thất bại và bạn không có khối .catch thì bạn sẽ nhận được một lỗi làm hỏng toàn bộ component.

### Sử dụng JSX để hiển thị trình tải

Có nhiều cách để hiển thị trình tải. Dưới đây là cách hiển thị thông báo Loading...:

```
function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // same code above ...
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }
}
```

Bạn cũng có thể sử dụng toán tử `logic &&` hoặc toán tử ba ngôi để hiển thị thông báo đang tải:

```
function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // same code above ...
    }, []);

    return (<>
        {isLoading && <p>Loading...</p>}
        {/* OR */}
        {isLoading ? <p>Loading...</p> : ""}
    </>);
}
```

### Vô hiệu hóa nút khi đang tải

Bạn cũng có thể vô hiệu hóa nút trong quá trình tải dữ liệu nhằm ngăn người dùng nhấp nút liên tục khi đã bắt đầu yêu cầu `fetch`. Để làm điều đó, bạn cần thiết lập thuộc tính `disabled` với giá trị là biểu thức `{isLoading}`. Ví dụ:

```
<button disabled={isLoading}>Click me</button>
```

###  Khi xây dựng sản phẩm:

1. Xây dựng phiên bản cơ bản hoạt động 
2. Trải nghiệm ứng dụng như người dùng thực. Ta có thể làm cho ứng dụng tốt hơn không?
3. Giảm tốc độ kết nối Internet bằng Công cụ phát triển. Chế độ giới hạn tốc độ mạng trên chrome và firefox
4. Người dùng có hiểu rõ rằng dữ liệu đang được tải từ mạng không?
5. Ta có thể cải thiện cho ứng dụng tốt hơn nữa không?
6. Tái cấu trúc chương trình nếu cần thiết

### Tóm lại

- Callback được truyền vào `.finally()` sẽ chạy trong cả hai trường hợp: `fetch` thành công và lỗi.
- Bạn có thể gọi `setIsLoading(false)` trong `.finally()` thay vì phải gọi nó trong `.then()` và `.catch()`.
- Bất kỳ phương pháp kết xuất có điều kiện nào cũng sẽ cho phép bạn hiển thị thông báo đang tải khi `isLoading` là `true`.
- Bạn có thể vô hiệu hóa nút khi đang tải như sau: `<button disabled={isLoading}>Click me</button>`.

*Bài tiếp theo [RS91 Fetch khi click (onClick)](/lesson/session/session_091_fetch_onclick.md)*