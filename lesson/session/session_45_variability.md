# Tính thay đổi

![Create-HTML-1](images/ss17.jpg) 

Xem ví dụ sau:

```
const firstArray = [];
const secondArray = firstArray; // secondArray now points to firstArray
console.log(firstArray === secondArray); //true and expected

firstArray.push(10);
console.log(firstArray === secondArray); //true but unexpected
```

Chúng ta nói rằng .push là một phương thức biến đổi mảng, điều đó có nghĩa là nó là phương thức thay đổi mảng.

### Tính bất biến (Immutability) là gì?

Đối tượng bất biến là một đối tượng không thể thay đổi. Mỗi lần cập nhật tạo ra một giá trị mới, không làm thay đổi giá trị cũ.

### Tại sao không "so sánh sâu"?

So sánh sâu (deep equal) là khi bạn so sánh hai đối tượng dựa trên giá trị của chúng.

Với so sánh sâu, `[]` sẽ bằng `[]`. Tương tự với` {key: "something"}` và `{key: "something"}`.

Tuy nhiên, JavaScript KHÔNG có một phương thức tích hợp sẵn cho so sánh sâu. Gần đây, các trình duyệt đã cung cấp phương thức `structuredClone` cho phép bạn tạo bản sao sâu của đối tượng. Tuy nhiên, việc sử dụng phương thức này trong React sẽ không hiệu quả, như bạn sẽ thấy trong bài học tiếp theo, React cần thực hiện so sánh rất thường xuyên như một phần của DOM ảo để biết các component nào cần được hiển thị lại.

### Tóm lại

- .push là phương thức biến đổi mảng.
- Đối tượng bất biến là một đối tượng không thể thay đổi. Mỗi lần cập nhật tạo ra một giá trị mới, không làm thay đổi giá trị cũ.

*Bài tiếp theo [Ý nghĩa của tính bất biến](/lesson/session/session_46_variability_more.md)*