# Destructuring

![Create-HTML-1](images/ss17.jpg) 


### Ôn tập destructuring

Hãy giả sử chúng ta có đối tượng person sau:

```
const person = {
    firstName: "Sam",
    lastName: "Doe",
    age: 24
}
```

và bạn muốn tạo 2 biến firstName và lastName:

```
const firstName = person.firstName;
const lastName = person.lastName;
```

Bạn có thể làm điều đó trong một dòng bằng cú pháp destructuring sau:

```
const {firstName, lastName} = person;
```

Bạn cũng có thể cung cấp giá trị mặc định cho biến trong trường hợp không có giá trị tương ứng trong đối tượng. Ví dụ:

```
const {firstName, lastName, status = 'single'} = person;
```

Trong trường hợp này, `status` sẽ có giá trị mặc định là `"single"` vì đối tượng `person` không có thuộc tính này.

### Destructuring props

Việc sử dụng destructure cho props là không bắt buộc, nhưng đây là một kỹ thuật phổ biến và thường được sử dụng bởi nhiều bài hướng dẫn và các nhà phát triển. Do đó, việc nắm rõ kỹ thuật này là quan trọng.

Vì props là một đối tượng, bạn có thể sử dụng destructuring cho props.

```
Trước khi sử dụng destructuring:
function WelcomeUser(props) {
    const username = props.username;
    const notifications = props.notifications;

    return <div>Welcome {username}! You've got {notifications} unread notifications.</div>;
}
```

Sau khi sử dụng destructuring:

```
function WelcomeUser(props) {
    const {username, notifications} = props;

    return <div>Welcome {username}! You've got {notifications} unread notifications.</div>;
}
```
### Destructuring trong đối số

Bạn cũng có thể destructuring biến props trong đối số, thoạt nhìn thì code có vẻ khó đọc nhưng bạn sẽ thấy nó được sử dụng khá nhiều trong thực tế:

```
function WelcomeUser({username, notifications}) {
    return <div>Welcome {username}! You've got {notifications} unread notifications.</div>;
}
```

Thay vì viết `WelcomeUser(props)`, bạn ngay lập tức thay thế props bằng `{username, notifications}`, lệnh này trích xuất `props.username` và `props.notifications` và tạo ra 2 biến: `username` và `notifications`.

Bạn không nên lạm dụng kỹ thuật này vì nó có thể làm cho code khó đọc khi số lượng biến tăng lên.

### Tóm lại

- `Props` là một đối tượng, vì vậy bạn có thể destructure props.

- Bạn có thể destructure props trong đối số.

*Bài tiếp theo [Pure function](/lesson/session/session_23_pure_function.md)*
