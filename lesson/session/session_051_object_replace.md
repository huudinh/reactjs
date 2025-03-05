
![Create-HTML-1](images/components.jpg) 

# RS51 Thao tác bất biến với Object

Bây giờ chúng ta đã biết cách thay đổi mảng một cách bất biến (không làm thay đổi mảng ban đầu), do đó, việc thực hiện thao tác bất biến với đối tượng cũng trở nên dễ dàng hơn vì nó cũng dựa trên toán tử `spread` (`...`).

### Thêm khóa/giá trị một cách bất biến

Hãy bắt đầu với phương thức làm thay đổi đối tượng:

```
const data = {
    id: 1,
    name: "Sam"
}

//BAD: mutates
data.age = 18;
console.log(data); // {id: 1, name: "Sam", age: 18}
```

Thay vì cách trên, chúng ta có thể tạo một bản sao của đối tượng bằng cách sử dụng toán tử `spread: {...data}`.

Toán tử này tạo ra một đối tượng mới với các khóa và giá trị tương tự, sau đó chúng ta có thể thêm cặp khóa/giá trị mới vào đối tượng:

```
const data = {
    id: 1,
    name: "Sam"
}

//GOOD: immutable
const newObj = {...data, age: 18}
console.log(newObj); // {id: 1, name: "Sam", age: 18}
```

### Thay thế giá trị của khóa hiện có

Cách sử dụng phương thức thay đổi đối tượng sẽ như sau:

```
const data = {
    id: 1,
    name: "Sam"
}

//GOOD: immutable
const newObj = {...data, age: 18}
console.log(newObj); // {id: 1, name: "Sam", age: 18}
```

Thay vì cách trên, chúng ta có thể tạo một bản sao mới của đối tượng với `{...data}` và sau đó kết hợp nó với khóa mới nhưng có giá trị khác:

```
const data = {
    id: 1,
    age: 19
}

// GOOD: immutable
const newObj = {...data, age: 20};
console.log(newObj); // {id: 1, age: 20}
console.log(data); // original object did not change {id: 1, age: 19}
```

Đoạn code này hoạt động vì `age: 20` trong `{...data, age: 20}` sẽ ghi đè lên `age` hiện tại.

#### Trường hợp không hoạt động

Lưu ý rằng khi bạn muốn thay thế giá trị, các giá trị mới nên đứng sau bản sao của đối tượng cũ.

Điều này cho phép ghi đè lên các giá trị cũ bằng các giá trị mới.

Do đó, đoạn code dưới đây SẼ KHÔNG hoạt động:

```
const data = {
    id: 1,
    age: 19
}
const wrongNewObj = {age: 20, ...data};
```

Nguyên nhân là vì `age: 19` từ đối tượng `data` sẽ ghi đè lên `age: 20`.

Bạn chỉ cần sửa đổi thành `{...data, age: 20}` và đoạn code sẽ hoạt động.

### Tóm lại

- `{...obj}` cho phép bạn tạo một bản sao mới của đối tượng hiện có, giúp dễ dàng thực hiện các thao tác bất biến.
- `{...obj, newKey: 'value'}` được dùng để thêm `newKey: 'value'` vào đối tượng obj một cách bất biến.
- `{...obj, existingKey: 'newValue'}` được dùng để thay đổi `existingKey` thành `newValue` một cách bất biến.

*Bài tiếp theo [RS52 Loại bỏ key-value khỏi Object](/lesson/session/session_052_object_remove_key_value.md)*