
![Create-HTML-1](images/components.jpg) 

# RS44 Mảng và đối tượng

Hãy bắt đầu bằng việc so sánh số, chuỗi và boolean:

```
1 === 1; //true
27 === 27; //true
"hello world" === "hello world"; //true
"welcome" === "welcome"; //true
true === true; //true
false === false; //true (because they're the same)
```

Không có gì đặc biệt ở đây. Chúng ta đang so sánh hai giá trị hoàn toàn giống nhau, vì vậy kết quả là true.

Bây giờ hãy thử với mảng và đối tượng:

```
[] === []; //false
{} === {}; //false
[10] === [10]; //false
{key: "something"} === {key: "something"}; //false
```

Chú ý: bạn vẫn nhận được false ngay cả khi bạn sử dụng `==` thay vì `===`.

Thật kỳ lạ.. tại sao điều này lại xảy ra?

### Mảng và Đối tượng

Mảng và Đối tượng đều được coi là đối tượng trong JavaScript.

Khi bạn viết `[]`, bạn đang tạo một thực thể mới của Array.

Khi bạn viết `{}`, bạn đang tạo một thực thể mới của Object.

```
new Array(); // creates []
new Object(); //creates {}
```

Hãy quay lại ví dụ trước và thay đổi các mảng và đối tượng thành cú pháp mới:

```
new Array() === new Array(); //false
new Object() === new Object(); //false

const arr1 = new Array();
arr1.push(10);
const arr2 = new Array();
arr2.push(10);
arr1 === arr2; //false

const obj1 = new Object();
obj1.key = "something";
const obj2 = new Object();
obj2.key = "something";
obj1 === obj2; //false
```

Điều này sẽ giải thích lý do tại sao chúng không bằng nhau.

`new Array()` tạo ra một thực thể mới của mảng.

Mỗi lần bạn gọi `new Array()`, bạn nhận được một thực thể mới, tức là `new Array()` chắc chắn không giống `new Array()` vì chúng là các thực thể khác nhau.

Vì vậy, với Mảng và Đối tượng, chúng ta cần một phương pháp khác để so sánh ngang bằng từ quan điểm giá trị.

Chúng ta mong đợi `[] === []` là true vì chúng đều là mảng rỗng, nhưng JavaScript lại hoạt động theo cách khác, nó kiểm tra xem chúng có phải là cùng một thực thể hay không.

### Gán Đối tượng

Có một tính năng khác trong JavaScript có vẻ mâu thuẫn mà bạn phải biết. Đó là điều xảy ra khi chúng ta gán một biến cho đối tượng (hoặc mảng) đã tồn tại.

Hãy xem một ví dụ:

```
const firstArray = [];
const secondArray = firstArray; // secondArray now points to firstArray
console.log(firstArray); // []
console.log(secondArray); // []

firstArray.push(10);
console.log(firstArray); // [10]
console.log(secondArray); // [10]
```

Bạn có thể tự hỏi: tại sao `secondArray` cũng chứa 10? Đó là vì khi chúng ta tạo `secondArray = firstArray`, chúng ta không sao chép `firstArray` mà tạo một tham chiếu đến nó.

Điều đó có nghĩa là `firstArray` và `secondArray` bây giờ đều đang tham chiếu đến cùng một giá trị. Về mặt kỹ thuật, ta nói rằng chúng đang tham chiếu đến cùng một vị trí trong bộ nhớ.

Vì vậy, bất cứ khi nào bạn thay đổi giá trị, `firstArray` và `secondArray` đều đọc cùng một giá trị đã được cập nhật.

### Tóm lại

- Mảng là đối tượng trong JavaScript.
- `[] === []` tương đương với new Array() === new Array()
- `{} === {}` tương đương với new Object() === new Object()
- `[] === []` là false vì nó so sánh 2 thực thể mảng khác nhau
- `{} === {}` là false vì nó so sánh 2 thực thể đối tượng khác nhau
- Khi bạn gán một biến cho đối tượng hoặc mảng, biến đó sẽ KHÔNG sao chép giá trị mà tham chiếu đến giá trị của đối tượng hoặc mảng.


*Bài tiếp theo [Tính thay đổi](/lesson/session/session_045_variability.md)*