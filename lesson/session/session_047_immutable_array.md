
![Create-HTML-1](images/components.jpg) 

# RS47 Mảng bất biến

Khi làm việc với Mảng và Đối tượng, chúng ta cần chú trọng vào tính bất biến. 

Chúng ta sẽ tìm hiểu cách thêm, cập nhật và xóa các phần tử khỏi mảng theo cách bất biến (tức là không làm thay đổi mảng ban đầu).

### Ôn lại cú pháp Spread

Trước khi bắt đầu, chúng ta cần ôn lại cú pháp spread, một tính năng của ES2015 (hoặc ES6).

```
const numbers = [1, 2, 3];
const grades = [...numbers];
console.log(grades); // [1, 2, 3] (shallow copy)
```

`...numbers` sẽ sao chép các số. Điều này có nghĩa là nó sẽ loại bỏ các giá trị khỏi mảng, kết quả trả về `1, 2, 3`.

Vì vậy, `[...numbers]` tạo ra một bản sao mới của mảng với các giá trị tương tự vì nó tương đương với `[1, 2, 3]`.

Chúng ta gọi đây là bản sao nông vì nó là bản sao của các phần tử bên trong mảng.

### Nối mảng

Bạn có thể sử dụng cú pháp `spread` để nối mảng, ví dụ:

```
const winners = ["Jane", "Bob"];
const losers = ["Ronald", "Kevin"];

const players = [...winners, ...losers];
console.log(players); // ['Jane', 'Bob', 'Ronald', 'Kevin']
```

Mỗi cú pháp spread sao chép các phần tử vào mảng mới.

### Thêm phần tử vào mảng (bất biến)

Vậy làm thế nào để thêm một phần tử vào mảng mà vẫn duy trì tính bất biến?

Chúng ta không thể sử dụng `.push()` vì `push` sẽ thay đổi mảng.

Thay vào đó, chúng ta phải tạo một bản sao nông và chèn phần tử mới vào mảng mới:

```
const numbers = [1, 2, 3];
const result = [...numbers, 4];
console.log(result); //[1, 2 ,3 ,4]
```

Chúng ta sao chép các giá trị của mảng numbers và sau đó thêm `4`. Mảng mới sẽ chứa `1, 2, 3, 4`.

Đây là thao tác bất biến vì chúng ta KHÔNG thay đổi mảng `numbers` mà tạo ra một bản sao mới và thêm giá trị vào.

### Tóm lại

- Toán tử spread được dùng cho mảng để tạo một shallow copy.
- `[...existingArray, "newValue"]` thêm `newValue` vào mảng theo cách bất biến vì nó tạo ra một bản sao của mảng.

### Bài tập

**Câu 1:** Spread, Rest, Detructuring, khác và giống nhau thế nào khi sử dụng

**Câu 2:** Thêm một phần tử vào mảng bất biến như thế nào?

*Bài tiếp theo [RS48 Thao tác với mảng bất biến](/lesson/session/session_048_immutable_array_more.md)*