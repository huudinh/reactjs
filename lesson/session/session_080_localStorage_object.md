![Create-HTML-1](images/localStorage.png) 

# RS80 localStorage, Object

API localStorage chỉ hỗ trợ lưu trữ chuỗi dưới dạng khóa và giá trị, vì vậy, nếu bạn muốn lưu trữ `arrays` hoặc `objects`, bạn cần chuyển đổi chúng thành chuỗi trước tiên.

Bạn có thể làm điều này bằng cách sử dụng hàm `JSON.stringify()`.

### Chuyển đổi đối tượng thành chuỗi

```
const person = {
    id: 1,
    name: "Sam"
};

JSON.stringify(person); // '{"id":1,"name":"Sam"}'
```

### Lưu đối tượng vào localStorage

Sau khi chuyển đổi mảng hoặc đối tượng thành chuỗi, bạn có thể lưu nó trong localStorage:

```
const person = {
    id: 1,
    name: "Sam"
};

localStorage.setItem("person", JSON.stringify(person));
```

Nếu bạn muốn khôi phục đối tượng đó từ localStorage, bạn cần chuyển đổi nó từ chuỗi thành đối tượng/mảng bằng cách sử dụng `JSON.parse()`:

```
let person = localStorage.getItem("person");
person = JSON.parse(person);
console.log(person); // {id: 1, name: "Sam"}
```

### Tóm lại

- Cả mảng và đối tượng đều được coi là đối tượng trong JavaScript.
- Trước khi lưu trữ mảng/đối tượng vào localStorage, bạn cần chuyển đổi chúng thành chuỗi.
- `JSON.stringify(object)` sẽ chuyển đổi một đối tượng/mảng thành chuỗi.


*Bài tiếp theo [RS81 Khôi phục trạng thái từ localStorage](/lesson/session/session_081_localStorage_more.md)*