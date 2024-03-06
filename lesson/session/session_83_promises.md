![Create-HTML-1](images/fetch.webp) 

# RS83 Promises

Việc sử dụng promise là một yêu cầu cơ bản khi làm việc với Fetch API. Đay là một tính năng của ngôn ngữ JavaScript, do đó nó độc lập với React.

Promise được sử dụng khi bạn cần thực thi một phần của khối lệnh trong tương lai.

### Xử lý promise

Kiến thức phổ biến nhất bạn cần biết về promise là cách xử lý promise.

Xử lý promise có nghĩa là thực hiện một hành động khi promise đã hoàn thành công việc của nó.

Giả sử chúng ta có hàm `functionThatReturnsPromise`, sau đây là cách bạn xử lý hàm:

```
functionThatReturnsPromise().then(result => {
    console.log(result);
});
```

Để xử lý Promise, bạn cần gọi `.then()` trên promise và truyền một hàm callback. Hàm callback đó sẽ được gọi khi promise đã hoàn thành công việc của nó.

Đối số đầu tiên được truyền vào hàm callback đó (trong ví dụ này là result) sẽ là dữ liệu mà hàm đó đã tính toán. Đây chỉ là lý thuyết vì chúng ta đang nói về promise nói chung. Trong bài học tiếp theo, chúng ta sẽ làm việc với Fetch API và xử lý promise của nó để làm rõ vấn đề.

### Bắt lỗi

Promise cũng có thể gặp lỗi, trong trường hợp đó, hàm mà bạn truyền vào `.then()` sẽ KHÔNG được gọi. Bạn cần sử dụng `.catch()` để bắt lỗi. Đây là một ví dụ:

```
functionThatReturnsPromise()
.then(result => {
    console.log(result); // when successful
})
.catch(error => {
    console.error(error); // when there's an error
})
```

Khóa học sẽ dành riêng ra một chương để hướng dẫn cách xử lý các cuộc gọi fetch không thành công.

### Tóm lại

- Chúng ta sẽ sử dụng promise khi làm việc với Fetch API.
- Để xử lý promise, bạn cần gọi `.then(result => {})`
- Để xử lý lỗi được đưa ra bởi promise, bạn cần gọi `.catch(error => {})`


*Bài tiếp theo [RS84 Fetch API](/lesson/session/session_84_fetch.md)*