# Toán tử spread "..."

![Create-HTML-1](images/ss8.jpg) 

Chúng ta cùng ôn lại toán tử spread của JavaScript:

```
const person = {
    id: 1,
    name: "Sam"
};

const details = {
    age: 23,
    loggedIn: true
};

const person_details = {...person, ...details};
/*
{
    id: 1,
    name: "Sam",
    age: 23,
    loggedIn: true
}
*/
```

...person truyền tất cả các thuộc tính và giá trị của đối tượng vào person_details mới và tương tự cho ...details.

Hãy xem một ví dụ khác về toán tử spread:

```
const person = {
    id: 1,
    name: "Sam",
    age: 23,
}
```

Giả sử bạn muốn tạo một đối tượng mới chứa tất cả các thuộc tính và giá trị ngoại trừ id, bạn có thể làm điều đó bằng cách sử dụng toán tử ... và cú pháp destructuring:

```
const {id, ...rest} = person;
console.log(id); //1
console.log(rest); //{name: "Sam", age: 23}
```

Chúng ta destructure id từ `person` (tương đương với `person.id`), và sau đó, chúng ta yêu cầu tất cả các thuộc tính và giá trị khác được lưu trong một đối tượng mới tên là rest.

Do đó, bạn sẽ có một đối tượng mới chứa tất cả các thuộc tính và giá trị khác (không có id vì nó đã được destructure).

Trong ví dụ này, `...` được gọi là trường thuộc tính rest vì bạn đang trích xuất tất cả các trường thuộc tính còn lại (rest).

### Truyền thuộc tính theo cú pháp spread (Spread attribute) trong JSX

Việc sử dụng cú pháp này trong JSX đôi khi có khá nhiều công dụng hữu ích. Ví dụ, bạn có một Component nhận nhiều props và bạn muốn lấy ra children, sau đó destructure tất cả các props còn lại vào một biến mới và truyền chúng vào một phần tử:

```
function Navbar(props) {
    const {children, ...rest} = props;
    return <h1 {...rest}>{children}</h1>;
}
```

Chúng ta bắt đầu bằng cách destructure children từ props, sau đó chúng ta tạo một đối tượng mới gọi là rest chứa tất cả các props khác.

Và cuối cùng, chúng ta sử dụng cú pháp spread để truyền đối tượng này vào `<h1>`, theo đó truyền toàn bộ props vào phần tử `<h1>`.

Ví dụ, nếu bạn sử dụng Navbar như sau: `<Navbar tabIndex="2" className="navbar">Hello World</Navbar>`, bạn sẽ nhận được biến `children = "Hello World"` và biến `rest` với đối tượng sau:

```
{
    tabIndex: "2",
    className: "navbar"
}
```

và sau đó Component sẽ trả về phần tử React sau:

```
<h1 tabIndex="2" className="navbar">Hello World</h1>
```

Giả sử chúng ta thêm một thuộc tính mới, ví dụ: `disabled={true}`, khi đó code vẫn hoạt động và vẫn áp dụng thuộc tính `disabled` cho h1 mà không cần cập nhật Component.

### Khi nào nên sử dụng cú pháp này?

Mặc dù việc truyền thuộc tính theo cú pháp spread khá hữu ích nhưng nó có thể dẫn đến việc truyền các props không cần thiết cho những component không quan tâm đến chúng.

Trường hợp sử dụng phổ biến nhất của Spread Attributes là xây dựng UI và muốn tùy chỉnh phần tử được hiển thị.

### Tóm lại

- Truyền thuộc tính theo cú pháp spread trong JSX cho phép bạn lấy tất cả các props (hoặc một phần của props) và truyền chúng vào phần tử được hiển thị mà không cần viết từng props một cách riêng biệt.

- Truyền thuộc tính theo cú pháp spread thường được sử dụng khi xây dựng UI.

*Bài tiếp theo [Destructuring Array](/lesson/session/session_27_destructuring_array.md)*