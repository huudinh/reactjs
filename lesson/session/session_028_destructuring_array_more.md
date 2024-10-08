
![Create-HTML-1](images/components.jpg) 

# RS28 Destructuring với Function

### Trả về một mảng từ hàm

Bạn có thể nhận thấy rằng việc trả về một mảng từ hàm cũng cho phép trả về nhiều biến (có thể có cùng hoặc khác kiểu dữ liệu).

Giả sử bạn có hàm getUser sau:

```
function sayHello() {
    return "Welcome!";
}

function getUser() {
    //return the id and a function that welcomes the user
    return [15, sayHello];
}
```

### Hàm trả về cái gì?

- `getUser()` nên trả về một mảng.
- Mảng này chứa hai phần tử.
- Phần tử đầu tiên là `number`.
- Phần tử thứ hai là `function`.

`sayHello` là một tham chiếu của hàm 

Nhưng câu hỏi là: Chúng ta có thể sử dụng destructuring sau khi gọi getUser() không?

```
const result = getUser();

const id = result[0];
const sayHello = result[1];
```

Chúng ta có thể destructure getUser() không?

Hoàn toàn có thể! Cú pháp về cơ bản là giống nhau, nhưng chúng ta đã chia nhỏ ra vì cú pháp thể gây nhầm lẫn ban đầu.

Hãy thực hiện từng bước:

```
const result = getUser();
const [id, sayHello] = result;
```

Đây là cách chúng ta destructure biến `result`, nhưng chúng ta có thể nâng cấp thêm và `destructure getUser()` trực tiếp mà không cần tạo ra biến trung gian `(result)`:

```
const [id, sayHello] = getUser();
```

Vì vậy, ở đây chúng ta đang destructure `id` và `sayHello`, tương ứng với chỉ số 0 và 1, của dữ liệu được trả về từ `getUser()`.

### Làm thế nào để gọi hàm

Vì `sayHello` là một hàm, bạn có thể gọi nó bằng cách thêm `()`. Sau đây là ví dụ đầy đủ:

```
function sayHello() {
    return "Welcome!";
}

function getUser() {
    //return the id and a function that welcomes the user
    return [15, sayHello];
}

const [id, sayHelloFunction] = getUser();
console.log(id); //15
console.log(sayHelloFunction()); //Welcome!
```

### Tóm lại

- Bạn có thể destructure từ hàm, miễn là hàm đó trả về một mảng phần tử.

### Bài tập

**Câu 1:** Theo bạn Destructuring với Function là gì?

**Câu 2:** Khi nào ta nên sử dụng Destructuring với Function?

*Bài tiếp theo [RS29 State](/lesson/session/session_029_state_hooks.md)*