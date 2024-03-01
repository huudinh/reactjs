# Object Loại bỏ key-value

![Create-HTML-1](images/ss17.jpg) 

Để xóa cặp `key/value` khỏi đối tượng mà không làm thay đổi đối tượng gốc, chúng ta cũng cần sử dụng toán tử `spread` nhưng với một cách tiếp cận khác.

Trước tiên, hãy bắt đầu với phương thức làm thay đổi đối tượng:

```
const obj = {
    id: 1,
    title: "Harry potter",
    year: 2017,
    rating: 4.5
}

// BAD: mutates
delete obj.year;
console.log(obj); // { id: 1, title: "Harry potter", rating: 4.5}
```

Để xóa `year` mà không làm thay đổi đối tượng, chúng ta sẽ phải sử dụng 2 tính năng của JavaScript: `destructuring` đối tượng và toán tử `spread`:

```
const obj = {
    id: 1,
    title: "Harry potter",
    year: 2017,
    rating: 4.5
}

// GOOD: immutable
const {year, ...rest} = obj;
console.log(rest); // { id: 1, title: "Harry potter", rating: 4.5}
```

Đoạn code này hoạt động vì `const {year, ...rest} = obj` destructure giá trị của khóa `year` từ `obj`.

Điều này tương tự như việc đọc `obj.year`.

Tuy nhiên, chúng ta cũng yêu cầu JavaScript destructure phần còn lại của đối tượng với `...rest`; tương đương với việc kết hợp tất cả các `key/value` khác trong một đối tượng mới tên là `rest`.

Vì vậy, chúng ta có `rest` là một bản sao bất biến của `obj` nhưng không có khóa `year`!

Hãy xem ví dụ khác:

```
const data = {
    id: 1,
    grades: [10, 14, 8],
    count: 3,
    course: "react"
}

// Immutably remove: grades & course
const {grades, course, ...newData} = data;
console.log(newData); //{id: 1, count: 3}
```

Chúng ta bắt đầu bằng cách destructure `grades` và `course` và sau đó đặt tất cả các phần tử còn lại vào một đối tượng mới có tên là `newData`!

### Tóm lại

- `const {keyToRemove, ...rest} = obj` là một cú pháp đơn giản cho phép xóa `keyToRemove` khỏi đối tượng mà không làm thay đổi đối tượng gốc.



*Bài tiếp theo [Trạng thái với đối tượng](/lesson/session/session_52_object_state.md)*